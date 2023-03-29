import { useState } from 'react'

import CountryTable from './components/CountryTable'
function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <div className='d-flex flex-column align-items-center'>
  <h1>React Datatable</h1>
  </div>
    <CountryTable/>
  </>
  )
}

export default App
