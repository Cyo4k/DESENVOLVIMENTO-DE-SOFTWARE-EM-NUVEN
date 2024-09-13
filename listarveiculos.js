Parse.serverURL = "https://parseapi.back4app.com";
Parse.initialize("ziF0QzwENpNeDImCmQ6BicKnwIB2dYCO035Em9pL", "9Pz6oMi7vMZOZNB7i68s4vJq2TFxR6qEZsSJp6id");

const Veiculos = Parse.Object.extend("Carro");
const query = new Parse.Query(Veiculos);

query.find().then((resultados) => {

    const tabelaVeiculos = document.getElementById("listaVeiculos");

    resultados.forEach((veiculo) => {
        const id = veiculo.id;
        const marca = veiculo.get("marca");
        const model = veiculo.get("model");
        const cor = veiculo.get("cor");
        const price = veiculo.get("price");
        const ano = veiculo.get("ano");

     
        const linha = document.createElement("tr");
        linha.innerHTML = `
            <td>${marca}</td>
            <td>${model}</td>
            <td>${cor}</td>
            <td>${ano}</td>
            <td>R$ ${price.toFixed(2)}</td>
            <td>
                <button onclick="excluirVeiculo('${id}')">Excluir</button>
            </td>
        `;

        tabelaVeiculos.appendChild(linha);
    });
}).catch((erro) => {
    console.error("Erro ao buscar veículos:", erro);
});

async function excluirVeiculo(id) {
    try {
        const query = new Parse.Query("Carro");
        const veiculo = await query.get(id);

        await veiculo.destroy();

        alert("Veículo excluído com sucesso!");

        document.querySelector(`button[onclick="excluirVeiculo('${id}')"]`).closest("tr").remove();
    } catch (erro) {
        console.error("Erro ao excluir veículo:", erro);
        alert("Erro ao excluir veículo.");
    }
}
