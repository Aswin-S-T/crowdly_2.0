import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import Avatar from "@mui/material/Avatar";
function App() {
	return (
		<div>
			<header>
				<nav class="navbar navbar-expand-lg navbar-light">
					<a class="navbar-brand text-white" href="/">
						Crowdly
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav mr-auto">
							<li class="nav-item active text-white">
								<a class="nav-link text-white" href="#">
									Home <span class="sr-only">(current)</span>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link text-white" href="#">
									Notification
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link text-white" href="#">
									Chat
								</a>
							</li>
							<li class="nav-item dropdown">
								<a
									class="nav-link dropdown-toggle text-white"
									href="#"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Account
								</a>
								<div class="dropdown-menu" aria-labelledby="navbarDropdown">
									<a class="dropdown-item" href="#">
										Action
									</a>
									<a class="dropdown-item" href="#">
										Another action
									</a>
									<div class="dropdown-divider"></div>
									<a class="dropdown-item" href="#">
										Something else here
									</a>
								</div>
							</li>
						</ul>
						{/* <form class="form-inline my-2 my-lg-0">
							<button
								class="btn btn-outline-success my-2 my-sm-0"
								type="submit"
							>
								Search
							</button>
						</form> */}
					</div>
				</nav>
			</header>
			<main>
				<div className="row">
					<div className="col-md-3">ds</div>
					<div className="col-md-4">
						<div className="post_section p-2">
							<div className="card p-2">
								<div className="post_header">
									<div className="row">
										<div className="col-md-2">
											<Avatar
												alt="Travis Howard"
												src="https://upload.wikimedia.org/wikipedia/commons/8/82/Dulquer_Salmaan_at_Karwaan_promotions_%28cropped%29.jpg"
											/>
										</div>
										<div className="col-md-8">
											<p>Dulquer Salman</p>
										</div>
										<div className="col-md-2">
											<i className="fa fa-ellipsis-v"></i>
										</div>
									</div>
								</div>
								<div className="post_image p-2">
									<div>
										<img
											src="https://upload.wikimedia.org/wikipedia/commons/8/82/Dulquer_Salmaan_at_Karwaan_promotions_%28cropped%29.jpg"
											className="w-100"
										/>
									</div>
								</div>
								<hr />
								<div className="post_actions">
									<div>
										0
										<ThumbUpIcon />
									</div>
									<div>
										0
										<ModeCommentIcon />
									</div>
									<div>
										0
										<BookmarkBorderIcon />
									</div>
								</div>
							</div>
							<div className="card p-2">
								<div className="post_header">
									<div className="row">
										<div className="col-md-2">
											<Avatar
												alt="Travis Howard"
												src="https://upload.wikimedia.org/wikipedia/commons/8/82/Dulquer_Salmaan_at_Karwaan_promotions_%28cropped%29.jpg"
											/>
										</div>
										<div className="col-md-8">
											<p>Dulquer Salman</p>
										</div>
										<div className="col-md-2">
											<i className="fa fa-ellipsis-v"></i>
										</div>
									</div>
								</div>
								<div className="post_image p-2">
									<div>
										<img
											src="https://upload.wikimedia.org/wikipedia/commons/8/82/Dulquer_Salmaan_at_Karwaan_promotions_%28cropped%29.jpg"
											className="w-100"
										/>
									</div>
								</div>
								<hr />
								<div className="post_actions">
									<div>
										0
										<ThumbUpIcon />
									</div>
									<div>
										0
										<ModeCommentIcon />
									</div>
									<div>
										0
										<BookmarkBorderIcon />
									</div>
								</div>
							</div>
							<div className="card p-2">
								<div className="post_header">
									<div className="row">
										<div className="col-md-2">
											<Avatar
												alt="Travis Howard"
												src="https://upload.wikimedia.org/wikipedia/commons/8/82/Dulquer_Salmaan_at_Karwaan_promotions_%28cropped%29.jpg"
											/>
										</div>
										<div className="col-md-8">
											<p>Dulquer Salman</p>
										</div>
										<div className="col-md-2">
											<i className="fa fa-ellipsis-v"></i>
										</div>
									</div>
								</div>
								<div className="post_image p-2">
									<div>
										<img
											src="https://upload.wikimedia.org/wikipedia/commons/8/82/Dulquer_Salmaan_at_Karwaan_promotions_%28cropped%29.jpg"
											className="w-100"
										/>
									</div>
								</div>
								<hr />
								<div className="post_actions">
									<div>
										0
										<ThumbUpIcon />
									</div>
									<div>
										0
										<ModeCommentIcon />
									</div>
									<div>
										0
										<BookmarkBorderIcon />
									</div>
								</div>
							</div>
							<div className="card p-2">
								<div className="post_header">
									<div className="row">
										<div className="col-md-2">
											<Avatar
												alt="Travis Howard"
												src="https://upload.wikimedia.org/wikipedia/commons/8/82/Dulquer_Salmaan_at_Karwaan_promotions_%28cropped%29.jpg"
											/>
										</div>
										<div className="col-md-8">
											<p>Dulquer Salman</p>
										</div>
										<div className="col-md-2">
											<i className="fa fa-ellipsis-v"></i>
										</div>
									</div>
								</div>
								<div className="post_image p-2">
									<div>
										<img
											src="https://upload.wikimedia.org/wikipedia/commons/8/82/Dulquer_Salmaan_at_Karwaan_promotions_%28cropped%29.jpg"
											className="w-100"
										/>
									</div>
								</div>
								<hr />
								<div className="post_actions">
									<div>
										0
										<ThumbUpIcon />
									</div>
									<div>
										0
										<ModeCommentIcon />
									</div>
									<div>
										0
										<BookmarkBorderIcon />
									</div>
								</div>
							</div>
							<div className="card p-2">
								<div className="post_header">
									<div className="row">
										<div className="col-md-2">
											<Avatar
												alt="Travis Howard"
												src="https://upload.wikimedia.org/wikipedia/commons/8/82/Dulquer_Salmaan_at_Karwaan_promotions_%28cropped%29.jpg"
											/>
										</div>
										<div className="col-md-8">
											<p>Dulquer Salman</p>
										</div>
										<div className="col-md-2">
											<i className="fa fa-ellipsis-v"></i>
										</div>
									</div>
								</div>
								<div className="post_image p-2">
									<div>
										<img
											src="https://upload.wikimedia.org/wikipedia/commons/8/82/Dulquer_Salmaan_at_Karwaan_promotions_%28cropped%29.jpg"
											className="w-100"
										/>
									</div>
								</div>
								<hr />
								<div className="post_actions">
									<div>
										0
										<ThumbUpIcon />
									</div>
									<div>
										0
										<ModeCommentIcon />
									</div>
									<div>
										0
										<BookmarkBorderIcon />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-3">rr</div>
				</div>
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
