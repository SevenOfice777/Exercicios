function carregar() {
  var date = new Date()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var seconds = date.getSeconds()
  var day = date.getDate()
  var year = date.getFullYear()
  var text = document.querySelector('#p1')
  var txt = document.getElementById('txt')
  
  
  
  text.innerHTML = 'Olá agora são <strong>' +hour+ ':' +minute+ ':' +seconds+  '</strong> <br> Hoje é dia <strong>' +day + '</strong> do ano <strong>'+year + '</strong>'
  
  if (hour <= 12) {
    txt.innerHTML = '<strong>Bom dia </strong>'
  } else if (hour > 12 && hour <= 18) {
    txt.innerHTML = '<strong>Boa tarde </strong>'
  } else {
    txt.innerHTML = '<strong>Boa Noite </strong>'
  }
}
