import React from 'react'
import { Dialog } from '@headlessui/react'
import { useContext, useState } from 'react'
import { GlobalContext } from '../context/Context'
import { v4 as uuidv4 } from 'uuid'; // to generate an unique id
import { numberFormatter } from '../utils/utils';
const TotalExpenseForm = ({setIsOpen}) => {
  const { dispatch } = useContext(GlobalContext)
  // collect user input data
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const expensesData = {
    id: uuidv4(),
    amount: +amount, date, category, description
  }
  // console.log(expensesData)
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: "ADD_EXPENSE",
      expensesData
    })

    setIsOpen(false) // to close the modal once the form has been submitted
  }
  return (
    <div>
      <Dialog.Title className="text-center text-2xl md:text-5xl font-bold text-slate-500 mb-3">Add Expenses</Dialog.Title>
          {/* <Dialog.Description> 
          </Dialog.Description> */}
          <form onSubmit={handleSubmit} className='flex flex-col justify-between h-[90%] gap-4 mb-8'>
                <div>
                  <div className='form-group mb-4'>
                    <input type="number" className='custom__number w-full block  border-none rounded-md text-center px-2 py-3 focus:ring-0 text-6xl  placeholder:text-6xl placeholder:text-center' placeholder={numberFormatter(0)} onChange={(e) => setAmount(e.target.value)} />
                    <label htmlFor="" className='sr-only'>Amount</label>
                  </div>
                  <div className='form-group mb-4'>
                    <input type="text" id="category" className='w-full block  border-none rounded-md px-2 py-3  focus:ring-0 placeholder:uppercase' placeholder='category' onChange={(e) => setCategory(e.target.value)} />
                    <label htmlFor="category" className='sr-only'>Category</label>
                  </div>
                  <div className='form-group mb-4'>
                    <input type="text" className='w-full block  border-none rounded-md px-2 py-3  focus:ring-0 placeholder:uppercase' placeholder='description' onChange={(e) => setDescription(e.target.value)} />
                    <label htmlFor="" className='sr-only'>Description</label>
                  </div>
                  <div className='form-group mb-4'>
                    <input type="date" className='w-full block  border-none rounded-md px-2 py-3  focus:ring-0 '  onChange={(e) => setDate(e.target.value)} />
                    <label htmlFor="" className='sr-only'>Date</label>
                  </div>
                </div>
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

export default TotalExpenseForm