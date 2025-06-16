/* ordem dos itens
    data com hora, filial, centro de resultado, centro de custo, numero frota, tipo de frota, nome fantasia, razao social, cnpj, terminal, endereço, bairro, cidade, estado, telefone, email, motorista, modelo, hodometro, distancia, produto, quantidade, valor unitario, valor total, taxa, numero da nota, data da emissao, data de vencimento, desconto.

Data	                ---- Data do Abastecimento 
Filial	                ---- Administração do abastecimento
Centro de Resultado	---- Alocação de abastecimento 
Centro de Custo	        ---- Centro de Custo contabil
Número Frota	        ---- Numero na frota (pode ser vazio)
Tipo de Frota	        ---- Prorio ou Terceirizado 
Nome Fantasia	        ---- Nome Fantasia do posto que realizou o abastecimento
Razão Social	        ---- Razão Social do posto que realizou o abastecimento
CNPJ	                ---- CNPJ do posto que realizou o abastecimento
Terminal	        ---- Terminal do abastecimento
Endereço	        ---- Logradouro do Posto que realizou o abastecimento 
Bairro	                ---- Bairro do Posto que realizou o abastecimento 
Cidade	                ---- Cidade do Posto que realizou o abastecimento 
Estado	                ---- Estado da Federação do Posto que realizou o abastecimento 
Telefone	        ---- Telefone do Posto que realizou o abastecimento 
Email	                ---- Email do Posto que realizou o abastecimento 
Motorista	        ---- Nome do motorista
Modelo	                ---- Placa / modelo
Hodômetro	        ---- Quilometragem de abastecimento
Distância	        ---- ***************dist 
Produto	                ---- Descrição do item 
Quantidade	        ---- Quantidade do Item 
Valor Unitário	        ---- Valor unitário do Item
Valor Total	        ---- Valor total do Item
Taxa	                ---- sempre 0
Número da Nota	        ---- Numero da nota fiscal
Data de Emissão	        ---- Data da emissão da Nota
Data de Vencimento	---- Data do vencimento da nota  
Desconto                ---- Desconto se houver
*/

const csv = require("fast-csv");
const fs = require("fs");
const arqTrivale = document.getElementById("arquivoPrime").files[0];

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
