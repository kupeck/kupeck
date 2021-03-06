var isit = 0;
var i = 0;
while (isit < 6) {
isit = 0;
i += 1;
if (i % 2 == 0) {isit += 1;}
if (i % 3 == 0) {isit += 1;}
if (i % 4 == 0) {isit += 1;}
if (i % 5 == 0) {isit += 1;}
if (i % 6 == 0) {isit += 1;}
if (i % 7 == 0) {isit += 1;}
if (isit == 6) {console.log("Number: " + i + " Score: " + isit + " MATCH!!")} else {console.log("Number: " + i + " Score: " + isit + " Not a match")}
}
