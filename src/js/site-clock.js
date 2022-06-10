function startClock() {
    const today = new Date();
    let hour    = today.getHours();
    let minute  = today.getMinutes();
    let second  = today.getSeconds();
    let day     = today.getDay();
    let month   = today.getMonth();
    let year    = today.getFullYear();

    hour   = padItem(hour - 12);
    minute = padItem(minute);
    second = padItem(second);
    day    = padItem(day);
    month  = padItem(month);
    year   = year - 2000;

    document.getElementById("clockTime").innerHTML = hour + "." + minute + "." + second;
    document.getElementById("clockDate").innerHTML = month + "." + day + "." + year;
    setTimeout(startClock, 1000);
}

function padItem(item) {
    if (item < 10) item = "0" + item;
    return item;
}