let time = document.getElementById('seconds')
let startFive = document.getElementById('add-five')
let stopTen = document.getElementById('add-ten')
let resetFiften = document.getElementById('add-fifteen')

let countDown = 10;
let countDownInterval;


const startCount = () =>{
    countDownInterval = setInterval(() => {
        time.textContent = countDown
        countDown -= 1
        if(countDown <= 0){
            clearInterval(countDownInterval)
            time.textContent = 0
        }
    }, 1000)
}
 const increaseTime = ( time)=>{
     countDown += time
     clearInterval(countDownInterval)
     time.textContent = countDown
     startCount()
 }
 startFive.addEventListener('click', ()=>{
     increaseTime(5)
 })
 stopTen.addEventListener('click', ()=>{
     increaseTime(10)
 })
 resetFiften.addEventListener('click', ()=>{
     increaseTime(15)
 })
 startCount()
