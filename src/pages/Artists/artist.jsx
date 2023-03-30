import {Link, useParams} from 'react-router-dom'
import axios from "axios"
import React  from "react"


const url2 = "http://localhost:8000/albums"

function Artist(){
	const [post, setPost] = React.useState(null);
	const [post2, setPost2] = React.useState(null);
	const {nbr} = useParams()


	let number = parseInt(nbr) + 1;
	const url = `http://localhost:8000/artists/${number}`

	React.useEffect(() => {
		axios.get(url).then((response) => {
			setPost(response.data);
		})
	}, [])
	React.useEffect(() => {
		axios.get(url2).then((response) => {
			setPost2(response.data);
		})
	}, [])

	if(!post)
		return null
	if(!post2)
		return null
	console.log(post)

	const tab = []
	for(let i = 0; i < post2.length;i++)
	{
		if(post2[i].artist_id === number){
			tab.push(
				<div key={i} style={{
					display: 'flex',
					flexDirection: 'column',
					width: '400px'
					}}>
					<img src={post2[i].cover_small} alt="" />
					<h3>{post2[i].name}</h3>
					<p style={{
						fontSize: 'xx-small'
					}}>{post2[i].description}</p>
				</div>
			)
		}
	}
	return(
		<div>
			<div style={{
				display: 'flex',
				flexDirection: 'column',
				flexWrap: 'wrap',
				gap: '16px',
				justifyContent: 'center',
				alignContent: 'center'
				}}>
				<div  style={{
					display: 'flex',
					flexDirection: 'column',
					width: '400px'
					}}>
					<img src={post.photo} alt="" />
					<h3>{post.name}</h3>
					<h6 style={{
						margin: '0'
					}}>{post.description}</h6>
					<p style={{
						fontSize: 'xx-small'
					}}>{post.bio}</p>
				</div>
			</div>
			<div style={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
				gap: '16px',
				justifyContent: 'center',
				}}>
				{tab.map((item, i) => (
					<Link to={`/albums/${item.key}`}>{item}</Link>
				))}
			</div>
		</div>
	)
}


export default Artist