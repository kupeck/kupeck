function warning(text) {
    document.getElementById("warning").innerHTML = (text);
    window.alert(text);
}
function padLeadingZeros(num, size) {
    var s = num+"";
    while (s.length < size) {s = "0" + s}
    return s;
}
function toUTCtime(input) {
    var t = new Date(input);
    var y = t.getUTCFullYear();
    var m = t.getUTCMonth() + 1;
    var d = t.getUTCDate();
    var h = t.getUTCHours();
    var i = t.getUTCMinutes();
    var s = t.getUTCSeconds();
    var py = padLeadingZeros(y,4);
    var pm = padLeadingZeros(m,2);
    var pd = padLeadingZeros(d,2);
    var ph = padLeadingZeros(h,2);
    var pi = padLeadingZeros(i,2);
    var ps = padLeadingZeros(s,2);
    return(py + "-" + pm + "-" + pd + "T" + ph + ":" + pi + ":" + ps);
}
function tosd() {
    var ttime = document.getElementById('to-sd-date').value + "T" + document.getElementById('to-sd-time').value + "+0000" ;
    var tdate = new Date(ttime);
    var tmiliunix = tdate.getTime();
    var tstardate = ((tmiliunix - 11139552000000) / 1000) / 31536;
    console.log("Time: " + ttime + " miliUnix: " + tmiliunix + " Stardate: " + tstardate);
    document.getElementById("to-sd-sd").value = tstardate;
    if (document.getElementById("to-sd-sd").value = "NaN") {
        warning("You have to fill out all fields, also you may have to specify AM/PM.\n\nIf that doesn't work, contact me at: kupeck#9974 on discord");
        document.getElementById("to-sd-sd").value = ""
    }
}
function fromsd() {
    var fstardate = document.getElementById('from-sd-sd').value;
    var fmiliunix = (fstardate * 1000 * 31536) + 11139552000000;
    var ftime = toUTCtime(fmiliunix)
    console.log("Stardate: " + fstardate + " miliUnix: " + fmiliunix + " Time: " + ftime);
    document.getElementById('from-sd-time').value = ftime;
}