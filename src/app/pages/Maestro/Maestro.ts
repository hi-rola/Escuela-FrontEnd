export class Maestro {
    constructor(
        public id_maestro: number,
        public nombre: string,
        public apellidos : string,
        public correo : string,
        public contrasena : string,
        public facultad: string,
        public experiencia_educativa : string,
        public rol : string,
        public estatus : string,
        public estatus_boolean  : Boolean
    ) { }
}