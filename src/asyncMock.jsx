import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';
import { db } from './services/firebase/firebaseConfig'; 

export const getProducts = async () => {
    try {
        const productsCollection = collection(db, 'products');
        const querySnapshot = await getDocs(productsCollection);
        const products = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const getProductById = async (productId) => {
    try {
        const productDoc = doc(db, 'products', productId);
        const docSnapshot = await getDoc(productDoc);
        if (docSnapshot.exists()) {
            return {
                id: docSnapshot.id,
                ...docSnapshot.data()
            };
        } else {
            throw new Error("Producto no encontrado");
        }
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        throw error;
    }
};

export const getProductsByCategory = async (category) => {
    try {
        const productsCollection = collection(db, 'products');
        const q = query(productsCollection, where('category', '==', category));
        const querySnapshot = await getDocs(q);
        const products = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return products;
    } catch (error) {
        console.error('Error fetching products by category:', error);
        throw error;
    }
};
