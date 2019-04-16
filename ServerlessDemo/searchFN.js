let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function(event, context, callback) {
    var firstName = event.firstName;
    var params = {
        TableName : "Name_Test",
        ProjectionExpression : "first_name, last_name",
        FilterExpression : " first_name = :fn",
        ExpressionAttributeValues: {
            ":fn": firstName
        }
    };

    ddb.scan(params, function(err, data) {
        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        } else {
            console.log("Query succeeded.");
            data.Items.forEach(function(record) {
                console.log(JSON.stringify(record));
                console.log(" -", record.first_name + ": " + record.last_name);
            });

            var result = JSON.stringify(data.Items)
            console.log (result);
            callback(null, JSON.stringify(data.Items));
        }
    });

}