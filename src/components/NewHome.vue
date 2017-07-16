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
      <router-link :to="{ name: 'Home' }">
        <div>1. Sobre o projeto </div>
      </router-link>
      <router-link :to="{ name: 'Home' }">
        <div>2. Resultados </div>
      </router-link>
      <router-link :to="{ name: 'Home' }">
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
    </nav>
    <h1>A HISTÓRIA DA _RTE</h1>
  </main>
</template>

<style>
  main.new-home {
    padding: 1em;
    font-family: Courier, "Courier New", monospace;
    display: flex;
    flex-direction: column;

    & nav {
      & a {
        text-decoration: none;
        text-transform: uppercase;
      }
    }

    & h1 {
      text-align: center;
      color: #ed1c24;
    }
  }
</style>
