import {useContext} from 'react'
import Form from './Form'
import MyContext from '../context/MyContext' 

const Header = () => {
  const {data,handleNext} = useContext(MyContext)
  return (
    <header>
      {data.next !== undefined && (
        <button className='next-button' onClick={handleNext}>
          Next Page
        </button>
      )}
      <Form />
    </header>
  )
}

export default Header