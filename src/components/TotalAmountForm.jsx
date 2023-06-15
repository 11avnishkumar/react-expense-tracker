import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
const TotalAmountForm = ({setIsOpen}) => {
    // access users localstorage
    const TotalAmountofLocal = localStorage.getItem("TotalAmount")
    const [totalAmount, setTotalAmount] = useState(0)
    const handleTotalAmount = (e) => {
        e.preventDefault()
        // if the Amount exist in localstorage then do nothing,otherwise set the Amount
        if (TotalAmountofLocal === null) {
            localStorage.setItem("TotalAmount", totalAmount)
        }
        setIsOpen(false) // to close the modal once the form has been submitted
    }
    return (
        <div>
            <Dialog.Title className="text-center text-5xl font-bold text-slate-500 mb-3">Add Amount</Dialog.Title>
            <form onSubmit={handleTotalAmount} className='flex flex-col justify-between h-[90%] gap-4 mb-8'>
                <div>
                    <div className='form-group mb-4'>
                        <input type="number" id="totalAmount" className='custom__number w-full block  shadow-sm border-none rounded-md text-center px-2 py-3 focus:ring-0 text-6xl placeholder:text-6xl placeholder:text-center' placeholder='$ 0.00' onChange={(e) => setTotalAmount(e.target.value)} />
                        <label htmlFor="totalAmount" className='sr-only'>Total Amount</label>
                    </div>
                </div>
                <Dialog.Description className='text-center text-3xl text-slate-200 mb-4'>
                    You do not have any amount yet? Add your Total Income in order to calculate expense and income
                </Dialog.Description>
                <div>
                    <input type="submit" value="Save" className='block w-full px-2 py-3 rounded-md cursor-pointer' style={{
                        background: "rgb(79,223,208)",
                        background: "linear-gradient(30deg, rgba(79,223,208,1) 0%, rgba(188,88,228,1) 49%, rgba(255,199,0,1) 100%)"
                    }} />
                </div>
            </form>
        </div>
    )
}

export default TotalAmountForm