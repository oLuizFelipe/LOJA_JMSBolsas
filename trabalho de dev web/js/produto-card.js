/* ==========================================================================
   CARD DE PRODUTO
   ==========================================================================
   Função compartilhada que transforma um objeto de produto (vindo de
   produtos.js) num card HTML. Usada tanto pela home (js/home.js) quanto
   pelo catálogo (js/catalogo.js) — assim o visual do card é sempre igual
   nas duas páginas, mudando em um lugar só.
   ========================================================================== */

function criarCardProduto(produto) {
  const card = document.createElement('div');
  card.className = 'produto';

  const precoFormatado = produto.preco.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const temCores = Array.isArray(produto.cores) && produto.cores.length > 0;

  if (temCores) {
    // produto com variação de cor: foto principal + bolinhas de seleção
    const idFoto = `foto-${produto.id}`;
    const idNome = `nome-${produto.id}`;

    const bolinhas = produto.cores.map(function (c, i) {
      const classeAtiva = i === 0 ? ' ativa' : '';
      return `<button class="cor-opcao${classeAtiva}" style="background:${c.cor}" ` +
             `data-img="${c.imagem}" data-nome="${c.nome}" title="${c.nome}"></button>`;
    }).join('');

    card.innerHTML = `
      <div class="foto-wrap">
        <div class="foto">
          <img src="${produto.imagem}" alt="${produto.nome}" id="${idFoto}">
        </div>
        <div class="cores" data-target="${idFoto}" data-nome="${idNome}">
          ${bolinhas}
        </div>
      </div>
      <div class="info">
        <h3 id="${idNome}">${produto.nome}</h3>
        <p class="preco">R$ ${precoFormatado}</p>
        <a href="#contato">Comprar &rarr;</a>
      </div>
    `;
  } else {
    // produto simples, sem variação de cor
    card.innerHTML = `
      <div class="foto">
        <img src="${produto.imagem}" alt="${produto.nome}">
      </div>
      <div class="info">
        <h3>${produto.nome}</h3>
        <p class="preco">R$ ${precoFormatado}</p>
        <a href="#contato">Comprar &rarr;</a>
      </div>
    `;
  }

  return card;
}

/* Liga o clique nas bolinhas de cor de todos os produtos dentro de um
   container (troca a foto e o nome exibido). Precisa ser chamada de novo
   toda vez que novos cards forem inseridos na página (a home faz isso a
   cada troca automática de destaques). */
function ativarSeletoresDeCor(container) {
  container.querySelectorAll('.cores').forEach(function (grupo) {
    const img = document.getElementById(grupo.getAttribute('data-target'));
    const nomeEl = document.getElementById(grupo.getAttribute('data-nome'));

    grupo.querySelectorAll('.cor-opcao').forEach(function (botao) {
      botao.addEventListener('click', function () {
        img.src = botao.getAttribute('data-img');
        if (nomeEl) nomeEl.textContent = botao.getAttribute('data-nome');

        grupo.querySelectorAll('.cor-opcao').forEach(function (b) {
          b.classList.remove('ativa');
        });
        botao.classList.add('ativa');
      });
    });
  });
}
