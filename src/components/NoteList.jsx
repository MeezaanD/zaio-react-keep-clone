import React from 'react';
import Note from './Note';

function NoteList({ notes, onDelete, onArchive }) {
	return (
		<div className="notes">
			{notes.length === 0 ? (
				<div className="empty-state">
					<p>Notes you add appear here</p>
				</div>
			) : (
				notes.map(note => (
					<Note
						key={note.id}
						id={note.id}
						title={note.title}
						content={note.content}
						color={note.color}
						onDelete={onDelete}
						onArchive={onArchive}
					/>
				))
			)}
		</div>
	);
}

export default NoteList;
