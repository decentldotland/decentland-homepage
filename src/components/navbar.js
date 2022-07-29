import Logo from '../assets/logo.png'

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Ark', href: 'https://ark.decent.land' },
  { name: 'Docs', href: 'https://docs.decent.land' },
  { name: 'Blog', href: 'https://blog.decent.land'}
]

export default function Navbar() {
  return (
    <header className="bg-emerald-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">decent.land</span>
              <img
                className="h-10 w-auto"
                src={Logo}
                alt=""
              />
             
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          { /*
          <div className="ml-10 space-x-4">
            <a
              href="#"
              className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
            >
              Sign in
            </a>
            <a
              href="#"
              className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Sign up
            </a>
          </div>
          */ } 
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
