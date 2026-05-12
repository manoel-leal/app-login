// Uma lista de usuarios de sistema, com nome, usuario e senha;
// Criar 2 constantes, uma chamada login e outra senha;
// Se encontrar o usuário existente e a senha for a esperada

const usuarios = [
  {
    nome: 'Manoel Leal',
    login: 'manoel.leal',
    senha: 'abc123'
  },
  {
    nome: 'Roberto Savares',
    login: 'roberto.savares',
    senha: 'teste123'
  },
  {
    nome: 'Joyce Ramos',
    login: 'joyce.ramos',
    senha: '12345678'
  }
];

export function realizarLogin(login, senha){
let mensagem = 'Usuário ou senha incorretos';

usuarios.forEach((usuario) => {
  if(usuario.login == login && usuario.senha == senha){
    mensagem = 'Usuario logado com sucesso!'
  } 
})



return mensagem;
}
