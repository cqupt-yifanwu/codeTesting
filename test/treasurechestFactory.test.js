// 宝箱生产工厂测试
import TreasureFactory from '../src/TreasureFactory'
const assert = require("assert");

const treasureFactory = new TreasureFactory()
treasureFactory.porductTreasurechest(10)

describe("宝箱工厂测试", function() {    
    it("一号宝箱的前一个宝箱hash值是0", function() {
        assert.equal(treasureFactory.getTreasurechestList().length, 10);
    });
});