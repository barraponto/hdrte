<script>
  export default {
    name: 'Home',
    data() {
      return {};
    },
  };
</script>

<template>
  <main class="home">
    <div class="wrapper">
    <h1>A História da <router-link :to="{name: 'Home'}">&sup1;</router-link>rte</h1>
    <p>
      é<router-link :to="{name: 'Home'}">&sup2;</router-link>
      a área<router-link :to="{name: 'Home'}">&sup3;</router-link>
      das ciências<router-link :to="{name: 'Home'}">&#x2074;</router-link>
      humanas<router-link :to="{name: 'Home'}">&#x2075;</router-link>
      em que se<router-link :to="{name: 'Home'}">&#x2076;</router-link>
      constrói<router-link :to="{name: 'Home'}">&#x2077;</router-link>
      uma<router-link :to="{name: 'Home'}">&#x2078;</router-link>
      narrativa<router-link :to="{name: 'Home'}">&#x2079;</router-link>
      sobre<router-link :to="{name: 'Home'}">&sup1;&#x2070;</router-link>
      a criação<router-link :to="{name: 'Home'}">&sup1;&sup1;</router-link>
      de objetos e experiências<router-link :to="{name: 'Home'}">&sup1;&sup2;</router-link>
      realizados<router-link :to="{name: 'Home'}">&sup1;&sup3;</router-link>,
      em sua maioria<router-link :to="{name: 'Home'}">&sup1;&#x2074;</router-link>
      por<router-link :to="{name: 'Home'}">&sup1;&#x2075;</router-link>
      homens<router-link :to="{name: 'Home'}">&sup1;&#x2076;</router-link>
      brancos<router-link :to="{name: 'Home'}">&sup1;&#x2077;</router-link>
      europeus<router-link :to="{name: 'Home'}">&sup1;&#x2078;</router-link>
      estadounidenses<router-link :to="{name: 'Home'}">&sup1;&#x2079;</router-link>
      e pintores<router-link :to="{name: 'Home'}">&sup2;&#x2070;</router-link>
      (alguns, gênios)<router-link :to="{name: 'Home'}">&sup2;&sup1;</router-link>
      ...<router-link :to="{name: 'Home'}">&sup2;&sup2;</router-link>
    </p>
  </div><!-- /.wrapper -->
  </main>
</template>

<style>
  main.home {
    display: flex;
    height: 100%;
    background-color: #ed1c24;
    color: white;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    font-family: Times, Times New Roman, Georgia, serif;

    & p {
      font-size: 2em;
      margin: 0;
    }

    & h1 {
      margin: 0;
      text-transform: uppercase;
      text-decoration: underline;
    }

    & a {
      text-decoration: none;
      color: black;
    }
  }
</style>
