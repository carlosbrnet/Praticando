const resultado = document.querySelector("p");
const input = document.querySelector("input");
const botao = document.querySelector("button");

const listaDeNomes = [
  { nome: "Carlos", numero: "(99) 9196-2979" },
  { nome: "Valdirene", numero: "(99) 9178-9551" },
  { nome: "ian", numero: "(99) 9196-0079" },
  { nome: "italo", numero: "(99) 9178-9500" },
];

function buscarContato() {
  for (const nomeDaPessoa of listaDeNomes)
    
    {
    if (input.value.toLowerCase() === nomeDaPessoa.nome.toLowerCase()) {
      resultado.innerHTML =
        "Contato encontrado, confira se é esse: " + nomeDaPessoa.numero;

      break;
    } else {
      resultado.innerHTML = "Esse contato não existe.";
    }
  }
//É COMO SE A VARIÁVEL listaDeNomes PASSASSE Á SER: nomeDaPessoa.
  
    
}
