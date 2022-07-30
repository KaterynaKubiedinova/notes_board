export default function ChangeNote ({saveEdit, count, description, title, onTextChange}) {

	return (
		<form onSubmit = {saveEdit}>
			<input
				type = 'text'
				value={count === 0 ? description : title}
				onChange = {onTextChange}
				onBlur = {saveEdit}>
			</input>
		</form>
	)
}