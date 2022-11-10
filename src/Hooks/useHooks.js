import { useContext, useEffect } from "react"
import { AuthContext } from "../layout/AuthProvider"

const useHooks = (title) =>{
const {logout,auth} = useContext(AuthContext)
    useEffect(()=>{
        document.title = `${title}-Domestic Travol`
    },[title,logout,auth])
}

export default useHooks