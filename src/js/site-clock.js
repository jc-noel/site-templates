function startClock() {
    const today = new Date();
    let hour    = today.getHours();
    let minute  = today.getMinutes();
    let second  = today.getSeconds();
    let day     = today.getDay();
    let month   = today.getMonth();
    let year    = today.getFullYear();

    hour   = padNum(hour - 12);
    minute = padNum(minute);
    second = padNum(second);
    day    = padNum(day);
    month  = padNum(month);
    year   = year - 2000;

    document.getElementById("clockTime").innerHTML = hour + "." + minute + "." + second;
    document.getElementById("clockDate").innerHTML = month + "." + day + "." + year;
    setTimeout(startClock, 1000);
}

function padNum(num) {
    if (num < 10) num = "0" + num;
    return num;
}