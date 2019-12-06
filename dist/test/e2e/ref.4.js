"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = {
    title: 'Referencing',
    type: 'object',
    properties: {
        foo: {
            $ref: 'ReferencedType.json'
        }
    },
    required: ['foo'],
    additionalProperties: false
};
exports.options = {
    cwd: 'test/resources/'
};
//# sourceMappingURL=ref.4.js.map