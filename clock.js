function clock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var time = document.getElementById("time");

    time.innerHTML = hours + " : " + minutes + " : " + seconds;
    
    setTimeout(clock,1000);
};
clock();