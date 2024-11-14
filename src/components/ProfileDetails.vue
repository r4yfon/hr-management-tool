<script setup>
import MultiSelect from "primevue/multiselect";
</script>

<template>
  <section class="mx-auto mt-4 px-2 max-w-screen-md">
    <h1 class="text-2xl font-bold mb-4">User Details</h1>
    <div class="flex flex-col gap-y-2">
      <h2>Name: {{ selectedProfile.name }}</h2>
      <p>ID: {{ selectedProfile.id }}</p>
      <p>Gender: {{ selectedProfile.gender }}</p>
      <p>Year of Birth: {{ selectedProfile.yearOfBirth }}</p>
      <p>Age: {{ selectedProfile.age }}</p>
      <p>
        Remarks:
        <textarea v-model="selectedProfile.remarks" class="w-full bg-slate-50 border p-2 rounded-md mt-2"
          rows="4"></textarea>
      </p>
      <div>
        <h3>
          Tags:

          <MultiSelect v-model="selectedProfile.tags" :options="allTags" :dt="customTokens" display="chip" filter
            placeholder="Select Tags" class="w-full" />
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
  props: {
    userId: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      selectedProfile: {},
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
  mounted() {
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