function clicar() {
  let txt1 = document.getElementById('txt').value
  let tn1 = document.getElementById('n1').value
  let tn2 = document.getElementById('n2').value
  let res = document.getElementById('res')
  let porcPOS = (((tn2 - tn1) / tn1) * 100)
  let porcNEG = (((tn1 - tn2) / tn2) * 100)
     if (txt1.length == '0' || tn1.length == '0' || tn2.length == '0')
     {
       alert('(ERRO) VERIFIQUE OS DADOS E TENTE novamente!')
     } else if(tn1 <= tn2) {
          res.innerHTML= 'PREJUIZO: ' +porcPOS.toFixed(0) + '%'
          
     } else {
        res.innerHTML= 'LUCRO: ' +porcNEG.toFixed(0) + '%'
     }
}






























/* else {
     if(tn1 > tn2) {
       var n12 = tn1 - tn2
       var porcPOS = (tn2 / tn1) * 100
       
      res.innerHTML= txt1.toUpperCase()+',<br> LUCRO: ' +n12.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})+ '<BR> O que significa que você ira pagar ' +porcPOS.toFixed(2)+ '% do valor inical.'
      
      }else {
        if(tn1 < tn2) {
        var n21 = tn2 - tn1
        var porcNEG = ((tn2 - tn1)/tn1) * 100
        
        res.innerHTML= txt1+',<br> PREJUIZO: ' +n21.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})+ '<BR> O que significa que você vai pagar ' +porcNEG.toFixed(2)+ '% a mais do valor inicial. Em relação com ' +tn2+' - '+tn1
      }
      }
  }
}

*/


