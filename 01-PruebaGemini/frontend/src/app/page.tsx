import { getProducts } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default async function Home() {
  const response = await getProducts();
  const products = response.data;

  return (
    <main className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Nuestra Tienda</h1>
      {products.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500">No hay productos disponibles por ahora.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden, hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <Badge variant={product.stock > 0 ? "default" : "destructive"}>
                    {product.stock > 0 ? "En Stock" : "Agotado"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">${product.price}</span>
                  <Button disabled={product.stock === 0}>
                    {product.stock > 0 ? "Comprar" : "Sin Stock"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
      )}
    </main>
  );
}
