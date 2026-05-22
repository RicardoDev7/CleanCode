(() => {
    type Gender = 'M' | 'F';

    interface PersonProps {
        name: string;
        gender: Gender;
        birthDate: Date;
    }

    class Person {
        public name: string;
        public gender: Gender;
        public birthDate: Date;
    constructor({name, gender, birthDate} : PersonProps){
        this.name = name;
        this.gender = gender;
        this.birthDate = birthDate;
    }
   }

   interface UserProps {
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthDate: Date;
   }

   class User extends Person {
    public email: string;
    public role: string;
    public lastAccess: Date;
    constructor({email, role, name, gender, birthDate}: UserProps){
        super({name, gender, birthDate});
        this.email = email;
        this.role = role;
        this.lastAccess = new Date();
    }

    checkCredentials(){
        return true;
    }
   }

   interface UserSettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthDate: Date;
   }

   class UserSettings extends User{
    public workingDirectory: string;
    public lastOpenFolder: string;
    constructor({ workingDirectory,
        lastOpenFolder,
        email,
        role,
        name,
        gender,
        birthDate} : UserSettingsProps){
        super({email, role, name, gender, birthDate});
        this.workingDirectory = workingDirectory;
        this.lastOpenFolder = lastOpenFolder;
    }
   }

   const userSettings = new UserSettings(
       {
        workingDirectory: '/home/user',
       lastOpenFolder: '/home/user/documents',
       email: 'john.doe@example.com',
       role: 'user',
       name: 'Ricardo Metzger',
       gender: 'M',
       birthDate: new Date('1994-11-02')}
   );

   console.log({userSettings});
})();