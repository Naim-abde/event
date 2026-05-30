import { createContext, useState } from "react";
import api from "../api/axios";

export const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState(null);
  const [message, setMessage] = useState(null);
  const [users , setUser] = useState(null)

  async function store(data) {
    try {
      const res = await api.post("/create-category", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage(res.data);
      return true;

    } catch (er) {
      console.log(er);
      return false;
    }
  }
  async function getCategories (){
    try{
        const res = await api.get('/categories')
        setCategories(res.data)


    }catch(er){
        console.log(er)
    }

  }
  async function getUsers (){
    try{
        const res = await api.get('/all-users')
        setUser(res.data)
        console.log(users)


    }catch(er){
        console.log(er)
    }

  }

  

  return (
    <CategoryContext.Provider
      value={{
        categories,
        setCategories,
        getCategories,
        store,
        message,
        users,setUser , getUsers
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;