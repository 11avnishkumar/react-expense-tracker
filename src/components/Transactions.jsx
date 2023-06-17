import React, { useContext, useState } from 'react'
import { PlusIcon,XMarkIcon } from '@heroicons/react/24/solid'
import { GlobalContext } from '../context/Context'
import FormModal from '../components/FormModal'
import { numberFormatter } from '../utils/utils'
const Transactions = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { transactions } = useContext(GlobalContext)
  return (
    <>
      <div className='flex justify-between items-center py-10'>
        <span className='inline-block text-3xl font-bold text-slate-500'>Transactions</span>
        <span className='inline-block text-slate-700'>View All</span>
      </div>
      {/* Transaction list */}
      {transactions.length > 0 ? transactions.map(transaction => (
        <div className='flex justify-between items-center shadow-sm bg-white rounded-2xl px-6 py-4 mb-6' key={transaction.id}>
          <div>
            {/* svg */}
            <span className='inle-block font-bold text-xl text-slate-700'>{transaction.category}</span>
          </div>
          <div>
            <span className='inline-block w-full text-lg  text-right'>{numberFormatter(transaction.amount)}</span>
            <span className='inline-block w-full text-sm font-bold text-right'>{transaction.date}</span>
          </div>
        </div>
      )) : <p className='text-4xl text-slate-300 text-center'>Your Transaction details appear here...</p>}
      {/* Form modal open button */}
      <div className='fixed z-[99] bottom-5 shadow-3xl right-5 w-16 h-16 overflow-hidden flex justify-center items-center cursor-pointer'>
        <button className='inline-block text-xl font-bold text-white rounded-full h-full w-full p-3 bg-emerald-500' style={{
          background: "rgb(79,223,208)",
          background: "linear-gradient(30deg, rgba(79,223,208,1) 0%, rgba(188,88,228,1) 49%, rgba(255,199,0,1) 100%)"
        }} onClick={() => setIsOpen(!isOpen)}>{ isOpen ? <XMarkIcon/> : <PlusIcon/>}</button>
      </div>
      <FormModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default Transactions