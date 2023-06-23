const httpMessageCodes = {
	ACCOUNT_DISABLED: {key: 'ACCOUNT_DISABLED', value: 'Tu cuenta ha sido desactivada.'},
	PERMISSION_DENIED: {key: 'PERMISSION_DENIED', value: 'No tienes permisos para realizar esta acción'},
	INVALID_CREDENTIALS: {key: 'INVALID_CREDENTIALS', value: 'El correo o contraseña no son correctos.'},
	USER_NOT_FOUND: {key: 'USER_NOT_FOUND', value: 'El usuario no existe.'},
	INVALID_REQUEST_BODY: {key: 'INVALID_REQUEST_BODY', value: 'El cuerpo de la solicitud no es válido o faltan parámetros obligatorios.'},
	INVALID_REQUEST_PARAMS: {key: 'INVALID_REQUEST_PARAMS', value: 'Los parámetros de la solicitud no son válidos o faltan campos obligatorios.'},
	SERVER_ERROR: {key: 'SERVER_ERROR', value: 'Ha ocurrido un error en el servidor.'},
	RATE_LIMIT_EXCEEDED: {key: 'RATE_LIMIT_EXCEEDED', value: 'Has excedido el límite para este endpoint.'},
	SERVICE_UNAVAILABLE: {key: 'SERVICE_UNAVAILABLE', value: 'El servicio solicitado está temporalmente fuera de servicio.'},
	USER_ALREADY_EXIST: {key: 'USER_ALREADY_EXIST', value: 'El usuario con el correo ya existe.'},
	INVALID_SESSION: {key: 'INVALID_SESSION', value: 'Tu sesión ha expirado o no es válida.'},
	NOT_FOUND: {key: 'NOT_FOUND', value: 'El recurso solicitado no pudo ser encontrado.'},
	TOO_MANY_REQUEST: {key: 'TOO_MANY_REQUEST', value: 'Has realizado demasiadas solicitudes para este endpoint.'},
	UNAUTHORIZED: {key: 'UNAUTHORIZED', value: 'No estás autorizado para acceder a este recurso.'},
	OK: {key: 'OK', value: 'Tu petición ha sido procesada de manera exitosa'}
}

module.exports = {httpMessageCodes}
