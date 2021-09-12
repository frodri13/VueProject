const app = Vue.createApp({
  // data has to be a function that returns an object
  data() {
    return {
      firstName: "Diego",
      lastName: "De la Vega",
      email: "zorro@test.com",
      gender: "male",
      picture:
        "https://static.wikia.nocookie.net/disney/images/a/ae/Zorro_Guy_Williams.jpg",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();

      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    },
  },
});

app.mount("#app");
