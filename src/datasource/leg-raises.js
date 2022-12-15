import { Exercise } from "./exercise.js";

export const legRaises = new Exercise("leg-raises", "Leg Raises");
legRaises.addVariation(0, "Knee Tucks");
legRaises.addRepRange(0, "beginner", { sets: 1, reps: 10 });
legRaises.addRepRange(0, "intermediate", { sets: 2, reps: 25 });
legRaises.addRepRange(0, "progression", { sets: 3, reps: 40 });

legRaises.addVariation(1, "Flat Knee Raises");
legRaises.addRepRange(1, "beginner", { sets: 1, reps: 10 });
legRaises.addRepRange(1, "intermediate", { sets: 2, reps: 20 });
legRaises.addRepRange(1, "progression", { sets: 3, reps: 35 });

legRaises.addVariation(2, "Flat Bent Leg Raises");
legRaises.addRepRange(2, "beginner", { sets: 1, reps: 10 });
legRaises.addRepRange(2, "intermediate", { sets: 2, reps: 15 });
legRaises.addRepRange(2, "progression", { sets: 2, reps: 30 });

legRaises.addVariation(3, "Flat Frog Raises");
legRaises.addRepRange(3, "beginner", { sets: 1, reps: 8 });
legRaises.addRepRange(3, "intermediate", { sets: 2, reps: 15 });
legRaises.addRepRange(3, "progression", { sets: 3, reps: 25 });

legRaises.addVariation(4, "Flat Straight Leg Raises");
legRaises.addRepRange(4, "beginner", { sets: 1, reps: 5 });
legRaises.addRepRange(4, "intermediate", { sets: 2, reps: 10 });
legRaises.addRepRange(4, "progression", { sets: 2, reps: 20 });

legRaises.addVariation(5, "Hanging Knee Raises");
legRaises.addRepRange(5, "beginner", { sets: 1, reps: 5 });
legRaises.addRepRange(5, "intermediate", { sets: 2, reps: 10 });
legRaises.addRepRange(5, "progression", { sets: 2, reps: 15 });

legRaises.addVariation(6, "Hanging Bent Leg Raises");
legRaises.addRepRange(6, "beginner", { sets: 1, reps: 5 });
legRaises.addRepRange(6, "intermediate", { sets: 2, reps: 10 });
legRaises.addRepRange(6, "progression", { sets: 2, reps: 15 });

legRaises.addVariation(7, "Hanging Frog Raises");
legRaises.addRepRange(7, "beginner", { sets: 1, reps: 5 });
legRaises.addRepRange(7, "intermediate", { sets: 2, reps: 10 });
legRaises.addRepRange(7, "progression", { sets: 2, reps: 15 });

legRaises.addVariation(8, "Partial Straight Raises");
legRaises.addRepRange(8, "beginner", { sets: 1, reps: 5 });
legRaises.addRepRange(8, "intermediate", { sets: 2, reps: 10 });
legRaises.addRepRange(8, "progression", { sets: 2, reps: 15 });

legRaises.addVariation(9, "Hanging Straight Leg Raises");
legRaises.addRepRange(9, "beginner", { sets: 1, reps: 5 });
legRaises.addRepRange(9, "intermediate", { sets: 2, reps: 10 });
legRaises.addRepRange(9, "progression", { sets: 2, reps: 30 });
