const http = require('http');
const fs = require('fs');
var requests = require('requests');
const homefile = fs.readFileSync("home.html", "utf-8");

const replaceval = (tempval,orgval) => {
    let temperature = tempval.replace("{%tempval%}", orgval.main.temp);
    temperature = temperature.replace("{%tempmin%}", orgval.main.temp_min);
    temperature = temperature.replace("{%tempmax%}", orgval.main.temp_max);
    temperature = temperature.replace("{%status%}", orgval.weather[0].main);
    // console.log(temperature);
    return temperature;
}
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests("http://api.openweathermap.org/data/2.5/weather?q=London&appid=f310ea5ce1cce08834a9276c2fd0ddc5")
            .on('data', (chunk) => {
                const objdata = JSON.parse(chunk);
                const arrdata = [objdata];
                // console.log(arrdata[0].main.temp);
                const result = arrdata
                    .map((val) => replaceval(homefile, val))
                        .join("");
                    res.write(result);
            })
            .on('end', (err) => {
                if (err) return console.log('connection closed due to errors', err);
 
                console.log('end');
            });
    }
});

server.listen(8001, '127.0.0.1');