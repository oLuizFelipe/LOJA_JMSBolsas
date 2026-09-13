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
    imagem: 'imagens/bolsa_marca_s.png',
  },

  {
    id: 'bolsa-casual',
    nome: 'Bolsa Casual',
    categoria: 'bolsa-feminina',
    preco: 79.90,
    imagem: 'imagens/bolsa_casual_s.png',
  },

  {
    id: 'mala-preta',
    nome: 'Mala Preta',
    categoria: 'mala-viagem',
    preco: 310.00,
    imagem: 'imagens/mala_preta_s.png',
    // exemplo de produto com mais de uma cor: cada entrada de "cores" vira
    // uma bolinha clicável embaixo da foto. "cor" é só a cor da bolinha.
    cores: [
      { nome: 'Mala Preta', cor: '#141311', imagem: 'imagens/mala_preta_s.png' },
      { nome: 'Mala Azul',  cor: '#16233F', imagem: 'imagens/mala_azul_s.png'  },
      { nome: 'Mala Rosa',  cor: '#C08974', imagem: 'imagens/mala_rosa_s.png'  },
    ],
  },

  {
    id: 'mochila-shock',
    nome: 'Mochila Shock',
    categoria: 'mochila',
    preco: 220.00,
    imagem: 'imagens/mochila_shock_s.png',
  },

  {
    id: 'mochila-stitch',
    nome: 'Mochila Stitch',
    categoria: 'mochila-infantil',
    preco: 220.00,
    imagem: 'imagens/mochila_crianca_stitch.png',
  },

  {
    id: 'mochila-palmeiras',
    nome: 'Mochila Palmeiras',
    categoria: 'mochila',
    preco: 180.00,
    imagem: 'imagens/mochila_palmeiras_s.png',
  },

  // ---- cole os próximos produtos aqui embaixo ----

  {
    id: 'mochila-rabisk',
    nome: 'Mochila Rabisk',
    categoria: 'mochila',
    preco: 230.00,
    imagem: 'imagens/mochila_rabisk_s.png',
  },

  {
    id: 'mochila-juvenil',
    nome: 'Mochila Juvenil Seanite Soccer',
    categoria: 'mochila',
    preco: 139.90,
    imagem: 'imagens/mochila_juvenil_preta.png',
    cores: [
      { nome: 'Mochila Juvenil Seanite Soccer Preta', cor: '#141311', imagem: 'imagens/mochila_juvenil_preta.png' },
      { nome: 'Mochila Juvenil Seanite Soccer Azul',  cor: '#3e72e3', imagem: 'imagens/mochila_juvenil_azul.png'  },
      { nome: 'Mochila Juvenil Seanite Soccer Vermelha',  cor: '#ff0000', imagem: 'imagens/mochila_juvenil_vermelha.png'  },
    ],
  },

  {
    id: 'mochila-space-action',
    nome: 'Mochila Space Action',
    categoria: 'mochila-infantil',
    preco: 119.61,
    imagem: 'imagens/mochila_crianca_space_action.png',
  },

  {
    id: 'mochila-discovery-truck',
    nome: 'Mochila Discovery Truck',
    categoria: 'mochila-infantil',
    preco: 119.61,
    imagem: 'imagens/mochila_crianca_discovery_truck.png',
  },

  {
    id: 'mochila-colecao-stitch',
    nome: 'Mochila Coleção Stitch',
    categoria: 'mochila-infantil',
    preco: 139.90,
    imagem: 'imagens/mochila_crianca_colecao_stitch_azul.png',
    cores: [
      { nome: 'Mochila Stitch azul coleção', cor: '#141311', imagem: 'imagens/mochila_crianca_colecao_stitch_azul.png' },
      { nome: 'Mochila Stitch rosa coleção',  cor: '#d501fa', imagem: 'imagens/mochila_crianca_colecao_stitch_rosa.png'  },
    ],
  },

  {
    id: 'mochila-bob',
    nome: 'Mochila Bob Esponja',
    categoria: 'mochila-infantil',
    preco: 188.27,
    imagem: 'imagens/mochila_crianca_bob.png',
  },

  {
    id: 'mochila-corinthians',
    nome: 'Mochila Corinthians',
    categoria: 'mochila',
    preco: 180.00,
    imagem: 'imagens/mochila_corinthians.png',
  },

  {
    id: 'mochila-flamengo',
    nome: 'Mochila Flamengo',
    categoria: 'mochila',
    preco: 180.00,
    imagem: 'imagens/mochila_flamengo.png',
  },

   {
    id: 'mochila-executiva',
    nome: 'Mochila Executiva',
    categoria: 'mochila',
    preco: 120.00,
    imagem: 'imagens/mochila_executiva_preta.png',
    cores: [
      { nome: 'Mochila Executiva Preta', cor: '#141311', imagem: 'imagens/mochila_executiva_preta.png' },
      { nome: 'Mochila Executiva Verde',  cor: '#0f5e18ae', imagem: 'imagens/mochila_executiva_verde.png'  },
      { nome: 'Mochila Executiva cinza',  cor: '#434343', imagem: 'imagens/mochila_executiva_cinza.png'  },
    ],
  },

   {
    id: 'mochila-mais-estojo',
    nome: 'Mochila com Estojo',
    categoria: 'mochila',
    preco: 120.00,
    imagem: 'imagens/mochila_com_estojo_yepp_bege.png',
    cores: [
      { nome: 'Mochila Com Estojo Beje', cor: '#84845a', imagem: 'imagens/mochila_com_estojo_yepp_bege.png' },
      { nome: 'Mochila Com Estojo Preto',  cor: '#000000', imagem: 'imagens/mochila_com_estojo_yepp_preto.png'  },
      { nome: 'Mochila Com Estojo Verde',  cor: '#4f7050', imagem: 'imagens/mochila_com_estojo_yepp_verde.png'  },
    ],
  },
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
