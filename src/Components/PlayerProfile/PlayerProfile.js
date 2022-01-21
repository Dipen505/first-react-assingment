import React from 'react';
import './PlayerProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const PlayerDetail = (props) => {
    const { first_name, email, img, gender, club, country, salary } = props.detail;
    const addedPlayer = props.addedPlayer;
    return (
        <div className='player-component'>
            <div className='player-image'>
                <img src={img} alt="" />
                <div className='layer'></div>
            </div>
            <div className='player-detail'>
                <div className='name'>Name : {first_name}</div>
                <h4>Gender : {gender}</h4>
                <p>email : {email}</p>
                <p>Club : {club}</p>
                <p>Country : {country}</p>
                <p>Yearly income : <span className='dollar-sign'>$</span> {salary} million</p>
                <button onClick={()=>addedPlayer(props.detail)} className='hired-button'><FontAwesomeIcon icon={faUser} />Add to hire</button>
            </div>
        </div>
    );
};

export default PlayerDetail;