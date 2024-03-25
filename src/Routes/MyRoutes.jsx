import React from 'react'
import MainPage from '../Page/MainPage'
import { Route, Routes } from 'react-router-dom'
import AddPage from '../Page/AddPage'
import Away from '../components/Away/Away'

const MyRoutes = () => {
	const routes = [
		{
			path: '/',
			element: <MainPage />,
			key: 1
		},
		{
			path: '/add',
			element: <AddPage />,
			key: 2
		},
		{
			path: '/away',
			element: <Away />,
			key: 3
		}
	]
	return (
		<Routes>
			{routes.map(routes => (
				<Route path={routes.path} element={routes.element} key={routes.key} />
			))}
		</Routes>
	)
}

export default MyRoutes
