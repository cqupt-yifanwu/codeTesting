import Treasurechest from '../src/Treasurechest'
import Unlocker from '../src/Unlocker'
const expect = require('chai').expect

// 一号宝箱
const treasurechest_1 = new Treasurechest(1)
treasurechest_1.setPreHash(0)

describe("开锁测试", function () {
    const unlocker = new Unlocker()
    unlocker.installation(treasurechest_1)
    const {mysteriousNumber, hash} = unlocker.bruteForce()

    it("开锁所得是数字", function() {
        expect(mysteriousNumber).to.be.a('number')
    });

    it("开锁完成后hash值前五位应该是 00000", function () {
        expect(hash.slice(0, 5)).to.be.equal("00000")
    })
})
