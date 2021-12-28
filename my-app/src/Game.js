import React from 'react';

import {db} from './firebase'
const {Chess, ChessBoard } = window;

const INITIAL_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

export default class Game extends React.Component {

    constructor({ match: { params: { token } } }) {
        super();
        this.state = { token };
        this.engine = new Chess();
    };
    
    render() {
        return (
            <div>dnvkdj</div>
        );
    }
}