//somehow get parameters of the get request
var sd = get(sd); // input: stardate         // output: time and unix        // simplified: time
var tm = get(tm); // input: time             // output: stardate and unix    // simplified: stardate
var ux = get(ux); // input: unix timestamp   // output: stardate and time    // simplified: stardate

if (sd !== undefined) {
    if (s == 1) {
        var output = ((sd - 11139552000000) / 1000) / 31536;
    } else {
        // not done
    }
} else if (tm !== undefined) {
    if (s == 1) {
        var output = (tm * 1000 * 31536) + 11139552000000;
    } else {
        // not done
    }
} else if (ux !== undefined) {
    // not done
} else {
    var output = "impropper parameters"; //somehow set 204 status
}

console.log(output) //later replace with propper response, http code 200