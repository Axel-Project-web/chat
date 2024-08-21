//react
import { createContext, PropsWithChildren, useEffect, useState } from "react";

//react-router-dom
import { useNavigate } from "react-router-dom";

//init
const routes: Array<string> = [
    "/register",
    "/register/username",
    "/register/email",
    "/register/password",
]

const AllData = {
    agree: false,
    email: '',
    username: '',
    currentPath: routes[0]
}

//creating context and init
const RegisterContext = createContext<any>( AllData );

function RegisterContextProvider({ children }: PropsWithChildren) {

    //hooks
    const navigate = useNavigate();
    const [data, setData] = useState<any>(AllData);

    useEffect(()=> {
        navigate( data.currentPath );
    }, [data.currentPath]);

    //next router
    function updateState({ name, value }: {name: string, value: string | boolean}) {
        const currentIndexPath: number = routes.findIndex( path => path === data.currentPath );
        if( currentIndexPath + 1 <= routes.length ) {
            setData({
                ...data,
                [name]: value,
                currentPath: routes[ currentIndexPath + 1 ]
            })
        }
    }

    function goToPrevRoute() {
        const currentIndexPath: number = routes.findIndex( path => path === data.currentPath );
        if( currentIndexPath - 1 < 0 ) return setData({
            ...data,
            currentPath: "/"
        })
        setData({
            ...data,
            currentPath: routes[ currentIndexPath - 1 ]
        })
    }

    //data to distribute
    const dataToDistribute = {
        routes,
        ...data,
        updateState,
        goToPrevRoute,
    }

    return (
        <RegisterContext.Provider value = { dataToDistribute }>
            { children }
        </RegisterContext.Provider>
    )
}

export {
    RegisterContext,
    RegisterContextProvider,
}