//somehow get parameters of the get request
var sd = get(sd); // input: stardate         // output: time and unix        // simplified: time
var tm = get(tm); // input: time             // output: stardate and unix    // simplified: stardate
var ux = get(ux); // input: unix timestamp   // output: stardate and time    // simplified: stardate

if (sd) {
    if (ez == 1) {
        var output = ((sd - 11139552000000) / 1000) / 31536;
    } else {
        // not done
    }
} else if (tm) {
    if (ez == 1) {
        var output = (tm * 1000 * 31536) + 11139552000000;
    } else {
        // not done
    }
} else if (ux) {
    if (ez == 1) {
        var output = (ux * 1000 * 31536) + 11139552000000;
    } else {
        // not done
    }
} else {
    var output = "impropper parameters"; //somehow set 204 status
}

console.log(output) //later replace with propper response, http code 200

"=========================================================================================================="

async function handleRequest(request) {
    try {
        const querystring = request.url.split('?')[1];
        if (querystring) {
            const params = querystring.split('&');
            if (params.find(y => y.includes('sd'))) {
                const sdParam = params.find(y => y.includes('sd'));
                const sd = sdParam.split('=')[1];
                var active = "sd";
            } else if (params.find(y => y.includes('tm'))) {
                const tmParam = params.find(y => y.includes('tm'));
                const tm = tmParam.split('=')[1];
                var active = "tm";
            } else if (params.find(y => y.includes('ux'))) {
                const uxParam = params.find(y => y.includes('ux'));
                const ux = uxParam.split('=')[1];
                var active = "ux";
            } else {
                return new Response('Wrong or missing syntax', {status: 400})
            }
        }
        if (active == sd) {
            var sdunix = (sd * 1000 * 31536) + 11139552000000;
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
                var l = t.getUTCMilliseconds();
                var py = padLeadingZeros(y,4);
                var pm = padLeadingZeros(m,2);
                var pd = padLeadingZeros(d,2);
                var ph = padLeadingZeros(h,2);
                var pi = padLeadingZeros(i,2);
                var ps = padLeadingZeros(s,2);
                var pl = padLeadingZeros(l,3);
                return(py + "-" + pm + "-" + pd + "T" + ph + ":" + pi + ":" + ps + "+" + pl);
            }
            var output = toUTCtime(sdunix);
        } else if (tm == active) {
            var tmdate = new Date(tm);
            var tmunix = tmdate.getTime();
            var output = ((tmunix - 11139552000000) / 1000) / 31536;
        } else if (ux == active) {
            var output = (((ux * 1000) - 11139552000000) / 1000) / 31536
        } else {
            return new Response('Server error', {status: 400})
        }
        return new Response(output, {status: 200})
    } catch (err) {
        console.log(err)
    }
}
  
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
})