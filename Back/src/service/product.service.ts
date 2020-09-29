import { ProductRepository } from '../repository/product.repository';

export class ProductService {

    private repository: ProductRepository;

    constructor() { this.repository = new ProductRepository() }

    // async getAll() {
    //     return await this.repository.selectAll();
    // }

}