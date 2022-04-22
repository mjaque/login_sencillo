/**
  Vista de Login.
**/

export class VistaLogin{
  /**
    Constructor de la clase.
    @param {Object} controlador Controlador de la vista principal.
  **/
  constructor(controlador, base) {
    this.controlador = controlador
    this.base = base
    this.iniciar()
  }
  /**
    Inicia la vista.
    Registra las referencias a los elementos del interfaz y registra los eventos.
  **/
  iniciar() {
    //Cogemos referencias a los elementos del interfaz
    this.itUsuario = document.getElementById('itUsuario')
    this.itClave = document.getElementById('itClave')
    this.btnLogin = document.getElementById('btnLogin')

    //Capturamos los eventos
    this.btnLogin.onclick = this.login.bind(this)

  }
  /**
    Muestra u oculta la vista.
    @param mostrar {Boolean} True para mostrar y false para ocultar.
  **/
  mostrar(mostrar){
    if (mostrar)
      this.base.style.display = 'block'
    else
      this.base.style.display = 'none'
  }
  /**
    Atención al evento de click en el botón.
    Valida los datos de entrada y solicita el login al controlador.
  **/
  login(){
    //Validamos el formulario
    if (this.itUsuario.value == "" || this.itClave.value == "")
      throw Error("Pon bien los datos, porfi")

    this.controlador.login(this.itUsuario.value, this.itClave.value)
  }
}
