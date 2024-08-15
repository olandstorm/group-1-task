import { useState  } from "react";
import { snacks } from "../assets/snacks.tsx";

export default function SnackList() {
  const [spinning, setSpinning] = useState(false) //Standard snurrar inte
  const [buttonLabel, setButtonLabel] = useState("Spin")

  function spinTheWheel() {
    if (spinning) {
      setSpinning(false)
      setButtonLabel("Spin")
    }
    else {
      setSpinning(true)
      setButtonLabel("Stop")
    }
  } 
  return (
    <>
      <ul>{
          snacks.map((snack, i) => 
          <li key={i}>
              <img src={snack.imageUrl} alt={snack.name}></img>
              <span>Name: {snack.name}, Price: {snack.price} kr</span>
          </li>
          )}
      </ul>
      <button onClick={spinTheWheel}>{buttonLabel}</button>
    </>
  )
}
