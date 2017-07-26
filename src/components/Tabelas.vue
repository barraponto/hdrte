<script>
  export default {
    name: 'NewSobre',
    data() {
      return {};
    },
  };
</script>

<template>
  <section class="tabelas">
    <nav>
      <router-link :to="{ name: 'Tabelas' }">
        <div>
          1. Lista de links
          <span class="subtitle">
            Tabelas com informações de todos os 11 livros
          </span>
        </div>
      </router-link>

      <router-link :to="{ name: 'Metodologia' }">
        <div>
          2. A História da _rte: Metodologia
          <span class="subtitle">
            Como foram criadas as tabelas dos artistas
          </span>
        </div>
      </router-link>

      <router-link :to="{ name: 'Relato' }">
        <div>
          3. Processos: Pesquisa e organização de dados<br />
          <span class="subtitle">
            O Relato de Gabriel Pereira
          </span>
        </div>
      </router-link>

      <router-view></router-view>
    </nav>
  </section>
</template>

<style>
  section.tabelas {
    order: 3;

    & nav {
      margin-left: 3em;

      & .subtitle {
        display: block;
        text-transform: none;
      }
    }
  }
</style>
