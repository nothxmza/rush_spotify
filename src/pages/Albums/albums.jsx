import {useParams} from 'react-router-dom'
import axios from "axios"
import React  from "react"


const url2 = "http://localhost:8000/artists"

function Album(){
	const [post, setPost] = React.useState(null);
	const [post2, setPost2] = React.useState(null);

	const {nbr} = useParams()
	let number = parseInt(nbr) + 1
	let count =  parseInt(nbr)
	const url = `http://localhost:8000/albums/${number}`

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
	console.log(post.tracks)
	const tab = [];
	for(let i = 0; i < post.tracks.length;i++)
	{
		tab.push(
			<div key={i}>
				<figure>
					<figcaption>{post.tracks[i].name} tracks number : {post.tracks[i].track_no}</figcaption>
					<audio
						controls
						src={post.tracks[i].mp3}>
					</audio>
				</figure>
			</div>
		)
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
					<img src={post.album.cover_small} alt="" />
					<h3>{post.album.name}</h3>
					<h6 style={{
						margin: '0'
					}}>{post2[count].name}</h6>
					<p style={{
						fontSize: 'xx-small'
					}}>{post.album.description}</p>
				</div>
			</div>
			{tab}
		</div>
	)
}

export default Album