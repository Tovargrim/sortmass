const sortObjects = (objects, criteria) => {
    return objects.sort((a, b) => {
      for (let i = 0; i < criteria.length; i++) {
        const [property, order] = criteria[i];
        const aValue = a[property];
        const bValue = b[property];
  
        if (aValue < bValue) {
          return order === 'asc' ? -1 : 1;
        }
  
        if (aValue > bValue) {
          return order === 'asc' ? 1 : -1;
        }
      }
  
      return 0;
    });
  };
  
  const products = [
    { name: 'Apple', price: 2.5, category: 'Fruit' },
    { name: 'Banana', price: 1.5, category: 'Fruit' },
    { name: 'Orange', price: 3.0, category: 'Fruit' },
    { name: 'Mango', price: 2.0, category: 'Fruit' },
    { name: 'Carrot', price: 0.5, category: 'Vegetable' },
    { name: 'Potato', price: 0.8, category: 'Vegetable' },
    { name: 'Tomato', price: 1.2, category: 'Vegetable' },
  ];
  
  const sortedProducts = sortObjects(products, [['category', 'asc'], ['price', 'desc']]);
  console.log('Отсортированные продукты по категории (возрастание) и цене (убывание):');
  sortedProducts.forEach((product) => {
    console.log(`${product.name}: ${product.price} (${product.category})`);
  });
  