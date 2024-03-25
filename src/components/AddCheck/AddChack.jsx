import React, { useState } from 'react'
import './AddChack.css'
import { useDispatch } from 'react-redux'
import { addProduct } from '../store/slices/slices'
import { useNavigate } from 'react-router-dom'

const AddChack = () => {
	const [income, setIncome] = useState('')
	const [addValue, setAddValue] = useState('')
	const [erorre, setErorre] = useState(true)

	const dispatch = useDispatch()
	const navigate = useNavigate()

	function handleChange(e) {
		setIncome(e.target.value)
	}

	let data = new Date()
	let day = data.getDate()
	let monz = data.getMonth() + 1
	let year = data.getFullYear().toString().slice(-2)
	let hous = data.getHours()
	let minuteс = data.getMinutes()

	if (day < 10) day = '0' + day
	if (monz < 10) monz = '0' + monz
	if (hous < 10) hous = '0' + hous
	if (minuteс < 10) minuteс = '0' + minuteс

	let res = `${day}.${monz}.${year} в ${hous}:${minuteс}`

	function handleAddClick() {
		if (addValue === '') {
			setErorre(false)
		} else {
			let newObj = {
				balnce: +addValue,
				id: Date.now(),
				data: res
			}

			dispatch(addProduct(newObj))
			setErorre(true)
			setAddValue('')
			navigate('/')
		}
	}

	function handleKeyPress(e) {
		if (e.key === 'Enter') {
			handleAddClick()
		}
	}

	return (
		<div>
			<section id='allcheck'>
				<div className='container'>
					<div cla ssName='allcheck'>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								flexDirection: 'column',
								gaap: '10px'
							}}
						>
							<h3>Доход</h3>
							<input
								style={{
									border: erorre ? '2px solid green' : '2px solid red'
								}}
								type='number'
								placeholder='Доход'
								value={addValue}
								onChange={e => {
									handleChange(e)
									setAddValue(e.target.value)
								}}
								onKeyPress={handleKeyPress}
							/>

							<h1
								style={{
									margin: '10px 0',
									color: 'red'
								}}
							>
								{erorre ? (
									''
								) : (
									<h3
										style={{
											margin: '10px 0'
										}}
									>
										Hапишите сумму :){' '}
									</h3>
								)}
							</h1>
						</div>
						<div>
							<button
								style={{
									width: '205px'
								}}
								onClick={handleAddClick}
							>
								Добавить
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default AddChack
