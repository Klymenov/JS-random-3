import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

      player.on('play', onStart);

      player.getVideoTitle().then(function (title) {
        console.log('title:', title);
      });


const onPlay = function (data) {
  localStorage.setItem("videoplayer-current-time", data.seconds)
  
  if (data.seconds === data.duration) {
    player.off('timeupdate');
    localStorage.removeItem("videoplayer-current-time");
   };
  
}

player.on('timeupdate', throttle(onPlay, 1000));
 const time = localStorage.getItem("videoplayer-current-time");
const carentTime = time > null ? time : 0;
player.setCurrentTime(carentTime); 

function onStart() {player.on('timeupdate', throttle(onPlay, 1000))}; 
