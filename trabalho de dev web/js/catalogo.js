/* ==========================================================================
   PÁGINA DE CATÁLOGO
   ==========================================================================
   Lê CATEGORIAS e PRODUTOS (de produtos.js) e monta uma seção pra cada
   categoria que tiver pelo menos um produto, na ordem em que as categorias
   estão listadas em produtos.js. Categoria vazia simplesmente não aparece.

   Também monta o menu de atalhos no topo da página, com um link só pras
   categorias que realmente aparecem.
   ========================================================================== */

function iniciarCatalogo() {
  const container = document.getElementById('catalogo-categorias');
  if (!container) return; // essa página não é o catálogo

  const categoriasComProduto = [];

  CATEGORIAS.forEach(function (categoria) {
    const produtosDaCategoria = PRODUTOS.filter(function (produto) {
      return produto.categoria === categoria.id;
    });

    if (produtosDaCategoria.length === 0) return; // pula categoria vazia

    categoriasComProduto.push(categoria);

    const secao = document.createElement('section');
    secao.className = 'categoria';
    secao.id = categoria.id;

    const qtdTexto = produtosDaCategoria.length === 1 ? '1 modelo' : `${produtosDaCategoria.length} modelos`;

    const topo = document.createElement('div');
    topo.className = 'categoria-topo';
    topo.innerHTML = `<h2>${categoria.nome}</h2><span>${qtdTexto}</span>`;

    const divisor = document.createElement('div');
    divisor.className = 'prateleira';

    const grid = document.createElement('div');
    grid.className = 'produtos';
    produtosDaCategoria.forEach(function (produto) {
      grid.appendChild(criarCardProduto(produto));
    });

    secao.appendChild(topo);
    secao.appendChild(divisor);
    secao.appendChild(grid);
    container.appendChild(secao);
  });

  if (categoriasComProduto.length === 0) {
    container.innerHTML = '<p class="categoria-vazia">Nenhum produto cadastrado ainda.</p>';
    return;
  }

  ativarSeletoresDeCor(container);
  montarMenuCategorias(categoriasComProduto);
}

function montarMenuCategorias(categoriasComProduto) {
  const nav = document.getElementById('catalogo-nav');
  if (!nav) return;

  categoriasComProduto.forEach(function (categoria) {
    const link = document.createElement('a');
    link.href = `#${categoria.id}`;
    link.textContent = categoria.nome;
    nav.appendChild(link);
  });
}

document.addEventListener('DOMContentLoaded', iniciarCatalogo);
