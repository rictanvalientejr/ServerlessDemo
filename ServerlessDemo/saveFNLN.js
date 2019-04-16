let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();



exports.handler = function(event, context, callback) {
    var uuid = require('node-uuid');
    var uuid1 = uuid.v1();
    console.log(uuid1);

    var firstName = event.firstName;
    var lastName = event.lastName;

    ddb.put({TableName: 'Name_Test',
             Item: {'UUID':uuid1, 'first_name':firstName,'last_name':lastName}
                }).promise().then(function(data){
            //your logic goes here

            callback(null, {"message": "Successfully saved name"});
    }).catch(function(err){
        callback(err);
    });
    
    
}

