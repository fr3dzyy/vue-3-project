<script>
  import axios from 'axios'

  export default {
    created() {
      axios('https://api.opendota.com/api/heroStats').then((result) => {
        this.heroes = result.data
        // console.log(result)
      })
    },
    data() {
      return {
        baseUrl: 'https://steamcdn-a.akamaihd.net',
        heroes: null,
        show: false,
        heroName: ''
      }
    },
    methods: {
      onClick() {
        this.heroes.sort((a, b) => {
          return a.localized_name.localeCompare(b.localized_name)
        })
        this.show = true
        console.log(this.heroes)
      },
      findHero() {
        this.show = false
      },
      isCarry() {
        alert('Filter "Carry" is not available')
      },
      isSupport() {
        alert('Filter "Support" is not available')
      }
    }
  }
</script>

<style scoped>
  li {
    color: rgb(158, 158, 158);
    margin: 10px 0px 5px 0px;
    text-align: center;
  }

  #heroes {
    display: flex;
    flex-wrap: wrap;
  }

  #heroButtons {
    display: flex;
    justify-content: center;
    margin: 40px 40px;
  }

  .searchField {
    display: flex;
    justify-content: flex-end;
  }

  input {
    margin: 0 5px 0 10px;
  }

  img {
    height: 100px;
    padding: 5px 10px 5px 10px;
  }
</style>

<template>
  <div id="heroButtons">
    <input
      @click="onClick"
      class="btn btn-light"
      type="button"
      value="All heroes"
    />
    <input @click="isCarry" class="btn btn-light" type="button" value="Carry" />
    <input
      @click="isSupport"
      class="btn btn-light"
      type="button"
      value="Support"
    />

    <!-- Sök-funktion  -->

    <input
      v-model="heroName"
      @keydown.enter="findHero"
      class="searchField"
      maxlength="15"
      size="10"
      type="text"
      placeholder="Search for hero"
    />

    <!-- Sök-funktion  -->
  </div>
  <ol id="heroes" v-if="show">
    <li :key="hero.id" v-for="hero in this.heroes">
      {{ hero.localized_name }} <br />
      <img :src="this.baseUrl + hero.img" />
    </li>
  </ol>
</template>

<!-- {{ this.baseUrl + hero.img }} -->
