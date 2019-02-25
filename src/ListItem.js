import React from 'react';

const ListItem = props => {
	return (
		<div className="card col-3 m-4 p-0" onClick={() =>props.handleClick(props.id)}>
			<img src={props.img} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">{props.desc}</p>
				<p className="card-text">{props.price} €</p>
				<div href="#" className="btn btn-primary">Go somewhere</div>
			</div>
		</div>
	);
};

export default ListItem;