
export default function() {
    function newGame(e) {
        e.preventDefault();
        const newGame = {
            p1_token: Utils.token(),
            p2_token: Utils.token()
          };
        const game = firebase.database().ref("games").push();
        game.set(newGame).then(() => {
            window.location = `/${newGame.p1_token}`;
            }, (err) => { 
            throw err;
        });        
    }
    return(
        <div className="flex-center">
            <h1>Create a New Game</h1>
            <button onClick={newGame}>New game</button>
        </div>
    );
}