import { sha256 } from 'js-sha256'

export default class Treasurechest {
    constructor (index, preHash) {
        this.index = index // 宝箱编号
        this.timing // 打开宝箱的时间戳
        this.status = 'close' // 宝箱是否被打开
        this.hash = '' // 宝箱的hash值
        this.preHash = preHash // 上一个被打开的宝箱hash值
    }

    getPreHash() {
        return this.preHash
    }

    createHash (mysteriousNumber) {
        const timer = new Date().getTime()
        return sha256(this.index + timer + this.preHash + mysteriousNumber)
    }

    getHash() {
        return this.hash
    }
}