// Imagens e textos do data.json para o index.html
document.addEventListener("DOMContentLoaded", function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Actualizar textos
            document.getElementById('intro').innerText = data.texts.intro;
            document.getElementById('question1').innerText = data.texts.question1;
            document.getElementById('question2').innerText = data.texts.question2;
            document.getElementById('question3').innerText = data.texts.question3;
            document.getElementById('question4').innerText = data.texts.question4;

            // Actualizar imágenes en sidebar izquierdo
            const sidebarIzq = document.getElementById('sidebar_izq');
            for (let i = 0; i < 8; i++) {
                const img = document.createElement('img');
                img.src = data.images[i].src;
                img.alt = data.images[i].alt;
                img.classList.add(data.images[i].class);
                sidebarIzq.appendChild(img);
                const h3 = document.createElement('h3');
                h3.innerText = data.images[i].text;
                sidebarIzq.appendChild(h3);
            }

            // Actualizar imágenes en sidebar derecho
            const sidebarDer = document.getElementById('sidebar_der');
            for (let i = 8; i < data.images.length; i++) {
                const img = document.createElement('img');
                img.src = data.images[i].src;
                img.alt = data.images[i].alt;
                img.classList.add(data.images[i].class);
                sidebarDer.appendChild(img);
                const h3 = document.createElement('h3');
                h3.innerText = data.images[i].text;
                sidebarDer.appendChild(h3);
            }
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});
document.getElementById("play_audio1").addEventListener("click", function() {
    let music = document.getElementById("audio1");
    music.currentTime = 702;
    music.play().catch(error=>{
        console.log("Error al reproducir el audio", error)
    })
});

document.getElementById("play_audio2").addEventListener("click", function() {
    let music = document.getElementById("audio2");
    music.currentTime = 560;
    music.play().catch(error=>{
        console.log("Error al reproducir el audio", error)
    })
});

document.getElementById("play_audio3").addEventListener("click", function() {
    let music = document.getElementById("audio3");
    music.currentTime = 895;
    music.play().catch(error=>{
        console.log("Error al reproducir el audio", error)
    })
});
document.getElementById("play_audio4").addEventListener("click", function() {
    let music = document.getElementById("audio4");
    music.currentTime = 1058;
    music.play().catch(error=>{
        console.log("Error al reproducir el audio", error)
    })
});
document.getElementById("verificar1").addEventListener("click", verificarRespuesta1);
document.getElementById("respuesta1").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        verificarRespuesta1();
    }
});

document.getElementById("verificar2").addEventListener("click", verificarRespuesta2);
document.getElementById("respuesta2").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        verificarRespuesta2();
    }
});

document.getElementById("verificar3").addEventListener("click", verificarRespuesta3);
document.getElementById("respuesta3").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        verificarRespuesta3();
    }
});

document.getElementById("verificar4").addEventListener("click", verificarRespuesta4);
document.getElementById("respuesta4").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        verificarRespuesta4();
    }
});

function verificarRespuesta1(){
    let respuesta = document.getElementById("respuesta1").value;
    const videoCuadro4 = document.getElementById('videoCuadro4');
    const video4 = document.getElementById('2horas');
    if (respuesta.toLowerCase() === "19/12/2024") {
        alert("Siempre sí me ama OwO");
        window.open("https://1drv.ms/w/c/ce1d2959ad794565/Ebl3N3wckrZDnGXqNhr2WiYBhBpcCiGi4GQBwv-WMX6rgA?e=L4syjt", "_blank");
        videoCuadro4.style.display = 'none'; // Ocultar el video si la respuesta es correcta
        video4.pause(); // Detener el video si la respuesta es correcta
        video4.currentTime = 0; // Reiniciar el video
    } else {
        alert("Pensé que me amabas unu");
        videoCuadro4.style.display = 'block'; // Mostrar el video si la respuesta es incorrecta
        video4.play(); // Reproducir el video si la respuesta es incorrecta
    }
};
document.getElementById("2horas").addEventListener("pause", function() {
    const videoCuadro4 = document.getElementById('videoCuadro4');
    if (videoCuadro4.style.display === 'block') {
        this.play();
    }
});
document.getElementById("2horas").addEventListener("ended", function() {
    this.currentTime = 0;
    this.play();
});
function verificarRespuesta2(){
    let respuesta = document.getElementById("respuesta2").value;
    const videoCuadro2 = document.getElementById('videoCuadro2');
    const video2 = document.getElementById('drakukeo');
    if (respuesta.toLowerCase() === "23/09/2024") {
        alert("Gracias a Dios casados ♥");
        document.getElementById('canvas').style.display = 'block';
        drawSunflower();
        document.getElementById('respuestaCorrecta3').style.display = 'block';
        videoCuadro2.style.display = 'none'; // Ocultar el video si la respuesta es correcta
        video2.pause(); // Detener el video si la respuesta es correcta
        video2.currentTime = 0; // Reiniciar el video
    } else {
        alert("Pensé que me amabas unu");
        videoCuadro2.style.display = 'block'; // Mostrar el video si la respuesta es incorrecta
        video2.play(); // Reproducir el video si la respuesta es incorrecta
    }
}
document.getElementById("drakukeo").addEventListener("pause", function() {
    const videoCuadro2 = document.getElementById('videoCuadro2');
    if (videoCuadro2.style.display === 'block') {
        this.play();
    }
});
document.getElementById("drakukeo").addEventListener("ended", function() {
    this.currentTime = 0;
    this.play();
});

function verificarRespuesta3(){
    let respuesta = document.getElementById("respuesta3").value.toLowerCase();
    const videoCuadro3 = document.getElementById('videoCuadro3');
    const video3 = document.getElementById('duro');
    if (respuesta === "serotonina") {
        alert("Menos mal acertaste con estas bonitas canciones y no las feas");
        mostrarVideo();
        document.getElementById('videoCuadro').addEventListener('click', ocultarVideo);
        videoCuadro3.style.display = 'none'; // Ocultar el video si la respuesta es correcta
        video3.pause(); // Detener el video si la respuesta es correcta
        video3.currentTime = 0; // Reiniciar el video
    } else if (respuesta === "yoko") {
        alert("Que me ama demasiado");
        mostrarVideo();
        document.getElementById('respuestaCorrecta').style.display = 'block';
        videoCuadro3.style.display = 'none'; // Ocultar el video si la respuesta es correcta
        video3.pause(); // Detener el video si la respuesta es correcta
        video3.currentTime = 0; // Reiniciar el video
    } else {
        alert("Yo pensé que me amabas unu");
        videoCuadro3.style.display = 'block'; // Mostrar el video si la respuesta es incorrecta
        video3.play(); // Reproducir el video si la respuesta es incorrecta
    }
};
document.getElementById("duro").addEventListener("pause", function() {
    const videoCuadro3 = document.getElementById('videoCuadro3');
    if (videoCuadro3.style.display === 'block') {
        this.play();
    }
});
document.getElementById("duro").addEventListener("ended", function() {
    this.currentTime = 0;
    this.play();
});
function verificarRespuesta4(){
    let respuesta = document.getElementById("respuesta4").value.toLowerCase();
    const videoCuadro5 = document.getElementById('videoCuadro5')
    const video5 = document.getElementById('RCham')
    if (respuesta === "top 10 words que fer no se espera") {
        alert("Respuesta correcta");
        document.getElementById('respuestaCorrecta2').style.display = 'block';
        videoCuadro5.style.display= 'none';
        video5.pause();
        video5.currentTime= 0;
    } else {
        alert("Respuesta incorrecta");
        videoCuadro5.style.display= 'block';
        video5.play();
    }
};
document.getElementById("RCham").addEventListener("pause", function() {
    const videoCuadro5 = document.getElementById('videoCuadro5');
    if (videoCuadro5.style.display === 'block') {
        this.play();
    }
});
document.getElementById("RCham").addEventListener("ended", function() {
    this.currentTime = 0;
    this.play();
});


function drawSunflower() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar el sol
    ctx.beginPath();
    ctx.arc(500, 50, 50, 0, 2 * Math.PI);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.closePath();

    // Dibujar las nubes
    function drawCloud(x, y) {
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, 2 * Math.PI);
        ctx.arc(x + 30, y, 30, 0, 2 * Math.PI);
        ctx.arc(x + 60, y, 20, 0, 2 * Math.PI);
        ctx.fillStyle = '#87CEEB'; // Color celeste
        ctx.fill();
        ctx.closePath();
    }

    drawCloud(100, 80);
    drawCloud(300, 50);
    drawCloud(600, 120);

    // Función para dibujar un girasol
    function drawSingleSunflower(x, y) {
        // Dibujar los petalos
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                ctx.beginPath();
                ctx.ellipse(x, y, 20, 80, i * Math.PI / 10, 0, 2 * Math.PI);
                ctx.fillStyle = 'yellow';
                ctx.fill();
                ctx.closePath();
            }, 500 + i * 100);
        }

        // Dibujar el centro del girasol
        setTimeout(() => {
            ctx.beginPath();
            ctx.arc(x, y, 50, 0, 2 * Math.PI);
            ctx.fillStyle = 'brown';
            ctx.fill();
            ctx.closePath();
        }, 2500);

        // Dibujar el tallo
        setTimeout(() => {
            ctx.beginPath();
            ctx.moveTo(x, y + 50);
            ctx.lineTo(x, y + 200);
            ctx.lineWidth = 10;
            ctx.strokeStyle = 'green';
            ctx.stroke();
            ctx.closePath();
        }, 3000);

        // Dibujar las hojas
        setTimeout(() => {
            ctx.beginPath();
            ctx.ellipse(x - 30, y + 100, 20, 50, Math.PI / 4, 0, 2 * Math.PI);
            ctx.ellipse(x + 30, y + 100, 20, 50, -Math.PI / 4, 0, 2 * Math.PI);
            ctx.fillStyle = 'green';
            ctx.fill();
            ctx.closePath();
        }, 3500);
    }

    // Dibujar tres girasoles
    drawSingleSunflower(100, 200);
    drawSingleSunflower(300, 200);
    drawSingleSunflower(500, 200);
}
function mostrarVideo() {
    const videoCuadro = document.getElementById('videoCuadro');
    const video = document.getElementById('dtmf');
    videoCuadro.style.display = 'block';
    video.play();
}
function mostrarVideo2() {
    const videoCuadro2 = document.getElementById('videoCuadro2');
    const video2 = document.getElementById('drakukeo');
    videoCuadro2.style.display = 'block';
    video2.play();
}
function mostrarVideo3() {
    const videoCuadro3 = document.getElementById('videoCuadro3');
    const video3 = document.getElementById('duro');
    videoCuadro3.style.display = 'block';
    video3.play();
}
function mostrarVideo4() {
    const videoCuadro4 = document.getElementById('videoCuadro4');
    const video4 = document.getElementById('2horas');
    videoCuadro4.style.display = 'block';
    video4.play();
}
function mostrarVideo5() {
    const videoCuadro5 = document.getElementById('videoCuadro5');
    const video5 = document.getElementById('RCham');
    videoCuadro5.style.display = 'block';
    video5.play();
}
function ocultarVideo() {
    const videoCuadro = document.getElementById('videoCuadro');
    const video = document.getElementById('dtmf');
    videoCuadro.style.display = 'none';
    video.pause();
}
