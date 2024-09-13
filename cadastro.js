Parse.initialize("ziF0QzwENpNeDImCmQ6BicKnwIB2dYCO035Em9pL", "9Pz6oMi7vMZOZNB7i68s4vJq2TFxR6qEZsSJp6id");
Parse.serverURL = 'https://parseapi.back4app.com/';

const cadastroForm = document.getElementById('cadastroForm');
const mensagem = document.getElementById('mensagem');


cadastroForm.addEventListener('submit', async (event) => {
  event.preventDefault();

const nome = document.getElementById('nome').value;
const email = document.getElementById('email').value;
const senha = document.getElementById('senha').value;

// Criar um novo usuário no Parse
    const user = new Parse.User();
    user.set('username', email);
    user.set('password', senha);
    user.set('email', email);
    user.set('nome', nome);

    try {
        await user.signUp();
        mensagem.innerText = 'Funcionário cadastrado com sucesso!';
        mensagem.style.color = 'green';
        cadastroForm.reset();
    } catch (error) {
        mensagem.innerText = 'Erro ao cadastrar: ' + error.message;
        mensagem.style.color = 'red';
    }
  });