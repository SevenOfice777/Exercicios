function clicar() {
  var txt2 = document.getElementById('txt2')
  var n1 = txt2.value
  var res = document.getElementById('res')
  
  var name = document.getElementById('txt1').value 
  //em var name é o input do nome
  
  if (n1.length == 0 || n1 == '0') {
    res.innerHTML= "Erro"
  } else if(n1 < 18) {
    res.innerHTML= 'Olá ' +name + ' Você é menor de idade! Você tem' +n1 + ' anos'
    } else {
      res.innerHTML = 'Olá ' +name + ' Você é maior de idade!  Você tem ' +n1 + ' anos'
  }


}
