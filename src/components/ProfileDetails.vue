<script setup>
  import Multiselect from "vue-multiselect";
</script>

<template>
  <section class="container mx-auto mt-4 px-2">
    <h1 class="text-2xl font-bold mb-4">User Details</h1>
    <div>
      <h2>Name: {{ selectedProfile.name }}</h2>
      <p>ID: {{ selectedProfile.id }}</p>
      <p>Gender: {{ selectedProfile.gender }}</p>
      <p>Year of Birth: {{ selectedProfile.yearOfBirth }}</p>
      <p>Age: {{ selectedProfile.age }}</p>
      <h3>Tags:</h3>
      <ul>
        <div>
          <multiselect
            class="bg-slate-50 border rounded-md p-2"
            v-model="selectedProfile.tags"
            :options="allTags"
            :multiple="true"
            :taggable="true"
            placeholder="Select or type tags"
            @tag="addTag" />
        </div>
        <!-- <li v-for="tag in user.tags" :key="tag">{{ tag }}</li> -->
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    components: {
      Multiselect,
    },
    data() {
      return {
        selectedProfile: null,
        allProfiles: [
          {
            id: 1,
            name: "John Doe",
            gender: "M",
            age: 35,
            yearOfBirth: 1988,
            remarks: "",
            tags: [],
          },
          {
            id: 2,
            name: "Jane Smith",
            gender: "F",
            age: 28,
            yearOfBirth: 1995,
            remarks: "",
            tags: [],
          },
          {
            id: 3,
            name: "Alex Johnson",
            gender: "M",
            age: 42,
            yearOfBirth: 1981,
            remarks: "",
            tags: [],
          },
          {
            id: 4,
            name: "Emily Chen",
            gender: "F",
            age: 31,
            yearOfBirth: 1992,
            remarks: "",
            tags: [],
          },
          {
            id: 5,
            name: "Michael Brown",
            gender: "M",
            age: 45,
            yearOfBirth: 1978,
            remarks: "",
            tags: [],
          },
          {
            id: 6,
            name: "Sarah Lee",
            gender: "F",
            age: 39,
            yearOfBirth: 1984,
            remarks: "",
            tags: [],
          },
        ],
        allTags: [
          "Tag 1",
          "Tag 2",
          "Tag 3",
          "Tag 4",
          "Tag 5",
          "Tag 6",
          "Tag 7",
          "Tag 8",
          "Tag 9",
          "Tag 10",
        ],
      };
    },
    created() {
      this.userId = this.$route.params.userId;
      // console.log(this.profile);
      this.selectedProfile = this.allProfiles[this.userId - 1];
      // Fetch user details based on the ID from the route params
      // Make an API call or fetch the user details from your data source
      // Assign the fetched user details to the 'user' data property
      // Example:
      // this.user = fetchUserDetails(userId);
    },
    methods: {
      addTag(tag) {
        this.allTags.push(tag);
        this.allProfiles[this.userId - 1].tags.push(tag);
      },
    },
  };
</script>

<style>
  .multiselect {
    position: relative;
  }

  .multiselect--active input:focus-visible {
    outline: none;
    background: inherit;
  }

  .multiselect__select {
    line-height: 16px;
    display: block;
    position: absolute;
    box-sizing: border-box;
    width: 40px;
    height: 38px;
    right: 1px;
    top: 1px;
    padding: 4px 8px;
    margin: 0;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    transition: transform 0.2s ease;
  }
  .multiselect--active .multiselect__select {
    transform: rotate(180deg);
  }

  .multiselect__select:before {
    position: relative;
    right: 0;
    top: 65%;
    color: #999;
    margin-top: 4px;
    border-style: solid;
    border-width: 5px 5px 0 5px;
    border-color: #999 transparent transparent transparent;
    content: "";
  }

  .multiselect__tag {
    margin: 4px;
    padding: 4px 8px;
    border-radius: 4px;
    background: #f0f0f0;
  }
</style>
