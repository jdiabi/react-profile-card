import React from "react";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
	return (
		<div className="background">
			<div className="bg-pattern-top"></div>
			<div className="bg-pattern-bottom"></div>

			<ProfileCard
				name="Julie Diabinho"
				age="28"
				city="Nantes"
				followers="666K"
				likes="123K"
				photos="614"
			></ProfileCard>
		</div>
	);
}

export default App;
