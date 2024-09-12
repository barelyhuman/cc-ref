import { Exercise } from './exercise.js'

export const pullups = new Exercise('pull-ups', 'Pull Ups')
pullups.addVariation(0, 'Vertical Pulls')
pullups.addRepRange(0, 'beginner', { sets: 1, reps: 10 })
pullups.addRepRange(0, 'intermediate', { sets: 2, reps: 20 })
pullups.addRepRange(0, 'progression', { sets: 3, reps: 40 })

pullups.addVariation(1, 'Horizontal Pulls')
pullups.addRepRange(1, 'beginner', { sets: 1, reps: 10 })
pullups.addRepRange(1, 'intermediate', { sets: 2, reps: 20 })
pullups.addRepRange(1, 'progression', { sets: 3, reps: 30 })

pullups.addVariation(2, 'Jackknife Pulls')
pullups.addRepRange(2, 'beginner', { sets: 1, reps: 10 })
pullups.addRepRange(2, 'intermediate', { sets: 2, reps: 15 })
pullups.addRepRange(2, 'progression', { sets: 3, reps: 20 })

pullups.addVariation(3, 'Half')
pullups.addRepRange(3, 'beginner', { sets: 1, reps: 8 })
pullups.addRepRange(3, 'intermediate', { sets: 2, reps: 11 })
pullups.addRepRange(3, 'progression', { sets: 2, reps: 15 })

pullups.addVariation(4, 'Full')
pullups.addRepRange(4, 'beginner', { sets: 1, reps: 5 })
pullups.addRepRange(4, 'intermediate', { sets: 2, reps: 8 })
pullups.addRepRange(4, 'progression', { sets: 2, reps: 10 })

pullups.addVariation(5, 'Close')
pullups.addRepRange(5, 'beginner', { sets: 1, reps: 5 })
pullups.addRepRange(5, 'intermediate', { sets: 2, reps: 8 })
pullups.addRepRange(5, 'progression', { sets: 2, reps: 10 })

pullups.addVariation(6, 'Uneven')
pullups.addRepRange(6, 'beginner', { sets: 1, reps: 5 })
pullups.addRepRange(6, 'intermediate', { sets: 2, reps: 7 })
pullups.addRepRange(6, 'progression', { sets: 2, reps: 9 })

pullups.addVariation(7, '1/2 One Arm')
pullups.addRepRange(7, 'beginner', { sets: 1, reps: 4 })
pullups.addRepRange(7, 'intermediate', { sets: 2, reps: 6 })
pullups.addRepRange(7, 'progression', { sets: 2, reps: 8 })

pullups.addVariation(8, 'Assisted One Arm ')
pullups.addRepRange(8, 'beginner', { sets: 1, reps: 3 })
pullups.addRepRange(8, 'intermediate', { sets: 2, reps: 5 })
pullups.addRepRange(8, 'progression', { sets: 2, reps: 7 })

pullups.addVariation(9, 'One Arm Pull-Up')
pullups.addRepRange(9, 'beginner', { sets: 1, reps: 1 })
pullups.addRepRange(9, 'intermediate', { sets: 2, reps: 3 })
pullups.addRepRange(9, 'progression', { sets: 2, reps: 6 })
