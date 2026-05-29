import { createContext, useState } from "react";
import api from "../api/axios";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [token , setToken ] = useState(localStorage.getItem("token") ||null)

    async function register (data){
        try{
            const res = await api.post('/register',data,{
                headers : {
                    "Content-Type": "multipart/form-data",
                }
            })
            console.log(res.data)
            setUser(res.data.user)
            setToken(res.data.token)
            localStorage.setItem('token', res.data.token)

        }catch(er){
            console.log(er)
        }
    }

     async function login(data) {

        try {

            const res = await api.post("/login", data);

            localStorage.setItem("token", res.data.token);

            setUser(res.data.user);

            return true;

        } catch (error) {

            console.log(error.response.data);

            return false;
        }
    }

    async function logout (){
        localStorage.removeItem("token")
        
    }

    return (
        <AuthContext.Provider value={{ user, setUser ,token , setToken , register , login ,logout}}>
            {children}
        </AuthContext.Provider>
    );
}