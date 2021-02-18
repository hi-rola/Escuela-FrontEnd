export class Tarea {
    constructor(
        public id_tarea: number,
        public nombre: string,
        public descripcion: string,
        public fecha_creacion: Date,
        public fecha_entrega: Date,
        public estatus_expiracion: Boolean,
        public id_maestro: number
    ) { }
}