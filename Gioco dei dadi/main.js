//genero due variabili con numeri casuali da 1 a 6 tramite la funzione mathrandom
var dado1 = Math.floor(Math.random() * 6) +1;
document.getElementById('dado1').innerHTML = dado1;

var dado2 = Math.floor(Math.random() * 6) +1;
document.getElementById('dado2').innerHTML = dado2;

//controllo di risultati delle variabili per decretare il vincitore
if (dado1 > dado2){
  document.getElementById('vincitore').innerHTML= ('Il vincitore è Persona 1');
}else if (dado1 < dado2){
    document.getElementById('vincitore').innerHTML= ('Il vincitore è Persona 2');
  }
  else{
    document.getElementById('vincitore').innerHTML= ('Pareggiano');
  }
