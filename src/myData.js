let prods = [
  {
    name: "milk",
    price: "12",
    categoryid: 1,
    id: 1,
  },
  {
    name: "salomon",
    price: "12",
    categoryid: 2,
    id: 2,
  },
  {
    name: "chicken breast",
    price: "12",
    categoryid: 3,
    id: 3,
  },
  {
    name: "steak",
    price: "22",
    categoryid: 3,
    id: 4,
  },  {
    name: "ground meat",
    price: "20",
    categoryid: 3,
    id: 5,
  },
  {
    name: "tuna",
    price: "15",
    categoryid: 2,
    id: 6,
  },
  {
    name: "trout",
    price: "26",
    categoryid: 2,
    id: 7,
  },
  {
    name: "shoko",
    price: "8",
    categoryid: 1,
    id: 8,
  },
  {
    name: "cheese",
    price: "14",
    categoryid: 1,
    id: 9,
  },
];

const categoryName = ["general", "dairy", "fish", "meat"]

export const getCategoryName = (id) =>{
    return categoryName[id]
}
// return the product
export function getProducts() {
  return prods;
}

// return the product by category
export function getProductsByCategory(id) {
    if (id > 0) {
        return prods.filter((prod) => prod.categoryid == id);
    }
  
}
