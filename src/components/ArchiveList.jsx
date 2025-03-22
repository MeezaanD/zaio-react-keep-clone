import React from 'react';

function ArchiveList({ archivedNotes, onDelete, onUnarchive }) {
	return (
		<div className="notes">
			{archivedNotes.length === 0 ? (
				<div className="empty-state">
					<p>Your archived notes appear here</p>
				</div>
			) : (
				archivedNotes.map(note => (
					<div
						key={note.id}
						className="note"
						style={{ backgroundColor: note.color }}
					>
						<div className="check-circle">
							<span className="material-symbols-outlined hover">check_circle</span>
						</div>

						{note.title && <div className="title">{note.title}</div>}
						<div className="text">{note.content}</div>

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

							<div className="tooltip" onClick={() => onUnarchive(note.id)}>
								<span className="material-symbols-outlined hover small-icon">unarchive</span>
								<span className="tooltip-text">Unarchive</span>
							</div>

							<div className="tooltip" onClick={() => onDelete(note.id)}>
								<span className="material-symbols-outlined hover small-icon">delete</span>
								<span className="tooltip-text">Delete</span>
							</div>

							<div className="tooltip">
								<span className="material-symbols-outlined hover small-icon">more_vert</span>
								<span className="tooltip-text">More</span>
							</div>
						</div>
					</div>
				))
			)}
		</div>
	);
}

export default ArchiveList;
