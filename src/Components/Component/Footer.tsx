import React from 'react';

function Footer() {
    return (
    <div className="bot1_wrapper">
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
    
                    <div className="logo2_wrapper">
                        <a href="index.html" className="logo2">
                                {/* <!-- <img src="./images/sabrosa-logo.png" alt="sabrosa-logo" class="logo-sabrosa" > --> */}
                            <img src="./images/sabrosa-logo.png"  alt="sabrosa-logo-footer" className="sabrosa-logo-footer"/>
                        </a>
                    </div>
    
                    <p>
                            SABROSA 97 comenzó operaciones en Santiago de los Caballeros, desde sus estudios ubicados en el centro urbano de la ciudad, con una programacion estructurada en base al exito y la prosperidad. 
                    </p>
    
    
                </div>
                <div className="col-sm-3">
    
                    <div className="bot1_title">CONTACTOS</div>
                    
                    <div className="location1">Av. Las Carreras, Edif A-15 Apart 2E. Santiago de los Caballeros, R.D</div>
    
                    <div className="phone1">(809) 724-0272</div>
    
                    <div className="mail1"><a href="#">staffcontroldiamante@gmail.com</a></div>
    
                </div>
                <div className="col-sm-4 col-sm-offset-1">
                    <div className="bot1_title">REDES SOCIALES</div>
                    <div className="social_wrapper">
                        <ul className="social clearfix">
                            <li className="nav2"><a target="_blank" href="https://www.facebook.com/sabrosa.emisora.5"><i className="fa fa-facebook"></i></a></li>
                            <li className="nav3"><a target="_blank" href="https://www.instagram.com/control_diamante/"><i className="fa fa-instagram"></i></a></li>
                            <li className="nav1"><a target="_blank" href="https://twitter.com/JOSEPHTAVAREZ11?lang=es"><i className="fa fa-twitter"></i></a></li>                  
                            <li className="nav4"><a target="_blank" href="https://www.youtube.com/channel/UCGHCsvA2NR7eHkzoA0ZcaXw"><i className="fa fa-youtube"></i></a></li>
                        </ul>
                    </div>             
                </div>
            </div>
        </div>
    </div>
       
    )
  }


  export default Footer;



