/* let price = [1]. Isso é uma variável (um só valor). Mas se você quiser transformar a variável em Array (vários valores para uma variável é assim: let price = [1, 2, 3]. Ai, vamos supor que você quer chamar o preço 2... o código ficaria: price[1] (que chamaria o 2, já que a array começa a contar de 0). O mesmo caso se aplica à objetos...tipo "let x = [firstName:"Rafaelly") */
$(document).ready(function($) {
    $(document).on('submit', '#tipsform', function(event) {
      event.preventDefault();   
    });
});
function calculateTip(event) {
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let numOfPeople = document.getElementById('people').value;

    if(bill == '' | serviceQual == 0) {
    alert("Por favor, preencha os valores")
    return;
}
if(numOfPeople == '' | numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById('each').style.display = "none";
} else {
    document.getElementById('each').style.display = "block";
}
let total = (bill * serviceQual) / numOfPeople;
console.log(total)
total = total.toFixed(2);
document.getElementById('tip').innerHTML = total;
document.getElementById("totaltip").style.display = "block";
}

document.getElementById("totaltip").style.display="none";
document.getElementById("each").style.display="none";

document.getElementById("tipsform").addEventListener('submit', calculateTip);