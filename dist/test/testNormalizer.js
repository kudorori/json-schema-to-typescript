"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = require("ava");
var fs_1 = require("fs");
var lodash_1 = require("lodash");
var path_1 = require("path");
var normalizer_1 = require("../src/normalizer");
var normalizerDir = __dirname + '/../../test/normalizer';
function run() {
    fs_1.readdirSync(normalizerDir)
        .filter(function (_) { return /^.*\.json$/.test(_); })
        .map(function (_) { return path_1.join(normalizerDir, _); })
        .map(function (_) { return [_, require(_)]; })
        .forEach(function (_a) {
        var filename = _a[0], json = _a[1];
        var params = { filename: filename };
        ava_1.default(json.name, function (t) {
            var normalised = normalizer_1.normalize(json.in, filename);
            t.snapshot(lodash_1.template(toString(normalised))(params));
            t.deepEqual(json.out, normalised);
        });
    });
}
exports.run = run;
function toString(json) {
    return JSON.stringify(json, null, 2);
}
//# sourceMappingURL=testNormalizer.js.map