class Pokemon{
    constructor(name){
        this.name = name;
    }

    sayHello(){
        console.log(`Mi pokemon ${this.name} te saluda.`)
    }

    sayMessage(message){
        this.message = message;
        console.log(`Mi pokemon ${this.name} dice: ${this.message}`)
    }

}


module.exports = Pokemon