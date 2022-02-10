import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/card";
import Emoji from "./components/emojis";


function createCard(Emoji) {
  return (
   <Card 
        emoji = {Emoji.emoji}
        boldtext = {Emoji.boldtext}
        smtext = {Emoji.smtext}
       
  />
  );
}
 
function App (){
  return <div>
    <h1 className = "heading1">Emojipedia</h1>
     {Emoji.map(createCard)}
  </div>
}

export default App;