import React from 'react';
import Iframe from 'react-iframe'

function VideoItem(props:any) {
    const url = `https://www.youtube.com/embed/${props.videoId}`
    return (
     <div className="col-lg-6 col-md-6 col-sm-12 padding-all"> 
        <Iframe url={url}
            width="100%"
            height="450px"
            id={props.videoId}
            className="myClassname"   
            position="relative"/>
    </div>
       
    )
  }


  export default VideoItem;



