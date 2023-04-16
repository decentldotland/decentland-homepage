
/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect, useState } from 'react';
import { LinkIcon, ClockIcon, LightningBoltIcon, CubeTransparentIcon, UserIcon, UserAddIcon, CodeIcon, GiftIcon, LockClosedIcon, PhotographIcon, ShareIcon, UserGroupIcon, CashIcon } from '@heroicons/react/outline'
import DameonLight from '../assets/dameonlight.jpeg'
import DameonDark from '../assets/dameondark.jpeg'
import AnsFeature2 from '../assets/ans-feature2.png'
import ArkFeature from '../assets/ark-feature.png'
import ArkArt from '../assets/ark-art.jpg'

const ansCopy = {
  title: "Arweave Name Services (ANS)",
  description: "Arweave Name Service (ANS) is a permanent, portable, social domain system built on Arweave. Pay once, own forever.",
}

const ansFeatures = [
  {
    id: 1,
    name: 'A versatile ID for the permaweb',
    description:
      'ANS labels are portable, permanent domains with social metadata on Arweave. Holders will receive powerful benefits, and an ever-expanding toolbet of features.',
    icon: UserGroupIcon,
  },
  {
    id: 2,
    name: 'Built-in Marketplace',
    description:
      'All labels are available for sale on the ANS marketplace. Buy and sell instantly with no fees thanks to everpay.io integration.',
    icon: CashIcon,
  },
  {
    id: 3,
    name: 'Powered by EXM',
    description:
      'EXM is a protocol that allows instant transactions Arweave. Waiting 20 minutes for a transaction to confirm is a thing of the past.',
    icon: LightningBoltIcon,
  },
]
const arkFeatures = [
  {
    id: 1,
    name: 'Link your identity between chains',
    description:
      'Ark is a cross-chain identity verification protocol which turns ANS into a master identity for managing access to DAOs and token-gated communities.',
    icon: LinkIcon,
  },
  {
    id: 2,
    name: 'Developer API',
    description:
      'dApps dealing with cross-chain identity can leverage Ark to get information about who a user is on other chains. The API can answer questions like "which Arweave address owns maias.eth?", or "what does biologist.ar own on Fantom?".',
    icon: CodeIcon,
  },
]

const arPageFeatures = [
  {
    id: 1,
    name: 'img.arweave.dev + ar.page = Web3 Instagram',
    description:
      'img.arweave.dev integration allows for an Instagram-like experience, and ar.page\'s support for cross-chain tokens lets users flex their collectibles. All, in one place.',
    icon: PhotographIcon,
  },
  {
    id: 2,
    name: 'Rich Social Metadata',
    description:
      'With 17+ protocols integrated and more to come, ar.page offers a rich profile-builder experience for ANS label holders.',
    icon: UserAddIcon,
  },
  {
    id: 3,
    name: 'Post Anywhere, Find Everything in One Place',
    description:
      'With aggregated feeds, you can post anywhere and find everything in one place. Consider ar.page the canonical source for all your social activity.',
    icon: ShareIcon,
  },
]

export default function Features() {


  const [stats, setAnsStats] = useState([]);

  useEffect(() => {
    fetch('https://vgwejldlj9ify3ezl9tw-9fhb0g-giud60fe-5q-_vi.exm.run/')
      .then(response => response.json())
      .then(data => {
        setAnsStats(data?.balances?.length);
      });
  })

  const urlclass = "text-blue-400 hover:underline decoration-blue-600 hover:text-blue-600"
  const hover = "hover:shadow-lime-300/50 hover:shadow-lg hover:-translate-y-2 ease-in-out duration-300 transition-all "
  const hoverANS = "hover:shadow-blue-300/50 ihover:shadow-lg hover:-translate-y-2 ease-in-out duration-300 transition-all "
  const hoverARK = "hover:-translate-y-2 ease-in-out duration-300 transition-all "

  return (
    <div className="py-16 bg-gradient-to-b from-black via-teal-900 to-slate-900 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">

        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Identity and social on Arweave
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-400">
            decent.land is a set of web3 social protocols for identity, DAO governance and social networking.

            Built on Arweave, decent.land stores all data on-chain - immutable and permanent.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className={`mt-10 mx-4 relative lg:mt-0 rounded-xl ${hover}`}>
            <a href="https://dameon1.ar.page" className="" aria-hidden="true">
              <img
                className="relative mx-auto rounded-xl"
                width={600}
                src={DameonLight}
                alt=""
              />
            </a>
          </div>

          <div className="relative">
            <h3 className="text-2xl font-extrabold text-white tracking-tight sm:text-3xl">
              <a className="hover:underline" href="https://ar.page">ar.page</a>
            </h3>
            <p className="mt-3 text-lg text-gray-400">
              ar.page is a social profile powered by ANS and Ark Protocol that aggregates crosschain data from protocols like <a href="https://poap.xyz" className={urlclass}>POAPS</a>, <a href="https://rss3.io" className={urlclass}>RSS3</a>, <a href="https://stamps.arweave.dev/" className={urlclass}>Stamps</a>, and many more.
            </p>

            <dl className="mt-10 space-y-10">
              {arPageFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-emerald-400 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-white">{item.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-400">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-white tracking-tight sm:text-3xl">
              <a className="hover:underline" href="https://ans.gg">ANS (Arweave Name Services)</a>
            </h3>
            <p className="mt-3 text-lg text-gray-400">
              Arweave Name Services combines a decentralized domains and social metadata into a new protocol, built as the username layer of the permaweb.
            </p>

            <div class="p-2 mb-0 bg-emerald-800 mt-3 text-md text-gray-100 rounded-md flex items-center"><p class="flex m-1 justify-center"><UserIcon className="mr-3 ml-1 flex justify-center m-1 h-5 w-5"/>ANS public beta underway with {stats} holders!</p></div>

            <dl className="mt-10 space-y-10">
              {ansFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-emerald-400 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-white">{item.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-400">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <a href="https://ans.gg" className={`mt-10 -mx-4 relative lg:mt-0`} aria-hidden="true">
            <img
              className={`relative mx-auto rounded-xl ${hoverANS}`}
              width={490}
              src={AnsFeature2}
              alt=""
            />
          </a>
        </div>


        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-extrabold text-white tracking-tight sm:text-3xl">
                <a className="hover:underline" href="https://ark.decent.land">Ark Protocol</a>
              </h3>
              <p className="mt-3 text-lg text-gray-400">
                Ark is an identity linking protocol which makes it possible for users on Arweave to verifiably attest they own a wallet (or DID) on another chain
              </p>

              <dl className="mt-10 space-y-10">
                {arkFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-emerald-400 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-white">{item.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-400">{item.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <a href="https://ark.decent.land" className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <img
                className={`relative mx-auto ${hoverARK} rounded-lg`}
                width={490}
                src={ArkFeature}
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="relative mt-32">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Explore the rich lore of decent.land
          </h2>
          <div className="flex flex-col md:flex-row gap-x-12 justify-center items-center mt-10">
            <img className="w-60 h-60 rounded-xl" src={ArkArt} />
            <div className="mt-10 md:mt-0 ">
              <p className="max-w-[400px] mb-8 text-gray-100 text-center md:text-left">
                Decent.land is an ever-developing novel about an ancient nomadic civilization exploring a Decent Land, documenting their encounters with the fauna and the discoveries with the flora.
              </p>
              <div className="flex flex-col items-center md:items-start">
                <a target="_blank" href="https://leetyrrell.medium.com/a-decent-land-chapter-one-ae611cdd4e08" className={urlclass}>
                  Read the story
                </a>
                <a target="_blank" href="https://mint.decent.land" className={urlclass}>
                  Mint a settler pass NFT
                </a>
                <a target="_blank" href="https://twitter.com/DecentLandArt" className={urlclass}>
                  Follow the developments on Twitter
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
