const preenche = (atleta) => {

const container = documnet.createelement('div');
const titulo = document.createelement('h3');
const imagem = document.createelement('img');
const descricao = document.createelememt('p');
    
titulo.innerText = atleta.name;
imagem.src = atleta.espaco_imagem;
descricao.innerHTML = atleta.espaco_descricao

container.appendchild(titulo);
container.appendchild(imagem);
container.appendchild(descricao);

document.body.appendchild(container);
}

/*
atletas.foreach( (atletas) => {
    preenche(atletas);
});
*/

let indice = 0;

while (indice < atletas.length ){
    preenche(atletas)
    console.log(indice, atletas[indice].nome)
    indice++;
}