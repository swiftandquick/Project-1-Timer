var hour = 0;
var minute = 0;
var second = 0;

var hourFormat, minuteFormat, secondFormat;
 
timeoutID = window.setTimeout(Update, 1000);

function Update() {
    
    second++;

    if (second === 60) {
        second = 0;
        minute++;
    }

    if (minute === 60) {
        minute = 0;
        hour++;
    }
    
    if (second < 10) {
        secondFormat = "0" + second;
    }
    else {
        secondFormat = second;
    }

    if (minute < 10) {
        minuteFormat = "0" + minute;
    }
    else {
        minuteFormat = minute;
    }

    if (hour < 10) {
        hourFormat = "0" + hour;
    }
    else {
        hourFormat = hour;
    }

    var textField = document.getElementById("showText");
    textField.innerHTML = hourFormat + ":" + minuteFormat + ":" + secondFormat;
    timeoutID = window.setTimeout(Update, 1000);
}
 
document.getElementById("restart").addEventListener("click", function() {
    window.clearTimeout(timeoutID);
    hour = 0; 
    minute = 0; 
    second = 0; 
    Update();
});

document.getElementById("stop").addEventListener("click", function() {
    window.clearTimeout(timeoutID);
});

document.getElementById("continue").addEventListener("click", function() {
    window.clearTimeout(timeoutID);
    Update();
});