<template>
    <div class="login">
        <div class="row mt-5">
            <div class="col-md-6 m-auto">
                <div class="card card-body">
                    <h1 class="text-center mt-3">General User Login</h1>
                    <form @submit.prevent="loginUser">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" class="form-control" placeholder="enter Email">
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" class="form-control"
                                placeholder="enter Password">
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Login</button>
                    </form>
                    <p class="lead mt-3">
                        No Account? <a href="/register">Register</a>
                    </p>
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
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    },
    methods: {
        async registerUser() {
            if (this.password !== this.confirmPassword) {
                alert('Passwords do not match');
                return;
            }

            try {
                const response = await axios.post(`http://localhost:3000/users/register`, { ///users/register
                    name: this.name,
                    email: this.email,
                    password: this.password,
                });

                if (response.status === 200) {
                    alert(' Successful registration! ');
                    this.$router.push('/login'); // Redirect to login page
                }
            } catch (error) {
                if (error.response && error.response.data.message) {
                    console.log(error.response.data.message);
                    alert(error.response.data.message);
                } else {
                    alert('Registration failed: ' + error.message);
                }
                // console.error('Error registering user:', error);
                // alert(error);//'Registration failed:'
            }
        }
    }
};
</script>

<style lang="scss" scoped></style>