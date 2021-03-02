function vyber(vyber) {
    if(vyber % 100 == 0) {
        if(vyber == 200) {
            var output = "ya";
        } else if(vyber >= 400) {
            var output = "ya";
        } else {
            var output = "na";
        }
    }
    console.log("vyber: " + vyber + " output: " + output)
    document.getElementById('vyberout').value = output
}