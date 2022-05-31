

let Bolsonaro = parseInt(prompt("Votes on Bolsonaro"))
let Lula = parseInt(prompt("Votes on Lula"))
let Ciro_Gomes = parseInt(prompt("Votes on Ciro Gomes"))

let nulos = parseInt(prompt("Null"))
let brancos = parseInt(prompt("Blanks"))

let votos_em_candidatos = Bolsonaro + Lula + Ciro_Gomes

let total = votos_em_candidatos + brancos + nulos

console.log("Bolsonaro " + (Bolsonaro / total * 100).toFixed(2) + " % of votes")
console.log("Lula " + (Lula / total * 100).toFixed(2) + " % of votes")
console.log("Ciro Gomes " + (Ciro_Gomes / total * 100).toFixed(2) + "% of votes")
console.log("Nulos " + (nulos / total * 100).toFixed(2) + " % of votes")
console.log("Brancos " + (brancos / total * 100).toFixed(2) + "  % of votes")
console.log(`Votos totais ${total}.`)