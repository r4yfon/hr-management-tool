<template>
  <section class="mx-auto mt-8 px-2 max-w-screen-md">
    <h1 class="text-2xl mb-4 font-bold">Tag Creation</h1>
    <div class="flex flex-col gap-y-4">

      <!-- tag name -->
      <label class="flex flex-col sm:flex-row gap-x-2 sm:items-center">
        Tag Name:
        <input type="text" class="border rounded-md flex-1 sm:flex-grow-0 p-1" />
      </label>

      <!-- parent tag id -->
      <label class="flex flex-col sm:flex-row gap-x-2 sm:items-center">
        Parent Tag ID:
        <input type="text" class="border rounded-md p-1 flex-1 sm:flex-grow-0" value="Is this pre-populated?" />
      </label>

      <!-- tag color -->
      <label class="flex flex-col sm:flex-row gap-x-2 sm:items-center">
        Tag Color:
        <div class="flex gap-x-2 sm:items-center">
          <ColorPicker v-model="tagColorHEX" format="hex" class="border basis-1/2 rounded-md" />
          <input type="text" class="border rounded-md p-1 basis-1/2" v-model="tagColorHEX">
        </div>
      </label>

      <!-- tag description -->
      <label>Tag Description:
        <textarea class="w-full bg-slate-50 border px-2 rounded-md mt-2" rows="4" />
      </label>

      <!-- tag icon -->
      <div class="flex flex-col sm:flex-row gap-x-2 sm:items-center">
        Tag Icon:
        <Select filter showClear v-model="selectedIcon" optionLabel="name" :options="icons" placeholder="Select Tag">
          <template #value="slotProps">
            <div v-if="slotProps.value" class="flex items-center gap-x-0.5">
              <i class="material-icons">{{ slotProps.value.icon }}</i>
              <span>&nbsp;{{ slotProps.value.name }}</span>
            </div>
          </template>
          <template #option="slotProps">
            <i class="material-icons">{{ slotProps.option.icon }}</i>
            <span>&nbsp;{{ slotProps.option.name }}</span>
          </template>
        </Select>
      </div>

      <!-- submit / cancel buttons -->
      <div class="flex justify-end gap-x-2">
        <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
          Submit
        </button>
        <button class="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded-md">
          Cancel
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import ColorPicker from "primevue/colorpicker";
import Select from "primevue/select";

export default {
  components: {
    ColorPicker, Select,
  },
  data() {
    return {
      tagColorHEX: "ffffff",
      icons: [
        { icon: "restaurant", name: "Food" },
        { icon: "flight", name: "Overseas" },
        { icon: "local_taxi", name: "Driving" },
        { icon: "computer", name: "IT" },
        { icon: "cleaning_services", name: "Housekeeping" },
        { icon: "electrical_services", name: "Repair" },
        { icon: "medical_services", name: "Medic" },
        { icon: "child_care", name: "Childcare" },
        { icon: "elderly", name: "Elderly" },
        { icon: "recycling", name: "Eco" }
      ],
      selectedIcon: null
    };
  },
};
</script>

<style>
.p-colorpicker-preview {
  width: 100%;
}
</style>