<template>
  <div class="p-4 bg-slate-100">
    <h2 class="text-xl font-semibold mb-4">
      {{ form.id ? "Edit Record" : "Create New Record" }}
    </h2>

    <form @submit.prevent="submitForm" class="mb-6 space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700">Name:</label>
        <input
          v-model="form.name"
          type="text"
          class="mt-1 block w-full border border-gray-300 rounded px-2 py-1"
          required
        />
      </div>

      <div class="flex gap-2">
        <button
          type="submit"
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {{ form.id ? "Update" : "Save" }}
        </button>

        <button
          v-if="form.id"
          type="button"
          @click="resetForm"
          class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </form>

    <div v-if="storExample.records.length">
      <h3 class="text-lg font-semibold mb-2">Saved Records</h3>
      <ul>
        <li
          v-for="record in storExample.records"
          :key="record.id"
          class="mb-1 flex justify-between items-center"
        >
          <span>
            {{ record.name }} —
            {{ record.createdAt?.toDate().toLocaleString() }}
          </span>
          <div>
            <button
              @click="editRecord(record)"
              class="text-blue-600 underline text-sm m-2"
            >
              Edit
            </button>
            <button
              @click="deleteRecord(record.id)"
              class="text-red-600 underline text-sm m-2"
            >
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";

//Import types, inject store into form as a factory, check it exists, make it available
import { ExampleStoreFactory } from "../services/types/example";   //Had an an import option ExampleStore
const useExampleStore = inject("storExample") as ExampleStoreFactory;
if (!useExampleStore) throw new Error("storExample not provided");
const storExample = useExampleStore(); // ✅ now this works!

const form = ref({
  id: "",
  name: "",
});

async function submitForm() {
  console.log("Submit Clicked", form.value.name);
  if (!form.value.name.trim()) return;

if (form.value.id) {
  await storExample.updateRecord(form.value.id, {
    name: form.value.name,
  });
} else {
  await storExample.createRecord({
    name: form.value.name,
  });
}

resetForm();
await storExample.readRecords();
}

function editRecord(record: { id?: string; name: string }) {
  form.value.id = record.id || "";
  form.value.name = record.name;
}

function resetForm() {
  form.value.id = "";
  form.value.name = "";
}

async function deleteRecord(id?: string) {
  if (!id) return; // ✅ skip if undefined

  if (confirm("Are you sure you want to delete this record?")) {
    await storExample.deleteRecord(id);
    await storExample.readRecords();
  }
}

storExample.readRecords();
</script>