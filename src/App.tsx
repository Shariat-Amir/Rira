import { useRef, useState } from "react";
import "./App.css";

function App() {
 
  const [inputCurrency,setInputCurrency]=useState(0)
  const [output, setOutput] = useState("");
  const [isDollar , setIsDollar]=useState(true)
  const inputRef=useRef(null)

  
const currencyVlaueHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
const currencyValue= e.target.value
console.log(currencyValue);
setInputCurrency(Number(currencyValue))


}
  

  const DolarToRial = () => {
  
     
      const value=Number(inputCurrency)
      const outputNumber = 1 * value;
      setOutput(outputNumber.toString());
      setIsDollar(true)
   
  };

  const rialToDolar = () => {
    
      
      const value=Number(inputCurrency)
      const outputNumber = 1 / value;
      setOutput(outputNumber.toString());
      setIsDollar(false)
    
       
    
  };

  
  return (
    <main className="bg-cyan-700 w-full h-screen flex justify-center items-center font-lalezar text-2xl ">
      <div className="bg-gray-300 w-96 h-96 flex flex-col gap-6 px-10 justify-center items-center rounded-lg shadow-lg">
        
        <input type="text"  ref={inputRef}className="rounded-lg shadow-lg text-center mt-5" placeholder="لطفا مقدار واحد دلار را وارد نمایید" onChange={currencyVlaueHandler} />
{isDollar && output && (
          <p className="text-center">
            {`هریک دلار برابر با ${output} ریال میباشد`}
          </p>
        )}
        {!isDollar && output && (
          <p className="text-center">
            {`هریک ریال برابر با ${output} دلار میباشد`}
          </p>
        )}       
        
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
