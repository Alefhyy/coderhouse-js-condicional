const numero = parseInt(prompt("Inserir Numero"))

if (numero > 1000) {
  alert("O numero é maior que 1000")
} else if (numero < 1000) {
  alert("O numero é menor que 1000")
} else if (numero == 1000) {
  alert("O numero é exatamente 1000")
} else {
  alert("Isso não é um número")
}