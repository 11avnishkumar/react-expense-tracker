import { Dialog } from '@headlessui/react'
import TotalExpenseForm from './TotalExpenseForm'
import TotalAmountForm from './TotalAmountForm'
export default function FormModal({ isOpen, setIsOpen }) {  
  // access users localstorage
  const TotalAmountofLocal = localStorage.getItem("TotalAmount")
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Panel>
        <div className='max-w-lg mx-auto rounded-3xl fixed top-5 bottom-0 left-0 right-0  w-full h-[95%] bg-white p-8'>
        {TotalAmountofLocal !== null ? <TotalExpenseForm setIsOpen={setIsOpen}/> : <TotalAmountForm setIsOpen={setIsOpen}/>}
        </div>
      </Dialog.Panel>
    </Dialog>
  )
}