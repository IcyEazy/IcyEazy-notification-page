var markBtn = document.getElementById("mark-read");
var notifReader = document.getElementById("notif-reader");
var unread = document.querySelectorAll(".unread");
var svgDot = document.querySelectorAll(".svg-div");

markBtn.addEventListener('click', function(){
    if(notifReader.textContent === "0") {
        notifReader.textContent = "3";
    }
    else {
        notifReader.textContent = "0";
    }

    unread.forEach(x => x.classList.toggle('unread'));

    if(markBtn.textContent === "Mark all as read"){
        markBtn.textContent = "Undo";
    }
    else{
        markBtn.textContent = "Mark all as read";
    }

    svgDot.forEach(x => x.classList.toggle('svg-dot'));
})