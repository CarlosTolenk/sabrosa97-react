

import axios from 'axios';

const channelID = 'UCGHCsvA2NR7eHkzoA0ZcaXw';
const API_KEY = 'AIzaSyAtSwtIQL93YfhsnHDfKNDQwZo5_KqGhVY';
const urlAPI_YO = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelID}&part=snippet,id&order=date&maxResults=20`;

// let video = "https://www.youtube.com/embed/";


// let username = 'sabrosa-97';

export async function getVideosYoutube() {
    console.log("Recuperando información");
    try {
      const response = await axios.get(urlAPI_YO);
      return response.data.items;
   
    //   draw(response.data.items);
    } catch (error) {
        return error;
    }
}

