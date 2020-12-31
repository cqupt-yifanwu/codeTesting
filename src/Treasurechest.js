import { sha256 } from 'js-sha256'

export default class Treasurechest {
    constructor (index, preHash) {
        this.index = index // 宝箱编号
        this.timing = new Date().getTime() // 打开宝箱的时间戳
        this.status = 'close' // 宝箱是否被打开
        this.hash = '' // 宝箱的hash值
        this.preHash = preHash // 上一个被打开的宝箱hash值
        this.tempHash = '' // 每次被尝试开锁都会存入这个临时hash
    }

    getPreHash() {
        return this.preHash
    }

    getHash() {
        return this.hash
    }

    createHash (mysteriousNumber) {
        this.tempHash = sha256(this.index + this.timing + this.preHash + mysteriousNumber + '')
        return this.tempHash
    }
}