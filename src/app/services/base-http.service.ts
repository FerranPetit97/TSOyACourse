import axios from 'axios';
import { Category } from './../models/category.model';
import { UpdateProductDto } from '../dtos/product.dto';
import { Product } from './../models/product.model';

export class BaseHttpService<TypeClass> {
  // data: TypeClass[] = [];

  constructor(protected url: string) {}

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}

// const service = new BaseHttpService<string>();
// service.getAll();

// const service2 = new BaseHttpService<Category>();
// service2.getAll();

(async () => {
  const url = 'https://api.escuelajs.co/api/v1/products';

  const productService = new BaseHttpService<Product>(url);

  const rta = await productService.getAll();
  console.log('Products: ', rta.length);
  productService.update<Product['id'], UpdateProductDto>(105, {
    title: 'Heey',
  });

  const url2 = 'https://api.escuelajs.co/api/v1/categories';

  const categoryService = new BaseHttpService<Category>(url2);

  const rta1 = await categoryService.getAll();
  console.log('Categories: ', rta1.length);
})();
