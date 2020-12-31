import TreasureFactory from '../src/TreasureFactory'
import Unlocker from '../src/Unlocker'
import UnlockerFactory from '../src/UnlockerFactory'

const treasureFactory = new TreasureFactory()
treasureFactory.porductTreasurechest(10)

const unlockerFactory = new UnlockerFactory(treasureFactory.getTreasurechestList(), new Unlocker())

unlockerFactory.startMachine()

console.log(unlockerFactory.getKeyList())

document.body.innerHTML = "1到10号宝箱的神秘数字依次是" + unlockerFactory.getKeyList()
