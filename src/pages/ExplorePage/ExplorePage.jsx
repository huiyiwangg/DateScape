import React, { useState } from "react";
import love from "../../assets/gif/snoopylove.gif";
import loadgif from "../../assets/gif/loading.gif";
const apikey = import.meta.env.VITE_openAI_API_KEY;
import Card from "../../components/Card/card";
import hobbies from '../../data/hobbies';
import "./ExplorePage.scss";

const ExplorePage = () => {
  const [location, setLocation] = useState("");
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [interest, setInterest] = useState("");
  const [resultArray, setResultArray] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleHobbySelect = (selectedHobby) => {
    setSelectedHobbies((prevHobbies) => {
      if (prevHobbies.includes(selectedHobby)) {
        return prevHobbies.filter((hobby) => hobby !== selectedHobby);
      } else if (prevHobbies.length < 2) {
        return [...prevHobbies, selectedHobby];
      }
      return prevHobbies;
    });
  };



  async function callOpenAIAPI(retryCount = 0) {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + `${apikey}`,
          },
          body: JSON.stringify({
            model: "gpt-4",
            messages: [
              {
                role: "system",
                content:
                  "You are a dating expert. Provide a list of exactly 3 popular and real date spots related to the interest provided by the user. The response should be a valid JSON array of objects, each containing 'name', 'address','description',  'latitude', and 'longitude'. Ensure that each date spot is a popular and real location. Try to combine the user input location, selected hobbies and interests.",
              },
              {
                role: "user",
                content: `Location: ${location}. Interests: ${interest}. Hobbies:${selectedHobbies}`,
              },
            ],
            temperature: 0.5,
            max_tokens: 300,
            top_p: 1,
          }),
        }
      );

      if (response.status === 429) {
        if (retryCount < 3) {
          console.log("Rate limit hit. Retrying...");
          await new Promise((resolve) => setTimeout(resolve, 1000));
          return callOpenAIAPI(retryCount + 1);
        }
        throw new Error("Too many requests. Please try again later.");
      }

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      let resultContent = data.choices[0].message.content;

      if (data.choices[0].finish_reason === "length") {
        console.log("Incomplete JSON detected, trying to fix...");
        resultContent = attemptToFixJSON(resultContent);
      }

      try {
        const resultArray = JSON.parse(resultContent);
        setLoading(false)
        setResultArray(resultArray.slice(0, 3));
      } catch (jsonErr) {
        console.error("JSON parse error: ", jsonErr);
        setError("Failed to parse the result from the API.");
      }
    } catch (err) {
      console.error("Failed to fetch result:", err);
      setError("An error occurred while fetching the result.");
    }
  }

  function attemptToFixJSON(jsonString) {
    jsonString = jsonString.trim();

    if (!jsonString.endsWith("]")) {
      jsonString += "]";
    }

    if (!jsonString.startsWith("[")) {
      jsonString = "[" + jsonString;
    }

    jsonString = jsonString.replace(/,\s*(\]|\})/g, "$1");

    return jsonString;
  }


  return (
    <section className="explorepage container">
      <h1 className="explorepage__header">Find your perfect DateScape 💘</h1>
      <div className="explorepage__gif">
        <img src={love} alt="snoopy love" />

      </div>
      <div className="explorepage__input">
        <h3 className="explorepage__subtitle">Location</h3>
        <textarea
          placeholder="Please provide your location, with as much detail as you prefer."
          onChange={(e) => setLocation(e.target.value)}
        />
        <h3 className="explorepage__subtitle">Select 2 Hobbies</h3>
        <div className="explorepage__hobbies">
          {hobbies.map((hobby, index) => (
            <button
            key={index}
            className={`hobby-pill ${selectedHobbies.includes(hobby) ? 'selected' : ''}`}
            onClick={() => handleHobbySelect(hobby)}
            onDoubleClick={() => handleHobbySelect(hobby)}
            >
              {hobby}
            </button>
          ))}
        </div>
        <h3 className="explorepage__subtitle">Special Request</h3>
        <textarea
          placeholder="Please fill in your specific interests (e.g., chocolate, cats, your budget, etc.)"
          onChange={(e) => setInterest(e.target.value)}
        />
      <div className="explorepage__action">
        <button onClick={callOpenAIAPI}> Generate Date Ideas</button>
      </div>
      </div>

      <div className="explorepage__result">
        {!loading ? 
        <ul className="explorepage__list">
          {resultArray.map((item, index) => (
            <li key={index}>
              <Card
                name={item.name}
                address={item.address}
                description={item.description}
                latitude={item.latitude}
                longitude={item.longitude}
              />
            </li>
          ))}
        </ul>
        
        : <img src={loadgif} alt="loading" />}
        
        
      </div>
      
    </section>
  );
};

export default ExplorePage;
