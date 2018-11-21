var getPalette = require("../lib/getPalette");
var expect = require("chai").expect;
var assert = require("chai").assert;
require("chai").should();

describe("getPalette", function() {

    it("should throw an error if the result is not an array", function(done) {

        var notArray = function() {
            getPalette(process.cwd() + "/test/fixtures/config-palette-non-array.json");
        };
        
        expect(notArray).to.throw(/is not an array/);
        done();
    });
    
    it("should return an array with 3 items", function() {
        var palette = getPalette();
        expect(palette).to.be.an("array").with.length(3);

        //assert.isArray(palette, "did not return an array");
        //assert.lengthOf(palette, 3, "did not return 3 items");

        palette.should.be.an("array").with.length(3);

    });
});