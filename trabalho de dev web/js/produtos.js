/* ==========================================================================
   BANCO DE PRODUTOS
   ==========================================================================
   ESTE é o arquivo que você mexe pra adicionar, editar ou remover produtos
   e categorias. Nenhum outro arquivo precisa ser tocado pra isso.

   Depois de editar, salve e atualize a página no navegador — tanto a home
   quanto o catálogo se atualizam sozinhos.
   ========================================================================== */


/* --------------------------------------------------------------------------
   COMO ADICIONAR UM PRODUTO NOVO
   --------------------------------------------------------------------------
   Copie um dos blocos { ... } abaixo, cole no final da lista PRODUTOS
   (antes do "];") e troque os dados. Campos:

     id        -> um "apelido" único pro produto, sem espaço/acento
                  (ex: 'mochila-nova'). Usado só internamente pelo código.
     nome      -> nome que aparece no site
     categoria -> em qual categoria ele entra (veja a lista CATEGORIAS
                  logo abaixo e use um dos "id" de lá)
     preco     -> número com PONTO, não vírgula (ex: 129.90)
     imagem    -> caminho do arquivo da foto, dentro de imagens/
     cores     -> OPCIONAL. Só use se o produto tiver mais de uma cor/variação
                  disponível (veja o exemplo da "Mala Preta" abaixo).
                  Se não usar, pode apagar essa linha inteira.
   -------------------------------------------------------------------------- */

const PRODUTOS = [

  {
    id: 'bolsa-marca',
    nome: 'Bolsa de marca',
    categoria: 'bolsa-feminina',
    preco: 99.90,
    imagem: 'imagens/bolsa_marca_S.png',
  },

  {
    id: 'bolsa-casual',
    nome: 'Bolsa Casual',
    categoria: 'bolsa-feminina',
    preco: 79.90,
    imagem: 'imagens/bolsa_casual_S.png',
  },

  {
    id: 'mala-preta',
    nome: 'Mala Preta',
    categoria: 'mala-viagem',
    preco: 310.00,
    imagem: 'imagens/mala_preta_S.png',
    // exemplo de produto com mais de uma cor: cada entrada de "cores" vira
    // uma bolinha clicável embaixo da foto. "cor" é só a cor da bolinha.
    cores: [
      { nome: 'Mala Preta', cor: '#141311', imagem: 'imagens/mala_preta_S.png' },
      { nome: 'Mala Azul',  cor: '#16233F', imagem: 'imagens/mala_azul_S.png'  },
      { nome: 'Mala Rosa',  cor: '#C08974', imagem: 'imagens/mala_rosa_S.png'  },
    ],
  },

  {
    id: 'mochila-shock',
    nome: 'Mochila Shock',
    categoria: 'mochila',
    preco: 220.00,
    imagem: 'imagens/mochila_shock_S.png',
  },

  {
    id: 'mochila-stitch',
    nome: 'Mochila Stitch',
    categoria: 'mochila-infantil',
    preco: 220.00,
    imagem: 'imagens/mochila_stitch_S.png',
  },

  {
    id: 'mochila-palmeiras',
    nome: 'Mochila Palmeiras',
    categoria: 'mochila',
    preco: 150.00,
    imagem: 'imagens/mochila_palmeiras_S.png',
  },

  // ---- cole os próximos produtos aqui embaixo ----

];


/* --------------------------------------------------------------------------
   COMO ADICIONAR UMA CATEGORIA NOVA
   --------------------------------------------------------------------------
   Adicione um objeto { id, nome } na lista abaixo. Depois é só usar esse
   "id" no campo "categoria" de algum produto lá em cima.

   A ordem desta lista é a ordem em que as categorias aparecem no catálogo.
   Categoria sem nenhum produto cadastrado simplesmente não aparece no site
   (não precisa remover uma categoria só porque ela está vazia no momento).
   -------------------------------------------------------------------------- */

const CATEGORIAS = [
  { id: 'mala-viagem',      nome: 'Malas de Viagem'   },
  { id: 'bolsa-feminina',   nome: 'Bolsas Femininas'  },
  { id: 'mochila-infantil', nome: 'Mochilas Infantis' },
  { id: 'mochila',          nome: 'Mochilas'          },
  { id: 'carteira',         nome: 'Carteiras'         },
  { id: 'outros',           nome: 'Outros'            },
];
