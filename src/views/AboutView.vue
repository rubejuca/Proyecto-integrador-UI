<template>
    <div class="container-fluid">
        <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <Menu />
            </div>
            <div class="col">
                <div class="container d-flex justify-content-between align-items-center">
                    <div>
                        <h1>¡Bienvenido a nuestro sitio web!</h1> 
                        <p>Esta es nuestra primera página web. ¡Gracias por visitar nuestra página!</p> 
                    </div>
                    <div>
                        <img src="../assets/home.png" alt="Descripción de la imagen">                
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import Menu from '@/components/Menu.vue'
export default {
    name: "About",
    components: {
        Menu
    }
}
</script>

<style scoped>

.container-fluid {
    margin-top: 0; /* Espaciado superior */
}

.container-fluid h1 {
    margin-bottom: 0;
    padding: 10px;
    margin-top: 10px;
    
}
.container-fluid p {
    margin-bottom: 0;
    padding-bottom: 0px;
    bottom: 0%;
    font-size: 15px;
}

.container-fluid img {
    max-width: 100%;
    text-align: right;
    margin-top: 200px;
}

</style>