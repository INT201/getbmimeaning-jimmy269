const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  return weight/(height*height)
}
function getBMIMeaning(weight, height) {
  if(calculateBMI(weight, height) < 18.5){
    return "Underweight" 
  } 
  else if(calculateBMI(weight, height) > 25.0){
    return "Overweight"
  }
  else{
    return "Normal weight"
  }
}

// console.log(calculateBMI(44,1.6))
// console.log(getBMIMeaning(44,1.6))
// ไม่มีกรณี null , undefined

module.exports = getBMIMeaning
