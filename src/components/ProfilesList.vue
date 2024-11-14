<template>
  <section class="container mx-auto mt-8 px-2">
    <h1 class="text-2xl font-bold mb-4">Profiles List</h1>
    <div class="mb-4">
      <input v-model="searchQuery" type="text" placeholder="Search profiles..."
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        @input="searchProfiles" />
    </div>
    <ag-grid-vue :rowData="agGridOptions.rowData" :columnDefs="agGridOptions.columnDefs"
      :autoSizeStrategy="agGridOptions.autoSizeStrategy" :domLayout="agGridOptions.domLayout"
      :onRowClicked="openProfile" class="ag-theme-quartz">
    </ag-grid-vue>

    <!-- Button to add new profile -->
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog :open="isOpen" @close="closeModal" as="div" class="relative z-10">
        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
          leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95">
              <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative">
                <DialogTitle class="text-2xl font-bold mb-2">Add new profile</DialogTitle>
                <NewProfile @profile-submitted="addNewProfile" />
                <button @click="closeModal"
                  class="absolute top-6 right-6 w-12 h-12 text-2xl rounded-full bg-gray-100 hover:bg-gray-300">
                  ×
                </button>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <button @click="openModal" class="rounded-md bg-gray-700 hover:bg-gray-900 px-3 py-2 mt-4 text-white">
      Add New Profile
    </button>
  </section>
</template>

<script>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";
import { AgGridVue } from "ag-grid-vue3";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import NewProfile from "./NewProfile.vue";

export default {
  name: "ProfilesList",
  components: {
    NewProfile,
    AgGridVue,
    Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot,
  },
  data() {
    return {
      isOpen: false,
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

      agGridOptions: {
        columnDefs: [
          { headerName: "ID", field: "id", width: 20 },
          { field: "name", width: 50 },
          { field: "gender", width: 20 },
          { field: "age", width: 20 },
          { field: "yearOfBirth", width: 20 },
          { field: "remarks" },
        ],
        rowData: null,
        autoSizeStrategy: {
          type: "fitGridWidth",
          defaultMinWidth: 100,
        },
        domLayout: "autoHeight",
      },

      searchQuery: "",
      filteredProfiles: [],
    };
  },

  mounted() {
    this.displayProfiles();
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
      this.displayProfiles();
    },

    displayProfiles() {
      this.agGridOptions.rowData = this.filteredProfiles.length > 0 ? this.filteredProfiles : this.allProfiles;
    },

    addNewProfile(newProfile) {
      this.allProfiles.push(newProfile);
      this.closeModal();
      // });
    },
    openProfile(params) {
      // alert(id);
      this.$router.push(`/profile/${params.data.id}`);
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