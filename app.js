function showTime() {
    const today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    min = time(min);
    sec = time(sec);

    document.getElementById('digital').innerHTML = hour + ":" + min + ":" + sec;
    setTimeout(showTime, 1000);
}

function time(i) {
    if (i < 10) { i = "0" + i };
    return i;

}
showTime();