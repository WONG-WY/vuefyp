<template>
  <div class="w-full relative">
    <input
      type="text"
      :value="modelValue"
      @input="handleInput"
      v-on:keyup.enter="schoolSearch()"
      class="px-5 py-3 w-full border border-gray-300 rounded-md"
    />
    <ul
      class="mt-1 w-full max-h-60 border border-gray-300 rounded-md bg-white absolute overflow-y-auto"
      v-show="searchResults.length && isOpen"
    >
      <li
        class="px-4 py-3 border-b border-gray-200 text-stone-600 cursor-pointer hover:bg-gray-100 transition-colors"
        v-for="result in searchResults"
        :key="result.school_name"
        @click="setSelected(result.school_name)"
      >
        {{ result.school_name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  source: {
    type: Array,
    required: true,
    default: () => [],
  },
  modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

const search = ref('')

const searchResults = computed(() => {
  if (search.value == '') {
    return []
  }
  /*
  return props.source.filter((item) => {
    if (item.school_name.toLowerCase().includes(search.value.toLowerCase())) {
      return item
    } 
      })
    */

  return props.source
    .filter((item) => item.school_name.toLowerCase().includes(search.value.toLowerCase()))
    .slice(0, 5)
})

const isOpen = ref(false)

const setSelected = (item) => {
  isOpen.value = false
  search.value = item
  emit('update:modelValue', search.value)
}

const handleInput = (event) => {
  isOpen.value = true
  search.value = event.target.value
  emit('update:modelValue', search.value)
}

const schoolSearch = () => {
  isOpen.value = false
  router.push({ name: 'SchoolDetails', params: { school_name: search.value } })
}
</script>
