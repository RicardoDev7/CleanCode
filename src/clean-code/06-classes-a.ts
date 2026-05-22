(() => {
    type Gender = 'M' | 'F';
    
    /*
    class Person{
        public name: string;
        public gender: Gender;
        public birthDate: Date;
        constructor (name: string, gender: Gender, birthDate: Date) {
            this.name = name;
            this.gender = gender;
            this.birthDate = birthDate;
        }
    }
    */
   
   class Person{
    constructor(
        public name: string,
        public gender: Gender,
        public birthDate: Date
    ){}
   }

    const newPerson = new Person("Ricardo Metzger", "M", new Date("1994-11-02"));
    console.log(newPerson);
})();