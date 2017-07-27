<script>
  export default {
    name: 'Links',
    data() {
      return {};
    },
  };
</script>

<template>
  <section class="links">
    <nav>
      <a href="/static/tables/TABELA FINAL.xlsx">Tabela total com dados dos 11 livros</a>
      <a href="/static/tables/LIVRO (1).xlsx">HISTÓRIA DA ARTE (Ernst H. Gombrich, LTC, 2000)</a>
      <a href="/static/tables/LIVRO (2).xlsx">ARTE MODERNA (Giulio C. Argan, Cosac Naify, 1992)</a>
      <a href="/static/tables/LIVRO (3).xlsx">ARTE CONTEMPORÂNEA: UMA HISTÓRIA CONCISA (Michael Archer, Martins Fontes, 2001)</a>
      <a href="/static/tables/LIVRO (4).xlsx">ARTE CONTEMPORÂNEA: UMA INTRODUÇÃO (Anne Cauquelin, Martins Fontes, 2005)</a>
      <a href="/static/tables/LIVRO (5).xlsx">CONCEITOS FUNDAMENTAIS DA HISTÓRIA DA ARTE (Heinrich Wölfflin, Martins Fontes, 2015)</a>
      <a href="/static/tables/LIVRO (6).xlsx">ESTILOS, ESCOLAS & MOVIMENTOS: GUIA ENCICLOPÉDICO DA ARTE (Amy Dempsey, Cosac Naify, 2005)</a>
      <a href="/static/tables/LIVRO (7).xlsx">GUIA DE HISTÓRIA DA ARTE (Giulio C. Argan e Maurizio Fagiolo, Editorial Estampa, 1994)</a>
      <a href="/static/tables/LIVRO (8).xlsx">INICIAÇÃO À HISTÓRIA DA ARTE (Horst W. Janson e Anthony F. Janson, Martins Fontes, 2009)</a>
      <a href="/static/tables/LIVRO (9).xlsx">TEORIAS DA ARTE MODERNA (Herschel B. Chipp, Martins Fontes, 1995)</a>
      <a href="/static/tables/LIVRO (10).xlsx">TUDO SOBRE ARTE (Stephen Farthing, Sextante, 2010)</a>
      <a href="/static/tables/LIVRO (11).xlsx">HISTÓRIA DA CIDADE (Leonardo Benevolo, Perspectiva, 2009)</a>
    </nav>
  </section>
</template>

<style>
  section.links {
    order: 1;

    & nav {
      margin-left: 3em;

      & .subtitle {
        display: block;
        text-transform: none;
      }
    }
  }
</style>
