import {useParams} from 'react-router-dom'
import axios from "axios"
import React  from "react"
import { Link } from 'react-router-dom'


const url2 = "http://localhost:8000/albums"
function Genre(){
	const [post, setPost] = React.useState(null)
	const [post2, setPost2] = React.useState(null)


	const {nbr} = useParams();
	let number = parseInt(nbr) + 1;
	const url =  `http://localhost:8000/genres/${number}`

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
		return null;
	if(!post2)
		return null;

	const tab = [];
	for(let i = 0; i < post2.length;i++)
	{
		for(let x = 0; x < post.albums.length;x++){
			if(post2[i].id === post.albums[x])
			{
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
	}
	console.log(tab)
	return(
		<div style={{
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
			gap: '16px',
			justifyContent: 'center'
		  }}>
			{tab.map((item, i) => (
        <div  >
          <Link style={{
			textDecoration: 'none'
		  }} to={`/albums/${item.key}`}> {item}</Link>  
        </div>
      ))}
		</div>
		
	)
}


export default Genre