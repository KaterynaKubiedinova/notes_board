import CreateBtn from "./CreateBtn";
import CreateNoteList from "./NotesList";
import {
	getNotes,
	createNote,
	updateNote,
	deleteNote
} from "../services/notes";
import {useAsync} from "../hooks/common";
import { useEffect, useCallback } from "react";


export default function CreateBoard () {
	const {
		run,
		data: notes,
		setData: setNotes,
	} = useAsync (getNotes, []);

	useEffect (() => run (), []);

	const onAddBtnClick = useCallback (
		() => {
			const newNote = {
				description: 'Edit me',
			}
	
			createNote (newNote)
				.then ((resp) => {
					setNotes ((prevNotes) => [...prevNotes, resp.data])
				})
		},
		[notes]
	); 

	const saveEditText = (id, title) => {
		const item = notes.find ((note) => (note.id === id));
		const newItem = {...item, description: title};
		
		updateNote (newItem)
			.then ((resp) => {
				const newNotes = notes.map ((note) => (note.id === id ? resp.data : note));
				setNotes (newNotes);
			})
	}

	const onDeleteBtnClick = (id) => {
		deleteNote (id)
			.then ((resp) => {
				const newNotes = notes.filter ((note) => (
					note.id !== id
				));
				setNotes (newNotes);
			})
	}

	const onCancelBtnClick = (item) => {
		updateNote (item)
			.then ((resp) => {
				const newNotes = notes.map ((note) => (note.id === item.id ? resp.data : note));
				setNotes (newNotes);
			})
	}

	return (
		<div className = "board">
			<h1>NOTES</h1>
			<CreateBtn onAddBtnClick = {onAddBtnClick}/>
			<CreateNoteList 
				notes = {notes}
				saveEditText = {saveEditText}
				onDeleteBtnClick = {onDeleteBtnClick}
				onCancelBtnClick = {onCancelBtnClick}/>
		</div>
		
	);
}