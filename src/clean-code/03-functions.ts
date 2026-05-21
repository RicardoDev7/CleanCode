(() => {

    function getMovieById( id: string ) {
        console.log({ movieId: id });
    }
    getMovieById('1');

    function getActorsByMovieId( movieId: string ) {
        console.log({ id: movieId });
    }
    getActorsByMovieId('1');

    function getActorById( id: string ) {
        console.log({ ActorId: id });
    }
    getActorById('1');

    interface Movie{
        title: string;
        description: string;
        rating: number;
        cast: string[];
    }
    
    function createMovie({title, description, rating, cast}: Movie ) {
        console.log({ title, description, rating, cast });
    }
    const newMovie: Movie = {
        title: 'The Matrix',
        description: 'A computer hacker learns about the true nature of his reality.',
        rating: 4.7,
        cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss']
    };
    createMovie(newMovie);

    interface Actor{
        fullName: string;
        birthdate: Date;
    }

    function createActor( {fullName, birthdate} : Actor ): boolean {
        if ( fullName === 'fernando' ) return false;
        console.log('Crear actor', { fullName, birthdate });
        return true;
    }

    const newActor: Actor = {
        fullName: 'Keanu Reeves',
        birthdate: new Date('1964-09-02')
    };
    createActor(newActor);

    /*
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result;
        if ( isDead ) {
            result = 1500;
        } else {
            if ( isSeparated ) {
                result = 2500;
            } else {
                if ( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000; 
                }
            }
        }
        return result;
    } 
    */

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        if(isDead) return 1500;
        if(isSeparated) return 2500;
        return isRetired ? 3000 : 4000;
    }
    getPayAmount({isDead: true});

})();