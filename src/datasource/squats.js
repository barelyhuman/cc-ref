import { Exercise } from "./exercise.js";

export const squats = new Exercise("squats", "Squats");
squats.addVariation(0, "Shoulder Stand");
squats.addRepRange(0, "beginner", { sets: 1, reps: 10 });
squats.addRepRange(0, "intermediate", { sets: 2, reps: 25 });
squats.addRepRange(0, "progression", { sets: 3, reps: 50 });

squats.addVariation(1, "Jackknife");
squats.addRepRange(1, "beginner", { sets: 1, reps: 10 });
squats.addRepRange(1, "intermediate", { sets: 2, reps: 20 });
squats.addRepRange(1, "progression", { sets: 3, reps: 40 });

squats.addVariation(2, "Supported");
squats.addRepRange(2, "beginner", { sets: 1, reps: 10 });
squats.addRepRange(2, "intermediate", { sets: 2, reps: 15 });
squats.addRepRange(2, "progression", { sets: 2, reps: 30 });

squats.addVariation(3, "Half");
squats.addRepRange(3, "beginner", { sets: 1, reps: 8 });
squats.addRepRange(3, "intermediate", { sets: 2, reps: 35 });
squats.addRepRange(3, "progression", { sets: 2, reps: 50 });

squats.addVariation(4, "Full");
squats.addRepRange(4, "beginner", { sets: 1, reps: 5 });
squats.addRepRange(4, "intermediate", { sets: 2, reps: 10 });
squats.addRepRange(4, "progression", { sets: 2, reps: 30 });

squats.addVariation(5, "Close");
squats.addRepRange(5, "beginner", { sets: 1, reps: 5 });
squats.addRepRange(5, "intermediate", { sets: 2, reps: 10 });
squats.addRepRange(5, "progression", { sets: 2, reps: 20 });

squats.addVariation(6, "Uneven");
squats.addRepRange(6, "beginner", { sets: 1, reps: 5 });
squats.addRepRange(6, "intermediate", { sets: 2, reps: 10 });
squats.addRepRange(6, "progression", { sets: 2, reps: 20 });

squats.addVariation(7, "1/2 One Leg");
squats.addRepRange(7, "beginner", { sets: 1, reps: 5 });
squats.addRepRange(7, "intermediate", { sets: 2, reps: 10 });
squats.addRepRange(7, "progression", { sets: 2, reps: 20 });

squats.addVariation(8, "Assisted One Leg");
squats.addRepRange(8, "beginner", { sets: 1, reps: 5 });
squats.addRepRange(8, "intermediate", { sets: 2, reps: 10 });
squats.addRepRange(8, "progression", { sets: 2, reps: 20 });

squats.addVariation(9, "One Leg Squat");
squats.addRepRange(9, "beginner", { sets: 1, reps: 5 });
squats.addRepRange(9, "intermediate", { sets: 2, reps: 10 });
squats.addRepRange(9, "progression", { sets: 1, reps: 50 });
