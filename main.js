function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(bcdata){
    console.log(bcdata)
    linha = document.createElement("tr")
    tdData = document.createElement("td")
    tdValor = document.createElement("td")

    tdData.innerHTML = bcdata.data
    tdValor.innerHTML = bcdata.valor

    linha.appendChild(tdData)
    linha.appendChild(tdValor)

    return linha
}

function main(){
    let data = fazGet('https://api.bcb.gov.br/dados/serie/bcdata.sgs.4389/dados/ultimos/20?formato=json');
    let dados = JSON.parse(data);

    let tabela = document.getElementById('tabela')

    dados.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}

main()