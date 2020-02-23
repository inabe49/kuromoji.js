/*
 * Copyright 2014 Takuya Asano
 * Copyright 2010-2014 Atilika Inc. and contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";
var expect = require("chai").expect;
var BrowserDictionaryLoader = require("../../src/loader/NodeBrowserDictionaryLoader");

describe("BrowserDictionaryLoader", function () {

    var dictionaries = null; // target object

    before(function (done) {
        this.timeout(5 * 60 * 1000); // 5 min

        var loader = new DictionaryLoader(DIC_DIR);
        loader.load(function (err, dic) {
            dictionaries = dic;
            done();
        });
    });

    it("join", function () {
        var dict = new BrowserDictionaryLoader("");

        expect(dict.join("https://takuyaa.github.io/kuromoji.js/demo/kuromoji/dict/", "unk_invoke.dat.gz")).to.eql("https://takuyaa.github.io/kuromoji.js/demo/kuromoji/dict/unk_invoke.dat.gz");

        expect(dict.join("//takuyaa.github.io/kuromoji.js/demo/kuromoji/dict/", "unk_invoke.dat.gz")).to.eql("//takuyaa.github.io/kuromoji.js/demo/kuromoji/dict/unk_invoke.dat.gz");

        expect(dict.join("/kuromoji.js/demo/kuromoji/dict/", "unk_invoke.dat.gz")).to.eql("/kuromoji.js/demo/kuromoji/dict/unk_invoke.dat.gz");
    });
});
