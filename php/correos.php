

<!-- Nota: para poner a funcionar este tiene que estar en el hosting -->

<?php

    $destinatario = 'santyago5395@gmail.com'; //enviara el mensaje 
    $nombre = $_POST['name'];
    $email = $_POST['email'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['message'];

    $header = "Enviado desde la pagina Kopi";
    $mensajeCompleto = $mensaje . "\nAtte:" . $nombre;

    mail($destinatario, $asunto, $mensajeCompleto, $header,);
    echo "<script> alert('Despacho exitosamente')</script>";
    echo "<script> setTimeout(\"location.href='../index.html'\", 1000)</script>";


?>