const products = [
    {   id:'1',
        name: 'Aceite Esencial de Lavanda',
        price: 2000,
        category: 'Aceites',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_ETo7nSblsLQdHrbgLt1XVbA16KpnAgrqy-qD4mGXlQzyv3gLVbENd3uyBoKP2Bmrws&usqp=CAU',
        stock: 50,
        description: 'Aceite Esencial de Lavanda presentación por 100 ml'
    },
    {id:'2', name:'Ramo de Flores Secas', price:2500, category:'Flores Secas', img: 'https://http2.mlstatic.com/D_NQ_NP_885831-MLA49580050196_042022-O.webp', stock: 20, description:'Ramo chico de Flores Secas de Lavanda'},
    {id:'3', name:'Vela Perfumada de Lavanda', price:1800, category:'Velas', img:'https://3.bp.blogspot.com/-lQMXwP6gGxk/VCMrznINLsI/AAAAAAAAC3s/0wZzDYdNeVM/s1600/Diy%2Bvelas%2Bde%2Blavanda%2Ben%2Bbotes%2Bde%2Bcristal1.jpg', stock:15, description:'Vela Grande perfumada de Lavanda'}

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}