import { realizarLogin } from '../src/login.js'
import assert from 'node:assert';

describe('Realizar Login', () => {
    it('Realizar login com sucesso', () => {
        // Arrange
        const login = 'manoel.leal';
        const senha = 'abc123';
        const mensagemEsperada = 'Usuario logado com sucesso!';

        // Action
        const mensagem = realizarLogin(login, senha);
        console.log(mensagem);

        // Assert
        assert.equal(mensagem, mensagemEsperada);

    });
    
    it('Não deve logar com usuario e senha incorretos', () => {
        const login = 'jessica.soares';
        const senha = '12345689';
        const mensagemEsperada = 'Usuário ou senha incorretos';

        const mensagem = realizarLogin(login, senha);

        assert.equal(mensagem, mensagemEsperada);
    })
});