import React, { useState } from "react";
import { Input, Button, Icon, IconButton, CancelIcon } from "@material-ui/core";
import useKeypress from "react-use-keypress";

const ShowAddChecklist = ({ onAddHandler, onCancelHandler }) => {
  const [input, setInput] = useState("");

  useKeypress(["Enter", "Escape"], (event) => {
    switch (event.key) {
      case "Escape":
        onCancelHandler();
        break;
      case "Enter":
        if (!!input) {
          onAddHandler(input);
        }
        break;
      default:
    }
  });

  const onChangeInput = (event) => {
    setInput(event.target.value);
  };

  const onClickHandler = () => {
    if (!!input) {
      onAddHandler(input);
    }
  };

  console.count("ShowAddChecklist");
  return (
    <div>
      <Input
        placeholder="Enter a CheckList"
        value={input}
        onChange={onChangeInput}
        autoFocus
      />
      <Button onClick={onClickHandler}>Add</Button>
      {/*
        <IconButton onClick={onCancelHandler} aria-label="cancel">
        <CancelIcon />
      </IconButton>
*/}
    </div>
  );
}; // End ShowAddList

export default ShowAddChecklist;
