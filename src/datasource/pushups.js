import { Exercise } from './exercise.js'

export const pushups = new Exercise('push-ups', 'Push Ups')
pushups.addVariation(0, 'Wall Pushups')
pushups.addRepRange(0, 'beginner', { sets: 1, reps: 10 })
pushups.addRepRange(0, 'intermediate', { sets: 2, reps: 25 })
pushups.addRepRange(0, 'progression', { sets: 3, reps: 50 })

pushups.addVariation(1, 'Incline')
pushups.addRepRange(1, 'beginner', { sets: 1, reps: 10 })
pushups.addRepRange(1, 'intermediate', { sets: 2, reps: 20 })
pushups.addRepRange(1, 'progression', { sets: 3, reps: 40 })

pushups.addVariation(2, 'Kneeling')
pushups.addRepRange(2, 'beginner', { sets: 1, reps: 10 })
pushups.addRepRange(2, 'intermediate', { sets: 2, reps: 15 })
pushups.addRepRange(2, 'progression', { sets: 2, reps: 30 })

pushups.addVariation(3, 'Half')
pushups.addRepRange(3, 'beginner', { sets: 1, reps: 8 })
pushups.addRepRange(3, 'intermediate', { sets: 2, reps: 12 })
pushups.addRepRange(3, 'progression', { sets: 2, reps: 25 })

pushups.addVariation(4, 'Full')
pushups.addRepRange(4, 'beginner', { sets: 1, reps: 5 })
pushups.addRepRange(4, 'intermediate', { sets: 2, reps: 10 })
pushups.addRepRange(4, 'progression', { sets: 2, reps: 20 })

pushups.addVariation(5, 'Close')
pushups.addRepRange(5, 'beginner', { sets: 1, reps: 5 })
pushups.addRepRange(5, 'intermediate', { sets: 2, reps: 10 })
pushups.addRepRange(5, 'progression', { sets: 2, reps: 20 })

pushups.addVariation(6, 'Uneven')
pushups.addRepRange(6, 'beginner', { sets: 1, reps: 5 })
pushups.addRepRange(6, 'intermediate', { sets: 2, reps: 10 })
pushups.addRepRange(6, 'progression', { sets: 2, reps: 20 })

pushups.addVariation(7, '1/2 One Arm')
pushups.addRepRange(7, 'beginner', { sets: 1, reps: 5 })
pushups.addRepRange(7, 'intermediate', { sets: 2, reps: 10 })
pushups.addRepRange(7, 'progression', { sets: 2, reps: 20 })

pushups.addVariation(8, 'Lever')
pushups.addRepRange(8, 'beginner', { sets: 1, reps: 5 })
pushups.addRepRange(8, 'intermediate', { sets: 2, reps: 10 })
pushups.addRepRange(8, 'progression', { sets: 2, reps: 20 })

pushups.addVariation(9, 'One Arm Pushup')
pushups.addRepRange(9, 'beginner', { sets: 1, reps: 5 })
pushups.addRepRange(9, 'intermediate', { sets: 2, reps: 10 })
pushups.addRepRange(9, 'progression', { sets: 1, reps: 100 })
