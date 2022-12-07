console.log("welcome to my spotify");

//intialize variable
let songindex = 0 ;
let audioelement = new Audio('./songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songitem = document.getElementById('songitem');
let mastersongname = document.getElementById('mastersongname');

let songs =[
    {songname: "Blank Space" ,filepath: "./songs/1.mp3"},
    {songname: "All Too Well" ,filepath: "./songs/2.mp3"},
    {songname: "Love Story" ,filepath: "./songs/3.mp3"},
    {songname: "Willow" ,filepath: "./songs/4.mp3"},
    {songname: "Lover" ,filepath: "./songs/5.mp3"},
    {songname: "Cardigan" ,filepath: "./songs/6.mp3"},
    {songname: "Mr. Perfectly Fine" ,filepath: "./songs/7.mp3"},

]

//audioelemnet.play();

//handle play/pause click
masterplay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioelement.pause();
        masterplay.classList.add('fa-circle-play');
        masterplay.classList.remove('fa-circle-pause');
        gif.style.opacity = 0;
    }
})

//listen to events
audioelement.addEventListener('timeupdate',()=>{
    
    progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
    
    myprogressbar.value = progress;
}
);
myprogressbar.addEventListener('change', ()=>{
    audioelement.currentTime = myprogressbar.value * audioelement.duration/100;
})

const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        
            element.classList.remove('fa-pause');
            element.classList.add('fa-play');
       
    })

}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(audioelement.paused || audioelement.currentTime<=0){
        makeallplays();
        songindex = parseInt(e.target.id); 
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioelement.src = `songs/${songindex+ 1}.mp3`;
        mastersongname.innerText = songs[songindex].songname; 
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        masterplay.classList.add('fa-circle-pause');
        masterplay.classList.remove('fa-circle-play');}
        else{
            audioelement.pause();
            gif.style.opacity = 0;
            e.target.classList.add('fa-play');
            e.target.classList.remove('fa-pause');


        }
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=6)
    { songindex=0 }
    else{
        songindex +=1;

    }
    audioelement.src = `./songs/${songindex+1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        masterplay.classList.add('fa-circle-pause');
        masterplay.classList.remove('fa-circle-play');


})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0)
    { songindex=0 }
    else{
        songindex -=1;

    }
    audioelement.src = `./songs/${songindex+1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        masterplay.classList.add('fa-circle-pause');
        masterplay.classList.remove('fa-circle-play');

})
