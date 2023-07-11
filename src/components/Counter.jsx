import { useState } from "react"

function Counter(){
  //[+,-,+,etc....]

  const [arr, setArr] = useState([])

  function addPlus() {
    setArr(prevArr => [...prevArr, "+"])
  }

  function addMinus(){
    setArr(prevArr => [...prevArr, "-"])
  }

  return(
    <div className="container">
      <button onClick={addMinus}>-</button>
      <button onClick={addPlus}>+</button>
      {arr}
    </div>
  )
}

export default Counter