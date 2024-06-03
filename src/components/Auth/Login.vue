
    <!-- <section class="vh-100" style="background-color: #343a40">
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
                                    <form @submit.prevent="onLogin">
                                        <div class="d-flex align-items-center mb-3 pb-1">
                                            <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
                                            <span class="h1 fw-bold mb-0">Log-in</span>
                                        </div>
                                        <div class="form-outline mb-4">
                                            <label for="email" class="form-label"><i class="bi bi-envelope-at-fill"></i>
                                                e-mail</label>
                                            <input type="email" class="form-control" id="email"
                                                placeholder="user@server.com" v-model="formData.email">
                                        </div>
                                        <div class="form-outline mb-4">
                                            <label for="password" class="form-label">Contraseña</label>
                                            <input id="password" name="password" type="password"
                                                placeholder="Ingresa tu contraseña" class="form-control"
                                                v-model="formData.password" />
                                        </div>
                                        <div class="pt-1 mb-4">
                                            <button class="btn btn-dark btn-lg btn-block" type="submit">Login</button>&nbsp;
                                            <button class="btn btn-dark btn-lg btn-block"
                                                @click="changeForm('REGISTER')">Sign-in</button>
                                        </div>
                                        <div>
                                            <a class="link-primary" @click="changeForm('FORGOT')">¿Olvidaste tu
                                                contraseña?</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
    <template>
      <div>
      
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Zen+Tokyo+Zoo&display=swap" rel="stylesheet">  
      
     
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
      <div class="background" :style="{ 'background-image': `url(${require('@/assets/2.jpg')})` }">
    
        <div class="container-form" >
          <div class="information">
            <div class="info-childs">
       
              <img src="../../assets/brain-upper-view-outline-svgrepo-com.png" alt="logo" class="logo"
              style="border-radius: 1rem 0 0 1rem;width: 100px; height: 50px;" />
              <h2>SITAP</h2>
              
            
              <p>¿Aun no tienes una cuenta? Aca te puedes registrar</p>
              <button class="info-childs-input" @click="changeForm('REGISTER')">Registrarse</button>

     
            </div>
          </div>
          <div class="form-information">
            <div class="form-information-childs">
              <h2 class="bn-iniciar">Iniciar Sesión</h2>
            
              <p>Usa tu correo para iniciar sesión</p>
              <form @submit.prevent="onLogin">
                <div>
                  <label class="btn-c">
                    <i class="bx bx-envelope"></i>
                    
                    <input class="btn-c-input"
                      type="email"
                      placeholder="Email"
                      v-model="formData.email"
                   
                    />
                   
                  </label>
                </div>
                <div>
                  <label class="btn-c">
                    <i class="bx bx-lock-alt"></i>
                    <input class="btn-c-input"
                      id="password" name="password"
                      type="password"
                      placeholder="Ingresa tu contraseña"
                      v-model="formData.password"
              
                    />

                    
                  </label>
                </div>
                <div>
                  <a class="link-primary" @click="changeForm('FORGOT')">¿Olvidaste tu contraseña?</a>
                </div>
                <div >
                  <button  @click="onLogin" type="submit" class="btn-registrarse">Iniciar Sesión</button>&nbsp;       
                </div>


              </form>
            </div>
          </div>
        </div>

    
        </div>
    
    
    </div>
    </template>

<script>
import Swal from 'sweetalert2'
import { doLogin } from '@/utils/firebase';

// Objeto de traducción para los mensajes de error
const errorMessages = {
    'auth/invalid-email': 'El correo electrónico proporcionado no es válido. Por favor, verifica e inténtalo de nuevo.',
    'auth/missing-email': 'Correo electronico faltante. Por favor ingresalo antes de continuar',
    'auth/missing-password': 'Contraseña faltante. Por favor ingresala antes de continuar',
    'auth/wrong-password': 'Contraseña incorrecta. Por favor vuelve a intentarlo',
    'auth/user-not-found': 'Usuario no encontrado. Por favor intentalo nuevamente o registrate'
  
};

export default {

    props: {
        changeForm: Function
    },

    name: "Login",

    setup() {
        let formData = {};

        const onLogin = async () => {
            try {
                const { email, password } = formData;
                const userCredential = await doLogin(email, password);
                console.log(userCredential);
            } catch (error) {
                // Obtiene el mensaje de error personalizado del objeto de traducción o usa el mensaje predeterminado si no hay traducción disponible
                const errorMessage = errorMessages[error.code] || error.message;
                
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: errorMessage
                });
            }
        };

        return {
            formData,
            onLogin
        };
    }
}
</script>



<style scoped>
/* Estilos para el componente */
* {
padding: 0;
margin: 0;
box-sizing: border-box;
font-family: 'Montserrat', sans-serif;

}
.background{
position: fixed;
top:0;
left: 0;
width: 100vw;
height: 100vh;
background-size: cover;  /* Escala para cubrir todo el contenedor */
background-position: center;  /* Centra la imagen */
display: flex;
justify-content: center;
align-items: center;

}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #5caec352;

}
.btn-c{
display: flex;
align-items: center;
margin-bottom: 15px;
border-radius: 20px;
padding: 0 10px;
background-color: #fff !important;
box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
}

.btn-c-input {
width: 100%;
padding: 10px;
background-color: #fff;
border: none;
outline: none;
border-radius: 20px;
color: #333 !important;
}

input[type="password"] {
background-color: white;  /* Establece el fondo en blanco */
color: #333;  /* Establece el color del texto */
border: none;
outline: none;
padding: 10px;
border-radius: 20px;
}


/* .form button[type="submit"] {
    background-color: #9191bd;
    color: #fff;
    border-radius: 20px;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    margin-top: 10px;
    box-shadow:0 2px 5px rgba(0, 0, 0, .1);
} */
a.link-primary{
  font-style: italic;
  font-size: 0.8rem;
  color: #9191bd !important; 

}
.btn-iniciar{
background-color: transparent;
outline: none;
border: solid 2px #9191bd;
border-radius: 20px;
padding: 10px 20px;
color: #9191bd;
cursor: pointer;
transition: background-color .3s ease;

}

.btn-iniciar:hover{
background-color: #9191bd;
border: none;
color: #fff;
box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
}


.container-form {
display: flex;
border-radius: 20px;
box-shadow: 0 5px 7px rgba(0, 0, 0, .1);
height: 500px;
max-width: 900px;
transition: all 1s ease;
margin: 10px;


}

.information {
width: 40%;
display: flex;
align-items: center;
text-align: center;
background-color: #c7eef3;
border-top-left-radius: 20px;
border-bottom-left-radius: 20px;
}

.info-childs {
width: 100%;
padding: 0 30px;
}

.info-childs h2 {
font-family: "Zen Tokyo Zoo", system-ui;
font-style: normal;

font-size: 2.5rem;
color: black;
}

.info-childs p {
margin: 15px 0 ;
color: #555;
}

.info-childs-input {
background-color: transparent;
outline: none;
border: solid 2px #9191bd;
border-radius: 20px;
padding: 10px 20px;
color: #9191bd;
cursor: pointer;
transition: background-color .3s ease;
}

.info-childs input:hover {
background-color: #9191bd;
border: none;
color: #fff;
box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
}

.form-information {
display: flex;
align-items: center;
justify-content: center;
width: 60%;
text-align: center;
background-color: #f8f8f8;
border-top-right-radius: 20px;
border-bottom-right-radius: 20px;
}

.form-information-childs {
padding: 0 30px;
}

.form-information-childs h2 {
color: #333;
font-size: 2rem;
}

.form-information-childs p {
color: #555;
}

.icons {
margin: 15px 0;
}





.form {
margin: 30px 0 0 0;
}


.bx-lock-alt,
.bx-envelope {
color: #a7a7a7;
}

.btn-registrarse{
background-color: #9191bd;
color: white;
border-radius: 20px;
border: none;
padding: 10px 15px;
cursor: pointer;
margin-top: 10px;
box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
}

.btn-registrarse:hover {
background-color: #7a7a9a;
}

.hide {
position: absolute;
transform: translateY(-300%);
}


/*PERSONALIZACION DE MIS ALERTAS Y MENSAJES */
/* .form div .alerta {
width: 290px;
text-align: left;
border-radius: 7px;
margin-bottom: 10px;
font-size: .8rem;
}

.form > .alerta-error,
.form > .alerta-exito {
display: none;
}

.form .alertaError {
display: block;
background-color: #F66060;
padding: .5rem 1rem;
margin-top: 10px;
font-weight: 500;
font-size: .8rem;
}

.form .alertaExito {
display: block;
background-color: #0ca828;
padding: .5rem 1rem;
margin-top: 10px;
font-weight: 500;
font-size: .8rem;
}

.form .error {
outline: solid 2px #9d2222;
} */

/*RESPONSIVE FORM*/

@media screen and (max-width:750px) {
html {
  font-size: 12px;
}
}

@media screen and (max-width:580px) {
html {
  font-size: 15px;
}

.container-form {
  height: auto;
  flex-direction: column;
}

.information {
  width: 100%;
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0;
}

.form-information {
  width: 100%;
  padding: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 0;
}
}



</style>