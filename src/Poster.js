import React, {Component} from 'react';

import { data} from "./bdd";
import "./Poster.css"

class Poster extends Component {
	constructor (props) {
		super (props);

		this.state = {
			data: data,
			id : this.props.match.params.id,
			article: []
		}
	}

	componentDidMount() {
		let {id, data} = this.state;
		let filter = data.filter(item => item.id === id);
		this.setState({article: filter})
	}

	render() {
		let {article} = this.state;
		if (article.length > 0) {
			return (
				<div>
					<div className="container">
						<div className="row my-5">
							<div className="col-12">
								<div className="row">
									<div className="cards col-12 m-4 p-0">
										<div className="image">
											<img src={article[0].img} className="card-img-top" alt="..." />
										</div>
										<div className="body">
											<h5 className="title">Card title</h5>
											<p className="text">{article[0].desc}</p>
											<p className="text">{article[0].price} €</p>
											<div href="#" className="btn btn-primary">Go somewhere</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		}
		return null;
	}
}

export default Poster;