function clicar()
{
   let i = document.getElementById('i').value
   let f = document.getElementById('f').value
   let p = document.getElementById('p').value
   let res = document.getElementById('res')
   let ni = Number(i) 
   let nf = Number(f)
   let np = Number(p)
   let c = ni
   
   while(c<=nf) 
   {
      c+=np
      res.innerHTML += c+ '  -->  '
   }
   res.innerHTML += 'FIM'
}
  
