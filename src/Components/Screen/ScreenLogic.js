import { useState } from "react";

function ScreenLogic() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(0);
  const [history, setHistory] = useState([]);
  const [showhistory, setShowHistory] = useState(false);

  const setExp = (ip) => {
    setInput(input + ip);
  };
  const clearCalci = () => {
    setInput("");
    setOutput(0);
  };
  const clearLast = () => {
    const newIp = input.split("").reverse().slice(1);
    setInput(newIp.reverse().join(""));
  };
  function parse(str) {
    try {
      return Function(`'use strict'; return (${str})`)();
    } catch (e) {
      console.log("error");
    }
  }
  const calculateExp = () => {
    try {
      setHistory([...history, input]);
      setOutput(parse(input));
    } catch (e) {
      console.log("error");
    }
  };
  const showHistory = () => {
    setShowHistory(!showhistory);
  };

  return [
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
  ];
}

export default ScreenLogic;
