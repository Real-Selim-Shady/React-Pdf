import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";





const App: React.FC = () => {


	return (
		<Routes>
			<Route 
				path='/'
				element={
					<>
						<h1 className="app-title">Welcome Page</h1>
					</>
				}
			/>
			<Route 
				path='/Edit'
				element={
					<>
						<h1 className="app-title">Route 1</h1>
					</>
				}
			/>
			<Route 
				path='/Render'
				element={
					<>
						<h1 className="app-title">Route 2</h1>
					</>
				}
			/>
		</Routes>

	);
}

export default App;
