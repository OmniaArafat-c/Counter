let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let resetEL = document.getElementById("reset-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.textContent = count
}
function save() {
    let countStr = count + " - "
saveEl.textContent+= countStr
countEl.textContent = 0
    count = 0
console.log(count)
} 
function reset(){
    count= 0
    countEl.textContent = count    
}
console.log(count)

