function clicar()
{
   let nome = document.getElementById('nome').value
   let data = document.getElementById('data').value
   let idade = document.getElementById('idade').value
   let res = document.getElementById('text')
   
   while(idade < 18) {
      res.innerHTML = "VC É MENOR DE IDADE"
   }
   
}
