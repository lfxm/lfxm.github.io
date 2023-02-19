function update() {
    document.getElementById("day").innerHTML = get_day();
    document.getElementById("year").innerHTML = get_year();
    focus();
}

function focus() {
    //if website is not focused, replace the title with the current time
    if (!document.hasFocus()) {
        document.title = get_day() + ' of the day has passed';
    } else {
        document.title = "Percentage clock";
    }
}

setInterval(update, 1000);

function get_day() {
    let time = new Date().toLocaleTimeString();
    let seconds = time.split(":");
    seconds = seconds[0] * 3600 + seconds[1] * 60 + seconds[2] * 1;

    let percentage = seconds / 864;
    percentage = percentage.toFixed(2);
    if (percentage.length == 4) percentage = percentage + "0";
    return percentage + "%";
}

function get_year() {
    let date = new Date();
    date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    if (date.split("/")[1].length == 1) date = date.split("/")[0] + "/0" + date.split("/")[1] + "/" + date.split("/")[2];

    let days = 0;
    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (date.split("/")[2] % 4 == 0) months[1] = 29;
    for (let i = 0; i < date.split("/")[1] - 1; i++) {
        days += months[i];
    }
    days += date.split("/")[0] * 1;

    let percentage = days / 3.65;
    percentage = percentage.toFixed(4);
    if (percentage.length == 5) percentage = percentage + "0";
    return percentage + "%";
}
