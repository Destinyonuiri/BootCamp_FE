import {createBrowserRouter} from "react-router-dom"
import HomeScreen from "../pages/HomeScreen"
import Layout from "../components/Block/Layout"
import About from "../pages/About"
import Contact from "../pages/Contact"

export const  mainRoute = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<HomeScreen/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
        ]
    }
])