import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import { ToastContainer, } from 'react-toastify';
import Register from './components/Register';
function App() {
    const myRoute =createBrowserRouter(
      createRoutesFromElements(
        <Route>
          <Route path='/' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
        </Route>
      )
    )

  return (
    <>
      <ToastContainer />
      <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
