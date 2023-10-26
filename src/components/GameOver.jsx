const GameOver=({winner,onRematch})=>{
    return(
        <div id="game-over">
            <h1>Game Over!</h1>
            {winner && <p> Winner is {winner} </p>}
            {!winner && <p> Game is Drawn!</p> }
            <p><button onClick={onRematch}>Rematch</button></p>
            </div>
    );
}
export default GameOver;