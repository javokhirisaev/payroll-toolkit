//Step2
const employees = [
  { name: "Ahmed", hourlyRate: 20, hoursWorked: 38 },
  { name: "Fatima", hourlyRate: 15, hoursWorked: 45 },
  { name: "Omar", hourlyRate: 25, hoursWorked: 50 },
  { name: "Layla", hourlyRate: 18, hoursWorked: 40 },
  { name: "Hassan", hourlyRate: 22, hoursWorked: 60 }
];

//Step3
function calculateBasePay(rate, hours) {
  const baseHours = Math.min(hours, 40);
  return rate * baseHours;
}
console.log("Base Pay:", calculateBasePay(20, 38));

//Step4
function calculateOvertimePay(rate, hours) {
  if (hours > 40) {
    const overtimeHours = hours - 40;
    return overtimeHours * (rate * 1.5);
  }
  return 0;
}
console.log("Overtime Pay:", calculateOvertimePay(15, 45));

//Step5
function calculateTaxes(grossPay) {
  return grossPay * 0.15;
}
console.log("Tax Deduction:", calculateTaxes(1000));

//Step6
function processPayroll(employee) {
  const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  const grossPay = basePay + overtimePay;
  const taxAmount = calculateTaxes(grossPay);
  const netPay = grossPay - taxAmount;

  return {
    name: employee.name,
    basePay: basePay.toFixed(2),
    overtimePay: overtimePay.toFixed(2),
    grossPay: grossPay.toFixed(2),
    netPay: netPay.toFixed(2)
  };
}