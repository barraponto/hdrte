<script>
  export default {
    name: 'NewHome',
    data() {
      return {};
    },
  };
</script>

<template>
  <main class="new-home">
    <nav>
      <router-link :to="{ name: 'Sobre' }">
        <div>1. Sobre o projeto </div>
      </router-link>
      <router-link :to="{ name: 'Resultados' }">
        <div>2. Resultados </div>
      </router-link>
      <router-link :to="{ name: 'Tabelas' }">
        <div>3. Tabelas e Metodologia </div>
      </router-link>
      <router-link :to="{ name: 'Home' }">
        <div>4. Experiência JSON </div>
      </router-link>
      <router-link :to="{ name: 'Home' }">
        <div>5. Experiência Novas Tags </div>
      </router-link>
      <router-link :to="{ name: 'Home' }">
        <div>6. Experiência Random _RT History </div>
      </router-link>
      <router-link :to="{ name: 'Home' }">
        <div>7. Breve Estudo sobre Gombrich </div>
      </router-link>
      <router-view></router-view>
    </nav>
  </main>
</template>

<style>
  main.new-home {
    padding: 1em;
    font-family: Courier, "Courier New", monospace;
    display: flex;
    flex-direction: column;

    & nav {
      display: flex;
      flex-direction: column;

      & a {
        text-decoration: none;
        text-transform: uppercase;
        color: black;

        &:visited {
          color: black;
        }

        &:hover,
        &:active {
          color: #ed1c24;
        }

        &:nth-of-type(1) { order: 1; }
        &:nth-of-type(2) { order: 2; }
        &:nth-of-type(3) { order: 3; }
        &:nth-of-type(4) { order: 4; }
        &:nth-of-type(5) { order: 5; }
        &:nth-of-type(6) { order: 6; }
        &:nth-of-type(7) { order: 7; }
      }
    }

    & h1 {
      text-align: center;
      color: #ed1c24;
    }
  }
</style>
