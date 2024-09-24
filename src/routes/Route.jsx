import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import RootLayout from "../layout/RootLayout"
import Home from './../pages/home/Home';


function RoutesWrap() {
  return (
    createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path='/' element={<RootLayout/>}>
                    <Route index element={<Home/>}/>
                </Route>
            </>
        )
    )
  )
}

export default RoutesWrap