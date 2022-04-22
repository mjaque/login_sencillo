/**
  Controlador principal de la aplicación.
**/
import {Rest} from './servocios/rest.js'
import {VistaLogin} from './vistas/vistalogin.js'
import {VistaMenuPricipal} from './vistas/vistaMenuPricipal.js'

class App{
  /**
    Constructor de la clase.
    Registra el evento onload para iniciar el controlador.
  **/
  constructor(){
    window.onload = this.iniciar.bind(this)
  }
  /**
    Inicia el controlador cargando la vista de Login.
  **/
  iniciar(){
    this.vistaLogin = new VistaLogin(this, document.getElementById('divLogin'))
    this.vistaMenuPrincipal = new VistaMenuPricipal(this, document.getElementById('divMenuPrincipal'))
  }
  /**
    Envía los datos de login al backend. Si el login es correcto, oculta la vista de login y muestra la vista de menú principal.
  **/
  login(usuario, clave){
    const login = {
      'email': email,
      'clave': clave
    }
    Rest.post('login', login)
    .then( () => {
      this.vistaLogin.mostrar(false)
      this.vistaMenuPrincipal.mostrar(true)
    })
  }
}

new App()
