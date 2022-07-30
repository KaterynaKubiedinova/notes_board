import CreateNote from "./CteateNote";

export default function CreateNoteList ({notes, onCancelBtnClick, onDeleteBtnClick, saveEditText}) {
	return (
		<div className="notes_list">
			{notes.map ((note) => (
			<CreateNote 
				key = {note.id}
				item = {note}
				saveEditText = {saveEditText}
				onDeleteBtnClick = {onDeleteBtnClick}
				onCancelBtnClick = {onCancelBtnClick}/>
			))}
		</div>
		
	)
}