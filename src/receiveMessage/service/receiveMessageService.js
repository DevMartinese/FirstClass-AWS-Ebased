const sns = require('ebased/service/downstream/sns');
const config = require('ebased/util/config');
const MESSAGE_TOPIC_URL = config.get('MESSAGE_TOPIC_URL');

const messagePublish = async (messagePublishEvent) => {
    const { eventPayload, eventMeta } = messagePublishEvent.get();
    const snsPublishParams = {
        TopicArn: MESSAGE_TOPIC_URL,
        Message: eventPayload
    };
    await sns.publish(snsPublishParams, eventMeta);
};

module.exports = { messagePublish };