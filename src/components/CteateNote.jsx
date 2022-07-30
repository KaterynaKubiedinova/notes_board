import { useState } from "react";
import CancelChanges from "./CancelChanges";
import ChangeNote from "./ChangeNote";

export default function CreateNote ({item, saveEditText, onCancelBtnClick, onDeleteBtnClick}) {
	const {description, id} = item;
	const [title, setTitle] = useState ('');
	const [isEditing, setIsEditing] = useState (false);
	const [prevItem, setPrevItem] = useState (item);
	const [count, setCount] = useState (0);

	const onTextChange = (e) => {
		e.preventDefault ();
		e.stopPropagation ();
		setTitle (e.target.value);
		setCount (1);
	};
	
	const startEdit = (e) => {
		e.stopPropagation ();
		setIsEditing (!isEditing);
	};

	const onCancel = (e) => {
		e.stopPropagation ();
		onCancelBtnClick (prevItem);
	};

	const saveEdit = (e) => {
		e.stopPropagation ();
		setPrevItem (item);
		setIsEditing (!isEditing);
		saveEditText (id, title);
		setCount (0);
	};

	const onDelte = (e) => {
		e.stopPropagation ();
		onDeleteBtnClick (id);
	};

	return (
		<div 
			className="text_notes">
			{isEditing ? 
				<ChangeNote 
					saveEdit = {saveEdit}
					count = {count}
					description = {description}
					onTextChange = {onTextChange}
					title = {title}/> : 
				<div className = "text_description">
					<span onClick = {startEdit}>{description}</span>
				</div>
			}
			<div className="delete__btn">
				{prevItem.description !== item.description ? 
					<CancelChanges onCancel = {onCancel} /> : 
					<div className="cancel"></div>
				}
				<i className = "fa-solid fa-trash" onClick = {onDelte}></i>
			</div>
		</div>
	)
}