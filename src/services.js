const products = [ 
    {id:"1", name: "Skin Claudette", price:"15", category:"Survivors"},
    {id:"2", name: "Skin Meg Thomas", price:"25", category:"Survivors"},
    {id:"3", name: "Skin Kate Denson", price:"18", category:"Survivors"},
    {id:"4", name: "Skin Michael Myers", price:"58", category:"Killers"},
    {id:"3", name: "Skin Ghost Face", price:"35", category:"Killers"},
]

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeOut(() => {
            const product = products.find((p) => p.id === id);
            
            if (product) {
                resolve (product);
            } else {
                reject("No encontramos resultados")
            }
        }, 1000);
    });
};



export const getProducts = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {

            const productsFiltered = category 
            ? products.filter((product) => product.category === category) 
            : products;
            resolve(productsFiltered)
        },1000);
    });
};