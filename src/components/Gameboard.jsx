import { useState } from 'react';
const Gameboard=({onSquareChange,board})=>{
    
    
    //const changeBoard=(rowIndex,colIndex)=>{

       // setGboard((prevGboard)=>{
        //    const updatedBoard=[...prevGboard.map(innerArray=>[...innerArray])];
         //   updatedBoard[rowIndex][colIndex]=props.activePlayerSymbol;
        //    return updatedBoard;

//        });
  //      props.onSquareChange();
    //}
    return(
        <ol id="game-board">
            {board.map((row,rowIndex)=>(<li key="rowIndex"><ol>{row.map((playerSymbol,colIndex)=>(<li key={colIndex}><button onClick={()=>onSquareChange(rowIndex,colIndex)} disabled={playerSymbol!==null}>{playerSymbol}</button></li>))}</ol></li>))}
            </ol>
    );   
}
export default Gameboard;