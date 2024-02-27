let nama = prompt("Masukan Nama Anda")
var nameElement = document.getElementById("nama")


nameElement.innerHTML = nama


setInterval(()=>{
  document
  .getElementById("clock")
  .innerHTML
  = new Date()
  .toString()
  .slice(16,24)
} , 1000)


