<template>
    <section class="vh-100" style="background-color: #343a40">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col col-xl-10">
                    <div class="card" style="border-radius: 1rem;">
                        <div class="row g-0">
                            <div class="col-md-6 col-lg-5 d-none d-md-block">
                                <img src="../../assets/login.jpg" alt="login form" class="img-fluid"
                                    style="border-radius: 1rem 0 0 1rem;" />
                            </div>
                            <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                <div class="card-body p-4 p-lg-5 text-black">
                                    <form @submit.prevent="onSubmit">
                                        <div class="d-flex align-items-center mb-3 pb-1">
                                            <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
                                            <span class="h1 fw-bold mb-0">Restore password</span>
                                        </div>
                                        <div class="form-outline mb-4">
                                            <label for="email" class="form-label"><i class="bi bi-envelope-at-fill"></i>
                                                e-mail</label>
                                            <input type="email" class="form-control" id="email"
                                                placeholder="user@server.com" v-model="formData.email">
                                        </div>
                                        <div class="pt-1 mb-4">
                                            <button class="btn btn-dark btn-lg btn-block" type="submit">Enviar</button>
                                        </div>
                                        <div>
                                            <a class="link-primary" @click="changeForm('LOGIN')">Login</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import { doRecover } from '@/utils/firebase';

export default {

    name: "Forgot",

    props: {
        changeForm: Function
    },

    setup() {
        let formData = {};
        const onSubmit = async () => {
            try {
                const { email } = formData;
                const response = await doRecover(email);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
        return {
            formData,
            onSubmit
        };
    }

}
</script>

<style></style>