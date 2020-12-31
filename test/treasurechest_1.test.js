import Treasurechest from '../src/Treasurechest'
const assert = require("assert");

// 一号宝箱
const treasurechest_1 = new Treasurechest(1)
treasurechest_1.setPreHash(0)

// describe：定义一组测试
describe("宝箱构造函数测试", function() {    
    it("一号宝箱的前一个宝箱hash值是0", function() {
        assert.equal(treasurechest_1.getPreHash(), 0);
    });
});

