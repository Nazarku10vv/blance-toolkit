import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAndProduct, addProduct } from '../store/slices/slices'
import { useNavigate } from 'react-router-dom'
import './Awaay.css'

const Away = () => {
	const balance = useSelector(state => state.slices.todoCheck)

	const [addValue, setAddValue] = useState('')
	const [addNowMony, setNowMony] = useState('')
	const [addForWhat, setForWhat] = useState('')
	const [erorre, setErorre] = useState(true)

	const dispatch = useDispatch()

	const navigate = useNavigate()

	function handleChange(e) {
		setAddValue(e.target.value)
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

	const bal = +balance.balnce

	function handleAddClick() {
		if (addValue === '' || addNowMony === '' || addForWhat === '') {
			alert('Заполните все поля')
			setErorre(false)
		} else {
			if (+addNowMony > bal) {
				alert(`У вас не хватает денег у вас осталось ${bal}$`)
			} else {
				const newBal = bal - +addNowMony
				handleMainCreate(newBal)
			}
		}
	}

	function handleMainCreate(newBal) {
		let newObj = {
			boy: addValue,
			addNow: +addNowMony,
			addFor: addForWhat,
			id: Date.now(),
			data: res
		}

		dispatch(addAndProduct(newObj))
		dispatch(addProduct({ balnce: newBal }))
		setErorre(true)
		setAddValue('')
		setNowMony('')
		setForWhat('')
		navigate('')
	}

	function handleKeyPress(e) {
		if (e.key === 'Enter') {
			handleAddClick()
		}
	}

	return (
		<div
			style={{
				display: 'flex',
				alignItems: ' center',
				justifyContent: 'center',
				height: '90vh'
			}}
		>
			<section id='allcheck'>
				<div className='container'>
					<div className='allcheck'>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								flexDirection: 'column',
								gap: '10px',
								marginBottom: '10px'
							}}
							className='allCheckInH3InInput'
						>
							<h3>Уоходь</h3>
							<input
								style={{
									border: erorre ? '2px  solid green' : '2px  solid red',
									width: 400,
									height: 30
								}}
								type='number'
								placeholder='сколько'
								value={addNowMony}
								onChange={e => setNowMony(e.target.value)}
								onKeyPress={handleKeyPress}
							/>
							<input
								style={{
									border: erorre ? '2px  solid green' : '2px  solid red',
									width: 400,
									height: 30
								}}
								type='text'
								placeholder='за что'
								value={addForWhat}
								onChange={e => setForWhat(e.target.value)}
								onKeyPress={handleKeyPress}
							/>
							<input
								style={{
									border: erorre ? '2px  solid green' : '2px  solid red',
									width: 400,
									height: 30
								}}
								type='text'
								placeholder='что купить'
								value={addValue}
								onChange={handleChange}
								onKeyPress={handleKeyPress}
							/>
						</div>
						<div>
							<button
								style={{
									width: '100%',
									height: 40
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

export default Away
