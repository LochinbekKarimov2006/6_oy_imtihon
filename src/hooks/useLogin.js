import { GoogleAuthProvider,signInWithPopup } from "firebase/auth"
import { auth } from "../firebase/confid";
import { GlobalContext } from "../context/GloblContext";
import { useContext } from "react";
function useLogin() {
    const {dispach}=useContext(GlobalContext)
    const signUpWithGoogle= async()=>{
        const provider =new GoogleAuthProvider();
        try{
            const result= await signInWithPopup(auth,provider);
            const user =result.user;
            dispach({type:'LOG_IN',payload:user})
            alert('Siz mofaqiyatli royhatdan otdinggiz')
        }catch(errey){
           const errorMassage=error.massage
           alert('Reeoe')
        }
    }
  return {signUpWithGoogle}
}

export {useLogin} 