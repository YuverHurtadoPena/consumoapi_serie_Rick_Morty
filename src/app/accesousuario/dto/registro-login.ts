

export interface RegistroLogin {
  nombre: string ;//nombre
  apellido: string;//apellido
  doctoIdent: string;//documento de identidad
  email: string;//correo electrónico (usuario)
  clave: string;//clave
  cia: string //para este campo siempre se debe enviar un 10

 /* constructor(nombre: string, apellido: string, doctoIdent: string, email: string, clave: string, cia: string) {
    this.nombre = nombre
    this.apellido = apellido;
    this.doctoIdent = doctoIdent;
    this.email = email;
    this.clave = clave;
    this.cia = cia;


  }*/

}
