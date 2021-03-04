export class Estudiante {
    constructor(
        public id_estudiante: number,
        public nombre: string,
        public apellidos : string,
        public correo : string,
        public contrasena : string,
        public facultad: string,
        public experiencia_educativa : string,
        public rol : string,
        public estatus : string,
        public estatus_boolean  : Boolean,
        public id_maestro  : number
    ) { }
}