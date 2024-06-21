import React from 'react'
import { Link } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'
function LoginBirinchi() {
    const {signUpWithGoogle}=useLogin()
  return (
    <div className='div10'>
       <div class="border rounded-md w-full max-w-sm mx-1 bg-white p-6 border-violet-600 dark:bg-gray-900" id="login-model">
  
  <p class="text-2xl font-bold dark:text-white">Royhatdan otish</p>
  <p class="dark:text-gray-200">Google va gmail orqali royhatdan o'tish</p>

  <div class="mt-4">
      <Link  class="block">
          <button onClick={signUpWithGoogle} class="w-full text-center py-2 my-3 border flex items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
              <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5 mr-2" alt="Google Icon"/>
              <span class="dark:text-gray-300">Google</span>
          </button>
      </Link>

      <Link to="/logaut" class="block">
          <button class="w-full text-center py-2 my-3 border flex items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
             
              <span class="dark:text-gray-300">Gmail orqali</span>
          </button>
      </Link>
  </div>
  
</div>
    </div>
  )
}

export default LoginBirinchi