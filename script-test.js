const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// filepath: /c:/Users/angls/Desktop/Proyectos/San valentin/scipts.test.js

const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
let dom;
let document;

describe('verificarRespuesta2', () => {
    beforeEach(() => {
        dom = new JSDOM(html, { runScripts: 'dangerously' });
        document = dom.window.document;
        global.document = document;
        global.window = dom.window;
        global.alert = jest.fn();
        require('./scipts.js');
    });

    test('should alert "Respuesta correcta" and show canvas and respuestaCorrecta3 when answer is correct', () => {
        document.getElementById('respuesta2').value = '23/09/2024';
        verificarRespuesta2();
        expect(global.alert).toHaveBeenCalledWith('Respuesta correcta');
        expect(document.getElementById('canvas').style.display).toBe('block');
        expect(document.getElementById('respuestaCorrecta3').style.display).toBe('block');
    });

    test('should alert "Respuesta incorrecta" and show video when answer is incorrect', () => {
        document.getElementById('respuesta2').value = 'wrong answer';
        verificarRespuesta2();
        expect(global.alert).toHaveBeenCalledWith('Respuesta incorrecta');
        expect(document.getElementById('videoCuadro').style.display).toBe('block');
    });
});
