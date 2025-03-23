import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import ArchiveList from './components/ArchiveList';
import Sidebar from './components/Sidebar';
import './styles.css';

function App() {
	// State management for notes and archive
	const [notes, setNotes] = useState(() => {
		const savedNotes = localStorage.getItem('notes');
		return savedNotes ? JSON.parse(savedNotes) : [];
	});

	const [archivedNotes, setArchivedNotes] = useState(() => {
		const savedArchived = localStorage.getItem('archivedNotes');
		return savedArchived ? JSON.parse(savedArchived) : [];
	});

	const [showArchived, setShowArchived] = useState(false);
	const [sidebarHover, setSidebarHover] = useState(false);

	useEffect(() => {
		localStorage.setItem('notes', JSON.stringify(notes));
		localStorage.setItem('archivedNotes', JSON.stringify(archivedNotes));
	}, [notes, archivedNotes]);

	const addNote = (newNote) => {
		setNotes([...notes, { ...newNote, id: Date.now() }]);
	};

	const deleteNote = (id) => {
		setNotes(notes.filter(note => note.id !== id));
	};

	const archiveNote = (id) => {
		const noteToArchive = notes.find(note => note.id === id);
		if (noteToArchive) {
			setArchivedNotes([...archivedNotes, noteToArchive]);
			setNotes(notes.filter(note => note.id !== id));
		}
	};

	const unarchiveNote = (id) => {
		const noteToUnarchive = archivedNotes.find(note => note.id === id);
		if (noteToUnarchive) {
			setNotes([...notes, noteToUnarchive]);
			setArchivedNotes(archivedNotes.filter(note => note.id !== id));
		}
	};

	const deleteArchived = (id) => {
		setArchivedNotes(archivedNotes.filter(note => note.id !== id));
	};

	const toggleView = () => {
		setShowArchived(!showArchived);
	};

	const handleSidebarHover = (isHovering) => {
		setSidebarHover(isHovering);
	};

	return (
		<div className="app">
			<Header />
			<Sidebar
				showArchived={showArchived}
				toggleView={toggleView}
				onMouseEnter={() => handleSidebarHover(true)}
				onMouseLeave={() => handleSidebarHover(false)}
				isHovering={sidebarHover}
			/>

			{!showArchived ? (
				<>
					<NoteForm addNote={addNote} />
					<NoteList
						notes={notes}
						onDelete={deleteNote}
						onArchive={archiveNote}
					/>
				</>
			) : (
				<ArchiveList
					archivedNotes={archivedNotes}
					onDelete={deleteArchived}
					onUnarchive={unarchiveNote}
				/>
			)}
		</div>
	);
}

export default App;
