// 开锁工厂测试
import Treasurechest from '../src/Treasurechest'
import Unlocker from '../src/Unlocker'
import UnlockerFactory from '../src/UnlockerFactory'
const assert = require("assert");

// 十个宝箱列表
const treasurechestList = []
for (let i = 1; i <= 10; i++) {
    treasurechestList.push(new Treasurechest(i))
}

const unlockerFactory = new UnlockerFactory(treasurechestList, new Unlocker())

unlockerFactory.startMachine()

const keyList = unlockerFactory.getKeyList()

// describe：定义一组测试
describe("开锁工厂测试", function() {
    // it: 定义一个测试用例
    it("得到数字是十个", function() {
        assert.equal(keyList.length, 10)
    });
});

