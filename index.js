let grossSalary = 500
let pensionContribution = 0.05
let totalSalary =  grossSalary*pensionContribution

   console.log(totalSalary)


let taxableAmount = 25

    console.log( grossSalary-taxableAmount)

let basictax = 0/100
let tax80 = 80
let taxUnder80 = (basictax*tax80)

   console.log(taxUnder80)


let taxUnder250 = (4/100 * (250-80))

   console.log(taxUnder250)

let taxUnder450 = (8/100*(450-250))

   console.log(taxUnder450)

let taxOn450 = (10/100*(475-450))

    console.log(taxOn450)



//take home pay //

let totalTaxes= taxUnder80 + taxUnder250 + taxUnder450 +taxOn450

   console.log(totalTaxes)



let takeHomePay = grossSalary-totalTaxes-totalSalary

   console.log(takeHomePay)


let myName = `Teodora`

let message = `I am ${myName} and I am paying ${totalTaxes} euro taxes to the governement`

   console.log(message + '!!!')

