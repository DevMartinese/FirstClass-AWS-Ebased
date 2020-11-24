const receiveMessageService = require('../service/receiveMessageService');

module.exports = async eventPayload => {
    await receiveMessageService(eventPayload);
    return {body: eventPayload};
};