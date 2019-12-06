"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = {
    title: 'UnreachableDefinition',
    type: 'object',
    definitions: {
        a: {
            properties: {
                firstName: {
                    type: 'string'
                },
                lastName: {
                    id: 'lastName',
                    type: 'string'
                }
            }
        }
    },
    properties: {
        b: {
            properties: {
                likesDogs: {
                    type: 'boolean'
                }
            }
        },
        required: ['firstName', 'lastName']
    }
};
exports.options = {
    unreachableDefinitions: true
};
//# sourceMappingURL=unreachableDefinitions.js.map