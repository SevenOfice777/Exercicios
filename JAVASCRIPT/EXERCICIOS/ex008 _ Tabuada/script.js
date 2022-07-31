function clicar() {
   var val1 = document.getElementById('val1').value
   var val = Number(val1)
   var res = document.getElementById('res')
   
   if (val1.length == 0) {
      alert('erro')
   } else {
      for(var c = 1; c <= 10; c++)
      {
         var se = c*val
         res.innerHTML+= c+'*'+val+ '=' +se+ '<br>'
      }
   }
   
}
 
