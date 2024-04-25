import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
function App() {
  const [color, setColor] = useState("#FFD1DC");

  // const [random, setRandom] = useState("black");
  // function generateRandomHexCode() {
  //   const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

  //   let hexCode = "#";

  //   while (hexCode.length < 7) {
  //     hexCode += digits[Math.round(Math.random() * digits.length)];
  //   }

  //   console.log(hexCode);
  //   return hexCode
  // }

  // generateRandomHexCode()

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
        <h1 className="fixed w-1/3 top-16 font-medium text-center text-3xl font-serif">BackGround Generator with React
        and tailwind </h1>
        <div className="flex flex-wrap justify-center gap-3 bg-white shadow-lg px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("#FF7F7F")}
            className=" outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "	#FF7F7F" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("lightgreen")}
            className=" outline-none px-4 py-1 rounded-full shadow-lg "
            style={{ backgroundColor: "lightgreen" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("yellow")}
            className=" outline-none px-4 py-1 rounded-full shadow-lg "
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("#ADD8E6")}
            className=" outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "#ADD8E6" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("grey")}
            className=" outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "#D3D3D3" }}
          >
            Gray
          </button>
          <button
            onClick={() => setColor("orange")}
            className=" outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("pink")}
            className=" outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "Pink" }}
          >
            Pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
