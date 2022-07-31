function calcular() 
{
   let val = document.getElementById('val1')
   let val2 = document.getElementById('val2')
   let num2 = Number(val2.value)
   let num1 = Number(val.value)
   let res = document.getElementById('res')
  
   if(val.value.length == 0 ||  val2.value.length == 0 )
   {
      res.innerHTML = 'Erro, por favor verifique os dados e tente novamente!'
   } else if (num1 ==  0 || num2 == 0) 
       {
           res.innerHTML = 'Não existe divisão por 0'
       } else
       {
          let mmc = (num1/num2)*100
          res.innerHTML = 'O NUMERO É:' +mmc
       }
}

//    res.innerHTML = 'O minimo multiplo comum do numero ' +val1+ ' é'
