<template>
    <div class="register">
        <div class="row mt-5">
            <div class="col-md-6 m-auto">
                <div class="card card-body">
                    <h1 class="text-center mt-3">Register</h1>
                    <form @submit.prevent="registerUser">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" v-model="name" id="name" name="name" class="form-control"
                                placeholder="enter Name">
                            <!-- value="{{name}}" -->
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" v-model="email" id="email" name="email" class="form-control"
                                placeholder="enter Email">
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" v-model="password" id="password" name="password" class="form-control"
                                placeholder="enter Password">

                        </div>
                        <div class="form-group">
                            <label for="confirmPassword">Confirm Password</label>
                            <input type="password" v-model="confirmPassword" id="confirmPassword" name="confirmPassword"
                                class="form-control" placeholder="enter Confirm Password">
                            <!-- value="{{confirmPassword}}" -->
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Register</button>
                    </form>
                    <p class="lead mt-3">
                        <!-- Have An Account? <a href="/users/login">Login</a> -->
                        Have An Account? <a href="/login">Login</a>
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