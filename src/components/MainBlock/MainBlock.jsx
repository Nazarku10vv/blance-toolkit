import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { IoClose } from 'react-icons/io5'
import Away from '../Away/Away'
import './MainBlock.css'
import { addAndProdictDelete } from '../store/slices/slices'
import AddChack from '../AddCheck/AddChack'

const MainBlock = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [modalAway, setModalAway] = useState(false)
	const [modalAdd, setModalAdd] = useState(false)

	const balance = useSelector(state => state.slices.todoCheck)
	const away = useSelector(state => state.slices.todoAllBlock)

	function handleCloseClick() {
		if (modalAway === false) {
			setModalAway(true)
		} else {
			setModalAway(false)
		}
	}

	function handleCloseClickAdd() {
		if (modalAdd === false) {
			setModalAdd(true)
		} else {
			setModalAdd(false)
		}
	}

	return (
		<div>	
			<section id='mainBlock'>
				<div
					style={{
						display: modalAway === false ? 'none' : 'block'
					}}
					className='blur'
				>
					<div className='awayDacher'>
						<div
							style={{
								position: 'relative'
							}}
						>
							<Away />
							<h1 onClick={handleCloseClick} className='none'>
								<IoClose />
							</h1>
						</div>
					</div>
				</div>

				<div
					style={{
						display: modalAdd === false ? 'none' : 'block'
					}}
					className='blurAdd'
				>
					<div className='awayDacherAdd'>
						<div
							style={{
								position: 'relative'
							}}
						>
							<AddChack />
							<h1 onClick={handleCloseClickAdd} className='noneAdd'>
								<IoClose />
							</h1>
						</div>
					</div>
				</div>

				<div className='container'>
					<div className='mainBlock'>
						<div className='mainBlockCheck'>
							<div class='walletBalanceCard'>
								<div class='svgwrapper'>
									<svg
										viewBox='0 0 24 26'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<rect
											x='0.539915'
											y='6.28937'
											width='21'
											height='4'
											rx='1.5'
											transform='rotate(-4.77865 0.539915 6.28937)'
											fill='#7D6B9D'
											stroke='black'
										></rect>
										<circle
											cx='11.5'
											cy='5.5'
											r='4.5'
											fill='#E7E037'
											stroke='#F9FD50'
											stroke-width='2'
										></circle>
										<path
											d='M2.12011 6.64507C7.75028 6.98651 12.7643 6.94947 21.935 6.58499C22.789 6.55105 23.5 7.23329 23.5 8.08585V24C23.5 24.8284 22.8284 25.5 22 25.5H2C1.17157 25.5 0.5 24.8284 0.5 24V8.15475C0.5 7.2846 1.24157 6.59179 2.12011 6.64507Z'
											fill='#BF8AEB'
											stroke='black'
										></path>
										<path
											d='M16 13.5H23.5V18.5H16C14.6193 18.5 13.5 17.3807 13.5 16C13.5 14.6193 14.6193 13.5 16 13.5Z'
											fill='#BF8AEB'
											stroke='black'
										></path>
									</svg>
								</div>

								<div class='balancewrapper'>
									<span class='balanceHeading'>Wallet balance</span>
									<p class='balance'>
										<span id='currency'>$</span>
										{balance.balnce}
									</p>
								</div>

								<button onClick={handleCloseClickAdd} class='addmoney'>
									<span class='plussign'>+</span>Add Money
								</button>
							</div>

							<button onClick={handleCloseClick} class='Btn'>
							To spend
								<svg class='svgIcon' viewBox='0 0 576 512'>
									<path d='M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z'></path>
								</svg>
							</button>
						
						</div>
						<div className='mainSortBlock'>
							<div className='mainBlockInTable'>
								<h3>Data </h3>
								<h3>How many </h3>
								<h3>for what </h3>
								<h3>what did you buy </h3>
								<h3>delete </h3>
							</div>
							<div className='main'>
								{away.map((el, index) => (
									<div className='mainBlockInTable'>
										<h3>{el.data} </h3>
										<h3 style={{ color: 'blue' }}>{el.addNow} $</h3>
										<h3>{el.addFor} </h3>
										<h3>{el.boy} </h3>
										<h3>
											<button
												onClick={() => dispatch(addAndProdictDelete(el.id))}
											>
												delete
											</button>
										</h3>
									</div>
								))}
							</div>
							<center>
								<h1>Есть скрол</h1>
							</center>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default MainBlock
