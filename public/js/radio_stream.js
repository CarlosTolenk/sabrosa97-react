console.log('Script de Radio Stream online activo');

// sabrosa-97

let username = 'sabrosa-97'

async function getUser(page, count) {
    try {
      //Username carlos-tolentino
      // const response = await axios.get(`https://api-v2.hearthis.at/carlos-tolentino/?type=tracks&page=${page}&count=${count}`);

      //Username sabrosa-97
      // const response = await axios.get(`https://api-v2.hearthis.at/sabrosa-97/?type=tracks&page=${page}&count=${count}`);
      const response = await axios.get(`https://api-v2.hearthis.at/${username}/?type=tracks&page=${page}&count=${count}`);
   
      draw(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  getUser(1, 5);

  const draw = (data) => {
      const container = document.getElementById('radio-stream-podcast');    
      const containerContent = document.createElement('div');
    //   containerContent.className('radios')
      console.log(data);
      data.forEach(element => {         
          const iframeRadio = ` 
          <iframe scrolling="no" id="hearthis_at_track_${element.id}" width="100%" height="130"
          src="https://hearthis.at/embed/${element.id}/transparent_black/?hcolor=&color=0c9ec3&style=2&block_size=2&block_space=1&background=0&waveform=0&cover=0&autoplay=0&css="
          frameborder="0" allowtransparency allow="autoplay">
          <p>Escuchar en
             <a href="${element.permalink_url}/" target="_blank">${element.title}</a>
             <span>by</span><a href="https://hearthis.at/${element.user.username}/" target="_blank" >${element.user.username}</a>
             <span>on</span> <a href="https://hearthis.at/" target="_blank">hearthis.at</a>
          </p>
          </iframe>`

        containerContent.insertAdjacentHTML('beforeend', iframeRadio);
         
      });

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

