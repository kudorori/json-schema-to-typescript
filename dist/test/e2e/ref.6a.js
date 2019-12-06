"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = {
    title: 'Referencing Combined',
    type: 'object',
    properties: {
        foo: {
            $ref: 'test/resources/ReferencedCombinationType.json'
        }
    },
    required: ['foo'],
    additionalProperties: false
};
exports.options = {
    declareExternallyReferenced: true
};
//# sourceMappingURL=ref.6a.js.map