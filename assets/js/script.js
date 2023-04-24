listOfMusic = [
    ["Miyagi & Andy Panda", "Патрон", "./assets/music/Miyagi - Andy Panda - Патрон.mp3"],
    ["Miyagi & Andy Panda", "Бэйба судьба", "./assets/music/Miyagi - Andy Panda - Бэйба судьба.mp3"],
    // ["Miyagi & Andy Panda", "", "./assets/music/Miyagi - Andy Panda - Бэйба судьба.mp3"],
    
];

let albumMusic = document.getElementById('album-music');
let volume = document.getElementById('vol-control');

function changeTime(time){
    var sec= new Number();
    var min= new Number();
    sec = Math.floor( time );    
    min = Math.floor( sec / 60 );
    min = min >= 10 ? min : '0' + min;    
    sec = Math.floor( sec % 60 );
    sec = sec >= 10 ? sec : '0' + sec;
    let value = min + ":" + sec;
    return value;
}
for (var i = 0; i <listOfMusic.length; i++) {
    

    let MusicBox = document.createElement('div');
    MusicBox.className = 'music-box';

    let MusicBoxImage = document.createElement('div');
    MusicBoxImage.className ='music-box-image';
    let btn = document.createElement('i');
    btn.className ='ri-play-line';
    // ri-pause-fill
    

    let MusicBoxTitle = document.createElement('p');
    MusicBoxTitle.className = 'MusicArtist'
    let MusicBoxTime = document.createElement('p');
    MusicBoxTime.className = 'MusicTime';
    let Music = document.createElement('audio');


    // MusicBoxImage= './assets/images/miyagi.jpg';
    MusicBoxTitle.innerText = listOfMusic[i][0] + ' - ' + listOfMusic[i][1];
    
    


    albumMusic.appendChild(MusicBox);
    MusicBox.appendChild(MusicBoxImage);
    MusicBox.appendChild(MusicBoxTitle);
    MusicBox.appendChild(MusicBoxTime);
    MusicBox.appendChild(Music);
    MusicBoxImage.appendChild(btn);
    
    Music.src = listOfMusic[i][2];
    
    
    MusicBoxImage.addEventListener('click', function(){
        if(Music.paused ==true){
            Music.pause();
            Music.play();
            // setInterval(function(){
            //     MusicBoxTime.innerText = changeTime(Music.currentTime)+ "/" + changeTime(Music.duration);
            // },500)
            btn.className ='ri-pause-fill';

        }else{
            btn.className ='ri-play-line';
            Music.pause();
        }
    })
    
    setInterval(()=>{
        var currentdate = new Date();
        var datetime = "TIme: "+  currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
        document.querySelector(".time").innerText = datetime;
        MusicBoxTime.innerText = changeTime(Music.currentTime)+ "/" + changeTime(Music.duration);
    },500)
    
}

volume.addEventListener('input', function(e){
    albumMusic.volume  = e.value
})

volume.addEventListener('change', function(e){
    albumMusic.volume  = e.value
})

