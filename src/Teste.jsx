
import { Link } from 'react-router-dom';
import './App.css'
function TesteFc({ARRAY}) {
  
  return (
    <>
      <header>
        <nav>
          { 
            ARRAY.map((elemento) => 
    
            
            <Link className='navaa' to={"/"+ elemento }>{elemento}</Link>
            ) 
          }
        </nav>
      </header>
    </>
  )
}

export default TesteFc
    