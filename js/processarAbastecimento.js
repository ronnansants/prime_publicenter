const mapeando = {
    "DATA": "Data",
    "FILIAL": "Filial",
    "CENTRO RESULTADO": "Centro de Resultado",
    "CENTRO CUSTO": "Centro de Custo",
    "NUMERO FROTA": "Número Frota",
    "TIPOFROTA": "Tipo de Frota",
    "MOTORISTA": "Motorista",
    "MODELO": "Modelo",
    "HODOMETRO": "Hodômetro",
    "DISTANCIA": "Distância",
    "PRODUTO": "Produto",
    "QUANTIDADE": "Quantidade",
    "VALOR UNITARIO": "Valor Unitário",
    "VALOR TOTAL": "Valor Total",
    "TERMINAL": "Terminal",
    "CIDADE": "Cidade",
    "UF": "Estado",
    "ESTABELECIMENTO": "Razão Social",
    "CUPOM FISCAL": "Número da Nota",  
}

const camposObrigatorios = [
    "Razão Social",
    "CNPJ",
    "Terminal",
    "Endereço",
    "Bairro",
    "Cidade",
    "Estado",
    "Telefone",
    "Email",
    "Motorista",
    "Modelo",
    "Hodômetro",
    "Distância",
    "Produto",
    "Quantidade",
    "Valor Unitário",
    "Valor Total",
    "Taxa",
    "Número da Nota"
];

const btProcessar = document.getElementById("btArquivo");
btProcessar.addEventListener("click", () => {
    const arqTrivale = document.getElementById("iptArquivoVale").files[0];
    
    if (arqTrivale) {
        const leitor = new FileReader();
        leitor.onload = () => {
            const dados = leitor.result;
            processarArquivo(dados);
        };
        leitor.readAsText(arqTrivale);
    } else {
        alert("Por favor, selecione um arquivo");
        document.getElementById("iptArquivoVale").target.click();
    }

});