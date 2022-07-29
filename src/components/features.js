
/* This example requires Tailwind CSS v2.0+ */
import { LinkIcon, GlobeAltIcon, CubeTransparentIcon, UserAddIcon, CodeIcon, GiftIcon, LockClosedIcon } from '@heroicons/react/outline'
import AnsFeature from '../assets/ans-feature.png'
import ArkFeature from '../assets/ark-feature.png'
import LinkFeature from '../assets/link-feature.jpeg'

const ansCopy = {
  title: "Arweave Name Services (ANS)",
  description: "Arweave Names Service combines a decentralized domains naming service and a decentralized Gravatar-like protocol into a new protocol called ANS."
}

const ansFeatures = [
  {
    id: 1,
    name: 'Universal ID for the permaweb',
    description:
      'ANS domains are portable username NFTs with social metadata on Arweave.',
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: 'Unique incentive mechanism',
    description:
      'ANS minting fees are distributed amongst holders as per the Proof of Radical algorithm',
    icon: GiftIcon,
  },
  {
    id: 3,
    name: 'Pay once, own forever',
    description:
      'ANS domains don\'t expire, so it is not possible to lose control over your username. As NFTs, it is possible to buy, sell and trade them.',
    icon: LockClosedIcon,
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

const publicSquareFeatures = [
  {
    id: 1,
    name: 'Social graph',
    description:
      'The relationships Public Square users have to each other and the dapps they use are queryable via the decent.land API',
    icon: UserAddIcon,
  },
  {
    id: 2,
    name: 'Open, modular social',
    description:
      'dApps built on the Public Square protocol can choose to be public or token-gated, interlinked or siloed. ANS is the default username system, and cross-chain identity is managed by Ark.',
    icon: CubeTransparentIcon,
  },
  {
    id: 3,
    name: 'Censorship-resistant',
    description:
      'decent.land protocols run on Arweave - a storage-focused blockchain with 200 years of data recall guaranteed. All decent.land code is open source, so even the APIs can be self-hosted.',
    icon: LockClosedIcon,
  },
]

export default function Features() {
  return (
    <div className="py-16 bg-slate-900 overflow-hidden lg:py-24">
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
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-white tracking-tight sm:text-3xl">
              ANS (Arweave Name Services)
            </h3>
            <p className="mt-3 text-lg text-gray-400">
              Arweave Name Services combines a decentralized domains and social metadata into a new protocol, built as the username layer of the permaweb.
            </p>

            <dl className="mt-10 space-y-10">
              {ansFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-white">{item.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-400">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <img
              className="relative mx-auto"
              width={490}
              src={AnsFeature}
              alt=""
            />
          </div>
        </div>


        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-extrabold text-white tracking-tight sm:text-3xl">Ark Protocol</h3>
              <p className="mt-3 text-lg text-gray-400">
                Ark is an identity linking protocol which makes it possible for users on Arweave to verifiably attest they own a wallet (or DID) on another chain
              </p>

              <dl className="mt-10 space-y-10">
                {arkFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-white">{item.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-400">{item.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">

              <img
                className="relative mx-auto"
                width={490}
                src={ArkFeature}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-white tracking-tight sm:text-3xl">
              Public Square
            </h3>
            <p className="mt-3 text-lg text-gray-400">
              The Public Square protocol is a framework for decentralized social media and social graphs, collating data from different chains.
            </p>

            <dl className="mt-10 space-y-10">
              {publicSquareFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-white">{item.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-400">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">

            <img
              className="relative mx-auto"
              width={600}
              src={LinkFeature}
              alt=""
            />
          </div>
        </div>

      </div>
    </div>
  )
}
