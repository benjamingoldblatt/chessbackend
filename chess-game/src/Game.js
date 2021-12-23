export default class Game extends React.Component {

    constructor({ match: { params: { token } } }) {
        super();
        this.state = { token };
        this.engine = new Chess();
    }

    render() {
        return (
                 
        //Player 1: {domain()}/{this.state.p1_token}
        
                    
        //Player 2: {domain()}/{this.state.p2_token}
        
                
                    
       // { this.state.turnText }
        
                    
        //{ this.state.statusText }
            
                    
        //{ history(this.state.moves) }

        );
    }
    
    // ...
    
  }