
class facker{
    #firstName=["Liam","Noah","Oliver","Elijah","James","William","Benjamin","Olivia","Emma","Charlotte","Amelia","Ava","Mia"]
    #lastName=["Smith","Jones","Brown","Davies","Watson","Evans","Walker","White","Harris","Thompson","Walker","Robinson","Turner"]
    #emailType=["gmail","hotmail","outlook","mail","yahoo"]
    #characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    constructor(){}

    generateString(length) {
        let result = ' ';
        const charactersLength = this.#characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += this.#characters.charAt(Math.floor(Math.random() *charactersLength));
        }
    
        return result;
    }

    //method for generating random number
    generateNumber(length) {
        let result=''
        for(let i=0;i<length;i++){
            result+=Math.floor(Math.random()*10)
        }
        return result
    }

    //method for generating random date
    getRandomDate(){
        const start = new Date(2019, 0, 1)
        const end = new Date()
        const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
        return randomDate
    }

    //method for generating random phone number
    getRandomPhoneNumber(){
        let result=''
        for(let i=0;i<10;i++){
            result+=Math.floor(Math.random()*10)
        }
        return result
    }

    //method for generating random age
    getRandomAge(minAge,maxAge){
        return Math.floor(Math.random()*(maxAge-minAge+1)+minAge)
    }

    //method for generating random first name
    getRandomFirstName(){
        return this.#firstName[Math.floor(Math.random()*this.#firstName.length)]
    }

    //method for generating random last name
    getRandomLastName(){
        return this.#lastName[Math.floor(Math.random()*this.#lastName.length)]
    }

    //method for generating random email
    getRandomEmail(){
        return this.getRandomFirstName()+'.'+this.getRandomLastName()+'@'+this.#emailType[Math.floor(Math.random()*this.#emailType.length)]+'.com'
    }

}



module.exports=new facker()