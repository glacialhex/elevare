import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex w-screen h-screen">
        <div className="w-4/12 h-screen bg-customColor1 flex flex-col justify-center items-center p-8">
          <div className="w-full max-w-md flex flex-col justify-center items-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={100}
              height={100}
              className="mb-8"
            />
            <div className="w-full">
              <div className="mb-4 text-red-500 flex justify-center align-center" id="error-message">
                Error messages will be displayed here
              </div>
              <form className="shadow-none rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="username">
                    Username
                  </label>
                  <input
                    className="appearance-none bg-transparent border-b-2 border-gray-300 w-full py-2 px-3 text-gray-300 outline-none focus:border-customColor2"
                    id="username"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="appearance-none bg-transparent border-b-2 border-gray-300 w-full py-2 px-3 text-gray-300 leading-tight outline-none focus:border-customColor2"
                    id="password"
                    type="password"
                    placeholder="**********"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-customColor2 hover:brightness-75 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Sign In
                  </button>
                  <a
                    className="inline-block align-baseline font-bold text-sm text-customColor2 hover:brightness-75"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-8/12 h-screen bg-customColor2 flex justify-center items-center">
          <div className="relative w-full h-full">
            <Image
              src="/studying.jpg"
              alt="Background"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
