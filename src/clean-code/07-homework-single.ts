(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string
        ) {}
    }

    class InputEvents {

        constructor() {}

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    //? Idea para la nueva clase InputElement

    interface InputElementProps {
        value: string;
        placeholder: string;
        id: string;
    }

    class InputElement {
        
        public htmlElement: HtmlElement;
        public attributes: InputAttributes;
        public events: InputEvents;

        constructor({value, placeholder, id} : InputElementProps ) {
            this.htmlElement = new HtmlElement(id, 'input');
            this.attributes = new InputAttributes(value, placeholder);
            this.events = new InputEvents();
        }
    }

    const nameField = new InputElement({value: 'Fernando', placeholder: 'Enter first name', id: 'txtName'});

    console.log({ nameField });

})();