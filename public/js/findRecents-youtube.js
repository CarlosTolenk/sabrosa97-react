'use strict'

const channelID = 'UCGHCsvA2NR7eHkzoA0ZcaXw'
const API_KEY = 'AIzaSyAtSwtIQL93YfhsnHDfKNDQwZo5_KqGhVY'
const urlAPI_YO = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelID}&part=snippet,id&order=date&maxResults=20`

let video = "https://www.youtube.com/embed/"


let username = 'sabrosa-97'

async function getUser(page, count) {
    try {
      const response = await axios.get(urlAPI_YO);
   
      draw(response.data.items);
    } catch (error) {
      console.error(error);
    }
  }

  getUser(1, 5);

  const draw = (data) => {
      let index = 0;
      const container = document.getElementById('radio-stream-podcast');    
      const containerContent = document.createElement('div');
      // containerContent.className('radios')
      // console.log(data);
      for(let element of data) {
          if(index < 2){
              index++
            const iframeRadio = ` 

                <div className="col-lg-6 ">
                    <iframe scrolling="no" className="video-youtube"
                    src="${video}${element.id.videoId}"
                    frameborder="0" allowtransparency allow="autoplay">  
                    </iframe>
                </div>

            `

            containerContent.insertAdjacentHTML('beforeend', iframeRadio);
          }
   
         
      }

      container.appendChild(containerContent);


  }


      const iframe = ` 
     <iframe scrolling="no" id="hearthis_at_track_2610311" width="100%" height="130"
     src="https://hearthis.at/embed/2610311/transparent_black/?hcolor=&color=681ed6&style=2&block_size=2&block_space=1&background=0&waveform=0&cover=0&autoplay=0&css="
     frameborder="0" allowtransparency allow="autoplay">
     <p>Listen to 
        <a href="https://hearthis.at/carlos-tolentino/martes-27-11-2018/" target="_blank">MARTES 27-11-2018</a>
        <span>by</span><a href="https://hearthis.at/carlos-tolentino/" target="_blank" >Carlos Tolentino</a>
        <span>on</span> <a href="https://hearthis.at/" target="_blank">hearthis.at</a>
     </p>
     </iframe> -->`

