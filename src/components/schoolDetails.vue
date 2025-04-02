<template>
  <div class="schoolDatils">
    <div class="content">
      <h1>School Details</h1>
      <div v-if="schoolDetails">
        <h3>{{ schoolDetails.school_name }}</h3>
        <p>{{ schoolDetails }}</p>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

const route = useRoute()
const schoolDetails = ref(null)

onMounted(async () => {
  const schoolName = route.params.school_name
  try {
    const response = await axios.get(`/api/school-details`, {
      params: { school_name: schoolName },
    })
    schoolDetails.value = response.data
  } catch (error) {
    console.error('Error:', error)
  }
})
</script>

<style lang="css" scoped>
.content {
  padding-top: 50px;
  padding-left: 20px;
}
</style>
