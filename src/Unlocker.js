// 开锁器，用于破解宝箱，得到神秘数字
export default class Unlocker {
    constructor () {
        this.treasurechest // 宝箱
    }

    // 将宝箱填装进开锁器
    installation (treasurechest) {
        this.treasurechest = treasurechest
    }

    // 内部方法，破解完成后设置宝箱hash
    _setTreasurechestHash (hash) {
        this.treasurechest.setHash(hash)
    }

    // 开始暴力破解宝箱
    bruteForce () {
        let i = 0
        let tempHash = '' // 记录宝箱临时hash
        while (tempHash.slice(0, 5) !== '00000') {
            tempHash = this.treasurechest.createHash(i)
            i++
        }

        this._setTreasurechestHash(tempHash)

        return {
            mysteriousNumber: i,
            hash: tempHash
        }
    }
}