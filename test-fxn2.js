const AWS = require('aws-sdk');
const ec2 = new AWS.EC2();

exports.handler = async (event, context) => {
    const params = {
        InstanceIds: ['i-0a2d53a92dbdbca00']
    };

    await ec2.stopInstances(params).promise();
};
