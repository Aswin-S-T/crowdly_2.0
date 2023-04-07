import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import data from "../data";
import axios from "axios";
import { BASE_URL } from "../constants/ApplicationConstants";
import Loader from "../components/Loader";

function HomeScreen() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		const fetchData = async () => {
			const data = await axios.get(`${BASE_URL}/api/v1/user/all-post`);
			setPosts(data.data.data);
			setLoading(false);
		};
		fetchData();
	}, []);
	return (
		<div>
			<div className="row">
				<div className="col-md-3">ds</div>
				<div className="col-md-4">
					{loading ? (
						<Loader />
					) : (
						<div className="post_section p-2">
							<Post post={posts} />
						</div>
					)}
				</div>
				<div className="col-md-3">rr</div>
			</div>
		</div>
	);
}

export default HomeScreen;
