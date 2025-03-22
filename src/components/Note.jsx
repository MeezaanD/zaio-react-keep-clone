import React, { useState } from 'react';

function Note({ id, title, content, color, onDelete, onArchive }) {
	return (
		<div className="note" style={{ backgroundColor: color }}>
			<div className="check-circle">
				<span className="material-symbols-outlined hover">check_circle</span>
			</div>

			{title && <div className="title">{title}</div>}
			<div className="text">{content}</div>

			<div className="note-footer">
				<div className="tooltip">
					<span className="material-symbols-outlined hover small-icon">add_alert</span>
					<span className="tooltip-text">Remind me</span>
				</div>

				<div className="tooltip">
					<span className="material-symbols-outlined hover small-icon">person_add</span>
					<span className="tooltip-text">Collaborator</span>
				</div>

				<div className="tooltip">
					<span className="material-symbols-outlined hover small-icon">palette</span>
					<span className="tooltip-text">Background options</span>
				</div>

				<div className="tooltip">
					<span className="material-symbols-outlined hover small-icon">image</span>
					<span className="tooltip-text">Add image</span>
				</div>

				<div className="tooltip" onClick={() => onArchive(id)}>
					<span className="material-symbols-outlined hover small-icon">archive</span>
					<span className="tooltip-text">Archive</span>
				</div>

				<div className="tooltip" onClick={() => onDelete(id)}>
					<span className="material-symbols-outlined hover small-icon">delete</span>
					<span className="tooltip-text">Delete</span>
				</div>

				<div className="tooltip">
					<span className="material-symbols-outlined hover small-icon">more_vert</span>
					<span className="tooltip-text">More</span>
				</div>
			</div>
		</div>
	);
}

export default Note;
