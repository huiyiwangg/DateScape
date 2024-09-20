import React, { useState } from "react";
const apikey = import.meta.env.VITE_openAI_API_KEY;
import Card from "../../components/card";

const ExplorePage = () => {
  const [location, setLocation] = useState("");
  const [interest, setInterest] = useState("");
  const [resultArray, setResultArray] = useState([]);
  const [error, setError] = useState("");

  async function callOpenAIAPI(retryCount = 0) {
    console.log("Calling the OpenAI API");
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
                  "You are a dating expert. Provide a list of exactly 3 popular and real date spots related to the interest provided by the user. The response should be a valid JSON array of objects, each containing 'name', 'address','description',  'latitude', and 'longitude'. Ensure that each date spot is a popular and real location.",
              },
              {
                role: "user",
                content: `Location: ${location}. Interests: ${interest}.`,
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
        console.log(resultArray)
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
      <div className="explorepage__input">
        <h1>Find your perfect DateScope 💘</h1>
        <h3>Location</h3>
        <textarea
          placeholder="Please fill in the city you are located"
          onChange={(e) => setLocation(e.target.value)}
        />
        <h3>Interests</h3>
        <textarea
          placeholder="Fill in your interests (e.g., outdoor, farm, clubbing, etc.)"
          onChange={(e) => setInterest(e.target.value)}
        />
        <div className="explorepage__action">
          <button onClick={callOpenAIAPI}> Generate Date Ideas</button>
        </div>
        <div className="explorepage__result">
          {error && <p className="error">{error}</p>}
          <ul>
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
        </div>
      </div>
    </section>
  );
};

export default ExplorePage;
