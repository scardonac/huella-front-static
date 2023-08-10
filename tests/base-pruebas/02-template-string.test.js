describe('Pruebas en 02-template-string', () => {

    test('Prueba en el metodo "saludar"', () => {

        // 1. Initializacion
        const nombre = 'Ancizar';

        // 2. Estimulo
        const mensaje = `Hola ${nombre}`;

        // 3. Observar el comportamiento
        expect(mensaje).toBe('Hola ' + nombre);
    })
})