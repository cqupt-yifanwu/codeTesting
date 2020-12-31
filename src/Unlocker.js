// 开锁器，用于破解宝箱，得到神秘数字
export default class Unlocker {
    constructor (treasurechest) {
        this.treasurechest = treasurechest // 宝箱
    }

    // 暴力破解宝箱
    bruteForce () {
        let i = 1000
        let tempHash = '' // 记录宝箱临时hash
        while (tempHash.slice(0, 5) !== '00000') {
            tempHash = this.treasurechest.createHash(i)
            i++
        }

        return {
            mysteriousNumber: i,
            hash: tempHash
        }
    }
}