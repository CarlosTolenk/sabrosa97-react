import React, { Component } from 'react';
import VideoItem from './Video-Item';

import { getVideosYoutube } from '../Util/ApiYoutube';

class VideoYoutube extends Component{

    readonly state = { loading: true, posts: [] };

    componentDidMount() {
        getVideosYoutube()
        .then((res) => {
            console.log(res);
            this.setState({
                posts: res,
                loading: false,
            });
        })
        .catch((err) => console.log(err));
    }

    renderPosts = () => {
        const posts: Readonly<any>   = this.state.posts;
        return posts.map((post:any, index:number) => {  
            if(index < 2)
            {
                return (
                    // <h1 key={post.id.videoId}>Video</h1>
                    <VideoItem
                        key={post.id.videoId}
                        videoId={post.id.videoId}
                    />
                );
            }        
        });
    } 


    render() {
        const loading: Readonly<boolean> = this.state.loading;
        return (         
        <div id="featured">
            <div className="container">

                <div className="title1 animated" data-animation="fadeInUp" data-animation-delay="100">Sintoniza en todo momento con Sabrosa
                <b>97</b> - FM </div>

                <div className="kand1 animated" data-animation="fadeInUp" data-animation-delay="200"></div>

                <div className="title2 animated" data-animation="fadeInUp" data-animation-delay="300">PROGRAMACIÓN DESTACADA</div>

                <div className="row">        
                    {/* <div id="radio-stream-podcast" className="animated"></div>    */}
                
                    {loading ? 'loading...' : this.renderPosts()}
           
                    <div className="justify-content-center">
                        <a className="btn btn-primary"   href="https://www.youtube.com/channel/UCGHCsvA2NR7eHkzoA0ZcaXw" target="_blank" >Ver más contenido</a>            
                    </div>             
                </div>         
            </div>           
        </div>
        );
    }
}

export default VideoYoutube;




/*
    <div id="featured">
        <div class="container">

            <div class="title1 animated" data-animation="fadeInUp" data-animation-delay="100">Sintoniza en todo momento con Sabrosa
            <b>97</b> - FM </div>

            <div class="kand1 animated" data-animation="fadeInUp" data-animation-delay="200"></div>

            <div class="title2 animated" data-animation="fadeInUp" data-animation-delay="300">PROGRAMACIÓN DESTACADA</div>

            <div class="row">
                <br><br>
                <div id="radio-stream-podcast" class="animated"></div>   
                <div class="col-sm-6  col-sm-push-5 ">
                    <a href="https://www.youtube.com/channel/UCGHCsvA2NR7eHkzoA0ZcaXw" target="_blank" >Ver más contenido</a>  
                </div>             
            </div>         
        </div>           
    </div>

*/