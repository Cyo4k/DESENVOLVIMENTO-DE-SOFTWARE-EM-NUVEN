Parse.serverURL = "https://parseapi.back4app.com";
Parse.initialize("ziF0QzwENpNeDImCmQ6BicKnwIB2dYCO035Em9pL", "9Pz6oMi7vMZOZNB7i68s4vJq2TFxR6qEZsSJp6id");

// Consulta para buscar todos os veículos
const Veiculos = Parse.Object.extend("Carro");
const query = new Parse.Query(Veiculos);

query.find().then((resultados) => {
    // Processar os resultados
    const tabelaVeiculos = document.getElementById("listaVeiculos");

    resultados.forEach((veiculo) => {
        const marca = veiculo.get("marca");
        const model = veiculo.get("model");
        const cor = veiculo.get("cor");
        const price = veiculo.get("price");
        const ano = veiculo.get("ano");

        // Criar um item de lista para cada veículo
         const linha = document.createElement("tr");
                linha.innerHTML = `
                    <td>${marca}</td>
                    <td>${model}</td>
                    <td>${cor}</td>
                    <td>${ano}</td>
                    <td>R$ ${price.toFixed(2)}</td>
                `;

                tabelaVeiculos.appendChild(linha);
            });
        }).catch((erro) => {
            console.error("Erro ao buscar veículos:", erro);
        });