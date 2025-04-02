<!-- <template>
    <div class="first">
        <div
            :style="{ backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20230715/pngtree-school-classroom-with-chalkboard-and-desk-in-3d-rendering-image_3850971.jpg)' }">
            <h1>Welcome</h1>
        </div>
    </div>
</template> -->
<template>
    <div class="first">
        <div class="background">
            <h1>Welcome</h1>
            <button class="transparent-button" @click="navigateTo('userLogin')">General User </button>
            <button class="transparent-button" @click="navigateTo('adminLogin')">Admin</button>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function navigateTo(page) {
    if (page === 'userLogin') {
        router.push('/login'); // Replace with your actual route
    } else if (page === 'adminLogin') {
        router.push('/adminLogin'); // Replace with your actual route
    }
}
</script>


<style scoped>
.first {
    height: 100vh;
    /* Full viewport height */
    width: 100vw;
    /* Full viewport width */
    display: flex;
    justify-content: center;
    align-items: center;
}

.background {
    height: 100%;
    width: 100%;
    background-image: url("https://png.pngtree.com/thumb_back/fh260/background/20230715/pngtree-school-classroom-with-chalkboard-and-desk-in-3d-rendering-image_3850971.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

h1 {
    color: antiquewhite;
    font-size: 150px;
    margin: 70px 0 70px;
}

.transparent-button {
    color: antiquewhite;
    font-size: 30px;
    background-color: transparent;
    border: 2px solid antiquewhite;
    padding: 10px 20px;
    margin: 10px 0;
    /* Space between buttons */
    cursor: pointer;
    border-radius: 15px;
    transition: background-color 0.3s;
}

.transparent-button:hover {
    background-color: rgba(255, 255, 255, 0.1);
}
</style>