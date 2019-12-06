"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = {
    id: 'Parent',
    type: 'object',
    patternProperties: {
        '^[a-zA-Z]+': {
            id: 'Child',
            type: 'object',
            properties: {
                aProperty: { type: 'string' }
            }
        }
    }
};
//# sourceMappingURL=patternProperties.1.js.map