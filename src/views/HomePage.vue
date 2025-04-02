<script setup>
import { ref } from 'vue' //watch
import searchBar from '@/components/searchBar.vue'
import schoolNameOnly from '@/components/schoolNameOnly.json'

const chosenSchoolName = ref('')
//const apiURL = "https://portal.csdi.gov.hk/geoportal/api/schools,"
</script>

<template>
  <div class="home">
    <div class="text">
      <h1>
        Find Your<br />
        Secondary School
        <hr />
      </h1>
      <h2>
        <font-awesome-icon :icon="['fas', 'circle']" class="iconc" /> Enter school name
        <font-awesome-icon :icon="['fas', 'circle']" class="iconc" />
      </h2>
    </div>
    <div class="h-screen flex items-center flex-col">
      <!--justify-center-->
      <!--<input type="text" v-model="query" @input="fetchSchools" placeholder="Enter School Name" />
            <ul v-if="results.length > 0">
                <li v-for="school in results" :key="school.id">
                    {{ school.name }}
                </li>
            </ul>-->
      <div class="w-5/6">
        <!-- <h1 class="searchBar">Search for School Name:{{ chosenSchoolName }}</h1> -->
        <searchBar :source="schoolNameOnly" v-model="chosenSchoolName" />
        <!--:source="results" <div v-if="results.length">-->
      </div>
      <!-- <h5>school details:</h5>
            <pre>{{ School_details }}</pre>  -->
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.searchBar {
  color: #003366;
  font-size: 50px;
}

/*
.searchBar {
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        border: 1px solid #ccc;
        max-height: 200px;
        overflow-y: auto;
    }

    li {
        padding: 8px;
        cursor: pointer;
    }

    li:hover {
        background-color: #f0f0f0;
    }
}
    */

.text {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #003366;
  margin-top: 80px;
  margin-left: 120px;
  margin-bottom: 50px;

  h2 {
    //text-transform: uppercase;
    font-size: 20px;
    padding-bottom: 4px;

    .iconc {
      font-size: 8px;
      padding-bottom: 4px;
    }
  }

  h1 {
    font-size: 50px;

    hr {
      max-width: 500px;
    }

    /*
        @media (min-width: 550px) {
            font-size: 80px;
        }
 */
  }

  /*
    hr:nth-child(1) {
        max-width: 365px;
        margin-bottom: 16px;
    }

    hr:nth-child(4) {
        height: 6px;
        background-color: #fff;
        border: none;
        max-width: 85px;
        margin-top: 16px;
    }
        */
}
</style>
