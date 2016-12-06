import React from 'react';
import { connect } from 'react-redux';
import GamesList from './GamesList';


const GamesPage = React.createClass({
	propTypes: {
		games: React.PropTypes.array.isRequired
	},
	render() {
		return (
			<div>
				<h1>Games List</h1>
				<GamesList games={this.props.games}/>
			</div>
		);
	}
});


function mapStateToProps(state) {
	return {
		games: state.games
	}
}

export default connect(mapStateToProps)(GamesPage);
