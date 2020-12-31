// 宝箱构造工厂
import Treasurechest from './Treasurechest'

export default class TreasureFactory {
    constructor () {
        this.treasurechestList = []
    }

    // 生产宝箱
    porductTreasurechest(number) {
        for (let i = 1; i <= number; i++) {
            this.treasurechestList.push(new Treasurechest(i))
        }
    }
}
