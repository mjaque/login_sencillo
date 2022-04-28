/**
  Vista del Menú Principal..
**/

export class VistaMenuPrincipal{
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

    //Capturamos los eventos

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
}
