// 开锁工厂类
export default class UnlockerFactory {
    constructor (treasurechests, unlocker) {
        this.treasurechests = treasurechests // 接受一批宝箱
        this.unlocker = unlocker // 工厂里有一个开锁器
        this.preHash = 0 // 上一个宝箱的hash
        this.keyList = []
    }

    startMachine () {
        this.treasurechests.forEach(treasurechest => {
            // 宝箱初始化设置
            treasurechest.setPreHash(this.preHash) // 先设置上一个宝箱的hash
            
            // 填充宝箱
            this.unlocker.installation(treasurechest)

            // 开始暴力破解
            const {mysteriousNumber, hash} = this.unlocker.bruteForce(treasurechest)
            
            // 破解完成后将获得的hash值存起来供下个宝箱使用
            this.preHash = hash

            // 储存结果
            this.keyList.push(mysteriousNumber)
        });
    }

    getKeyList () {
        return this.keyList
    }
}