import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🍔": "Burger",
  "🍕": "Pizza",
  "🥪": "Sandwich",
  "🧈": "Butter",
  "🍫": "Chocolate",
  "🎂": "Cake"
};
var emojisWeKnow = Object.keys(emojiDictionary);

// var userName = prompt("Give me Your name?");
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    // console.log(meaning);

    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    // console.log(emoji);
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Inside outtt!</h1>
      <input onChange={emojiInputHandler} />
      <h2> {meaning} </h2>
      <h3>emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
