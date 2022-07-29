import ForesightLogo from '../assets/foresight.svg'
import LonghashLogo from '../assets/longhash.png'
import LdLogo from '../assets/ld.png'

export default function LogoBar() {
  return (
    <section class="bg-slate-900 p-8">
    <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
      <span class="font-semibold text-white uppercase">OUR BACKERS</span>
      <div class="flex flex-wrap justify-center items-center mt-8 mb-8 text-gray-500 sm:justify-between">
        <a href="#" class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
          <img class="w-13 h-20 " src={ForesightLogo} />
        </a>
        <a href="#" class="mr-10 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
          <img class="slate-500 w-13 h-20" src={LonghashLogo} />
        </a>
        <a href="#" class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
          <img class="w-13 h-20" src={LdLogo} />
        </a>
      </div>
    </div>
    </section>
  )
}