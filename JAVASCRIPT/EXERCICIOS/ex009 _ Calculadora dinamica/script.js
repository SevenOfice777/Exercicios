function clicar() 
{
   let check = document.getElementsByTagName('input')
   let operator = document.getElementById('operator')
   let val1 = document.getElementById('val1')
   let val2  = document.getElementById('val2')
   let res  = document.getElementById('res')
   let nm1 = Number(val1.value)
   let nm2 = Number(val2.value)
   let select = document.getElementsByTagName('option')
   
   
   
   if(val1.value.length == 0 || val2.value.length == 0) 
   {
      alert('(ERRO) VERIFIQUE OS NUMEROS E TENTE NOVAMENTE')
      
   } else 
   {
      if(check[0].checked) 
      {
         operator.innerHTML = '+'
         let soma = nm1+nm2
         res.innerHTML = 'O resultado é: ' +soma
      } else if (check[1].checked) {
         operator.innerHTML = '*'
         let vezes = nm1*nm2 
         res.innerHTML = 'O resultado é: ' +vezes
      } else if(check[2].checked) {
         operator.innerHTML = '/'
         let divisao = nm1/nm2
         res.innerHTML ='O resultado é: ' +  divisao.toFixed(2)
      } else if(check[3].checked) {
         operator.innerHTML = '-'
         let subtra = nm1-nm2
         res.innerHTML = 'O resultado é: ' +subtra
      } else if(check.value.length == 0) 
      {
         console.log('Esse JS é doido')
      }
   }
   
   
}
