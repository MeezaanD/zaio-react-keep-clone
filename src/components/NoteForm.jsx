import React, { useState } from 'react';

function NoteForm({ addNote }) {
	const [isExpanded, setIsExpanded] = useState(false);
	const [note, setNote] = useState({
		title: '',
		content: '',
		color: '#ffffff'
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNote(prevNote => ({
			...prevNote,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Prevent adding empty notes
		if (note.title.trim() === '' && note.content.trim() === '') {
			return;
		}

		addNote(note);

		// Reset form
		setNote({
			title: '',
			content: '',
			color: '#ffffff'
		});

		// Collapse the form
		setIsExpanded(false);
	};

	const handleFormClick = () => {
		if (!isExpanded) {
			setIsExpanded(true);
		}
	};

	const closeForm = () => {
		setIsExpanded(false);
		// Only reset if no content
		if (note.title.trim() === '' && note.content.trim() === '') {
			setNote({
				title: '',
				content: '',
				color: '#ffffff'
			});
		}
	};

	return (
		<div className="form-container">
			{!isExpanded ? (
				<form onClick={handleFormClick} className="collapsed-form">
					<input
						type="text"
						placeholder="Take a note..."
						className="note-input"
					/>
					<div className="form-actions">
						<div className="tooltip">
							<span className="material-symbols-outlined hover">check_box</span>
							<span className="tooltip-text">New list</span>
						</div>
						<div className="tooltip">
							<span className="material-symbols-outlined hover">brush</span>
							<span className="tooltip-text">New drawing</span>
						</div>
						<div className="tooltip">
							<span className="material-symbols-outlined hover">image</span>
							<span className="tooltip-text">New image</span>
						</div>
					</div>
				</form>
			) : (
				<div className="form" style={{ backgroundColor: note.color }}>
					<input
						type="text"
						name="title"
						placeholder="Title"
						value={note.title}
						onChange={handleChange}
						className="title-input"
					/>

					<textarea
						name="content"
						placeholder="Take a note..."
						value={note.content}
						onChange={handleChange}
						rows={3}
						className="content-textarea"
					/>

					<div className="form-actions">
						<div className="icons">
							<div className="tooltip">
								<span className="material-symbols-outlined hover small-icon">add_alert</span>
								<span className="tooltip-text">Remind me</span>
							</div>

							<div className="tooltip">
								<span className="material-symbols-outlined hover small-icon">person_add</span>
								<span className="tooltip-text">Collaborator</span>
							</div>

							<div className="tooltip">
								<input
									type="color"
									id="color-input"
									name="color"
									value={note.color}
									onChange={handleChange}
									className="color-input"
								/>
								<label htmlFor="color-input" className="color-picker-label">
									<span className="material-symbols-outlined hover small-icon">palette</span>
								</label>
								<span className="tooltip-text">Background options</span>
							</div>

							<div className="tooltip">
								<span className="material-symbols-outlined hover small-icon">image</span>
								<span className="tooltip-text">Add image</span>
							</div>

							<div className="tooltip">
								<span className="material-symbols-outlined hover small-icon">archive</span>
								<span className="tooltip-text">Archive</span>
							</div>

							<div className="tooltip">
								<span className="material-symbols-outlined hover small-icon">more_vert</span>
								<span className="tooltip-text">More</span>
							</div>
						</div>

						<button className="close-btn" onClick={handleSubmit}>
							Submit
						</button>
						<button className="close-btn" onClick={closeForm}>
							Close
						</button>

					</div>
				</div>
			)}
		</div>
	);
}

export default NoteForm;
