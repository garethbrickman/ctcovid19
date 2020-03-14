const dict = require('./U20200313.json')

let totalComercialPos = 0
let totalComercialNeg = 0
let totalStatePos = 0
let totalStateNeg = 0


for (let key in dict) {
    totalComercialPos = totalComercialPos + parseInt(dict[key]['commerciallab']['Positive']);
    totalComercialNeg = totalComercialNeg + parseInt(dict[key]['commerciallab']['Negative']);
    totalStatePos = totalStatePos + parseInt(dict[key]['statelab']['Positive']);
    totalStateNeg = totalStateNeg + parseInt(dict[key]['statelab']['Negative']);
}

console.log(totalComercialPos)
console.log(totalComercialNeg)

console.log(totalStatePos)
console.log(totalStateNeg)
