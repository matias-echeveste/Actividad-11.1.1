 // URL de la solicitud a la API de YouTube
 var apiUrl = 'https://www.googleapis.com/youtube/v3/videos';

 // Parámetros de la solicitud
 var params = {
     key: 'AIzaSyCum-DK-_170xoPnJYQHQPPDHVAHzJM_0E', // Reemplaza con tu clave de API
     part: 'snippet', // Puedes especificar qué información deseas obtener, como 'snippet', 'statistics', etc.
     id: 'p_di4Zn4wz4' // Reemplaza con el ID del video que deseas obtener
 };

 // Realiza la solicitud GET a la API de YouTube
 $.get(apiUrl, params, function(data) {
     // Maneja la respuesta de la API aquí
     console.log(data);
 });

 // Declarar una variable global para el reproductor de YouTube
 var player;

 // Función que se llama cuando la API de YouTube está lista
 function onYouTubeIframeAPIReady() {
     player = new YT.Player('player', {
         height: '360',  // Altura del reproductor
         width: '640',   // Ancho del reproductor
         videoId: 'p_di4Zn4wz4',  // Reemplaza 'VIDEO_ID_AQUI' con el ID del video que deseas reproducir
         playerVars: {
             // Opciones del reproductor, como controles, autoplay, etc.
         },
         events: {
             'onReady': onPlayerReady,  // Función que se ejecuta cuando el reproductor está listo
         }
     });
 }

 // Función que se ejecuta cuando el reproductor está listo
 function onPlayerReady(event) {
     // Puedes realizar acciones adicionales aquí, como reproducir el video
 }
