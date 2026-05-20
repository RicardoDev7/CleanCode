(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const files = [
        { id: 1, toDelete: false },
        { id: 2, toDelete: false },
        { id: 3, toDelete: true },
        { id: 4, toDelete: false },
        { id: 5, toDelete: false },
        { id: 7, toDelete: true }
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filesToDelete = files.map( x => x.toDelete );
    console.log(`Archivos marcados para borrar: ${filesToDelete.filter(Boolean).length}`);
    
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const currentDate = new Date();
    console.log(`Fecha actual: ${currentDate}`);
    
    // días transcurridos - elapsed time in days
    const totalDays: number = 23;
    console.log(`Días transcurridos: ${totalDays}`);
    
    // número de archivos en un directorio - number of files in directory
    const totalFiles = 33;
    console.log(`Número de archivos: ${totalFiles}`);
    
    // primer nombre - first name
    const name = 'Fernando';
    console.log(`Nombre: ${name}`);
    
    // primer apellido - last name
    const lastName = 'Herrera';
    console.log(`Apellido: ${lastName}`);

    // días desde la última modificación - days since modification
    const daysSinceModification = 12;
    console.log(`Días desde la última modificación: ${daysSinceModification}`);
    
    // cantidad máxima de clases por estudiante - max classes per student
    const maxClassesPerStudent = 6;
    console.log(`Cantidad máxima de clases por estudiante: ${maxClassesPerStudent}`);

})();