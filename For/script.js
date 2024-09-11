const resultado = document.querySelector("p");
const input = document.querySelector("input");
const botao = document.querySelector("button");

const contatos = [
  { nome: "Carlos", numero: "(99) 9196-2979" },
  { nome: "Valdirene", numero: "(99) 9178-9551" },
  { nome: "ian", numero: "(99) 9196-0079" },
  { nome: "italo", numero: "(99) 9178-9500" },
];

function buscarContato() {
  for (let i = 0; i < contatos.length; i++)
    if (input.value.toLowerCase() === contatos[i].nome.toLowerCase()) {
      resultado.innerHTML =
        "Contato encontrado, confira se é esse: " + contatos[i].numero;

      break;
    } else {
      resultado.innerHTML = "Contato não encontrado.";
    }
}

