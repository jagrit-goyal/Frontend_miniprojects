// console.log("hello")

setInterval(()=>{

let date = new Date()

// let hours = new Date().getHours()
// let minutes = new Date().getMinutes()
// let seconds = new Date().getSeconds()
// console.log(hours , minutes , seconds)

let time = `${date.getHours()}:${date.getMinutes()} :${date.getSeconds()}`

let element = document.getElementById('time')
element.innerHTML = time

},1000)//cause we write time in minin secondfs