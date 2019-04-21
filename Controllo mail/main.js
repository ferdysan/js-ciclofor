//inizializzo un array con una lista di mail
var mail = ['lucia@test.it','fer.one@hotmail.it','ferdysan87@gmail.com'];
//chiedo all'utente di inserire una mail
var utente = prompt('Inserisci la tua mail');

//creo ciclo for per controllo array e stampo messaggio affermatito in caso di risultato corretto
for (var i=0; i<mail.lenght; i++){
     if (utente == mail[i]) {
       console.log('indirizzo mail è corretto');
     }
}
