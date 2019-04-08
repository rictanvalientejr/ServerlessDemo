let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {
    var receiver = event.receiver;
    var sender = event.sender;
    var message = event.message;

    console.log("Sending SMS ...");
    console.log("sender = " + event.sender);
    console.log("receiver = " + event.receiver);
    console.log("message = " + event.message);
    

    sns.publish({
        Message: message,
        MessageAttributes: {
            'AWS.SNS.SMS.SMSType': {
                DataType: 'String',
                StringValue: 'Promotional'
            },
            'AWS.SNS.SMS.SenderID': {
                DataType: 'String',
                StringValue: sender
            },
        },
        PhoneNumber: receiver
    }).promise()
        .then(data => {
            // your code goes here
        })
        .catch(err => {
            console.log(err);
        });

    console.log("SMS Sent...");
}

