export default function CreateBtn ({onAddBtnClick}) {
	const onAdd = (e) => {
		e.stopPropagation ();
		onAddBtnClick ();
	} 
	
	return (
		<button className = "add_btn" onClick = {onAdd}>Add sticker</button>
	)
}