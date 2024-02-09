import { useState } from "react";

export default function Player({ initialName, symbol }) {
  // Step first : create a palyername and symbol of player details 
  // const [playerName, setPlayerName] = useState(initialName);
  // const [isEditing, setisEditing] = useState(false);

  // function handleClick() {
  //   // setisEditing(true);
  //   // setisEditing(isEditing ? false: true) // way to change instant values while clicking
  //   // updating the state with old state
  //   setisEditing((editing) => !editing);
  // }
  // function handleChange(event) {
  //   setPlayerName(event.target.value);
  //   console.log(event.target.value);
  // }
  // let editableName = <span className="player-name">{playerName}</span>;
  // if (isEditing) {
  //   editableName = (
  //     <input type="text" value={playerName} required onChange={handleChange} />
  //   );
  // }
  // return (
  //   <li>
  //     <span className="player">
  //       {editableName}
  //       <span className="player-symbol">{symbol}</span>
  //     </span>
  //     <button onClick={handleClick}>{!isEditing ? "Edit" : "Save"}</button>
  //   </li>
  // );

  // step 6 onwords 
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setisEditing] = useState(false);

  function handleClick() {
    // setisEditing(true);
    // setisEditing(isEditing ? false: true) // way to change instant values while clicking
    // updating the state with old state
    setisEditing((editing) => !editing);
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
    console.log(event.target.value);
  }
  let editableName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editableName = (
      <input type="text" value={playerName} required onChange={handleChange} />
    );
  }
  return (
    <li>
      <span className="player">
        {editableName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
  
}
