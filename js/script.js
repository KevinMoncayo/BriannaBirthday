const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('seconds'),
$finalMessage = document.getElementById('.final-sms');

//Fecha a futuro
const countdownDate = new Date('Mar 2, 2024 00:00:00').getTime();

let interval = setInterval(function(){
    //Obtener fecha actual y milisegundos
    const now = new Date().getTime();

    //Obtener las distancias entre ambas fechas
    let distance = countdownDate - now;

    //Calculos a días, horas, minutos y segundos

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24))/(1000*60*60));
    let minutes = Math.floor((distance % (1000 * 60 * 60))/(1000*60));
    let seconds = Math.floor((distance % (1000 * 60))/(1000));

    //Escribimos resultados
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);

    //Cuando llegue a 0

    if(distance<0){
        clearInterval(interval);
        $finalMessage.style.transform = 'translateY(0)';
    }

}, 1000);