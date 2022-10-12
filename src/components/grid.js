import React, {FunctionComponent} from "react";

import {ReactGridDrawUI, useGridData} from "react-grid-draw-ui";



const Grid = () => {

	const [getGridData, clearDownGrids, drawRectanglesFromPayloadFunction] = useGridData();

	return (
		<div>
			<div className={"title"}>
				<h2> React Grid Draw UI NPM Library Demo </h2>
			</div>
			<ReactGridDrawUI>
				<div>
					<div>
						<div className={"test-container"}>
							<p> test-A </p>
						</div>
						<div className={"test-container1"}>
							<p> test-B </p>
						</div>
						<div className={"test-container1"}>
							<p> test-C </p>
						</div>
					</div>
				</div>
			</ReactGridDrawUI>
			<button onClick={() => console.log(getGridData())}> Gets Grid Data in a 2D array (Check the web console for results) </button>
			<button onClick={() => clearDownGrids()}> Remove all drawn grids </button>
            console.log(getGridData());
            
		</div>
        
	)
 
 

};



export default Grid;