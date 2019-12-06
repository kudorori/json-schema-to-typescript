"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = {
    title: 'Referencing',
    type: 'object',
    properties: {
        foo: {
            $ref: 'test/resources/ReferencedType.json'
        }
    },
    required: ['foo'],
    additionalProperties: false
};
exports.options = {
    declareExternallyReferenced: true
};
//# sourceMappingURL=ref.1a.js.map