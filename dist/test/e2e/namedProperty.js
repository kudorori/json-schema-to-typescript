"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = {
    title: "Example Schema",
    description: 'My cool schema',
    type: 'object',
    properties: {
        users: {
            type: 'array',
            title: 'user id array',
            description: 'Array of authorized user ids.',
            items: {
                type: 'string'
            }
        }
    }
};
//# sourceMappingURL=namedProperty.js.map