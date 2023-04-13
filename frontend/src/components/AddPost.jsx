import React, { useState } from "react";
import { BASE_URL } from "../constants/ApplicationConstants";

function AddPost() {
	const [fileInputState, setFileInputState] = useState("");
	const [previewSource, setPreviewSource] = useState("");
	const [selectedFile, setSelectedFile] = useState();

	const handleFileInputChange = (e) => {
		const file = e.target.files[0];
		previewFile(file);
		setSelectedFile(file);
		setFileInputState(e.target.value);
	};

	const handleSubmitFile = (e) => {
		e.preventDefault();
		if (!selectedFile) return;
		const reader = new FileReader();
		reader.readAsDataURL(selectedFile);
		reader.onloadend = () => {
			uploadImage(reader.result);
		};
		reader.onerror = () => {
			console.log("Error");
		};
	};

	const uploadImage = async (base64EncodedImage) => {
		try {
			await fetch(`${BASE_URL}/api/v1/user/add-post`, {
				method: "POST",
				body: JSON.stringify({ data: base64EncodedImage }),
				headers: { "Content-Type": "application/json" },
			});
			setFileInputState("");
			setPreviewSource("");
		} catch (error) {
			console.error(error);
		}
	};

	const previewFile = (file) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setPreviewSource(reader.result);
		};
	};
	return (
		<div>
			<button
				type="button"
				class="btn btn-primary followbtn"
				data-toggle="modal"
				data-target="#exampleModalCenter"
			>
				Add Post
			</button>

			<div
				class="modal fade"
				id="exampleModalCenter"
				tabindex="-1"
				role="dialog"
				aria-labelledby="exampleModalCenterTitle"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-dialog-centered" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLongTitle">
								Add Post
							</h5>
							<button
								type="button"
								class="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<form>
								<input
									id="fileInput"
									type="file"
									name="image"
									onChange={handleFileInputChange}
									value={fileInputState}
									className="form-input"
								/>
								<button className="btn" type="submit">
									Submit
								</button>
							</form>
							{previewSource && (
								<img
									src={previewSource}
									alt="chosen"
									style={{ height: "300px" }}
								/>
							)}
						</div>
						<div class="modal-footer">
							<button
								type="button"
								class="btn btn-secondary"
								data-dismiss="modal"
							>
								Close
							</button>
							<button type="button" class="btn btn-primary">
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddPost;
