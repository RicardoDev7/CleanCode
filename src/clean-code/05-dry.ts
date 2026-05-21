type Size = ''|'S'|'M'|'L'|'XL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = ''
    ){}

    isProductReady() : boolean{
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if(this[key].length <= 0) throw new Error(`Product ${key} is required`);
                    break;
                case 'number':
                    if(this[key] <= 0) throw new Error(`Product ${key} is required`);
                    break;
                default:
                    throw new Error(`Product ${key} has an invalid type`);
            }
        }
        return true;
    }

    toString(){
        //NO DRY
        //if(this.name.length <= 0) throw new Error('Product name is required');
        //if(this.price <= 0) throw new Error('Product price is required');
        //if(this.size.length <= 0) throw new Error('Product size is required');
        
        //DRY
        return this.isProductReady()
        ? `${this.name} (${this.price.toFixed(2)}), ${this.size}` 
        : '';
    }
}
(()=>{
    const bluePants = new Product('Jeans', 100, 'M');
    console.log(bluePants.toString());
})();