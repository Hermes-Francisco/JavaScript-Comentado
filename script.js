//O "document.write" adiciona um texto à página HTML.
// No caso, o primeiro aqui adiciona uma tag "h1"
document.write("<h1>Estamos executando o script.js</h1>");
document.write("Esse script está em um arquivo externo e é referenciado no header do HTML");

//Já os `console.log`s imprimem texto no console do navegador
console.log("Esse script está no cabeçalho do HTML");
console.log("Primeiro");
console.log("Segundo");


// Tipagem fraca

//Esta parte está declarando uma variável e mostrando que não é necessário declarar
// qual o tipo dela - o tipo é determinado pelo valor da variável
var teste = 1;
document.write("<hr>O valor da variável teste é " + teste + "<hr>");
teste = 'joao';
document.write("O valor da variável teste agora é " + teste + "<hr>");

// Variável global - criada sem necessidade de declaração
nome = 'joao';
console.log(nome)

// Formas de declaração de variáveis
var   v1 = 5.25;
let   v2 = null; 
const v3 = 'teste'

console.log(typeof(v1));
console.log(typeof(v2));
console.log(typeof(v3));
console.log(typeof NaN); // tipo number
console.log(typeof +Infinity); // tipo number
console.log(typeof null); // tipo number
const number = "1";
// Operadores de comparação
console.log(number == 1);
// true
console.log(number === 1);
// false

console.log('ele disse "vtnc"');

// adicionar uma lista no body do HTML
// a variável lista está guardando um vetor
var lista = ['Arroz', 'Feijão', 'carne','macarrão'];

//nesta parte, o elemento 'ul' está sendo criado, mas sem ser colocado na página ainda
var listaUl = document.createElement('ul');
var body = document.getElementsByTagName('body');

console.log(listaUl);
console.log(body);

// é esta parte que está adicionando o elemento "ul" à tag "body" da página
body[0].appendChild(listaUl);

for(var  i=0;i<lista.length;i++) {
    //E para cada item da lista, um elemento "li" está sendo criado, preenchido
    // e adicionado à listaUl
    var liFor = document.createElement('li');
    var textoLi = document.createTextNode(lista[i]);
    liFor.appendChild(textoLi);
    listaUl.appendChild(liFor);
}

document.write("A lista não ordenada <b>ACIMA</b> foi criada dinamicamente via JavaScript");

//aqui um objeto está sendo criado
var obj = {
    nome: "Joao",
    sobrenome: "Furtado",
    profissao: "jogador",
    salario: 120000,
    pessoaJuridica: true
};

console.log(obj);
console.log("Salario: R$" + obj.salario);

var arr = [5, "JP", true, {teste1: 1, teste2: 2}, false];
console.log(arr);
console.log(arr[1]);
console.log(typeof arr);

if(arr[4]) {
    console.log("Entrou no teste do IF")
}

// Operadores de comparação ==, ===, !=, >, <, >=, <= 
if (obj.salario > '100000') {
    console.log("Salário acima de 100 mil");
}