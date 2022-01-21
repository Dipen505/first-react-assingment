import React from 'react';
import './PlayerCart.css';
const PlayerCart = (props) => {
    const players = props.playerCart;
    let newArr = [];

    players.forEach(item => {
        const { first_name } = item;
        console.log({first_name});
        if (newArr.indexOf(first_name) === -1) {
            newArr.push(first_name);
        }
    })
    const selectedPlayer = newArr.map((player, index) => {
        return <li key={index}>{player}</li>
    })

    const costingArr = []
    players.forEach(player => {
        const salary = player.salary;
        if (costingArr.indexOf(salary) === -1) {
            costingArr.push(salary);
        }
    })
    const selectedCost = costingArr.reduce((total, salary) => total + salary, 0)
    return (
        <div className='player-subCart-container'>
            <h4 className='selected-player'>Selected Player :</h4><hr></hr>
            <h5>Total Added Player : {newArr.length}</h5>
            <div className='playerCost'>Total Cost to hired player : {Number(selectedCost.toFixed(2))}</div>
            <div>Selected Player List : 
                <ol className='selectedPlayer'>{selectedPlayer}</ol>
            </div>

        </div>
    );
};

export default PlayerCart;