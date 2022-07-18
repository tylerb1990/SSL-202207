const http = require('http'); // fixed to http and changed to const
const myname = "Here is my IP address:"; // made into a variable

async function callHttpbin() { // Fixed function name added aync
    let promise = new Promise((resolve, reject) => {
        http.get('http://httpbin.org/ip', function(response) {
            var str="";
            response.setEncoding('utf8');
            response.on('data', function(data){
                str += data;
            });
            response.on('end', function() {
                let result = JSON.parse(str); // changed to let
                myips = result.origin; 
                resolve(result); // added result to the resolve
            });
        });
    });
    result = await promise;
    return result; //added return to attach object
}

async function executeAsyncTask(){ // added async
  const valueA = await callHttpbin();
  const valueB = myname;
  console.log(valueB+" "+valueA.origin); // drilled into object to get ip
} // closing bracket added

executeAsyncTask(); // Call function