import AllServices from "../Pages/AllServices/AllServices";
import Blog from "../Pages/Blog/Blog";


const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../Pages/Home/Home");

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                loader: ()=> fetch(`http://localhost:5000/homeservices`),
                element: <Home></Home>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'/services',
                element:<AllServices></AllServices>
                
            }
        ]
    }
])