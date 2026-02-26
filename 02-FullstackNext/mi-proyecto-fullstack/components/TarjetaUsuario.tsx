"use client"; // <--- Indica que esto se ejecuta en el navegador

//components/TarjetaUsuario.tsx
//Esto es un COMPONENTE de React que muestra la información de un usuario en una tarjeta.
// components/TarjetaUsuario.
import { useState } from "react";
import { Usuario } from "../types/usuario";

export default function TarjetaUsuario({ perfil }: { perfil: Usuario }) {
  //Inicializamos el estado con las habilidades que vienen por ptops.
  const [habilidades, setHabilidades] = useState<string[]>(perfil.habilidades);

  const agregarHabilidad = () => {
    const nueva =  prompt("¿Qué nueva habilidad quieres añadir?");
    if (nueva) {
      // En React, no usamos .push(). Creamos un nuevo arreglo con la nueva habilidad.
      setHabilidades([...habilidades, nueva]);
    }
  };

  return (
    <div className="max-w-sm rounded-2xl shadow-lg bg-white p-6 border">
      <h2 className="text-xl font-bold">{perfil.nombre}</h2>
      
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xs font-semibold text-gray-400 uppercase">Habilidades</p>
          <button 
            onClick={agregarHabilidad}
            className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
          >
            + Añadir
          </button>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {habilidades.map((hab, index) => (
            <span key={index} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
              {hab}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}