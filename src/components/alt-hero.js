import Discord from '../assets/discord.png'
import AlertBox from './alertbox'
import { dlLinks } from '../../src/constants'
import EthLogo from '../assets/eth-white.png'
import ArLogo from '../assets/ar.svg'
import AvaxLogo from '../assets/avax.svg'
import { DocumentTextIcon } from '@heroicons/react/outline'

const heroCopy = {
  title: "Social infrastructure for web3",
  description: "Protocols to power identity, token-gating, and DAOs"
}



function Hero() {
  return (


    <section class="bg-gradient-to-b from-slate-700 to-slate-800">
      <div class="bg-gradient-to-b from-emerald-700 to-slate-800">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

          <h1 class="mb-4 text-4xl font-extrabold tracking-tight drop-shadow-lg drop-shadow-teal-500 leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            <span class="text-white" style={{textShadow: "2.5px 2.5px black"}}>{heroCopy.title}</span>
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-300/70 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-300">
            {heroCopy.description}
          </p>



          <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="https://docs.decent.land" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-teal-600 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              <DocumentTextIcon class="mr-2 w-6 h-6" />
              Learn more
            </a>

            <a href="https://discord.gg/decentland" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white hover:text-gray-900 rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-white dark:hover:bg-slate-800 dark:focus:ring-gray-800">
              <img class="object-scale-down w-6 h-6 mr-2 p-1 bg-blue-500 rounded-full" src={Discord} />
              Join Discord
            </a>

          </div>

          <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span class="font-semibold text-white uppercase">MULTICHAIN</span>
            <div class="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
              <a href="#" class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                <img class="w-15 h-20" src={ArLogo} />
              </a>
              <a href="#" class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                <img class="slate-500 w-10 h-15" src={EthLogo} />
              </a>
              <a href="#" class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                <img class="w-15 h-20" src={AvaxLogo} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
