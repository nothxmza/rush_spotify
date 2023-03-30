import axios from "axios"
import React  from "react"
import { Link } from 'react-router-dom'


const url = "http://localhost:8000/genres"


function Genres(){
	const [post, setPost] = React.useState(null);
	React.useEffect(() => {
		axios.get(url).then((response) => {
			setPost(response.data);
		})
	}, [])

	if (!post) 
		return null;
	
	const tab = [];
	for(let i = 0 ; i < post.length; i++){
		tab.push(
			<div style={{
				color: 'black',
				textDecoration: 'none'
			}}>{post[i].name}</div>
		)
	}
	console.log(post)
	return(
		<div>
			{tab.map((item, i) => (
			<Link style={{
				textDecoration: 'none'
			}} to={`/genres/${i}`}> {item}</Link>
			))}
		</div>
	)
}

export default Genres