import { ProductResponse } from "@/components/types/product";

const API_URL = "http://localhost:1337/api";

export const getProducts = async (): Promise<ProductResponse> => {
    try {
        const response = await fetch(`${API_URL}/products`, { cache: "no-store" });
        if (!response.ok) {
            throw new Error("Error al conectar con Strapi");
        }
        return await response.json();
    } catch (error) {
        console.error("Fallo en la petición:", error);
        throw error;
    }
};
