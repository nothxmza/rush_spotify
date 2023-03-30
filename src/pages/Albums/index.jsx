import axios from "axios"
import React  from "react"
import { Link } from 'react-router-dom'


const url = "http://localhost:8000/albums"

const url2 = "http://localhost:8000/artists"


function Albums() {
	const [post, setPost] = React.useState(null);
	const [post2, setPost2] = React.useState(null);
	const [nbr, setNbr] = React.useState(20);

	const changeNumber = (e) => {
		setNbr(e.target.value);
	};

	React.useEffect(() => {
		axios.get(url).then((response) => {
			setPost(response.data);
		})
	}, [])

	React.useEffect(() => {
		axios.get(url2).then((response) => {
			setPost2(response.data)
		})
	}, [])

	if(!post)
		return null;
	if(!post2)
		return null;
	console.log(post);

	const tab = [];
	for(let i = 0; i < nbr;i++){
		tab.push(
			<div key={i} style={{
				display: 'flex',
				flexDirection: 'column',
				width: '400px'
				}}>
				<img src={post[i].cover_small} alt="" />
				<h3>{post[i].name}</h3>
				<h6 style={{
					margin: '0'
				}}>{post2[i].name}</h6>
				<p style={{
					fontSize: 'xx-small'
				}}>{post[i].description}</p>
			</div>
		);
	}
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
			{tab.map((item, i) => (
        <div key={i} >
          <Link style={{
			textDecoration: 'none'
		  }} to={`/albums/${i}`}> {item}</Link>  
        </div>
      ))}
		</div>
		</span>
    )
}

export default Albums