import React,{useContext, useEffect, useState} from 'react'
import { GlobalContext } from '../context/Context'
import { ArrowUpIcon,ArrowDownIcon } from '@heroicons/react/24/solid'
import { numberFormatter } from '../utils/utils'
const TotalAmount = () => {
    const [totalAmountofLocal,setTotalAmountofLocal] = useState(localStorage.getItem("TotalAmount"))
    const { transactions } = useContext(GlobalContext)
    const calculateTotalExpense = transactions.reduce((sum,curr)=>sum+curr.amount,0)
    return (
        <div className='rounded-3xl px-4 py-8 w-full' style={{
            background: "rgb(79,223,208)",
            background: "linear-gradient(30deg, rgba(79,223,208,1) 0%, rgba(188,88,228,1) 49%, rgba(255,199,0,1) 100%)"
        }}>
            <p className='text-center text-xl font-semibold mb-4 text-white'>Total Balance</p>
            <span className='inline-block w-full text-5xl text-white text-center mb-4'>{totalAmountofLocal === null ? "0" : numberFormatter(totalAmountofLocal)}</span>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2  items-center'>
                    {/* svg */}
                    <ArrowUpIcon className='h-8 w-8 text-emerald-500 bg-white/50 rounded-full p-2'/>
                    <div className='text-white'>
                        <p>Income</p>
                        <p>{numberFormatter(totalAmountofLocal - calculateTotalExpense)}</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    {/* svg */}
                    <ArrowDownIcon className='h-8 w-8 text-red-500 bg-white/50 rounded-full p-2'/>
                    <div className='text-white'>
                        <p>Expense</p>
                        <p>{numberFormatter(calculateTotalExpense)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TotalAmount