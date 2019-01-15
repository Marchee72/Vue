
export default class Persona {
    
    nombre:string;
    apellido: string;
    edad:number;
    oficina:string;
    estado:string

    constructor(nombre: string, apellido:string, edad:number, oficina:string, estado:string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.oficina = oficina;
        this.estado = estado;
        }
}


