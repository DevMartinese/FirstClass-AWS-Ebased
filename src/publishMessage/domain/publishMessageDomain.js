const { InputValidation } = require('ebased/schema/inputValidation');
const publishMessageService = require('../service/publishMessageService');

module.exports = async (commandPayload, commandMeta) => {
    const { name } = commandPayload;

    new CreateMessageValidation(commandPayload, commandMeta).get();
    await publishMessageService(name);
    return {
        body: {
            message: `${name}`
        }
    };
};

class CreateMessageValidation extends InputValidation {
    constructor(payload, meta) {
        super({
            type: 'CREATE.MESSAGE',
            specversion: 'v1.0.0',
            source: meta.source,
            payload: payload,
            schema: {
                name: { type: String, required: true }
            }
        })
    }
};