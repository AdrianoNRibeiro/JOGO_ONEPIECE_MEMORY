const btn_gamePiece = document.querySelector('#btn_gamePiece');
const btn_gamePoke = document.querySelector('#btn_gamePoke');
const btn_gameDragon = document.querySelector('btn_gameDragon');
const btn_gameDemon = document.querySelector('#btn_gameDemon');
const btn_records = document.querySelector('#btn_records');

btn_gamePiece.addEventListener('click',(evt)=>{
    window.location.href = '../pages/gameOne.html';
})

btn_gamePoke.addEventListener('click',(evt)=>{
    window.location.href = '../pages/gamePoke.html';
})

btn_gameDragon.addEventListener('click',(evt)=>{
    window.location.href = '../pages/gameDragon.html';
})

btn_gameDemon.addEventListener('click',(evt)=>{
    window.location.href = '../pages/gameDemon.html';
})




