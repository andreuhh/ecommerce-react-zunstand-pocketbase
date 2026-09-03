import type { Product } from '@/model/product';
import { useCart, useCartPanel } from '@/services/cart';
import { ServerError, Spinner } from '@/shared';
import { useEffect, useState } from 'react';
import { pb } from '../../pocketbase';
import { ProductCard } from './components/ProductCard';

export function ShopPage() {
    const [products, setProducts] = useState<Product[]>([])
    const [pending, setPending] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)
    const openCartPanel = useCartPanel((state) => state.openOverlay);
    const addToCart = useCart((state) => state.addToCart);

    useEffect(() => {
        pb.collection('products').getList<Product>()
            .then(res => {
                setProducts(res.items)
                setError(false);
            })
            .catch(err => {
                setError(true);
            })
            .finally(() => {
                setPending(false);
            })
    }, [])

    function handleAddToCart(p: Product) {
        openCartPanel()
        addToCart(p)
    }

    return (
        <div>
            <h1 className="title">SHOP</h1>

            {error && <ServerError />}
            {pending && <Spinner />}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
                {
                    products.map(p => {
                        return (
                            <div key={p.id}>
                                <ProductCard product={p} onAddToCart={() => handleAddToCart(p)} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
