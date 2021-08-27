import React,{ useState,useEffect} from 'react';
import './App.css';
import Video from './video';
import db from './firebase';

function App() {
  // const [videos,setvideos] = useState([]);
  //
  // useEffect(()=>{
  //   db.collection('videos').onSnapshot(snapshot =>{
  //     setvideos(snapshot.docs.map(doc => doc.data()))
  //   })
  // },[videos])

  return (
    <div className="App">
          <div className='app_videos'>
          {
          // { videos.map(
          //   ({ url,channel,description,song,likes,comments,shares}) => {
          //   <Video
          //     url = {url}
          //     channel = {channel}
          //     description = {description}
          //     song = {song}
          //     likes = {likes}
          //     comments = {comments}
          //     shares = {shares}
          //   />
          // }
          // )}
        }

             <Video
             url= 'https://player.vimeo.com/external/289189952.sd.mp4?s=756cbea276c653d18bc7141d8458693936225dd9&profile_id=165&oauth2_token_id=57447761'
             channel= 'pjv'
             description = 'This is description'
             song ='Hey Hey'
             likes= {200}
             comments = {100}
             shares = {20}
             />
             <Video
             url= 'https://player.vimeo.com/external/289189952.sd.mp4?s=756cbea276c653d18bc7141d8458693936225dd9&profile_id=165&oauth2_token_id=57447761'
             channel= 'pjv'
             description = 'This is description'
             song ='Hey Hey'
             likes= {500}
             comments = {400}
             shares = {20}
             />
             <Video
             url= 'https://player.vimeo.com/external/289189952.sd.mp4?s=756cbea276c653d18bc7141d8458693936225dd9&profile_id=165&oauth2_token_id=57447761'
             channel= 'siva'
             description = 'This is description'
             song ='Hello'
             likes= {20}
             comments = {10}
             shares = {2}
             />
             <Video
             url= 'https://player.vimeo.com/external/289189952.sd.mp4?s=756cbea276c653d18bc7141d8458693936225dd9&profile_id=165&oauth2_token_id=57447761'
             channel= 'pjv'
             description = 'This is description'
             song ='Hey Hey'
             likes= {400}
             comments = {100}
             shares = {10}
             />
          </div>
    </div>
  );
}

export default App;
