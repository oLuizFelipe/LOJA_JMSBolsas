/* ==========================================================================
   DESTAQUES DA PÁGINA INICIAL
   ==========================================================================
   Mostra um grupo de produtos por vez (QTD_DESTAQUE) e troca sozinho de
   tempos em tempos (INTERVALO_TROCA_MS), passando pra frente na lista de
   PRODUTOS. Quer mexer nisso? Só muda as duas constantes abaixo.
   ========================================================================== */

const QTD_DESTAQUE = 4;             // quantos produtos aparecem por vez na home
const INTERVALO_TROCA_MS = 6000;    // troca a cada 6 segundos

/* Divide a lista de produtos em grupos de N. Se o último grupo ficar
   incompleto, completa repetindo produtos do começo da lista — assim todo
   grupo mostrado sempre tem o mesmo tamanho. */
function montarGrupos(lista, tamanho) {
  const grupos = [];
  for (let i = 0; i < lista.length; i += tamanho) {
    grupos.push(lista.slice(i, i + tamanho));
  }

  const ultimo = grupos[grupos.length - 1];
  if (ultimo && ultimo.length < tamanho && grupos.length > 1) {
    let i = 0;
    while (ultimo.length < tamanho) {
      ultimo.push(lista[i]);
      i++;
    }
  }

  return grupos;
}

function iniciarVitrineDestaque() {
  const container = document.getElementById('vitrine-grid');
  if (!container) return; // essa página não tem vitrine de destaque

  if (PRODUTOS.length === 0) {
    container.innerHTML = '<p class="categoria-vazia">Nenhum produto cadastrado ainda.</p>';
    return;
  }

  const grupos = montarGrupos(PRODUTOS, QTD_DESTAQUE);
  let indiceAtual = 0;

  function renderizarGrupo(indice) {
    container.classList.add('trocando');

    setTimeout(function () {
      container.innerHTML = '';
      grupos[indice].forEach(function (produto) {
        container.appendChild(criarCardProduto(produto));
      });
      ativarSeletoresDeCor(container);
      container.classList.remove('trocando');
    }, 250); // combina com a duração da transição de opacidade no CSS
  }

  renderizarGrupo(indiceAtual);

  // só fica trocando automaticamente se houver mais de um grupo possível
  if (grupos.length > 1) {
    setInterval(function () {
      indiceAtual = (indiceAtual + 1) % grupos.length;
      renderizarGrupo(indiceAtual);
    }, INTERVALO_TROCA_MS);
  }
}

document.addEventListener('DOMContentLoaded', iniciarVitrineDestaque);
