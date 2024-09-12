import { exercises } from '../datasource/index.js'

export function useExercises() {
  const _exercises = exercises.map(x => ({
    label: x.data.label,
    id: x.data.name,
  }))

  return { exercises: _exercises }
}
