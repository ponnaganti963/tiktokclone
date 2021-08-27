import React, {useState} from 'react';
import './videosidebar.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

function VideoSidebar({likes, comments, shares}) {
  const [liked, setliked] = useState(false);

    return (
        <div className='videoSidebar'>
            <div className='videoSidebar_button' >
            {liked ?
           (
              <FavoriteIcon fontSize='large'
              onClick={e => setliked(false)}
              />
          ):
          (
            <FavoriteBorderIcon fontSize='large'
            onClick={e => setliked(true)}
            />
          )}

              <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className='videoSidebar_button'>
              <MessageIcon fontSize='large'/>
              <p>{comments}</p>
            </div>
            <div className='videoSidebar_button'>
              <ShareIcon fontSize='large'/>
              <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar;
