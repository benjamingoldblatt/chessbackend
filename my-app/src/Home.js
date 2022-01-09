import React from 'react';
import Utils from './utils';
import {db} from './firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'


export default function() {
    return(
        <div className="flex-center">
            <h1>Create a New Game</h1>
            <button onClick={createGame}>New game</button>
        </div>
    );
}

const createGame = async (e) => {
  e.preventDefault()
  const players = {
    p1_token: Utils.token(),
    p2_token: Utils.token()
  };
  try {
    await addDoc(collection(db, 'games'), {
      players
    })
    window.location = `/${players.p1_token}`;
    } catch (err) {
    alert(err)
  }
}

