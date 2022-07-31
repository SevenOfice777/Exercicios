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
   
   
   do{
      c+=np
      res.innerHTML += c+ '  -->  '
   }while(c<=nf) 
   
   res.innerHTML += 'FIM'
}
  
