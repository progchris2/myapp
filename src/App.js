import React, { Component } from 'react';
import uniqid from 'uniqid'

import { data} from "./bdd";
import './App.css';
import ListItem from "./ListItem";


class App extends Component {
	constructor (props) {
		super(props);

		this.state = {
			data: data
		}
	}

	handleClick = id => {
		this.props.history.push(`/${id}`);
	};

	renderItem = dt => dt.map(item => (
		<ListItem key={uniqid("item-")} price={item.price} desc={item.desc}
			img={item.img} id={item.id} handleClick={this.handleClick}
		/>
	));

	render() {
		let {data} = this.state;

		return (
			<div className="container">
				<div className="row my-5">
					<div className="col-12">
						<div className="row">
							{this.renderItem(data)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
