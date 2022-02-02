<script>
  export default {
    data() {
      return {
        login: 'hej',
        hideButton: true,
        show: false,
        userName: '',
        visible: false
      }
    },
    methods: {
      toLogin() {
        this.visible = true
        this.hideButton = false
      },
      showMessage(param) {
        this.show = true
        this.visible = false
        param.preventDefault()
      }
    }
  }
</script>
<style scoped>
  h1 {
    text-align: center;
    margin: 50px;
    text-decoration: underline;
    background-image: linear-gradient(
      to left,
      black,
      red,
      orange,
      orange,
      red,
      black
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  img {
    display: block;
    height: 605px;
    margin: auto;
    padding-bottom: 200px;
    width: 720px;
  }

  input {
    margin-left: 5px;
  }

  @media (max-width: 575.98px) {
    img {
      display: none;
    }
  }

  p {
    text-align: center;
  }

  #account {
    color: rgb(172, 0, 0);
    font-size: larger;
    font-weight: bold;
  }

  #loginField {
    display: flex;
    justify-content: right;
    margin: 10px 15px 0 0;
  }
</style>

<template>
  <div id="loginField">
    <form @submit="showMessage">
      <input
        @click="toLogin"
        v-if="hideButton"
        class="btn btn-secondary btn-sm"
        type="button"
        value="Login here!"
      />
      <input
        v-if="visible"
        v-model="userName"
        type="text"
        placeholder="Username"
      />
      <input v-if="visible" type="password" placeholder="Password" required />
      <input
        :disabled="userName.length === 0"
        v-if="visible"
        type="submit"
        value="Login"
      />
    </form>
    <p v-if="show" id="account">{{ userName }}</p>
  </div>
  <h1>Welcome to fr3dz DOTA 2-Portal</h1>
  <p v-if="show">Hello, {{ userName }}! Nice to see you here!</p>
  <img alt="dota-2-picture" src="/assets/dota-2-header-720x405.jpg" />
</template>
