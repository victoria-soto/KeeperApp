import React, { useState } from "react";

function CreateArea() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function addNote(event) {
    console.log("in addNote");

    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button onClick={addNote}> + </button>
      </form>
    </div>
  );
}

export default CreateArea;
