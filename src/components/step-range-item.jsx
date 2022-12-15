export function ExerciseStepRangeItem({ title, reps, sets }) {
  return (
    <div className="flex px-3 py-4 w-full flex-row justify-between items-center">
      <p className="text-zinc-500">{title}</p>
      <p className="text-zinc-400 font-bold">
        {reps} rep(s) for {sets} set(s)
      </p>
    </div>
  );
}