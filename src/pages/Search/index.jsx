import { useState } from "react"
import {Link} from 'react-router-dom'

import React  from "react"
import axios from "axios"


function Search(){
	const [str, setStr] = useState('null')
	const [chose, setChose] = useState('artist')
	const [post, setPost] = React.useState(null);

	let flag = 1;
	let url = `http://localhost:8000/search?query=l&type=artist`

	const takeValue = (e) => {
		setStr(e.target.value);
	};
	const takeChose = (e) => {
		setChose(e.target.value);
	};

	console.log(str + " " + chose)
	if(chose === 'artist'){
		url = `http://localhost:8000/search?query=${str}&type=artist`
		flag = 1;
	}
	else if(chose === 'genre'){
		url = `http://localhost:8000/search?query=${str}&type=genre`
		flag = 2;
	}
	else if(chose === 'album'){
		url = `http://localhost:8000/search?query=${str}&type=album`
		flag = 3;
	}

	console.log(url)
	React.useEffect(() => {
		axios.get(url).then((response) => {
			setPost(response.data);
		})
	})

	if(!post)
		return null
	console.log(post)
	const tab = [];
	const tabGenre = []
	const tabAlbum = []
	if(chose === 'artist'){
		for(let i = 0; i < post.artists.length;i++){
			tab.push(
				<div key={i} style={{
					display: 'flex',
					flexDirection: 'column',
					width: '400px',
					color: 'black',
					textDecoration: 'none',
					}}>
					<img src={post.artists[i].photo} alt="" />
					<h3>{post.artists[i].name}</h3>
					<h6 style={{
						margin: '0'
					}}>{post.artists[i].description}</h6>
					<p style={{
						fontSize: 'xx-small'
					}}>{post.artists[i].bio}</p>
				</div>
			);
		}
	}
	else if(chose === 'genre'){
		if(post.genres){
			for(let i = 0; i <  post.genres.length;i++){
				tabGenre.push(
					<div key={i} style={{
						display: 'flex',
						flexDirection: 'row',
						width: '400px',
						color: 'black',
						textDecoration: 'none',
						}}>
						<p>{post.genres[i].name}</p>
					</div>
				)
			}
		}
	}
	else if(chose === 'album'){
		if(post.albums){
			for(let i = 0; i < post.albums.length;i++){
				tabAlbum.push(
					<div key={i} style={{
						display: 'flex',
						flexDirection: 'column',
						width: '400px',
						textDecoration: 'none',
						color: 'black'
						}}>
						<img src={post.albums[i].cover_small} alt="" />
						<h3>{post.albums[i].name}</h3>
						<p style={{
							margin:'0',
							fontSize: 'xx-small'
						}}>{post.albums[i].description}</p>
					</div>
				);
			}
		}
	}
	return(
		<div>
			<div>
				<h1>ok</h1>
				<input type="text" id="nbr" onChange={takeValue} />
				<select id="pet-select" onChange={takeChose}>
					<option value="artist">artist</option>
					<option value="genre">genre</option>
					<option value="album">album</option>
				</select>
			</div>
			<div style={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
				gap: '16px',
				justifyContent: 'center',
				color: 'black',
				textDecoration: 'none'
				}}>
					{flag === 1 ? (
						tab.map((item,i) => (
							<Link to={`/artists/${item.key}`}> {item}</Link>
						))
					): null}
					{flag === 2 ? (
						tabGenre.map((item, i) => (
							<Link to={`/genres/${item.key}`}> {item}</Link>
						))
						): null}
					{flag === 3 ? (
						tabAlbum.map((item,i) => (
							<Link style={{
								textDecoration: 'none'
							  }} to={`/albums/${item.key}`}> {item}</Link>  
						))
					): null}
			</div>
		</div>
	)
}

export default Search