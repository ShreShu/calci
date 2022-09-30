import React, { useState } from "react";
import Button from "../Button/Button";
import "./Screen.css";
import ScreenLogic from "./ScreenLogic";
const Screen = () => {
  const [
    setExp,
    clearCalci,
    parse,
    clearLast,
    calculateExp,
    showHistory,
    input,
    output,
    history,
    showhistory,
  ] = ScreenLogic();
  return (
    <div className="screen">
      {showhistory && (
        <div className="screen__history">{history[history.length - 2]} </div>
      )}
      <div className="screen_arithmetic">{input} </div>
      <div className="screen_output">{output}</div>
      <div className="screen_buttons">
        <button className="screen__buttons__button" onClick={clearLast}>
          C
        </button>
        <button className="screen__buttons__button" onClick={clearCalci}>
          AC
        </button>
        <Button input="%" onclick={setExp} color="orange" />
        <Button input="/" onclick={setExp} color="orange" />
        <Button input="7" onclick={setExp} />
        <Button input="8" onclick={setExp} />
        <Button input="9" onclick={setExp} />
        <Button input="*" onclick={setExp} color="orange" />
        <Button input="4" onclick={setExp} />
        <Button input="5" onclick={setExp} />
        <Button input="6" onclick={setExp} />
        <Button input="-" onclick={setExp} color="orange" />
        <Button input="1" onclick={setExp} />
        <Button input="2" onclick={setExp} />
        <Button input="3" onclick={setExp} />
        <Button input="+" onclick={setExp} color="orange" />
        <Button input="0" onclick={setExp} />
        <Button input="." onclick={setExp} />
        <button className="screen__buttons__button" onClick={calculateExp}>
          =
        </button>
        <button className="screen__buttons__button" onClick={showHistory}>
          his
        </button>
      </div>
    </div>
  );
};

export default Screen;
