import React from 'react';
import {useParams} from "react-router-dom";

import Game from './Game';

function GetToken() {

    const { token } = useParams();

    return (
        <div>
            <Game taskToken={token} />
        </div>
    );
}

export default GetToken;