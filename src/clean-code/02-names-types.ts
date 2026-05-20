(() => {

    const temperaturesCelsius = [33.6, 12.34];
    console.log(`Temperaturas: ${temperaturesCelsius.join(', ')}`);

    const ipServer = '123.123.123.123';
    console.log(`IP del servidor: ${ipServer}`);

    const users = [
        {id: 1, email: 'fernando@google.com'},
        { id: 2, email: 'juan@google.com' }, 
        { id: 3, email: 'melissa@google.com' }
    ];
    console.log(`Total de usuarios: ${users.length}`);

    const userEmails = users.map( user => user.email );
    console.log(`Emails de los usuarios: ${userEmails.join(', ')}`);

    const canJump = false;
    const canRun = true;
    const hasItems = true;
    const isLoading = false;
    console.log(`Can jump: ${canJump}`);
    console.log(`Can run: ${canRun}`);
    console.log(`Has items: ${hasItems}`);
    console.log(`Is loading: ${isLoading}`);

    const currentTime = new Date().getTime();
    const startTime = currentTime;
    const endTime = currentTime - startTime;
    console.log(`Tiempo de ejecución: ${endTime} ms`);

    function getBooks() {
        console.log('Obteniendo libros...');
    }
    getBooks();

    function getBooksByUrl( u: string) {
        console.log(`Obteniendo libros desde: ${u}`);
    }
    getBooksByUrl('https://api.example.com/books');
    
    function calculateArea( s: number ) {
        console.log(`Área del cuadrado: ${s * s}`);
    }
    calculateArea(5);

    function printJob() {
        console.log('Imprimiendo trabajo...');
    }
    printJob();

})();