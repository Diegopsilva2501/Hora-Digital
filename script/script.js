function atualizarRelogio(){
    const agora = new Date();

    let horas = agora.getHours().toString().padStart(2, '0');
    let minutos = agora.getMinutes().toString().padStart(2, '0');
    let segundos = agora.getSeconds().toString().padStart(2, '0');

    const horario = `${horas}:${minutos}:${segundos}`;
    document.getElementById('relogio').textContent = horario
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();