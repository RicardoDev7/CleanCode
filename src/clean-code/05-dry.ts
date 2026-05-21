type Size = ''|'S'|'M'|'L'|'XL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = ''
    ){}
    toString(){
        if(this.name.length <= 0) throw new Error('Product name is required');
        if(this.price <= 0) throw new Error('Product price is required');
        if(this.size.length <= 0) throw new Error('Product size is required');
        return `${this.name} (${this.price.toFixed(2)}), ${this.size}`;
    }
}
(()=>{
    const bluePants = new Product('Laptop', 100, 'M');
    console.log(bluePants.toString());
})();