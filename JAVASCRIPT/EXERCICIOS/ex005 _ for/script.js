function clicar()
{
   let i = document.getElementById('i').value
   let f = document.getElementById('f').value
   let p = document.getElementById('p').value
   let res = document.getElementById('res')
   let ni = Number(i) 
   let nf = Number(f)
   let np = Number(p)
   
   
   for(let c = ni; c <= nf ; c+=np) 
      {
         res.innerText += c+ '  -->  ' 
   }
   res.innerHTML += ' FIM'
}
