import Treasurechest from './Treasurechest'
import Unlocker from './Unlocker'

// 一号宝箱
const treasurechest_1 = new Treasurechest(1, 0)

const unlocker = new Unlocker(treasurechest_1)

unlocker.bruteForce()