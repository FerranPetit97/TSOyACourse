import axios from 'axios';

(async () => {
  function delay(time: number) {
    const promise = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('Hola mu buenos días pero después de 3 segundos, BRO');
      }, time);
    });
    return promise;
  }

  const getProducts = () => {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  };

  const getProductsAsync = async () => {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta.data;
  };

  console.log('---'.repeat(10));
  const rta = await delay(3000);
  console.log(rta);

  console.log('---'.repeat(10));
  const products = await getProducts();
  console.log(products.data);
  const productsV2 = await getProductsAsync();
  console.log(productsV2);
})();
