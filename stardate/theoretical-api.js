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

"----------------------------------------------------------------------------------------------------------"

async function handleRequest(request) {
    try {
        const querystring = request.url.split('?')[1];
        if (querystring) {
            const params = querystring.split('&');
            if (params.find(y => y.includes('sd'))) {
                const sdParam = params.find(y => y.includes('sd'));
                const sd = sdParam.split('=')[1];
            } else if (params.find(y => y.includes('tm'))) {
                const tmParam = params.find(y => y.includes('tm'));
                const tm = tmParam.split('=')[1];
            } else if (params.find(y => y.includes('ux'))) {
                const uxParam = params.find(y => y.includes('ux'));
                const ux = uxParam.split('=')[1];
            } else {
                return new Response('Wrong or missing syntax', {status: 400})
            }
            if (params.find(y => y.includes('ez'))) {
                const ezParam = params.find(y => y.includes('ez'));
                const ez = ezParam.split('=')[1];
            }
        }
        
        
        return new Response(response, {status: 200})
    } catch (err) {
        console.log(err)
    }
}
  
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
})
/*
https://api.kupeck.net/stardate?sd=42609.1

{time: ,unix: }

https://api.kupeck.net/stardate?sd=42609.1&ez=true

time
*/