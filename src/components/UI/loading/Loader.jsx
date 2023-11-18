import React from "react";
import cl from "./Loader.module.css";

const Loader = () => {
  const spanStyles = {
    "--i": 0.1, // начальное значение для первого элемента
  };

  const generateSpanStyles = (index) => {
    return {
      ...spanStyles,
      "--i": spanStyles["--i"] + 0.1 * index, // увеличиваем значение для каждого следующего элемента
    };
  };

  return (
    <div className={cl.loader}>
      <span style={generateSpanStyles(1)}>L</span>
      <span style={generateSpanStyles(2)}>o</span>
      <span style={generateSpanStyles(3)}>a</span>
      <span style={generateSpanStyles(4)}>d</span>
      <span style={generateSpanStyles(5)}>i</span>
      <span style={generateSpanStyles(6)}>n</span>
      <span style={generateSpanStyles(7)}>g</span>
      <span style={generateSpanStyles(8)}>.</span>
      <span style={generateSpanStyles(9)}>.</span>
      <span style={generateSpanStyles(10)}>.</span>
    </div>
  );
};

export default Loader;
