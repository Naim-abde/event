import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

const Profile = () => {
    const {user } = useContext(AuthContext)
    console.log(8)
  return (
    <div>
        salm {user.name}
        
    </div>
  )
}

export default Profile
