const { messagePublish } = require('../service/receiveMessageService');

module.exports = async (eventPayload, eventMeta) => {
    await messagePublish({eventPayload, eventMeta});
    return {body: eventPayload};
};