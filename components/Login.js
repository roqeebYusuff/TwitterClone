import { signIn } from 'next-auth/react'
import Image from 'next/image'

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center space-y-20 pt-48">
      <Image
        src="https://rb.gy/ogau5a"
        width={150}
        height={150}
        objectFit="contain"
      />

      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="group relative inline-block inline-flex items-center justify-start overflow-hidden rounded-full bg-blue-600 px-5 py-3 font-medium transition-all hover:bg-white"
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            >
              <span className="absolute inset-0 rounded-full border-0 border-white transition-all duration-100 ease-linear group-hover:border-[25px]"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                Sign in with {provider.name}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Login
