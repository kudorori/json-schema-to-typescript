"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testCLI_1 = require("./testCLI");
var testCompileFromFile_1 = require("./testCompileFromFile");
var testE2E_1 = require("./testE2E");
var testNormalizer_1 = require("./testNormalizer");
testE2E_1.run();
if (!testE2E_1.hasOnly()) {
    testCompileFromFile_1.run();
    testCLI_1.run();
    testNormalizer_1.run();
}
//# sourceMappingURL=test.js.map