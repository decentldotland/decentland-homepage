import Discord from '../assets/discord.png'
import AlertBox from './alertbox'
import { dlLinks } from '../../src/constants'
import EthLogo from '../assets/eth-white.png'
import ArLogo from '../assets/ar.svg'
import AvaxLogo from '../assets/avax.svg'
import OpLogo from '../assets/optimism.png'
import BscLogo from '../assets/bsc.png'
import NearLogo from '../assets/near.png'
import { DocumentTextIcon } from '@heroicons/react/outline'

const heroCopy = {
  title: "Social infrastructure for web3",
  description: "Protocols to power identity, token-gating, and DAOs"
}



function Hero() {
  return (


    <section class="bg-gradient-to-bl from-gray-800/95 via-slate-900 to-black">
      <div class="bg-gradient-to-b from-purple-500/5 to-black/20">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

          <h1 class="mb-4 text-4xl font-extrabold tracking-tight drop-shadow-lg drop-shadow-teal-500 leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            <span class="text-white" style={{textShadow: "2.5px 2.5px black"}}>{heroCopy.title}</span>
          </h1>
          <p class="mb-8 text-lg font-thin text-gray-100/70 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-100">
            {heroCopy.description}
          </p>



          <div class="flex p-10 flex-col mb-10 lg:mb-16 lg:pb-22 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 text-xl">
            
            <a href="https://docs.decent.land" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-gray-100 hover:text-black focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              <DocumentTextIcon class="mr-2 w-6 h-6" />
              <span class="lg:text-xl">Read the docs</span>
            </a>

            <a href="https://discord.gg/decentland" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white hover:text-gray-900 rounded-lg focus:ring-4 focus:ring-gray-100 dark:text-black bg-gradient-to-r from-green-500 to-emerald-500 dark:border-white dark:focus:ring-gray-800">
              <img class="object-scale-down w-6 h-6 mr-2 p-1 bg-black rounded-full" src={Discord} />
              <span class="lg:text-xl">Join the Discord</span>
            </a>

          </div>

          <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-24">
            <span class="font-semibold text-white uppercase">MULTICHAIN</span>
            <div class="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
              <a  class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                <img class="w-12 h-16" src={ArLogo} />
              </a>
              <a  class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                <img class="slate-500 w-7 h-11" src={EthLogo} />
              </a>
              <a  class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                <img class="w-10 h-10" src={NearLogo} />
              </a>
              <a  class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                <img class="w-10 h-15" src={OpLogo} />
              </a>
              <a  class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                <img class="w-10 h-15" src={BscLogo} />
              </a>
              <a  class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                <img class="w-10 h-15" src={AvaxLogo} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
