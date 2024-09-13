

Parse.serverURL = "https://parseapi.back4app.com";
Parse.initialize("ziF0QzwENpNeDImCmQ6BicKnwIB2dYCO035Em9pL", "9Pz6oMi7vMZOZNB7i68s4vJq2TFxR6qEZsSJp6id");



// Manipule o envio do formulário
document.getElementById("vehicleForm").addEventListener("submit", async function(event) {
  event.preventDefault();

  const marca = document.getElementById("marca").value;
  const model = document.getElementById("model").value;
  const cor = document.getElementById("cor").value;
  const ano = parseInt(document.getElementById("ano").value);
  const price = parseFloat(document.getElementById("price").value);

  const carro = new Parse.Object("Carro");
  carro.set("marca", marca);
  carro.set("model", model);
  carro.set("cor", cor);
  carro.set("ano", ano);
  carro.set("price", price);

  try {
    await carro.save();
    alert("Veículo cadastrado com sucesso!");
  } catch (erro) {
    alert(`Erro ao cadastrar veículo: ${erro.message}`);
  }
});
