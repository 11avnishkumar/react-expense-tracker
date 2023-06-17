import React, { createContext, useReducer,useState } from 'react'
import { expenseReducer } from './ExpenseReducer'
const initialData = {
    transactions: [
        // {
        //     id: 1,
        //     amount: 50.25,
        //     date: 'June 1, 2023',
        //     category: 'Entertainment',
        //     description: 'Grocery shopping at ABC Supermarket'
        // },
        // {
        //     id: 2,
        //     amount: 100.00,
        //     date: 'June 3, 2023',
        //     category: 'Shipping',
        //     description: 'Payment for utility bill'
        // },
        // {
        //     id: 3,
        //     amount: 20.50,
        //     date: 'June 5, 2023',
        //     category: 'Dinner',
        //     description: 'Lunch at XYZ Restaurant'
        // },
        // {
        //     id: 4,
        //     amount: 75.99,
        //     date: 'June 7, 2023',
        //     category: 'Shopping',
        //     description: 'Online purchase at XYZ Store'
        // },
        // {
        //     id: 5,
        //     amount: 200.00,
        //     date: 'June 9, 2023',
        //     category: 'Transfer',
        //     description: 'Transfer to a friend'
        // },
        // {
        //     id: 6,
        //     amount: 35.75,
        //     date: 'June 11, 2023',
        //     category: 'Entertainment',
        //     description: 'Movie tickets for two'
        // },
        // {
        //     id: 7,
        //     amount: 15.00,
        //     date: 'June 12, 2023',
        //     category: 'Cafeteria',
        //     description: 'Coffee at ABC Cafe'
        // },
        // {
        //     id: 8,
        //     amount: 50.00,
        //     date: 'June 13, 2023',
        //     category: 'Entertainment',
        //     description: 'Donation to charity'
        // },
        // {
        //     id: 9,
        //     amount: 45.60,
        //     date: 'June 14, 2023',
        //     category: 'Travel',
        //     description: 'Gasoline refill at XYZ Gas Station'
        // },
        // {
        //     id: 10,
        //     amount: 300.00,
        //     date: 'June 15, 2023',
        //     category: 'Home',
        //     description: 'Rent payment for the month'
        // }
    ]
}


export const GlobalContext = createContext(initialData)

// Provider Component
const GlobalProviders = ({ children }) => {
    const [state, dispatch] = useReducer(expenseReducer, initialData)
    // fetch the data from localStorage
    const [TotalAmountofLocal,setTotalAmountofLocal] = useState(localStorage.getItem("TotalAmount"))
    // console.log("from providers",TotalAmountofLocal) // debugging
    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            dispatch,
            TotalAmountofLocal,
            setTotalAmountofLocal
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProviders