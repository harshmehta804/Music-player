const music = new Audio('audio/Lover.mp3');


const songs =[
    {
        id: 1,
        songName: `lover<br>
        <div class="subtitle">Taylor Swift</div>`,
        poster: "IMG/taylor/lover.jpg"
    },
    {
        id: 2,
        songName: `Bad Blood<br>
        <div class="subtitle">Taylor Swift</div>`,
        poster: "IMG/taylor/badblood.jpg"
    },
    {
        id: 3,
        songName: `All to well<br>
        <div class="subtitle">Taylor Swift</div>`,
        poster: "IMG/taylor/all-too-well.jpg"
    },
    {
        id: 4,
        songName: `Anti Hero<br>
        <div class="subtitle">Taylor Swift</div>`,
        poster: "IMG/taylor/anti hero.jpg"
    },
    {
        id: 5,
        songName: `You Belog With Me<br>
        <div class="subtitle">Taylor Swift</div>`,
        poster: "IMG/taylor/you belong with me.jpg"
    },
    {
        id: 6,
        songName: `Midnights<br>
        <div class="subtitle">Taylor Swift</div>`,
        poster: "IMG/taylor/midnights.jpg"
    },
    {
        id: 7,
        songName: `Love Story<br>
        <div class="subtitle">Taylor Swift</div>`,
        poster: "IMG/taylor/love story.jpg"
    },
    {
        id: 8,
        songName: `All to well<br>
        <div class="subtitle">Taylor Swift</div>`,
        poster: "IMG/taylor/all-too-well.jpg"
    },
    {
        id: 9,
        songName: `You Belog With Me<br>
        <div class="subtitle">Taylor Swift</div>`,
        poster: "IMG/taylor/you belong with me.jpg"
    }
]

Array.from(document.getElementsByClassName('img_play')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    
})
Array.from(document.getElementsByClassName('titles')).forEach((e,i)=>{
    
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
    
})





let masterPlay=document.getElementById('masterplay');
let wave =document.getElementById('waves');

masterPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active2');
        masterPlay.classList.remove('fa-play')
        masterPlay.classList.add('fa-pause')
    } else{
        music.pause();
        wave.classList.remove('active2');
        masterPlay.classList.add('fa-play')
        masterPlay.classList.remove('fa-pause')
    }
})



let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right =document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft +=330;
});
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -=330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right=document.getElementById('pop_art_right');
let Artists_bx =document.getElementsByClassName('Artists_bx')[0];



Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        // music.src=`audio/${el.target.id}.mp3`;
        music.play()
    })
})