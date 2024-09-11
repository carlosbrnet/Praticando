const resultado = document.querySelector("p");
const input = document.querySelector("input");


const listaDeNomes = [
  { nome: "Carlos", numero: "(99) 9196-2979" },
  { nome: "Valdirene", numero: "(99) 9178-9551" },
  { nome: "ian", numero: "(99) 9196-0079" },
  { nome: "italo", numero: "(99) 9178-9500" },
];

/*function buscarContato() {let i = 0;

  while (i < listaDeNomes.length) { 
    
    if (input.value.toLowerCase() === listaDeNomes[i].nome.toLowerCase()) {
      resultado.innerHTML = listaDeNomes[i].nome + listaDeNomes[i].numero;
    }
    i++;
  }
}*/

function buscarContato() {
  let i = 0;

  while (i < listaDeNomes.length) {
    if (input.value.toLowerCase() === listaDeNomes[i].nome.toLowerCase()) {
      resultado.innerHTML = `${listaDeNomes[i].nome} ${listaDeNomes[i].numero}`;

      break;
    }
    }
    i++; 
  }
