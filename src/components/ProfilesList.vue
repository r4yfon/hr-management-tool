<script setup>
  import { Dialog, DialogPanel, DialogTitle } from "@headlessui/vue";
  import NewProfile from "./NewProfile.vue";
</script>

<template>
  <section class="container mx-auto mt-4 px-2">
    <h1 class="text-2xl font-bold mb-4">Profiles List {{ $route.fullPath }}</h1>
    <div class="mb-4">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search profiles..."
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        @input="searchProfiles" />
    </div>
    <div class="w-full overflow-scroll">
      <table
        class="border border-separate border-slate-800 text-left w-full table-fixed mb-3 profile-table">
        <thead>
          <tr>
            <th class="border border-slate-800 p-1">ID</th>
            <th class="border border-slate-800 p-1">Name</th>
            <th class="border border-slate-800 p-1">Gender</th>
            <th class="border border-slate-800 p-1">Age</th>
            <th class="border border-slate-800 p-1">Year of Birth</th>
            <th class="border border-slate-800 p-1">Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="profile in displayProfiles"
            :key="profile.id"
            @click="openProfile(profile.id)"
            class="cursor-pointer hover:bg-gray-100">
            <td class="border border-slate-800 p-1" v-for="info in profile" :key="info">
              {{ info }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Button to add new profile -->
    <!-- <TransitionRoot appear :show="isOpen" as="template"> -->
    <Dialog :open="isOpen" @close="closeModal" as="div" class="relative z-10">
      <!-- <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        > -->
      <div class="fixed inset-0 bg-black/25" />
      <!-- </TransitionChild> -->

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <!-- <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            > -->
          <DialogPanel
            class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative">
            <DialogTitle class="text-2xl font-bold mb-2">Add new profile</DialogTitle>
            <NewProfile @profile-submitted="addNewProfile" />
            <button
              @click="closeModal"
              class="absolute top-6 right-6 w-12 h-12 text-xl rounded-full bg-gray-100 hover:bg-gray-300">
              ×
            </button>
          </DialogPanel>
          <!-- </TransitionChild> -->
        </div>
      </div>
    </Dialog>
    <!-- </TransitionRoot> -->

    <button @click="openModal" class="rounded-md bg-gray-800 p-2 text-white">
      Add New Profile
    </button>
  </section>
</template>

<script>
  export default {
    name: "ProfilesList",
    components: {
      NewProfile,
    },
    data() {
      return {
        isOpen: false,
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
        searchQuery: "",
        filteredProfiles: [],
      };
    },
    computed: {
      displayProfiles() {
        return this.filteredProfiles.length > 0 ? this.filteredProfiles : this.allProfiles;
      },
    },
    methods: {
      openModal() {
        this.isOpen = true;
      },
      closeModal() {
        this.isOpen = false;
      },
      searchProfiles() {
        this.filteredProfiles = this.allProfiles.filter((profile) =>
          profile.name.toLowerCase().includes(this.searchQuery.trim().toLowerCase()),
        );
      },
      addNewProfile(newProfile) {
        this.allProfiles.push(newProfile);
        this.closeModal();
        // });
      },
      openProfile(id) {
        // alert(id);
        this.$router.push(`/profile/${id}`);
      },
    },
  };
</script>

<style scoped>
  .profile-table {
    min-width: 400px;
    overflow-x: scroll;
  }
</style>
