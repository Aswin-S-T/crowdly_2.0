import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
function App() {
	const theme = useTheme();
	const colorMode = React.useContext(ColorModeContext);
	return (
		<Box
			sx={{
				// display: "flex",
				width: "100%",
				alignItems: "center",
				// justifyContent: "center",
				bgcolor: "background.default",
				color: "text.primary",
				borderRadius: 1,
				p: 3,
			}}
		>
			{theme.palette.mode} mode
			<header
				style={{
					backgroundColor:
						theme.palette.mode == "light mode" ? "#09baac" : "#111",
				}}
			>
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
							<li class="nav-item active">
								<a class="nav-link" href="#">
									Home <span class="sr-only">(current)</span>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									Link
								</a>
							</li>
							<li class="nav-item dropdown">
								<a
									class="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Dropdown
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
							<li class="nav-item">
								<a class="nav-link disabled" href="#">
									Disabled
								</a>
							</li>
						</ul>
						<form class="form-inline my-2 my-lg-0">
							<IconButton
								sx={{ ml: 1 }}
								onClick={colorMode.toggleColorMode}
								color="inherit"
							>
								{theme.palette.mode === "dark" ? (
									<Brightness7Icon />
								) : (
									<Brightness4Icon />
								)}
							</IconButton>
						</form>
					</div>
				</nav>
			</header>
		</Box>
		// <div>
		// 	<header>
		// 		<nav class="navbar navbar-expand-lg navbar-light">
		// 			<a class="navbar-brand text-white" href="/">
		// 				Crowdly
		// 			</a>
		// 			<button
		// 				class="navbar-toggler"
		// 				type="button"
		// 				data-toggle="collapse"
		// 				data-target="#navbarSupportedContent"
		// 				aria-controls="navbarSupportedContent"
		// 				aria-expanded="false"
		// 				aria-label="Toggle navigation"
		// 			>
		// 				<span class="navbar-toggler-icon"></span>
		// 			</button>

		// 			<div class="collapse navbar-collapse" id="navbarSupportedContent">
		// 				<ul class="navbar-nav mr-auto">
		// 					<li class="nav-item active">
		// 						<a class="nav-link" href="#">
		// 							Home <span class="sr-only">(current)</span>
		// 						</a>
		// 					</li>
		// 					<li class="nav-item">
		// 						<a class="nav-link" href="#">
		// 							Link
		// 						</a>
		// 					</li>
		// 					<li class="nav-item dropdown">
		// 						<a
		// 							class="nav-link dropdown-toggle"
		// 							href="#"
		// 							id="navbarDropdown"
		// 							role="button"
		// 							data-toggle="dropdown"
		// 							aria-haspopup="true"
		// 							aria-expanded="false"
		// 						>
		// 							Dropdown
		// 						</a>
		// 						<div class="dropdown-menu" aria-labelledby="navbarDropdown">
		// 							<a class="dropdown-item" href="#">
		// 								Action
		// 							</a>
		// 							<a class="dropdown-item" href="#">
		// 								Another action
		// 							</a>
		// 							<div class="dropdown-divider"></div>
		// 							<a class="dropdown-item" href="#">
		// 								Something else here
		// 							</a>
		// 						</div>
		// 					</li>
		// 					<li class="nav-item">
		// 						<a class="nav-link disabled" href="#">
		// 							Disabled
		// 						</a>
		// 					</li>
		// 				</ul>
		// 				<form class="form-inline my-2 my-lg-0">
		// 					<button
		// 						class="btn btn-outline-success my-2 my-sm-0"
		// 						type="submit"
		// 					>
		// 						Search
		// 					</button>
		// 				</form>
		// 			</div>
		// 		</nav>
		// 	</header>
		// 	<main>
		// 		<div className="row">
		// 			<div className="col-md-3">ds</div>
		// 			<div className="col-md-4">
		// 				<div className="post_section p-2">
		// 					<div className="card p-2">
		// 						<div className="post_header"></div>
		// 						<div className="post_image p-2">
		// 							<div>
		// 								<img
		// 									src="https://i.pinimg.com/736x/3f/e3/c4/3fe3c4455f467ef60b2129f2326150ea.jpg"
		// 									className="w-100"
		// 								/>
		// 							</div>
		// 						</div>
		// 						<hr />
		// 						<div className="post_actions">
		// 							<div>
		// 								0
		// 								<ThumbUpIcon />
		// 							</div>
		// 							<div>
		// 								0
		// 								<ModeCommentIcon />
		// 							</div>
		// 							<div>
		// 								0
		// 								<BookmarkBorderIcon />
		// 							</div>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 			<div className="col-md-3">rr</div>
		// 		</div>
		// 	</main>
		// 	<footer></footer>
		// </div>
	);
}

// export default App;

export default function ToggleColorMode() {
	const [mode, setMode] = React.useState("light");
	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
			},
		}),
		[]
	);

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
			}),
		[mode]
	);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}
