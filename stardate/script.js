function tosd() {
    var ttime = document.getElementById('to-sd-date').value + "T" + document.getElementById('to-sd-time').value + "+0000" ;
    var tdate = new Date(ttime);
    var tmiliunix = tdate.getTime();
    var tstardate = ((tmiliunix - 11139552000000) / 1000) / 31536;
    console.log("Time: " + ttime + " miliUnix: " + tmiliunix + " Stardate: " + tstardate);
    document.getElementById("to-sd-sd").value = tstardate;
    if (document.getElementById("to-sd-sd").value = "NaN") {
        alert("You may have to specify AM/PM if that does not work, contact me at: kupeck#9974 on discord")
    }
}
function fromsd() {
    var fstardate = document.getElementById('from-sd-sd').value;
    var fmiliunix = (fstardate * 1000 * 31536) + 11139552000000;
    var ftime = new Date(fmiliunix);
    console.log("Stardate: " + fstardate + " miliUnix: " + fmiliunix + " Time: " + ftime);
    document.getElementById('from-sd-time').value = ftime;
    document.getElementById('warning').innerHTML = "Time is currently displayed in wrong format, it will be fixed, but is completely usable untel then."
}