import { useInView } from 'react-intersection-observer';
import Icon1 from '../assets/near/1.png'
import Icon2 from '../assets/near/2.png'
import Icon3 from '../assets/near/cabin.png'
import Icon4 from '../assets/near/4.png'

const phases = {
  content: [
    {
      id: 0,
      nickname: 'discovery',
      title: 'groundwork',
      status: 'COMPLETE 🎉',
      color: 'bg-gray-800',// 'bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600', //'bg-gradient-to-br from-emerald-700 to-green-600',
      badgeClass: 'bg-emerald-400 text-emerald-800',
      image: Icon1,
      description: `In 2021, we released the beta of decent.land - a public square protocol for open and permanent social. Building on the initial vision of tooling for modular web3 social landscape, we set about on the groundwork for identity and communities, based on the permanence of Arweave.`,
      items: [
        'Arweave Name Service (ANS), was launched in beta in November 2021 and airdropped to 500 early adopters.',
        'Ark, a multichain identity protocol, launched in alpha on Arweave in July 2022. With Ark, users can attest to their identity on 9 chains including Ethereum, Aurora, and Polygon.',
      ]
    },
    {
      id: 1,
      nickname: 'settlement',
      title: 'identity tools',
      status: 'COMPLETE 🎉',
      color: 'bg-gray-800',// 'bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600', //'bg-gradient-to-br from-emerald-700 to-green-600',
      badgeClass: 'bg-emerald-400 text-emerald-800',
      image: Icon2,
      description: `We're now building on top of the decent.land identity primitives to make multichain identity easy to integrate and verify for dApp developers! This lays the foundation for an open social protocol with a "bring your own identity" policy.`,
      items: [
        `Ark API & Oracle provide dApps with rich data on a user's ENS, DIDs, assets, POAPs, and more. Contracts on Arweave and NEAR can call the Ark Oracle to verify a user's identity.`,
        `A multichain social explorer integrated with ANS and Ark was launched with the V2 upgrade to ar.page.`
      ]
    },
    {
      id: 2,
      nickname: 'community',
      title: 'social layer',
      status: 'IN PROGRESS 🚧',
      color: 'bg-gray-800',
      badgeClass: 'bg-yellow-200 text-yellow-900',
      image: Icon3,
      description: 'A dApp-agnostic, integratable social layer for web3 communities is taking shape.',
      items: [
        `The Public Square - a revival of decent.land's first alpha protocol. Built on NEAR and Arweave, it will form the basis for the planned Tribus DAO tooling contract - decent.land's final iteration.`,
        `A social graph contract to track the relationships between users and content will be built and deployed on NEAR.`,
      ]
    },
    {
      id: 3,
      nickname: 'society',
      title: 'dao tooling',
      status: 'SPECCING 🧪',
      color: 'bg-gray-800',
      badgeClass: 'bg-transparent border border-dashed border-white text-white',
      image: Icon4,
      description: 'The Tribus contract is decent.land’s DAO tooling layer, designed to interact with the rest of the social and identity suite or slot in as a module with any DAO.\n\nRun governance, bounties, and DAO achievements on-chain, regardless of where your DAO’s assets live.',
      items: [
        'An on-chain token gating engine will be launched - create DAOs and sub-DAOs with verifiable identity attestations',
        'Integrate with SputnikDAO to add multisig control over social DAO features',
        'DAO bounties, governance and roles features rolled out for Tribuses'
      ]
    },
  ]
}

export function RoadmapPhase({ phase }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-80px 0px',
  });

  const dropshadow = 'drop-shadow-[0_0px_20px_rgba(0,255,153,0.15)]'

  return (
    <div ref={ref}>
      <div className={`my-20 flex flex-col ${phase.id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center transition-all duration-300 ${inView ? ' opacity-100' : 'opacity-0'}`}>
        <div className={`relative w-80 h-80 mx-8 rounded-xl ${dropshadow}`}>
          <img src={phase.image} className="w-80 h-80 rounded-xl" alt="" />
          <div className="absolute bottom-0 rounded-b-xl w-full py-2 text-center text-2xl font-bold bg-black/30 backdrop-blur-lg text-white px-4">Phase {phase.id}: {phase.nickname}</div>
        </div>
        <div className="mx-2">
          <div className={`text-white mt-3 block w-full overflow-hidden rounded-lg px-4 py-2 ${phase.color}`}>
            <div className="ml-4 relative max-w-sm">
              <div className="flex mt-3 mb-5 justify-between">
                <div className="font-medium text-white text-3xl mr-1" style={{ textShadow: "0.25px 0.7px, -0.25px 0.7px" }}>{phase.title}</div>
                <span class={`${phase.badgeClass} min-w-[120px] text-[13px] text-center font-bold px-2.5 pt-2 rounded max-h-[36px]`}>{phase.status}</span>
              </div>
              <div className="whitespace-pre-wrap mb-4">{phase?.description}</div>
              <div className="ml-4 my-4">
                <ul className="list-disc">
                  {phase?.items?.map((item) => <li className="leading-tight p-2">{item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Roadmap() {

  return (
    <div className="bg-slate-900 pt-2">
      <div className="lg:scale-100 md:scale-[0.9] scale-[0.87] -mt-72 md:-mt-36 lg:mt-0">
        <div className="grid md:place-items-center pb-20">
          <div className="text-5xl md:text-6xl mt-12 mb-4 font-bold md:m-4 text-center">The decent.land roadmap</div>
          <div className="text-[17px] text-center">From open social to DAO tooling</div>

          <roadmap className="mt-3 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-1 xl:gap-x-8">
            {phases.content.map((phase) => <RoadmapPhase phase={phase} />)}
           { /* <div className={`text-white mt-3 block w-full overflow-hidden rounded-lg px-4 py-2 bg-yellow-500`}>
              <div className="ml-4 relative max-w-sm">
                <div className="ml-4 relative max-w-sm">
                  <div className="font-medium mt-3 mb-5 text-white align-content-center text-3xl" style={{ textShadow: "0.25px 0.7px, -0.25px 0.7px" }}>
                    Token launch
                  </div>
                </div>
              </div>
            </div>
          */}
          </roadmap>
        </div>
      </div>
    </div>
  )
}
