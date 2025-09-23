// Inicializa o WTCGL
const canvas = document.getElementById('webgl');
const vertexShader = document.getElementById('vertexShader').textContent;
const fragmentShader = document.getElementById('fragmentShader').textContent;

const gl = new WTCGL(
    canvas,
    vertexShader,
    fragmentShader,
    canvas.width,
    canvas.height,
    1,  // DPI
    false  // Preserve drawing buffer
);

// Carrega textura
gl.addTexture('noise', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/noise.png', {});

// Uniforms personalizados (ex.: u_xscale, se usado)
gl.addUniform('u_xscale', 'float', 1.0);  // Ajuste se necessário

// Animação
function animate() {
    requestAnimationFrame(animate);
    gl.draw();
}
animate();

// Interatividade (mouse e time)
document.addEventListener('mousemove', (e) => {
    gl.addUniform('u_mouse', 'vec2', [e.clientX / window.innerWidth, 1 - e.clientY / window.innerHeight]);
});
gl.addUniform('u_time', 'float', performance.now() / 1000);