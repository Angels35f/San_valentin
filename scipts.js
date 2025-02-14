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
    } else {
        alert("Respuesta incorrecta");
    }
});

document.getElementById("verificar3").addEventListener("click", function() {
    let respuesta = document.getElementById("respuesta3").value.toLowerCase();
    if (respuesta === "serotonina") {
        alert("Respuesta correcta");
    } else if (respuesta === "yoko") {
        alert("Respuesta muy correcta");
    } else {
        alert("Respuesta incorrecta");
    }
});
function drawSunflower() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar los petalos
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            ctx.beginPath();
            ctx.ellipse(300, 200, 20, 80, i * Math.PI / 10, 0, 2 * Math.PI);
            ctx.fillStyle = 'yellow';
            ctx.fill();
            ctx.closePath();
        }, 500 + i * 100);
    }

    // Dibujar el centro del girasol
    setTimeout(() => {
        ctx.beginPath();
        ctx.arc(300, 200, 50, 0, 2 * Math.PI);
        ctx.fillStyle = 'brown';
        ctx.fill();
        ctx.closePath();
    }, 2500);

    // Dibujar el tallo
    setTimeout(() => {
        ctx.beginPath();
        ctx.moveTo(300, 250);
        ctx.lineTo(300, 400);
        ctx.lineWidth = 10;
        ctx.strokeStyle = 'green';
        ctx.stroke();
        ctx.closePath();
    }, 3000);
}
