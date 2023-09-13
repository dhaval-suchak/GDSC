console.log("Welcome to spotify")
// initializing variables
let songIndex
let songs=[
    {songName:"Salam-e-Ishq", filePath:"song/1.mp3", coverPath:"covers/1.mp3"},
    {songName:"Salam-e-Ishq", filePath:"song/1.mp3", coverPath:"covers/1.mp3"},
    {songName:"Salam-e-Ishq", filePath:"song/1.mp3", coverPath:"covers/1.mp3"},
    {songName:"Salam-e-Ishq", filePath:"song/1.mp3", coverPath:"covers/1.mp3"},
    {songName:"Salam-e-Ishq", filePath:"song/1.mp3", coverPath:"covers/1.mp3"},
    {songName:"Salam-e-Ishq", filePath:"song/1.mp3", coverPath:"covers/1.mp3"},
    {songName:"Salam-e-Ishq", filePath:"song/1.mp3", coverPath:"covers/1.mp3"},
    {songName:"Salam-e-Ishq", filePath:"song/1.mp3", coverPath:"covers/1.mp3"},
    {songName:"Salam-e-Ishq", filePath:"song/1.mp3", coverPath:"covers/1.mp3"},

]
let audioElement=new Audio('songs/1.mp3');
audioElement.play(); 
document.addEventListener('time')