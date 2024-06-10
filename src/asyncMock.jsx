const products = [
    {
        id: '1',
        name: 'iPhone 12',
        price: '600',
        category: 'celular',
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: '25',
        description: 'Descripción de iPhone 12',
    },
    {
        id: '2',
        name: 'iPhone 15',
        price: '1200',
        category: 'celular',
        img: 'https://www.apple.com/la/iphone-15/images/overview/closer-look/all_colors__d4w03v51nwcy_large.jpg',
        stock: '10',
        description: 'Descripción de iPhone 12',
    },
    {
        id: '3',
        name: 'iPad Pro',
        price: '1000',
        category: 'tablet',
        img: 'https://www.apple.com/la/ipad-pro/images/overview/keyboard-pencil/accessories_1__f688jyg47vm2_large.png',
        stock: '25',
        description: 'Descripción de Tablet',
    },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    const filteredProducts = products.filter((product) => product.category === category);

    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(filteredProducts)
        }, 500)
    })
}

