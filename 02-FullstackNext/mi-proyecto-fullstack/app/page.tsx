// app/page.tsx
import TarjetaUsuario from "../components/TarjetaUsuario";
import { Usuario } from "../types/usuario";

export default function HomePage() {
  // 1. Creamos un objeto de prueba que cumpla con la interfaz
  const usuarioEjemplo: Usuario = {
    id: "1",
    nombre: "Alex",
    email: "alex@ejemplo.com",
    habilidades: ["Next.js", "TypeScript", "Tailwind"],
    esAdmin: true,
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-50">
      {/* 2. Pasamos el objeto a través de la prop 'perfil' */}
      <TarjetaUsuario perfil={usuarioEjemplo} />
    </main>
  );
}