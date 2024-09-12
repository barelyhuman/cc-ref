export function ExerciseStepRangeItem({ title, reps, sets }) {
  const trySP = new URLSearchParams()
  trySP.set('reps', reps)
  trySP.set('sets', sets)
  return (
    <div className="flex px-3 py-4 w-full flex-row gap-10 justify-between items-center">
      <p className="text-zinc-500 flex-1">{title}</p>
      <p className="text-zinc-400 font-bold flex-1">
        {reps} rep(s) for {sets} set(s)
      </p>
      <div className="flex-1 flex justify-end items-center">
        <button class="border border-zinc-400 rounded-md">
          <span
            class="bg-indigo-500 block p-1 px-2 -translate-x-1
  -translate-y-1 border-black rounded-md text-md hover:translate-x-0 hover:translate-y-0 transition "
          >
            <a href={`/try?${trySP.toString()}`} class="block w-full">
              Try?
            </a>
          </span>{' '}
        </button>
      </div>
    </div>
  )
}
