export default function CancelChanges ({onCancel}) {
	return (
		<div className = "cancel_save">
			<i className = "fa-solid fa-reply"
				onClick = {onCancel}></i>
			<p>Сancel latest change</p>
		</div>
	)
}