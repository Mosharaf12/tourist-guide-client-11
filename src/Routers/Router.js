import AllServices from "../Pages/AllServices/AllServices";
import Blog from "../Pages/Blog/Blog";
import CardDetails from "../Pages/CardDetails/CardDetails";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register/Register";


const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../Pages/Home/Home");

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement: <ErrorPages></ErrorPages>,
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
                
            },
            {
                path:'/services/:id',
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`),
                element: <CardDetails></CardDetails>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])