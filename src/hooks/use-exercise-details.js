import { exercises } from '../datasource/index.js'

export function useExerciseDetails(exercise) {
  const matchedExercise = exercises.find(x => x.data.name === exercise)

  return { variations: matchedExercise.data.variations }
}
