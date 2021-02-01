function tosd() {
    var ttime = document.getElementById('to-sd-date').value + "T" + document.getElementById('to-sd-time').value + "+0000" ;
    var tdate = new Date(ttime);
    var tmiliunix = tdate.getTime();
    var tstardate = ((tmiliunix - 11139552000000) / 1000) / 31536;
    console.log("Time: " + ttime + " miliUnix: " + tmiliunix + " Stardate: " + tstardate);
    document.getElementById("to-sd-sd").value = tstardate;
}
function fromsd() {
    var fstardate = document.getElementById('from-sd-sd');
    var fmiliunix = (fstardate * 1000 * 31536) + 11139552000000;
    var ftime = new Date(fmiliunix);
    console.log("Stardate: " + fstardate + " miliUnix: " + fmiliunix + " Time: " + ftime);
    document.getElementById('from-sd-time').value = ftime;
}