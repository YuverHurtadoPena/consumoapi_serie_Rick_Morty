export interface Login {
password: string,//contraseña del usuario
companyId: string,//para este campo siempre se debe enviar un 10
username: string,//correo electrónico (usuario)
desdeMs: boolean//siempre se debe enviar true
}
