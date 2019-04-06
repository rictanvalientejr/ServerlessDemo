let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {
    console.log("value1 = " + event.mobile);
    console.log("value2 = " + event.key2); 

    sns.publish({
        Message: 'hello',
        Subject: 'Test',
        MessageAttributes: {},
        MessageStructure: 'String',
        TopicArn: 'arn:aws:sns:ap-southeast-1:137351355934:DTI_Demo'
    }).promise()
        .then(data => {
            // your code goes here
        })
        .catch(err => {
            // error handling goes here
            callback(error);
        });
}

