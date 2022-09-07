const phases = {
  content: [
    {
      id: 0,
      title: 'groundwork',
      status: 'COMPLETE',
      color: 'bg-gradient-to-br from-emerald-500 to-green-400',
      badgeColor: 'bg-emerald-300',
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
      title: 'identity infrastructure',
      status: 'IN PROGRESS',
      color: 'bg-gradient-to-br from-emerald-300 to-teal-400',
      badgeColor: 'bg-emerald-200',
      items: [
        'ANS public beta',
        'ar.page V2',
        'Ark mainnet live on Arweave and NEAR mainnet'
      ]
    },
    {
      id: 3,
      title: 'social layer',
      status: 'SOON',
      color: 'bg-gradient-to-br from-teal-300 to-teal-400',
      badgeColor: 'bg-teal-200',
      items: [
        'ANS private beta',
        'Ark Protocol live on 9 mainnets',
        'Ark API v1',
        'Integration with ENS, POAP, and NFTs',
        'ar.page launch'
      ]
    },
    {
      id: 4,
      title: 'dao tooling',
      status: 'SOON',
      color: 'bg-gradient-to-br from-teal-400 to-indigo-400',
      badgeColor: 'bg-teal-200',
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

export default function Roadmap() {
  return (

    <div className="bg-slate-900">
      <div>
        <div className="grid place-items-center">
          <div className="text-6xl mt-8 mb-4 font-bold m-4">roadmap</div>
          <div className="text-md mb-12">The path lorem ipsum towards open dolor web3 social sit amet</div>
          <roadmap className="mt-3 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-1 xl:gap-x-8">
            {phases.content.map(
              (phase) => (
                <div className="">
                  <div className="text-4xl ml-6">phase {phase.id}</div>
                  <div className={`text-black m-4 block w-full overflow-hidden rounded-lg p-2 ${phase.color}`}>
                    <div className="ml-4">
                      
                      <div className="font-medium mt-2 text-black text-2xl">{phase.title}<span class={`${phase.badgeColor} font-thin text-gray-800 text-sm font-medium mr-2 mb-2 ml-2 px-2.5 py-0.5 rounded`}>{phase.status}</span></div>
                      <div className="text-xs mb-4">{phase.description}</div>
                      <div className="ml-4 mb-4 mt-4">
                        <ul className="list-disc">
                        {phase.items.map((item) => <li className="leading-tight">{item}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </roadmap>
        </div>
      </div>
    </div>
  )
}
