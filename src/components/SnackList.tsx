import { useState } from "react";
import { snacks } from "../assets/snacks.tsx";
import { ISnack } from "../assets/ISnack.tsx";


export default function SnackList() {
  const [spinning, setSpinning] = useState(false); //Standard snurrar inte
  const [buttonLabel, setButtonLabel] = useState("Spin");
  const [winner, setWinner] = useState(false);
  const [winningItem, setWinningItem] = useState<ISnack>({
    id: "",
    name: "Noname",
    imageUrl: "",
    price: 0,
  });
  
  function spinTheWheel() {
    if (spinning) {
      decideWinner();
      setSpinning(false);
      setButtonLabel("Spin");      
    } else {
      setSpinning(true);
      setButtonLabel("Stop");      
    }
  }

  const decideWinner = () => {
    setWinningItem(getRandomItem(snacks));
    console.log(winningItem);

    setWinner(true);
    // Trigger div that shows winner?
    // Trigger reload of list?
  };

  function getRandomItem<T>(array: T[]): T {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  const closeTheWinnerDiv = () => {
    setWinner(false);
  };

  return (
    <>
      {winner ? (
        <div>
          <h2>The snack of the day is: </h2>
          <img src={winningItem.imageUrl} className="winning-item"></img>
          <p className="winning-item-name">{winningItem.name}</p>
          <button className="button-close" onClick={closeTheWinnerDiv}>Close</button>
        </div>
      ) : (
        <div className="image-container">
          <ul>
            {snacks.map((snack, i) => (
              <li key={i}>
                <img src={snack.imageUrl} alt={snack.name} className={spinning? "snack-image" : "hidden"}></img>
              </li>
            ))}
          </ul>
          <button className="button-spin" onClick={spinTheWheel}>{buttonLabel}</button>
        </div>
      )}
    </>
  );
}