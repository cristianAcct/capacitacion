import React from "react";
import { v4 as uuidv4 } from "uuid";

export const TextEditor = ({ text }) => {
  console.log(text);
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const fullDate = `${day}/${month}/${year}`;

  const textsEdited = [
    text.toUpperCase(),
    text.toLowerCase(),
    text.split("").join(" "),
    text.split(""),
    text.split("").reverse().join(""),
    text.split(" ").reverse().join(" "),
    text.split("").reverse().join(" "),
    text.toUpperCase().split("").join(" "),
    text.toUpperCase().split("").reverse().join(""),
    text.replace("Hello", "Hola"),
  ];

  return (
    <div>
      <ul>
        {textsEdited.map((text) => {
          return (
            <li key={uuidv4()}>
              {text}, we are in {fullDate}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
