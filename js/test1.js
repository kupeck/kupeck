function vyber(vyber) {
    if(vyber % 100 == 0) {
        if(vyber / 200 > 0.99999999) {
            var output = "yaa"
        } else if(vyber >= 500) {
            var output = "ya"
        } else {
            var output = "na"
        }
    }
    console.log("vyber: " + vyber + " output: " + output)
    document.getElementById('vyberout').value = output
}