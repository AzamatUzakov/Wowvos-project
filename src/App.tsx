
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
function App() {

  return (
    <>
      <div className="main-container flex">
        <Navbar />
        <div className="right-column w-full">
          <Header />  
        </div>
      </div>
    </>
  )
}

export default App
