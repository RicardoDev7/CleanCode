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
   }

   class User {
    public email: string;
    public role: string;
    public lastAccess: Date;
    constructor({email, role}: UserProps){
        this.email = email;
        this.role = role;
        this.lastAccess = new Date();
    }

    checkCredentials(){
        return true;
    }
   }

   interface SettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
   }

   class Settings{
    public workingDirectory: string;
    public lastOpenFolder: string;
    constructor({ workingDirectory,
        lastOpenFolder} : SettingsProps){
        this.workingDirectory = workingDirectory;
        this.lastOpenFolder = lastOpenFolder;
    }
   }

   interface UserSettingsProps {
        name: string;
        gender: Gender;
        birthDate: Date;
        email: string;
        role: string;
        workingDirectory: string;
        lastOpenFolder: string;
   }

   class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;
    constructor({
        name, gender, birthDate, email, role, workingDirectory, lastOpenFolder
    }: UserSettingsProps){
        this.person = new Person({ name, gender, birthDate });
        this.user = new User({ email, role });
        this.settings = new Settings({ workingDirectory, lastOpenFolder });
    }
   }

   const userSettings = new UserSettings({
       name: "John Doe",
       gender: "M",
       birthDate: new Date("1990-01-01"),
       email: "john.doe@example.com",
       role: "user",
       workingDirectory: "/home/user/projects",
       lastOpenFolder: "/home/user/projects/myapp"
   });

   console.log({userSettings});

})();