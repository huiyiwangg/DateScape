import React, { useState } from 'react';

// const apikey = process.env.REACT_APP_OPENAI_API_KEY;

const ExplorePage = () => {
  const [location, setLocation] = useState("");
  const [interest, setInterest] = useState("");
  const [results, setResults] = useState("");
  const [resultArray, setResultArray] = useState([]);
  const [error, setError] = useState("");

  async function callOpenAIAPI(retryCount = 0) {
    console.log("Calling the OpenAI API");
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + apikey
        },
        body: JSON.stringify({
          model: "gpt-4o",
          messages: [
            {
              role: "system",
              content: "You are a dating expert. Suggest 3 date places with specific address based on the user input. Only say the spots."
            },
            {
              role: "user",
              content: `Location: ${location}. Interests: ${interest}.`
            }
          ],
          temperature: 0.7,
          max_tokens: 150,
          top_p: 1
        })
      });
      
      if (response.status === 429) {
        if (retryCount < 3) {
          console.log("Rate limit hit. Retrying...");
          await new Promise(resolve => setTimeout(resolve, 1000));
          return callOpenAIAPI(retryCount + 1);
        }
        throw new Error("Too many requests. Please try again later.");
      }

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      const resultArray = data.choices[0].message.content
      .split(/\n?\d\.\s+/)
      .filter(Boolean)
      .map(item => item.trim());
      setResultArray(resultArray);
    } catch (err) {
      console.error("Failed to fetch result:", err);
      setError("An error occurred while fetching result.");
    }
  }


  return (
  <section className='explorepage container'>
  <div className='explorepage__input'>
      <h1>Welcome to DateScope's Explore Page💘</h1>
      <h3>Location</h3>
      <textarea
          placeholder='Please fill in the city you are located'
          onChange={(e) =>setLocation(e.target.value)}
      />
      <h3>Interests</h3>
      <textarea
          placeholder='fill in your interests(outdoor, farm, clubbing, etc ..)'
          onChange={(e) =>setInterest(e.target.value)}
      />
      <div className='explorepage__action'>
          <button onClick={callOpenAIAPI}>Find your perfect DateScope</button>
      </div>
      <div className='explorepage__result'>
          <ul>
          {resultArray.map((item, index) => (
        <li key={index}>
          {item.split('\n').map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </li>
      ))}
          </ul>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
  </div>
</section>)
};

export default ExplorePage;