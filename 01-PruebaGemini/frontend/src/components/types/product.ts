export interface Product {
    id: number;
    documentId: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface ProductResponse {
    data: Product[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}