//create basic salary and benefits variable and ask user input
const basicSalary = Number(window.prompt("Enter the basic salary:"));
const benefits = Number(window.prompt("Enter the benefits:"));

//declare grossIncome
const grossIncome = basicSalary + benefits;

//calculate NHIF, NSSF, PAYE.

const calculate = {

    nhif: function(){
        if (grossIncome > 0 && grossIncome <= 5999) {
            return 150;
        } else if (grossIncome >= 6000 && grossIncome <= 7999) {
            return 300;
        } else if (grossIncome >= 8000 && grossIncome <= 11999) {
            return 400;
        } else if (grossIncome >= 12000 && grossIncome <= 14999) {
            return 500;
        } else if (grossIncome >= 15000 && grossIncome<= 19999) {
            return 600;
        } else if (grossIncome >= 20000 && grossIncome <= 24999) {
            return 750;
        } else if (grossIncome >= 25000 && grossIncome <= 29999) {
            return 850;
        } else if (grossIncome >= 30000 && grossIncome <= 34999) {
            return 900;
        } else if (grossIncome >= 35000 && grossIncome <= 39999) {
            return 950;
        } else if (grossIncome >= 40000 && grossIncome <= 44999) {
            return 1000;
        } else if (grossIncome >= 45000 && grossIncome <= 49999) {
            return 1100;
        } else if (grossIncome >= 50000 && grossIncome <= 59999) {
            return 1200;
        } else if (grossIncome >= 60000 && grossIncome <= 69999) {
            return 1300;
        } else if (grossIncome >= 70000 && grossIncome <= 79999) {
            return 1400;
        } else if (grossIncome >= 80000 && grossIncome <= 89999) {
            return 1500;
        } else if (grossIncome >= 90000 && grossIncome <= 99999) {
            return 1600;
        } else { return 1700; }
    },
    nssf: function() {
        const nssfRates = window.prompt("Enter NSSF Rate")
        if (nssfRates === "New"){
            if (grossIncome <= 6000) {
		     return 0.06 * grossIncome;
	         } else if (grossIncome > 6000 && grossIncome <= 18000) {
		     let tier1 = 360;
		     let tier2 = 0.06 * (grossIncome - 6000);
             return (tier1 + tier2);
             }else if(grossIncome > 18000){
                return 720;
             }else{
                return "";
             }
        }else if(nssfRates === "Old"){
            let tier3 = 0.05 * grossIncome
            if (tier3 < 400 ){
                return tier3;
            }else{
                return 400;
    }
        }
    },
    taxablePay: function(){
        return grossIncome - this.nssf
    },
    payee: function(){

        if (this.taxablePay <= 24000){
            return (this.taxablePay * 0.1);
        }else if (this.taxablePay >= 24001 && this.taxablePay <= 32333){
            return (this.taxablePay * 0.25);
        }else if (this.taxablePay > 32333){
            return (this.taxablePay * 0.3);
        }else {
            return 0
        }
    },
    // function to calculate netsalary
    netSalary: function(){
        deductions = Number(this.payee + this.nhif + this.nssf);

        console.log(grossIncome - deductions);
    }

}

