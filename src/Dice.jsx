import React, { useState } from "react";
import "./styles/Dice.css";
const Dice = () => {
	const [selected, setSelected] = useState("site1");

	const iframeSources = {
		d2: "https://flipsimu.com/emb/coin?id=nEUR5",
		d4: "https://flipsimu.com/emb/d4?id=xt27C",
		d6: "https://flipsimu.com/emb/dice?id=FpkTj",
		d8: "https://flipsimu.com/emb/d8?id=g6TGJ",
		d10: "https://flipsimu.com/emb/d10?id=QFTvG"
	};

	return (
		<div id="dice-div">
			<select
				value={selected}
				onChange={(e) => setSelected(e.target.value)}
			>
				<option value="d2">Coin Flip</option>
				<option value="d4">4 sides</option>
				<option value="d6">6 sides</option>
				<option value="d8">8 sides</option>
				<option value="d10">10 sides</option>
			</select>
			<br/>
			<iframe
				src={iframeSources[selected]}
				height="430px"
				title="Selected Content"
			/>
		</div>
	);
};

export default Dice;
