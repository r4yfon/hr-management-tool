<script setup>
  import MultiSelect from "primevue/multiselect";
</script>

<template>
  <section class="container mx-auto mt-4 px-2">
    <h1 class="text-2xl font-bold mb-4">User Details</h1>
    <div class="flex flex-col md:flex-row md:flex-wrap gap-y-2">
      <h2 class="basis-auto md:basis-1/2">Name: {{ selectedProfile.name }}</h2>
      <p class="md:basis-1/2">ID: {{ selectedProfile.id }}</p>
      <p class="md:basis-1/3">Gender: {{ selectedProfile.gender }}</p>
      <p class="md:basis-1/3">Year of Birth: {{ selectedProfile.yearOfBirth }}</p>
      <p class="md:basis-1/3">Age: {{ selectedProfile.age }}</p>
      <p class="md:basis-full">
        Remarks:
        <textarea
          v-model="selectedProfile.remarks"
          class="w-full bg-slate-50 border p-2 rounded-md mt-2"
          rows="4"></textarea>
      </p>
      <div class="md:basis-full">
        <h3>
          Tags:

          <MultiSelect
            v-model="selectedProfile.tags"
            :options="allTags"
            :dt="customTokens"
            display="chip"
            filter
            placeholder="Select Tags"
            class="w-full" />
        </h3>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    components: {
      MultiSelect,
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
        customTokens: {
          focusBorderColor: "{slate.500}",
        },
      };
    },
    created() {
      this.userId = this.$route.params.userId;
      this.selectedProfile = this.allProfiles[this.userId - 1];
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
  .p-chip-remove-icon:hover {
    --p-chip-remove-icon-color: var(--p-red-500);
  }
</style>
