const btn = document.getElementById("btn")

btn.addEventListener('click', () => {
if (btn.checked === true) {
  document.body.style.backgroundColor = "black"
} else {
  document.body.style.backgroundColor = 'white'
}
})
