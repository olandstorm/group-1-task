import { useState  } from "react";
import { snacks } from "../assets/snacks.tsx";
import { ISnack } from "../assets/ISnack.tsx";

export default function SnackList() {
  const [spinning, setSpinning] = useState(false) //Standard snurrar inte
  const [buttonLabel, setButtonLabel] = useState("Spin")
  const [winner, setWinner] = useState(false)
  let winningItem: ISnack = {id: "", name: "Noname", imageUrl: "", price: 0};

  function spinTheWheel() {
    if (spinning) {
      decideWinner()
      setSpinning(false)
      setButtonLabel("Spin")
    }
    else {
      setSpinning(true)
      setButtonLabel("Stop")
    }
  } 

  const decideWinner = () => {
    winningItem = getRandomItem(snacks)
    setWinner(true)
    // Trigger div that shows winner? 
    // Trigger reload of list? 
  }


  function getRandomItem<T>(array: T[]): T {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
 
  const closeTheWinnerDiv = () => {
    setWinner(false)
  }

  return (
    <>
    {winner ? (<div>
      <h2>The snack of the day is: </h2>
      <p>{winningItem.name}</p>
      <button onClick={closeTheWinnerDiv}>Close</button>
    </div>) : (<div><ul>{
      snacks.map((snack, i) => 
      <li key={i}>
          <img src={snack.imageUrl} alt={snack.name}></img>
          <span>Name: {snack.name}, Price: {snack.price} kr</span>
          </li>
          )}
      </ul>
      <button onClick={spinTheWheel}>{buttonLabel}</button></div>)
    }
    </>
  )
}
    