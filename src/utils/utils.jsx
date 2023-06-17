export const numberFormatter = (number) => {
   const  getNewNumber = new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'INR' , maximumSignificantDigits: 3 }).format(number);

    return getNewNumber
}