<template>
    <div class="adminLogin">
        <div class="row mt-5">
            <div class="col-md-6 m-auto">
                <div class="card card-body" style="background-color:#FDFBF6">
                    <h1 class="text-center mt-3">Admin Login</h1>
                    <form @submit.prevent="loginAdmin">
                        <div class="groupMargin">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" v-model="email" id="email" name="email" class="form-control"
                                    placeholder="enter Email">
                            </div>
                        </div>
                        <div class="groupMargin">
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" v-model="password" id="password" name="password"
                                    class="form-control" placeholder="enter Password">
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        async loginAdmin() {
            try {
                const response = await axios.post(`http://localhost:3000/user/admin/login`, {
                    email: this.email,
                    password: this.password,
                });

                if (response.status === 200) {
                    const { token } = response.data;
                    localStorage.setItem('token', token);
                    console.log(token)
                    this.$router.push('/adminHome');
                }
            } catch (error) {
                if (error.response && error.response.data.message) {
                    console.log(error.response.data.message);
                    alert(error.response.data.message);
                } else {
                    alert('Login failed: ' + error.message);
                }
            }
        }
    }
};
</script>

<style scoped>
html,
body {
    height: 100%;
    margin: 0;
    background-color: #FDFBF6;
}

.groupMargin {
    margin-top: 25px;
    margin-bottom: 25px;
}

label {
    margin-top: 8px;
    margin-bottom: 8px;
}

button {
    margin-top: 20px;
    margin-top: 20px;
    background-color: darkblue;
    border: darkblue;
}
</style>
