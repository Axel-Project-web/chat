//pages
import { Home } from "../pages/Home/Home";
import { Error } from "../pages/Error/Error";
import { EmailForm } from "../pages/Email/EmailForm";
import { UserForm } from "../pages/Username/UserForm";
import { Condition } from "../pages/Conditions/Conditions";
import { PasswordForm } from "../pages/PasswordForm/PasswordForm";

//context
import { RegisterContextProvider } from "../context/RegisterContext";

//Layout
import { Register } from '../layout/Register/Register';

//react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: "/login",
                element: <h1>login</h1>
            },
            {
                path: "/register",
                element: (
                    <RegisterContextProvider>
                        <Register/>
                    </RegisterContextProvider>
                ),
                children: [
                    {
                        path: "/register",
                        element: <Condition/>
                    },
                    {
                        path: "/register/username",
                        element: <UserForm/>
                    },
                    {
                        path: "/register/email",
                        element: <EmailForm/>
                    },
                    {
                        path: "/register/password",
                        element: <PasswordForm/>
                    }
                ]
            }
        ],
        errorElement: <Error/>
    }
])

function Router() {
    return <RouterProvider router = {router}/>
}

export { Router };