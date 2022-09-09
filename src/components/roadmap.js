import { useInView } from 'react-intersection-observer';
import Icon1 from '../assets/near/1.png'
import Icon2 from '../assets/near/2.png'
import Icon3 from '../assets/near/3.png'
import Icon4 from '../assets/near/4.png'

const phases = {
  content: [
    {
      id: 0,
      nickname: 'discovery',
      title: 'groundwork',
      status: 'COMPLETE 🎉',
      color: 'bg-gradient-to-br from-emerald-500 to-green-400',
      badgeColor: 'bg-emerald-300',
      image: Icon1,
      description: 'ANS path lorem ipsum towards open dolor web3 social',
      items: [
        'ANS private beta',
        'Ark Protocol live on 9 mainnets',
        'Ark API v1',
        'Integration with ENS, POAP, and NFTs',
        'ar.page launch'
      ]
    },
    {
      id: 1,
      nickname: 'settlement',
      title: 'identity tools',
      status: 'IN PROGRESS 🚧',
      color: 'bg-gradient-to-br from-emerald-300/90 to-teal-400',
      badgeColor: 'bg-emerald-200',
      image: Icon2,
      items: [
        'ANS public beta',
        'ar.page V2',
        'Ark mainnet live on Arweave and NEAR mainnet'
      ]
    },
    {
      id: 2,
      nickname: 'community',
      title: 'social layer',
      status: 'SOON 🚀',
      color: 'bg-gradient-to-br from-teal-300/90 to-teal-400',
      badgeColor: 'bg-teal-200',
      image: Icon3,
      items: [
        'ANS private beta',
        'Ark Protocol live on 9 mainnets',
        'Ark API v1',
        'Integration with ENS, POAP, and NFTs',
        'ar.page launch'
      ]
    },
    {
      id: 3,
      nickname: 'society',
      title: 'dao tooling',
      status: 'SOON 🚀',
      color: 'bg-gradient-to-br from-teal-400 to-indigo-400',
      badgeColor: 'bg-teal-200',
      image: Icon4,
      items: [
        'ANS private beta',
        'Ark Protocol live on 9 mainnets',
        'Ark API v1',
        'Integration with ENS, POAP, and NFTs',
        'ar.page launch'
      ]
    },
  ]
}

export function RoadmapPhase({phase}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-80px 0px',
  });

  const dropshadow = 'drop-shadow-[0_0px_20px_rgba(0,255,153,0.15)]'

  return (
    <div ref={ref}>
      <div className={`my-20 flex flex-col ${phase.id % 2 === 0 ? "md:flex-row": "md:flex-row-reverse"} items-center transition-all duration-300 ${inView? ' opacity-100': 'opacity-0'}`}>
        <div className={`relative w-80 h-80 mx-8 rounded-xl ${dropshadow}`}>
          <img src={phase.image} className="w-80 h-80 rounded-xl" alt="" />
          <div className="absolute bottom-0 rounded-b-xl w-full py-2 text-center text-2xl font-bold bg-black/30 backdrop-blur-lg text-white px-4">Phase {phase.id}: {phase.nickname}</div>
        </div>
        <div className="mx-2">
          <div className={`text-white mt-3 block w-full overflow-hidden rounded-lg px-4 py-2 ${phase.color}`}>
            <div className="ml-4 relative max-w-sm">
              <div className="font-medium mt-1 mb-2 text-white text-3xl" style={{textShadow: "0.25px 0.7px, -0.25px 0.7px"}}>{phase.title}</div>
              <span class={`${phase.badgeColor} absolute top-1.5 right-[7px] text-gray-800 text-sm font-bold px-2.5 py-0.5 rounded`}>{phase.status}</span>
              <div className="text-xs mb-4">{phase?.description}</div>
              <div className="ml-4 my-4">
                <ul className="list-disc">
                  {phase?.items?.map((item) => <li className="leading-tight">{item}</li>)}
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
    <div className="bg-slate-900">
      <div>
        <div className="grid place-items-center pb-20">
          <div className="text-6xl mt-8 mb-4 font-bold m-4">roadmap</div>
          <div className="text-md mb-12">The path lorem ipsum towards open dolor web3 social sit amet</div>

          <roadmap className="mt-3 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-1 xl:gap-x-8">
            {phases.content.map((phase) => <RoadmapPhase phase={phase} />)}
          </roadmap>
        </div>
      </div>
    </div>
  )
}
