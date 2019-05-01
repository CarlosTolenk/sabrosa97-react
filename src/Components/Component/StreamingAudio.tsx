import React, { Component } from 'react';


class StreamingAudio extends Component {
  render() {
    return (
    <div className="song1_wrapper">
        <div className="container">
            <div className="song1_inner clearfix">
                <div className="song1 clearfix">                         
                        <div className="caption">
                            <div className="txt1">Sabrosa 97 FM</div>
                            <div className="txt2">La emisora más poderosa, estamos en vivo en estos momentos</div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="audio1">                                
                              Audio
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default StreamingAudio;
