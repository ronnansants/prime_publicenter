/* ordem dos itens
    data com hora, filial, centro de resultado, centro de custo, numero frota, tipo de frota, nome fantasia, razao social, cnpj, terminal, endereço, bairro, cidade, estado, telefone, email, motorista, modelo, hodometro, distancia, produto, quantidade, valor unitario, valor total, taxa, numero da nota, data da emissao, data de vencimento, desconto.

Data	                ---- Data do Abastecimento 
Filial	                ---- Administração do abastecimento
Centro de Resultado	---- Alocação de abastecimento 
Centro de Custo	        ---- Centro de Custo contabil   ??????????
Número Frota	        ---- Numero na frota (pode ser vazio) ????????????????
Tipo de Frota	        ---- Prorio ou Terceirizado 
Nome Fantasia	        ---- Nome Fantasia do posto que realizou o abastecimento
Razão Social	        ---- Razão Social do posto que realizou o abastecimento
CNPJ	                ---- CNPJ do posto que realizou o abastecimento
Terminal	        ---- Terminal do abastecimento ????????????????????????????
Endereço	        ---- Logradouro do Posto que realizou o abastecimento 
Bairro	                ---- Bairro do Posto que realizou o abastecimento 
Cidade	                ---- Cidade do Posto que realizou o abastecimento 
Estado	                ---- Estado da Federação do Posto que realizou o abastecimento 
Telefone	        ---- Telefone do Posto que realizou o abastecimento ??????????????????????????
Email	                ---- Email do Posto que realizou o abastecimento ????????????????????????
Motorista	        ---- Nome do motorista
Modelo	                ---- Placa / modelo
Hodômetro	        ---- Quilometragem de abastecimento
Distância	        ---- ***************dist  ???????????????????????????????????
Produto	                ---- Descrição do item 
Quantidade	        ---- Quantidade do Item 
Valor Unitário	        ---- Valor unitário do Item
Valor Total	        ---- Valor total do Item
Taxa	                ---- sempre 0
Número da Nota	        ---- Numero da nota fiscal ???????????????????????????
Data de Emissão	        ---- Data da emissão da Nota ???????????????????????????
Data de Vencimento	---- Data do vencimento da nota  ???????????????????????????
Desconto                ---- Desconto se houver ??????????????????????????????
*/

const csv = require("fast-csv");
const fs = require("fs");
const path = require("path");

let caminho = path.join(__dirname, 'dados', "abastecimento_trivale.csv");
console.log("Caminho do arquivo CSV:", caminho);

function processCSV(file) {
  const cabecalhoFinal = [
    "Data",
    "Filial",
    "Centro de Resultado",
    "Centro de Custo",
    "Número Frota",
    "Tipo de Frota",
    "Nome Fantasia",
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
    "Número da Nota",
    "Data de Emissão",
    "Data de Vencimento",
    "Desconto",
  ];
}




const btProcessar = document.getElementById("btArquivo");
btProcessar.addEventListener("click", () => {
  const arqTrivale = document.getElementById("iptArquivoVale").files[0];
  if (arqTrivale) {
    const leitor = new FileReader();
    leitor.onload = (event) => {
      const conteudo = event.target.result;
      const linhas = conteudo.split("\n");
      const dados = linhas.map((linha) => linha.split(";"));
      const cabecalho = dados[0];
      const dadosProcessados = dados.slice(1).map((linha) => {
        return linha.reduce((obj, valor, index) => {
          obj[cabecalho[index]] = valor;
          return obj;
        }, {});
      });

      // Aqui você pode fazer algo com os dados processados, como exibir no console
      console.log(dadosProcessados);
    };
    leitor.readAsText(arqTrivale);
  } else {
    alert("Por favor, selecione um arquivo CSV.");
    document.getElementById("iptArquivoVale").target.click();
  }
});

const iptNumeroNota = document.querySelectorAll("table:first-of-type tbody tr input.dado3");
// Itera sobre cada input e adiciona o evento de entrada
iptNumeroNota.forEach((input) => {
  input.addEventListener("input", (el) => {
    // Remove tudo que não for dígito
    
    input.value = el.target.value.replace(/[^0-9]/g, ""); // Corrigido para remover tudo que não for número
  });
});
