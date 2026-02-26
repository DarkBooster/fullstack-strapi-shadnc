// types/usuario.ts
//Esto es un CONTRATO que define la estructura de un objeto Usuario en TypeScript.

export interface Usuario {
    id: string;
    nombre: string;
    email: string;
    habilidades: string[];
    esAdmin: boolean;
}