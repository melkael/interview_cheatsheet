request = require('request');

var userDetails;
function initialize() {
    // Setting URL and headers for request
    var options = {
        url: 'https://api.github.com/users/melkael',
        headers: {
            'User-Agent': 'request'
        }
    };
    // Return new promise
    return new Promise(function(resolve, reject) {
     // Do async job
        request.get(options, function(err, resp, body) {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(body));
            }
        })
    })
}

userDetails = initialize().then(function(result){
    console.log("Done with initialization");
    return new Promise(function(resolve, reject) {
        resolve(result)
    })
}, (err => console.log(err)))
.then(result => console.log(result.public_gists))

/////////////////////////////////////////////////////

userDetails = initialize().then(function(result){
    console.log("Done with initialization 2");
    return result;
}, (err => console.log(err)))
.then(result => console.log(result.public_gists))

/////////////////////////////////////////////////////

async function asyncCall() {
  console.log('calling');
  var result = await initialize();
  console.log(result.public_gists, " async");
  // expected output: 'resolved'
}

asyncCall()