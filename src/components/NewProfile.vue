<template>
  <section>
    <form @submit.prevent="submitProfile" class="flex flex-col gap-2">
      <label>Name:</label>
      <input
        type="text"
        v-model="profile.name"
        required
        class="border border-gray-300 rounded-md p-2"
      />
      <label>Gender:</label>
      <input
        type="text"
        v-model="profile.gender"
        required
        class="border border-gray-300 rounded-md p-2"
      />
      <label>Age:</label>
      <input
        type="number"
        v-model="profile.age"
        required
        class="border border-gray-300 rounded-md p-2"
      />
      <label>Year of Birth:</label>
      <input
        type="number"
        v-model="profile.yearOfBirth"
        required
        class="border border-gray-300 rounded-md p-2"
      />
      <label>Remarks:</label>
      <input v-model="profile.remarks" class="border border-gray-300 rounded-md p-2" />
      <button type="submit" class="bg-blue-500 text-white rounded-md p-3">Submit</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "CreateProfile",
  data() {
    return {
      profile: {
        name: "",
        gender: "",
        age: "",
        yearOfBirth: "",
        remarks: "",
      },
    };
  },
  methods: {
    submitProfile() {
      this.$emit("profile-submitted", this.profile);
      this.profile = { name: "", gender: "", age: "", yearOfBirth: "", remarks: "" };
    },
  },
};
</script>
