Parse.serverURL = 'https://parseapi.back4app.com/';
Parse.initialize("ziF0QzwENpNeDImCmQ6BicKnwIB2dYCO035Em9pL", "9Pz6oMi7vMZOZNB7i68s4vJq2TFxR6qEZsSJp6id");


const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const User = await Parse.User.logIn(email, password);
        alert('Login realizado com sucesso');
        // Redirecionar para a página de gerenciamento de carros
        window.location.href = 'cadastroVeiculo.html';
    } catch (error) {
        alert('Erro ao fazer login: ' + error.message);
    }
});