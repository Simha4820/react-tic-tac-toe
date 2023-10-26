import { useState } from "react";
const Player = ({ isActive, name, symbol }) => {
  const [pname, setPname] = useState(name);
  const [bname, setBname] = useState("Edit");
  const [inputValue, setInputValue] = useState("");

  const editPlayer = () => {
    const inputHandler = (event) => {
      setInputValue(event.target.value);
    };
    if (bname === "Edit") {
      setPname(
        <input
          type="text"
          defaultValue={name}
          onChange={inputHandler}
          className="player button"
        />,
      );
      setBname("Save");
    } else {
      setPname(inputValue);
      setBname("Edit");
    }
  };
  return (
    <li className={isActive ?'active' : ""}>
      <span className="player">
        <span className="player-name">{pname}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editPlayer}>{bname}</button>
    </li>
  );
};
export default Player;
