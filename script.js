//THE SMOOTH TASTE OF NEO!!
console.log("NEO")
var money = 0
var mps = 5
var i = false
var moneyCalc2 = 0
moneyCalc()
function moneyCalc() {
  money += mps
  setTimeout(() => {
    moneyCalc()
  }, 1)
  if (!i) {
    i = true
    setTimeout(() => {
       moneyCalc2 = money
       i = false
       console.log(moneyCalc2)
    }, 1000)
  }
}
