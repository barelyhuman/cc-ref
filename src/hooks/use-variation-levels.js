import { exercises } from "../datasource/index.js";

export function useVariationLevels(exercise, level) {
  const _exercise = exercises.find((x) => x.data.name === exercise);
  const step = _exercise.data.variations.find(
    (x) => x.level === parseInt(level)
  );

  return {
    step: step,
    levels: step.steps,
  };
}
