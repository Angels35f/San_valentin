document.getElementById("play_audio1").addEventListener("click", function() {
    let music = document.getElementById("audio1");
    music.play();
});

document.getElementById("play_audio2").addEventListener("click", function() {
    let music = document.getElementById("audio2");
    music.play();
});

document.getElementById("play_audio3").addEventListener("click", function() {
    let music = document.getElementById("audio3");
    music.play();
});
document.getElementById("play_audio4").addEventListener("click", function() {
    let music = document.getElementById("audio4");
    music.play();
});
document.getElementById("verificar1").addEventListener("click", function() {
    let respuesta = document.getElementById("respuesta1").value;
    if (respuesta.toLowerCase() === "19/12/2025") {
        alert("Respuesta correcta");
        window.open("https://1drv.ms/w/c/ce1d2959ad794565/Ebl3N3wckrZDnGXqNhr2WiYBhBpcCiGi4GQBwv-WMX6rgA?e=L4syjt", "_blank");
    } else {
        alert("Respuesta incorrecta");
    }
});

document.getElementById("verificar2").addEventListener("click", function() {
    let respuesta = document.getElementById("respuesta2").value;
    if (respuesta.toLowerCase() === "23/09/2024") {
        alert("Respuesta correcta");
        document.getElementById('canvas').style.display = 'block';
        drawSunflower();
        document.getElementById('respuestaCorrecta3').style.display = 'block';
    } else {
        alert("Respuesta incorrecta");
    }
});

document.getElementById("verificar3").addEventListener("click", function() {
    let respuesta = document.getElementById("respuesta3").value.toLowerCase();
    if (respuesta === "serotonina") {
        alert("Respuesta correcta");
        mostrarVideo();
        document.getElementById('videoCuadro').addEventListener('click', ocultarVideo);
    } else if (respuesta === "yoko") {
        alert("Respuesta muy correcta");
        mostrarVideo();
        document.getElementById('respuestaCorrecta').style.display = 'block';
    } else {
        alert("Respuesta incorrecta");
    }
});
document.getElementById("verificar4").addEventListener("click", function() {
    let respuesta = document.getElementById("respuesta4").value.toLowerCase();
    if (respuesta === "top 10 words que fer no se espera") {
        alert("Respuesta correcta");
        document.getElementById('respuestaCorrecta2').style.display = 'block';

    } else {
        alert("Respuesta incorrecta");
    }
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
function ocultarVideo() {
    const videoCuadro = document.getElementById('videoCuadro');
    const video = document.getElementById('dtmf');
    videoCuadro.style.display = 'none';
    video.pause();
}
