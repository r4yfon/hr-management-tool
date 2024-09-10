<template>
  <div>
    <h1>User Details</h1>
    <div>
      <h2>Name: {{ selectedProfile.name }}</h2>
      <p>ID: {{ selectedProfile.id }}</p>
      <p>Gender: {{ selectedProfile.gender }}</p>
      <p>Year of Birth: {{ selectedProfile.yearOfBirth }}</p>
      <p>Age: {{ calculateAge(selectedProfile.yearOfBirth) }}</p>
      <h3>Tags:</h3>
      <ul>
        <!-- <li v-for="tag in user.tags" :key="tag">{{ tag }}</li> -->
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selectedProfile: null,
        allProfiles: {
          1: {
            id: 1,
            name: "John Doe",
            gender: "M",
            age: 35,
            yearOfBirth: 1988,
            remarks: "",
          },
          2: {
            id: 2,
            name: "Jane Smith",
            gender: "F",
            age: 28,
            yearOfBirth: 1995,
            remarks: "",
          },
          3: {
            id: 3,
            name: "Alex Johnson",
            gender: "M",
            age: 42,
            yearOfBirth: 1981,
            remarks: "",
          },
          4: {
            id: 4,
            name: "Emily Chen",
            gender: "F",
            age: 31,
            yearOfBirth: 1992,
            remarks: "",
          },
          5: {
            id: 5,
            name: "Michael Brown",
            gender: "M",
            age: 45,
            yearOfBirth: 1978,
            remarks: "",
          },
          6: {
            id: 6,
            name: "Sarah Lee",
            gender: "F",
            age: 39,
            yearOfBirth: 1984,
            remarks: "",
          },
        },
      };
    },
    methods: {
      calculateAge(yearOfBirth) {
        const currentYear = new Date().getFullYear();
        return currentYear - yearOfBirth;
      },
    },
    created() {
      this.userId = this.$route.params.userId;
      console.log(this.profile);
      this.selectedProfile = this.allProfiles[this.userId];
      // Fetch user details based on the ID from the route params
      // Make an API call or fetch the user details from your data source
      // Assign the fetched user details to the 'user' data property
      // Example:
      // this.user = fetchUserDetails(userId);
    },
  };
</script>

<style>
  /* Add your custom styles here */
</style>
