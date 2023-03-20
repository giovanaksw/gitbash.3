let res = document.getElementById('res')
console.log(res)

let pais = ['Chile', 'Brasil', 'Bolivia', 'Argentina', 'Paraguai']
let cidades = new Array('Tijucas', 'Itapema', 'São José')

// console.log(pais[2])
// console.log(cidades[1])

pais.push('Uruguai')
pais.unshift('Colombia')
console.log(pais)
console.log(cidades)
pais.pop()
pais.shift()
console.log(pais)
console.log(cidades)

function inserir(){
    pais.pop()
    pais.shift()
    res.innerHTML += pais + '<br>'
    res.innerHTML += cidades + '<br>'


}