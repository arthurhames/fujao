function sim() {
    alert("Amém, hoje vai render😈");
    // redireciona para um URL após clicar no SIM
    location.href = "https://youtube.com/shorts/Mb9cUu8AX7U?si=zSSj7slPH-DzyoG4";
}

function desvia(btn) {
    // btn declarado na função
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log('opa, desviei...');
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}