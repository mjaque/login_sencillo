<?php
  /**
    Fachada del backend de la aplicación.
    Su responsabilidad es procesar la petición HTTP para decidir a qué controlador llamar (routing).
    También identifica al usuario (autenticación).
    Es un interfaz RESTful (https://www.rfc-editor.org/rfc/rfc7231)
  **/
  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);
  try{
    //Cargamos la configuración
    $config = require_once('config.php');
    require_once('./servicios/bd.php');

    //Inyección de dependencias
    BD::$host = $config['host'];
    BD::$bd = $config['bd'];
    BD::$usuario = $config['usuario'];
    BD::$clave = $config['clave'];

    //Procesamos la petición para identificar el recurso solicitado
    $metodo = $_SERVER['REQUEST_METHOD'];
    $params = explode('/', $_SERVER['PATH_INFO']);
    $recurso = $params[1];  //El primer elemento es la /.
    array_splice($params, 0, 2);  //Quitamos la / y el recurso solicitado.
    //Procesamos los nulos
    for($i = 0; $i < count($params); $i++)
      if ($params[$i] == 'null')
        $params[$i] = null;

    //Autenticación
    //...

    //Routing
    switch($recurso){
      case 'login':
				//comprobar el login.
				//Si es correcto
				header('HTTP/1.1 200 OK');
        //Si no es correcto
				header('HTTP/1.1 401 Unauthorized');
				die();
      case 'otra_cosa':
				//...
        break;
      default:
        header('HTTP/1.1 501 Not Implemented');
        die();
    }
  }catch(Exception $excepcion){
    header('HTTP/1.1 500 Internal Server Error');
    echo $excepcion;
    die();
  }
