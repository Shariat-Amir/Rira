import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(input);
    setInput(value);
    if (value === "") {
      setOutput("");
    }
  };

  const DolarToRial = () => {
    if (input) {
      const inputNumber = Number(input);
      const outputNumber = inputNumber * 420925;
      setOutput(outputNumber.toString());
    } else {
      setOutput("لطفا عدد مورد نظر را وارد نمایید");
    }
  };

  const rialToDolar = () => {
    if (input) {
      const inputNumber = Number(input);
      const outputNumber = inputNumber / 420925;
      setOutput(outputNumber.toString());
    } else {
      setOutput("لطفا عدد مورد نظر را وارد نمایید");
    }
  };
  return (
    <main className="bg-cyan-700 w-full h-screen flex justify-center items-center font-lalezar text-2xl ">
      <div className="bg-gray-300 w-96 h-96 flex flex-col gap-10 px-10 justify-center items-center rounded-lg shadow-lg">
        <input
          type="number"
          className="rounded-lg shadow-lg text-center"
          onChange={inputHandler}
        />
        <p className=" text-center">{output}</p>
        <button
          onClick={DolarToRial}
          className="bg-blue-400 hover:bg-blue-500 p-4 rounded-lg shadow-lg text-white transition-all duration-200"
        >
          تبدیل دلار به ریال
        </button>
        <button
          onClick={rialToDolar}
          className="bg-green-400 hover:bg-green-500 p-4 rounded-lg shadow-lg text-white transition-all duration-200"
        >
          تبدیل ریال به دلار
        </button>
      </div>
    </main>
  );
}

export default App;
