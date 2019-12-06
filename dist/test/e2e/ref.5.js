"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = {
    title: 'Referencing',
    type: 'object',
    properties: {
        foo: {
            $ref: 'ReferencedTypeWithoutID.json'
        },
        bar: {
            $ref: 'ReferencedTypeWithoutIDConflict.json'
        }
    },
    required: ['foo', 'bar'],
    additionalProperties: false
};
exports.options = {
    cwd: 'test/resources/'
};
//# sourceMappingURL=ref.5.js.map