function AlertForm(props) {
    return (
        <div class="p-4 m-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-900 dark:text-red-400" role="alert">
            <span class="font-medium">{props.type}</span> {props.value}.
        </div>
    )
}

export default AlertForm;