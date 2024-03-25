import { configureStore } from '@reduxjs/toolkit'
import slices from './slices/slices'

export const store = configureStore({
	reducer: {
		slices
	}
})
