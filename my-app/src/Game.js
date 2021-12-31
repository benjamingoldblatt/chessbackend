import React from 'react';

import {db} from './firebase'
import Chessboard from "chessboardjsx";

const Chess = require("chess.js");

const INITIAL_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = { token : props.taskToken };
        this.engine = new Chess();
      }

    render() {
        return (
          <div className='view row'>
            <div className='column column-50'>
              <div id='game-board'></div>
            </div>
            <div className='column column-50'>
              <div className="links">
                <div>Player 1: <a target="_blank" href={domain() + "/" + this.state.token}>{domain()}/{this.state.token}</a></div>
                <div>Player 2: <a target="_blank" href={domain() + "/" + this.state.token}>{domain()}/{this.state.token}</a></div>
              </div>
              <blockquote>
                <h5 className='turn'>{ this.state.token }</h5>
                <h5 className='status'>{ this.state.token }</h5>
              </blockquote>
              <p className='history'>{ this.state.token }</p>
            </div>
          </div>
        );
    }
}
function domain() {
    const { hostname, port } = window.location;
    if (port) {
      return `http://${hostname}:${port}`;
    } else {
      return `http://${hostname}`;
    }
}