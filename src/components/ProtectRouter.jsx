import { Navigate } from "react-router-dom";

function ProtectRouter({children,user}) {
  if(user){
    return children
  }else{
    return <Navigate to='/logaut'/>
  }
}

export default ProtectRouter