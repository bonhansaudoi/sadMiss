
let menuAudio = document.querySelector(".menu-audio");
let audio = document.querySelector(".audio");
let layerBlack = document.querySelector(".layer-black");
let layerAudio = document.querySelector(".layer-audio");
let iframeAudio = document.querySelector(".iframe-audio");
let player = document.querySelector(".player");
let cover = document.querySelector(".cover");
let layerCover = document.querySelector(".layer-cover");

var lt = window.matchMedia("(min-width: 1020px)")
if (lt.matches) {
   player.src = 'https://www.youtube.com/embed/videoseries?list=PLGPC65oaYvnsWfce9JHCo6YkPcky5OtUP&autoplay=1';
}
 
function openCover() {
   cover.style.display = 'block'; 
   layerBlack.style.display = 'block';
}

function closeCover() {
   layerBlack.style.display = 'none';
   cover.style.display = 'none';
};
// NOTE
// function audioMenu() {
//    menuAudio.classList.toggle('hidden');
// }
// NOTE
// menuAudio.addEventListener("click", function () {
//    this.classList.toggle("hide"); 
// });
layerCover.addEventListener("click", closeCover);
layerAudio.addEventListener("click", openCover);

function offAudio() { 
   layerBlack.display = 'block';
   iframeAudio.src = '';
   player.style.display = 'block';
   cover.style.display = 'none';
}

function offAudioKl() {
   layerBlack.display = 'block';
   iframeAudio.src = ''; 
   player.style.display = 'block';
   if (lt.matches) {
      cover.style.display = 'block';
   } else  {
      cover.style.display = 'none';
   } 
}

function onAudio() {
   cover.style.display = 'block';
   player.style.display = 'none';
   player.src = '';
   layerBlack.display = 'none';
}

// add class active
let li = document.querySelectorAll('.youtube-list li')
for (var i = 0; i < li.length; i++) {
   li[i].addEventListener("click", function () {
      var el = document.querySelectorAll(".active");
      el[0].classList.remove("active");
      this.classList.add("active");
   });
} 

// function music
function nhac() {
   offAudio();
   player.src = "https://www.youtube.com/embed/videoseries?list=PLGPC65oaYvnu8my-D0VFkIKFrML4yZHpE&autoplay=1";
}
function nhacphongtra() {
   offAudio();
   player.src = "https://www.youtube.com/embed/videoseries?list=PLGPC65oaYvnskXm8j3qaG7g8mjgpXSFNq&autoplay=1";
}
function nhacvang() {
   offAudio();
   player.src = "https://www.youtube.com/embed/videoseries?list=PLGPC65oaYvntPElQYdAACeguPE589fgQt&autoplay=1";
}
function tienchien() {
   offAudio();
   player.src = "https://www.youtube.com/embed/videoseries?list=PLGPC65oaYvntQeibB9oOxJaD5m--oB6q_&autoplay=1";
}
function quehuong() {
   offAudio();
   player.src = "https://www.youtube.com/embed/videoseries?list=PLGPC65oaYvnsClWCp6jQeiBDD6U2iNMRs&autoplay=1";
}
function quanhoquetoi() {
   offAudio();
   player.src = "https://www.youtube.com/embed/videoseries?list=PLGPC65oaYvnurw41-50tktrg4oWzkeglK&autoplay=1";
}
function nhatkicuame() {
   offAudio();
   player.src = "https://www.youtube.com/embed/videoseries?list=PLGPC65oaYvnse-MNQY3cxa4-dDIPl2ipE&autoplay=1";
}

// kl
function khongloi() {
   offAudioKl();
   player.src = "https://www.youtube.com/embed/videoseries?list=PLGPC65oaYvnsWfce9JHCo6YkPcky5OtUP&autoplay=1";
}
function khongloi_thugian() {
   offAudioKl();
   player.src = "https://www.youtube.com/embed/videoseries?list=PLGPC65oaYvnt4EfCJj6z9eTpXzPYeHtLC&autoplay=1";
}
function khongloi_quehuong() {
   offAudioKl();
   player.src = "https://www.youtube.com/embed/videoseries?list=PLGPC65oaYvnskOAo7sLbNyWujWRn5sTQk&autoplay=1";
}

// Audio
function audio1() {
   onAudio();
   iframeAudio.src = "https://www.nhaccuatui.com/lh/auto/UnkrQT7yjGE3";
} 