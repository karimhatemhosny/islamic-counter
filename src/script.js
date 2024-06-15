let main = document.querySelector('#main')
let addbtn = document.querySelector('#addbtn')
let counter = document.querySelector('#counter')
let resetbtn = document.querySelector('#resetbtn')
let highScore = document.querySelector('#high-score')
let timesClicked = 0

let getHighScore = () => {
  return localStorage.getItem('highScore') || 0
}
highScore.innerHTML = getHighScore()

addbtn.addEventListener('click', () => {
  counter.innerHTML = timesClicked += 1
  if (timesClicked > getHighScore()) {
    localStorage.setItem('highScore', timesClicked);
    highScore.innerHTML = timesClicked
  }
})

resetbtn.addEventListener('click', () => {
  counter.innerHTML = timesClicked = 0
})

main.addEventListener('click', (ev) => {
  if (ev.target !== main) return
  document.documentElement.classList.toggle('dark')
})