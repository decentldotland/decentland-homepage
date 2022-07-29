import Discord from '../assets/discord.png'

export default function Callout() {
  return (
    <section class="bg-gradient-to-b from-emerald-700 to-slate-800">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center pt-8 lg:py-16 lg:px-12">

        <h2 class="mb-4 text-lg font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          In beta: token-gated groups
        </h2>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-300">
          Join the beta for token-gated Telegram communities on <a class="inline-flex underline" rel="noopener noreferrer" target="_blank" href="https://docs.decent.land/ark-protocol/supported-chains">all chains supported by Ark.</a>
        </p>
        <a href="https://discord.gg/decentland" rel="noopener noreferrer" target="_blank" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">

          <img class="object-scale-down w-6 h-6 mr-2" src={Discord} />
          Join Discord
        </a>
      </div>
    </section>
  )
}