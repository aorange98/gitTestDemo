function main(){
    var a = 100
    var b = 200
    console.log(1000,'by gitA')
    var gitB = '我是gitB'
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
    gitA(){
        this.b = 200
    }
    gitA2(){
        
    }
}

new GitAPerson()
var gitBCode = function(){
    console.log('我是gitBCode')
}
