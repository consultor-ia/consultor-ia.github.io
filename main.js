const o_que_e = "Inteligência Artificial é a capacidade da máquina simular as características da inteligência humana, " + 
 " desde o aprendizado, passando pelo raciocínio e compreensão, até considerar significados e diferenciar fatos de crenças.";

const como_se_faz = "As ideias relacionadas com inteligência artificial são de bem antes do surgimento da tecnologia que tornou isso possível. O ser humano sempre quis uma máquina que " + 
" fizesse o trabalho de agir e pensar como ele, e estudos de várias áreas começaram a ir por esse caminho especificamente durante a eclosão da Segunda Guerra Mundial, " +
"na década de 1940. Mas foi nos anos de 1950 que, na universidade de Carnegie Mellon, os cientistas Herbert Simon e Allen Newell criaram o primeiro laboratório " +
"dedicado à inteligência artificial no âmbito acadêmico. Um exemplo de começo foi o trabalho de Claude Shannon sobre como programar uma máquina para jogar xadrez " +
"com cálculos de posição simples, mas eficientes. Isso é bem relevante, mas veio antes do período considerado o pontapé inicial. "+
"Já em 1956, na chamada Conferência de Dartmouth, um professor chamado John McCarthy selecionou um grupo de cientistas para estudar uma forma de “ensinar” as " +
"máquinas, esse encontro reuniu Nathan Rochester, da IBM, o Shannon do artigo do xadrez, o Marvin do SNARC, John McCarthy e muito mais pessoas. Lá descrevendo " +
"aspectos do aprendizado e outras características humanas. As máquinas seriam capazes de utilizar a linguagem, resolver problemas e aperfeiçoar-se gradativamente. "+
"O campo de pesquisa foi batizado de inteligência artificial por McCarthy, e até a máxima do setor foi definida: Cada aspecto de aprendizado ou outra forma de " +
"inteligência pode ser descrita de forma tão precisa que uma máquina pode ser criada para simular isso."

const contexto_historico = "Em sequência de avanços desse período: em 1957, Frank Rosenblatt apresenta o perceptron. Esse algoritmo com nome de personagem de Transformers é uma rede " +
"neural de uma camada que classifica resultados e começou como uma máquina chamada Mark 1. Já em 1958, surge a linguagem de programação Lisp, que na época " +
"virou padrão em sistemas de Inteligência artificial e hoje inspira uma família inteira de linguagens."

function responderA() {
    resp = document.querySelector("nav.chat");
    resp.innerHTML="";
    resp.innerHTML = o_que_e;
}

function responderB() {
    resp = document.querySelector("nav.chat");
    resp.innerHTML="";
    resp.innerHTML = como_se_faz;
}

function responderC() {
    resp = document.querySelector("nav.chat");
    resp.innerHTML="";
    resp.innerHTML = contexto_historico;
 }