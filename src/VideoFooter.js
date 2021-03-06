import React from 'react';
import './VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';

function VideoFooter({ channel, description, song}) {
    return (
        <div className='videoFooter'>
          <div className='videoFooter_text'>
            <h3>@{channel}</h3>
            <p>{description}</p>
            <div className='videoFooter_ticker'>
            <MusicNoteIcon className='videoFooter_icon'/>
            <Ticker mode='smooth'>
             {({ index }) =>(
               <>
                  <p>{song}</p>
               </>
             )
             }
            </Ticker>
            </div>
          </div>
          <img className='videorecord_logo'
          src='https://www.pikpng.com/pngl/m/46-461194_png-file-svg-music-album-icon-clipart.png'
          alt='video recore'
          >
          </img>
        </div>
    )
}

export default VideoFooter;
