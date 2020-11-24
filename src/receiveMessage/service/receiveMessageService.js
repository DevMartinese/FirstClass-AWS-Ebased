const sns = require('ebased/service/downstream/sns');
const config = require('ebased/util/config');
const MESSAGE_TOPIC_URL = config.get('MESSAGE_TOPIC_URL');

module.exports = async payload => {
    await sns.publish ({
        TopicArn: MESSAGE_TOPIC_URL,
        Message: payload
    });
};