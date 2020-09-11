var isit = 0;
var i = 0;
while (isit < 6) {
isit = 0;
i += 1;
if (i % 18 == 0) {isit += 1;}
if (i % 155 == 0) {isit += 1;}
if (i % 25 == 0) {isit += 1;}
if (i % 412 == 0) {isit += 1;}
if (i % 117 == 0) {isit += 1;}
if (i % 183 == 0) {isit += 1;}
if (isit == 6) {console.log("Number: " + i + " Score: " + isit + "MATCH!!")} else {console.log("Number: " + i + " Score: " + isit + "Not a match")}
}
