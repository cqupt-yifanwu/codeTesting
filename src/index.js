import Treasurechest from '../src/Treasurechest'
import Unlocker from '../src/Unlocker'
import UnlockerFactory from '../src/UnlockerFactory'

// 十个宝箱列表
const treasurechestList = []
for (let i = 1; i <= 10; i++) {
    treasurechestList.push(new Treasurechest(i))
}

const unlockerFactory = new UnlockerFactory(treasurechestList, new Unlocker())

unlockerFactory.startMachine()

console.log(unlockerFactory.getKeyList())