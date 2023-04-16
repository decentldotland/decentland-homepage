import Discord from '../assets/discord.png'
import AlertBox from './alertbox'
import { dlLinks } from '../../src/constants'
import EthLogo from '../assets/eth-white.png'
import ArLogo from '../assets/ar.svg'
import AvaxLogo from '../assets/avax.svg'
import OpLogo from '../assets/optimism.png'
import BscLogo from '../assets/bsc.png'
import NearLogo from '../assets/near.png'
import { DocumentTextIcon, GlobeIcon } from '@heroicons/react/outline'

const heroCopy = {
  title: "Social infrastructure for web3",
  description: "Protocols to power identity, token-gating, and DAOs"
}

export const DefaultAnimation = `ease-in-out duration-300 transition-all `;

function Hero() {
  return (


    <section className="bg-gradient-to-bl from-gray-800/95 via-slate-900 to-black">
      <div className="bg-gradient-to-b from-purple-500/5 to-black/20">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

          <h1 className="mb-4 text-2xl font-extrabold tracking-tight drop-shadow-lg drop-shadow-teal-500 leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            <span className="text-white " style={{textShadow: "2.5px 2.5px black"}}>{heroCopy.title}</span>
          </h1>
          <p className="mb-8 text-lg font-thin text-gray-100/70 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-100">
            {heroCopy.description}
          </p>



          <div className="flex p-10 flex-col mb-10 lg:mb-16 lg:pb-22 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 text-xl">
            
            <a href="https://docs.decent.land" className={"inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-gray-500 bg-gray-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 " + DefaultAnimation}>
              <DocumentTextIcon className="mr-2 w-6 h-6" />
              <span className="lg:text-xl">Read the docs</span>
            </a>

            <a href="https://discord.gg/decentland" className={`inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-white dark:focus:ring-gray-800 bg-indigo-500 hover:bg-indigo-400 text-white ` + DefaultAnimation}>
              <img className="object-scale-down w-6 h-6 mr-2 p-1 bg-black rounded-full" src={Discord} />
              <span className="lg:text-xl">Join the Discord</span>
            </a>

            <a href="https://leetyrrell.medium.com/a-decent-land-chapter-one-ae611cdd4e08" className={`inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black hover:text-gray-900 rounded-lg focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-white dark:focus:ring-gray-800 bg-green-400 hover:bg-green-300 ` + DefaultAnimation}>
              <GlobeIcon className="mr-2 w-6 h-6" />
              <span className="lg:text-xl">Learn the Lore</span>
            </a>

          </div>

          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-24">
            <span className="font-semibold text-white uppercase">MULTICHAIN</span>
            <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
              <a href="https://arweave.org" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                <img className="w-12 h-16" src={ArLogo} />
              </a>
              <a href="https://ethereum.org" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                <img className="slate-500 w-7 h-11" src={EthLogo} />
              </a>
              <a  className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                <img className="w-10 h-10" src={NearLogo} />
              </a>
              <a href="https://optimism.io" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                <img className="w-10 h-15" src={OpLogo} />
              </a>
              <a href="https://bnbchain.org" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                <img className="w-10 h-15" src={BscLogo} />
              </a>
              <a href="https://avax.com" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                <img className="w-10 h-15" src={AvaxLogo} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
