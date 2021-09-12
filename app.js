const app = Vue.createApp({
  // data has to be a function that returns an object
  data() {
    return {
      firstName: "Diego",
      lastName: "De la Vega",
      email: "zorro@test.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },
  methods: {
    getUser() {
      this.firstName = "Betty";
      this.lastName = "La Fea";
      this.email = "blf@test.com";
      this.gender = "female";
      this.picture = "https://randomuser.me/api/portraits/women/10.jpg";
    },
  },
});

app.mount("#app");
