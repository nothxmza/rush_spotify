import axios from "axios"
import React  from "react"
import { Link } from "react-router-dom";

const url = "http://localhost:8000/artists"

function Artists() {
	const [post, setPost] = React.useState(null);
	const [nbr, setNbr] = React.useState(20);


	const changeNumber = (e) => {
		setNbr(e.target.value); 
	};
	React.useEffect(() => {
		axios.get(url).then((response) => {
			setPost(response.data);
		})
	}, [])
	if (!post) 
		return null;
	console.log(post)
	const tab = [];
	for(let i = 0; i < nbr;i++){
		tab.push(
			<div key={i} style={{
				display: 'flex',
				flexDirection: 'column',
				width: '400px'
				}}>
				<img src={post[i].photo} alt="" />
				<h3>{post[i].name}</h3>
				<h6 style={{
					margin: '0'
				}}>{post[i].description}</h6>
				<p style={{
					fontSize: 'xx-small'
				}}>{post[i].bio}</p>
			</div>
		);
	}
	console.log(tab)
    return(
		<span>
		<input type="text" id="nbr" onChange={changeNumber} />
		<div style={{
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
			gap: '16px',
			justifyContent: 'center'
		  }}>
			{tab.map((item,i) => (
				<Link to={`/artists/${i}`}> {item}</Link>
			))}
		</div>
		</span>

    )
}

export default Artists
