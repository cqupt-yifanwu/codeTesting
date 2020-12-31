import { sha256 } from 'js-sha256'

export default class Treasurechest {
    constructor (index) {
        this.index = index // 宝箱编号
        this.status = 'close' // 宝箱是否被打开
        this.hash = '' // 宝箱的hash值
        this.preHash = ''// 上一个博爱俺的hash
    }

    /**
     * 
     * @param {string} preHash // 上一个宝箱的hash
     */
    setPreHash(preHash) {
        this.preHash = preHash
    }

    getPreHash () {
        return this.preHash
    }

    getHash() {
        return this.hash
    }

    setHash(hash) {
        this.hash = hash
    }

    /**
     * 
     * @param {number} mysteriousNumber // 神秘数字
     */
    createHash (mysteriousNumber) {
        if (this.preHash === '') {
            console.log('您还没有填入上一个宝箱的hash')
        }
        return sha256(this.index + this.preHash + mysteriousNumber + '')
    }
}