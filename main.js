function main(){
    var a = 100
    var b = 200
    console.log(1000,'by gitA')
}

export  function auth(){
    return localStorage.getItem("token");
}

class GitAPerson {
    constructor(){
        this.init()
    }
    init(){
        this.a = 100
        console.log('xixixixi')
    }
    
}

new GitAPerson()