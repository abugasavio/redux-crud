import React from 'react';

const GamesList = ({ games }) => {
	const emptyMessage = (
		<p>There are not games yet</p>
	)

	const gamesList = (
		<p>games list</p>
	)
	return (
		<div>
		{games.length === 0 ? emptyMessage : gamesList}
		</div>
	);
}

GamesList.propTypes = {
	games: React.PropTypes.array.isRequired
}


export default GamesList;
