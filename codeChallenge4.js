/**
 So create two person as an object. Inside of those object
 They should have firstName,lastName , height and weight
 also give them the ablilty/method to calculate their BMI 
 
 BMI = mass/Kg / height ^2
 */

 let JohnObject = {
firstName:'john',
lastName:'smith',
height:1.55,
weight:68,
calcuBMI:function(){
   this.BMI= this.weight / (this.height * this.height )
}
 }

 let mitchObject = {
     firstName:'mitch',
     lastName:'Smith',
     height:1.8,
     weight:72,
     calcuBMI:function(){
        this.BMI= this.weight / (this.height * this.height )
     }
 }

 JohnObject.calcuBMI();
 console.log(JohnObject)
 mitchObject.calcuBMI();
 console.log(mitchObject);