function calculateTax(income, expenses) {
    if(expenses>income || income<0 || expenses<0){
        return "Invalid Input"
    }
    const profit=income-expenses;
    return (profit*.20)
}
console.log(calculateTax(6000, 15000));

