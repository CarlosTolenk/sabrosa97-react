import React, { Component } from 'react';


class SlideShow extends Component {
  render() {
    return (
        <div id="slider_wrapper">
            <div className="go-down"><a href="#featured" className="scroll-to"></a></div>
            <div className="">
                <div id="slider_inner" className="clearfix">
                    <div id="slider" className="clearfix">
                        <div id="camera_wrap"  >
                            <div data-src="images/banner-logo.jpg" >
                                <div className="camera_caption fadeFromLeft nav1">                        
                                </div>
                            </div>                                   
                            <div data-src="images/programa-al-final-manana.jpg" className="img-responsive">
                                <div className="camera_caption fadeFromLeft nav1">
                            
                                </div>
                            </div>
                            <div data-src="images/banner-cam-navidad.jpg" className="img-responsive">
                                <div className="camera_caption fadeFromLeft nav1">
                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    );
  }
}

export default SlideShow;
