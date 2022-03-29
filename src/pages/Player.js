import React from 'react';

import PlayButton from '../icons/PlayButton';
import BackIcon from '../icons/BackIcon';
import VolumeIcon from '../icons/VolumeIcon';
import '../style.css';

export default function Player() {
  return (
    <div className="player-container">

<div className='back-button'> <BackIcon /> </div>
       <div className='title'> <h2> Cat Is The New Black </h2> </div>
       <div className='media-index'>  <h2> S10: E6 </h2> </div>
       <div className='play-button'> <PlayButton /> </div>
       <div className='volume-button'> <VolumeIcon /> </div>
    </div>
  );
}
