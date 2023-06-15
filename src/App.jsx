import TotalAmount from './components/TotalAmount'
import Transactions from './components/Transactions'
import GlobalProviders, { GlobalContext } from './context/Context'
function App() {
  return (
    <GlobalProviders>
      <div className='max-w-lg px-2 py-2 mx-auto rounded-md flex justify-center items-center'>
        <div className='w-full'>
          <TotalAmount />
          <Transactions />
        </div>
      </div>
    </GlobalProviders>
  )
}

export default App
