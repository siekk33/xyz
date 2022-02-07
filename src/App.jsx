import React from "react";
import './style.css';
class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
"http://localhost:5000/api/products/xyz")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

			return (
	<div className = "App">
	<div className="navbar">
	<div className="Wrapper">
		<h1> XYZ </h1>
		<h3>products</h3>
		</div>
		</div>
		<div className="table">
		<div class="center-div">
					<div class="table-responsive tableFixHead" >
							<table>
									<thead>
											<tr>
													<th><b>product_Name</b></th>
													<th>product_description</th>
													<th>Price</th>
													<th>Sold</th>
													<th>Instock</th>
											</tr>
									</thead>{
									items.map((item) => (
									<tbody>
										<tr>
											<td>{ item.name }</td>
											<td>{ item.description }</td>
											<td>{ item.price }</td>
											<td>{ item.sold }</td>
											<td>{ item.quantity }</td>
										</tr>
									</tbody>
								))}
									</table>
									</div>
									</div>
									</div>
	</div>
	);
}
}

export default App;

// items.map((item) => (
// 				<ol key = { item.id } >
// 					product_Name: { item.name },
// 					product_description: { item.description },
// 					Instock: { item.quantity }
//           Sold: { item.sold }
// 					Price: { item.price }
// 					</ol>
