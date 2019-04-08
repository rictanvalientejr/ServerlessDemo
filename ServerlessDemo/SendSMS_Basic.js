let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {
    console.log("value1 = " + event.mobile);
    console.log("value2 = " + event.key2); 

  
}

