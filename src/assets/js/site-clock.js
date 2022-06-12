function startClock() {
    const today  = new Date();
    let hour     = today.getHours() > 12 ? (today.getHours() - 12) : today.getHours();
    let minute   = today.getMinutes();
    let second   = today.getSeconds();
    let day      = today.getDate();
    let month    = today.getMonth() + 1;
    let year     = today.getFullYear();
    let meridian = hour >= 12 ? "PM" : "AM";

    hour   = padNum(hour);
    minute = padNum(minute);
    second = padNum(second);
    day    = padNum(day);
    month  = padNum(month);
    year   = year - 2000;

    document.getElementById("clockTime").innerHTML = hour + "." + minute + "." + second;
    document.getElementById("clockDate").innerHTML = month + "." + day + "." + year;
    document.getElementById("clockMeridian").innerHTML = meridian;
    setTimeout(startClock, 1000);
}

function padNum(num) {
    if (num < 10) num = "0" + num;
    return num;
}