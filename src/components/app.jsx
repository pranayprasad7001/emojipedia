import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function emojiEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      name={emojiTerm.name}
      meaning={emojiTerm.meaning}
      emoji={emojiTerm.emoji}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(emojiEntry)}</dl>
    </div>
  );
}

export default App;
