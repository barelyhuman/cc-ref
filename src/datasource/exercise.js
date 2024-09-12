export class Exercise {
  constructor(name, label) {
    this.data = {
      name: name,
      label: label,
      variations: [],
    }
  }

  addVariation(level, name) {
    this.data.variations.push({
      level: level,
      name,
      steps: {},
    })
  }

  addRepRange(level, step, range) {
    const index = this.data.variations.findIndex(x => x.level === level)
    if (index === -1) {
      throw new Error("level doesn't exist")
    }

    this.data.variations[index].steps[step] = {
      reps: range.reps,
      sets: range.sets,
    }
  }
}
