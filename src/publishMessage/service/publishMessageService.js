const sqs = require('ebased/service/downstream/sqs');
const config = require('ebased/util/config');
const MESSAGE_QUEUE_URL = config.get('MESSAGE_QUEUE_URL');

module.exports = async payload => {

    const sqsSendParams = {
      MessageBody: payload,
      QueueUrl: MESSAGE_QUEUE_URL
    };

    await sqs.send(sqsSendParams);
};