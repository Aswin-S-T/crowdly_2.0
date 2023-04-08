import React from "react";
import data from "../data";
import Avatar from "@mui/material/Avatar";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post(props) {
	return (
		<div>
			{props.post.map((post, index) => (
				<div className="card p-2" key={index}>
					<div className="post_header">
						<div className="row">
							<div className="col-md-2">
								<Avatar alt="Travis Howard" src={post.image} />
							</div>
							<div className="col-md-8">
								<p style={{ color: "#111" }}>{post.name}</p>
							</div>
							<div className="col-md-2">
								<i className="fa fa-ellipsis-v"></i>
							</div>
						</div>
					</div>
					<div className="post_image p-2">
						<div>
							<img src={post.image} className="w-100" />
						</div>
					</div>
					<hr />
					<div className="post_actions">
						<div>
							{post.like}
							<ThumbUpIcon className="mt-2" />
						</div>
						<div>
							{post.comment}
							<ModeCommentIcon />
						</div>
						<div>
							{post.share}
							<BookmarkBorderIcon />
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default Post;
