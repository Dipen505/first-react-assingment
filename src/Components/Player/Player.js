import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Player.css';
import fakeData from '../../fakeData/data.json';
import PlayerProfile from '../PlayerProfile/PlayerProfile';
import PlayerCart from '../PlayerCart/PlayerCart';
const Player = () => {
    const [players,setPlayers] = useState(fakeData);
    const [playerCart,setPlayerCart] = useState([]);
    const addedPlayer = (player) => {
        const newCart = [...playerCart,player];
        setPlayerCart(newCart);
    }

    return (
        <div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="type to search your favorite player" aria-label="type to search" aria-describedby="button-addon2" />
                <button className="btn btn-primary" type="button" id="button-addon2">Search</button>
            </div>
            <div className='main'>
            <div className='player-container'>
            {
                players.map(player=><PlayerProfile addedPlayer = {addedPlayer} key = {player.id} detail = {player}></PlayerProfile>)
            }
            </div>
            <div className='player-cart-container'>
                <PlayerCart playerCart = {playerCart}></PlayerCart>
            </div>
            </div>
        </div>
    );
};

export default Player;