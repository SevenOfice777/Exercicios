function calcular() 
{
   let val = document.getElementById('val1').value
   let val1 = Number(val)
   let res = document.getElementById('res')
   
   res.innerHTML = 'Esses são os divisores de ' +val1+ ': <br>'
   
  for(let c = 1 ; c<=val1 ; c++) 
  {
     if(val1%c == 0 )
     {
        res.innerHTML += c +' --> '
     }
  }
  
}
