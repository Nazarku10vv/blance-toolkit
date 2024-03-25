import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	todoCheck: JSON.parse(localStorage.getItem('balance')) || [],
	todoAllBlock: JSON.parse(localStorage.getItem('allProduct')) || []
}

export const counterTotalPrice = createSlice({
	name: 'slices',
	initialState,
	reducers: {
		addProduct(state, action) {
			state.todoCheck = action.payload
			localStorage.setItem('balance', JSON.stringify(state.todoCheck))
		},
		addAndProduct(state, action) {
			const newItem = action.payload
			state.todoAllBlock = Array.isArray(state.todoAllBlock)
				? state.todoAllBlock
				: []
			state.todoAllBlock.push(newItem)
			localStorage.setItem('allProduct', JSON.stringify(state.todoAllBlock))
		},
		addAndProdictDelete(state, action) {
			state.todoAllBlock = state.todoAllBlock.filter(
				el => el.id !== action.payload
			)
			localStorage.setItem('allProduct', JSON.stringify(state.todoAllBlock))
		}
	}
})

export const { addProduct, addAndProduct, addAndProdictDelete } =
	counterTotalPrice.actions
export default counterTotalPrice.reducer
