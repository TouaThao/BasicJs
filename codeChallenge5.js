/*
Take the tip calculator and use the forloop
John went to five restruant 
42,48,124,180,268
Create a object and inside of the object use a method to calculate the tip with loop.
calculate the average

--------------------
extra credit
--------------------
Mark family went to four different restruant 
45,77,110,375
Mark like to tip 20% if the bill is less than $100
15% if more than $100 but less than $200
10% if more than $200
calulate the average and see which family paid more on average
At the end, Do a if statement and print our who paid more
*/

let johnTip = {
    firstName:'john',
    bill:[42,48,124,180,268],
    tipCalculator:function(){
       this.tips = []
       this.newJohnBillFinal = []
        for (let i = 0; i < this.bill.length; i++) {
            let percentage;
            let bill = this.bill[i]
            if (bill < 50) {
               percentage = .2
            }
            else if( bill >= 50 && bill < 200){
                percentage = .15
            } else{
                percentage = .10
            }
            this.tips[i] = bill * percentage
        this.newJohnBillFinal[i] = bill + bill * percentage
        }
        
    } 
}

let markTip = {
    firstName:'Mark',
    bill:[45,77,110,375],
    tipCalculator:function(){
        this.tips = []
        this.newMarkBillFinal =[]
        for (let i = 0; i < this.bill.length; i++) {
            let percentage;
            let bill = this.bill[i]
           if (bill < 100) {
               percentage = .20
           } else if( bill > 100 && bill < 300 ){
                percentage = .15
           } else{
               percentage = .10
           }
            this.tips[i] = bill * percentage
            this.newMarkBillFinal[i] = bill + bill * percentage
            this.markAverage = this.newMarkBillFinal / 4
        }
    }
}

johnTip.tipCalculator()

markTip.tipCalculator()


function calAverage(tips){
    let sum = 0;
    for (let i = 0; i < tips.length; i++) {
        sum = sum + tips[i]
        
    }
    return sum / tips.length

}

johnTip.average = calAverage(johnTip.tips)
markTip.average = calAverage(markTip.tips)
console.log(johnTip, markTip)

if (johnTip.average > markTip.average) {
    console.log('John paid more than mark')
} else{
    console.log('Mark Paid more than john')
}