"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = require("ava");
var child_process_1 = require("child_process");
var fs_1 = require("fs");
function run() {
    ava_1.default('pipe in, pipe out', function (t) {
        t.snapshot(child_process_1.execSync('shx cat ./test/resources/ReferencedType.json | node dist/src/cli.js', { encoding: 'utf-8' }).toString());
    });
    ava_1.default('pipe in (schema without ID), pipe out', function (t) {
        t.snapshot(child_process_1.execSync('shx cat ./test/resources/ReferencedTypeWithoutID.json | node dist/src/cli.js', {
            encoding: 'utf-8'
        }).toString());
    });
    ava_1.default('file in (no flags), pipe out', function (t) {
        t.snapshot(child_process_1.execSync('node dist/src/cli.js ./test/resources/ReferencedType.json').toString());
    });
    ava_1.default('file in (--input), pipe out', function (t) {
        t.snapshot(child_process_1.execSync('node dist/src/cli.js --input ./test/resources/ReferencedType.json').toString());
    });
    ava_1.default('file in (-i), pipe out', function (t) {
        t.snapshot(child_process_1.execSync('node dist/src/cli.js -i ./test/resources/ReferencedType.json').toString());
    });
    ava_1.default('file in (-i), unreachable definitions flag, pipe out', function (t) {
        t.snapshot(child_process_1.execSync('node dist/src/cli.js -i ./test/resources/DefinitionsOnly.json --unreachableDefinitions').toString());
    });
    ava_1.default('file in (-i), style flags, pipe out', function (t) {
        t.snapshot(child_process_1.execSync('node dist/src/cli.js -i ./test/resources/Enum.json --style.singleQuote --no-style.semi').toString());
    });
    ava_1.default('file in (-i), pipe out (absolute path)', function (t) {
        t.snapshot(child_process_1.execSync("node dist/src/cli.js -i " + __dirname + "/../../test/resources/ReferencedType.json").toString());
    });
    ava_1.default('pipe in, file out (--output)', function (t) {
        child_process_1.execSync('shx cat ./test/resources/ReferencedType.json | node dist/src/cli.js --output ./ReferencedType.d.ts').toString();
        t.snapshot(fs_1.readFileSync('./ReferencedType.d.ts', 'utf-8'));
        fs_1.unlinkSync('./ReferencedType.d.ts');
    });
    ava_1.default('pipe in, file out (-o)', function (t) {
        child_process_1.execSync('shx cat ./test/resources/ReferencedType.json | node dist/src/cli.js -o ./ReferencedType.d.ts').toString();
        t.snapshot(fs_1.readFileSync('./ReferencedType.d.ts', 'utf-8'));
        fs_1.unlinkSync('./ReferencedType.d.ts');
    });
    ava_1.default('file in (no flags), file out (no flags)', function (t) {
        child_process_1.execSync('node dist/src/cli.js ./test/resources/ReferencedType.json ./ReferencedType.d.ts').toString();
        t.snapshot(fs_1.readFileSync('./ReferencedType.d.ts', 'utf-8'));
        fs_1.unlinkSync('./ReferencedType.d.ts');
    });
    ava_1.default('file in (-i), file out (-o)', function (t) {
        child_process_1.execSync('node dist/src/cli.js -i ./test/resources/ReferencedType.json -o ./ReferencedType.d.ts').toString();
        t.snapshot(fs_1.readFileSync('./ReferencedType.d.ts', 'utf-8'));
        fs_1.unlinkSync('./ReferencedType.d.ts');
    });
    ava_1.default('file in (--input), file out (--output)', function (t) {
        child_process_1.execSync('node dist/src/cli.js --input ./test/resources/ReferencedType.json --output ./ReferencedType.d.ts').toString();
        t.snapshot(fs_1.readFileSync('./ReferencedType.d.ts', 'utf-8'));
        fs_1.unlinkSync('./ReferencedType.d.ts');
    });
}
exports.run = run;
//# sourceMappingURL=testCLI.js.map