// CLOCK
function startTime() {
    console.log("CLOCK running")
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

// TASK DIV ONCLICK
$(document).ready(function(){
    console.log("JQUERY WORKING");

    $('.task').on('click',function(){
        var item = $(this).text().replace(/ /g, "-");
        item = item.slice(0, -1); // to remove the last - {hyphen}
        $.ajax({
            type: 'DELETE',
            url: '/' + item ,
            success: function(data){
                console.log("deletion Successful");
                window.location.href = window.location.href;
            }
        });
    });
});