<template>
  <div class="DashBoard">
    <h1>Total school number : 442</h1>
    <div class="DashBoard">
      <h2>School Type</h2>
      <canvas id="myChart" style="width: 100%; max-width: 600px"></canvas>
    </div>
    <div class="DashBoard">
      <h2>Student Gender</h2>
      <canvas id="genderChart" style="width: 100%; max-width: 600px"></canvas>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import Chart from 'chart.js/auto'

export default {
  name: 'DashBoard',
  setup() {
    onMounted(() => {
      var xValues = ['Aided', 'CAPUT', 'DSS', 'govt']
      var yValues = [352, 2, 57, 29]
      var barColors = ['#b91d47', '#00aba9', '#2b5797', '#e8c3b9']

      new Chart('myChart', {
        type: 'doughnut',
        data: {
          labels: xValues,
          datasets: [
            {
              backgroundColor: barColors,
              data: yValues,
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: 'World Wide Wine Production 2018',
          },
        },
      })

      var xV = ['Boys', 'Co-ed', 'Girls']
      var yV = [26, 376, 40]

      new Chart('genderChart', {
        type: 'doughnut',
        data: {
          labels: xV,
          datasets: [
            {
              backgroundColor: barColors,
              data: yV,
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: 'World Wide Wine Production 2018',
          },
        },
      })
    })
  },
}
</script>

<style>
.DashBoard {
  padding-top: 50px;
  padding-left: 50px;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  height: 500px;

  h2 {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
    margin-left: 50px;
    margin-bottom: 50px;

    font-size: 20px;
    padding-bottom: 4px;
  }
}
</style>
