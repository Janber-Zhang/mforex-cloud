
function captcha(canvas){

    this.canvas = canvas
    this.width = canvas.width
    this.height = canvas.height
    this.x = this.width / 5
    this.y = this.height / 2
    this.cvs = canvas.getContext("2d")
    this.color = "#333"
    this.str = ''

}

captcha.prototype.getNumber = function(){

    this.cvs.clearRect(0,0,this.width,this.height)
    this.str = ''
    
    for( var i=1;i<5;i++ ){
        var str = parseInt( Math.random() * 10 )
        this.str += str
        this.draw({text: str ,x: this.x * i ,y:this.y})
    }

}

captcha.prototype.getLetter = function(){

    this.cvs.clearRect(0,0,this.width,this.height)
    this.str = ''

    for( var i=1;i<5;i++ ){
        var str = String.fromCharCode(  65 + parseInt(Math.random() * (91-65)) ) 
        this.str += str
        this.draw({text: str ,x: this.x * i ,y:this.y})
    }
}

captcha.prototype.NumberOrLetter = function(){

    this.cvs.clearRect(0,0,this.width,this.height)
    this.str = ''

    for( var i=1;i<5;i++ ){
        var a = parseInt( Math.random() * 10 )
        var str = ''
            str = a>5 ? String.fromCharCode(  65 + parseInt(Math.random() * (91-65)) ) : parseInt( Math.random() * 10 )
        this.str += str
        this.draw({text: str ,x: this.x * i ,y:this.y})
    }

}

captcha.prototype.hanzi = function(){

    this.cvs.clearRect(0,0,this.width,this.height)
    this.str = ''

    for( var i=1;i<5;i++ ){
        var str = eval('"\\u' + (Math.round(Math.random() * 20901) + 19968).toString(16)+'"')
        this.str += str
        this.draw({text: str ,x: this.x * i ,y:this.y})
    }
}

captcha.prototype.setCode = function(str){

    if(typeof str === 'string' || typeof str === 'number'  ){
        str += ''
        this.str = ''
        this.str = str
        this.x = this.width / (str.length+1)
        for( var i=1; i < str.length +1; i++ ){
            this.draw( {text:str[i-1],x:this.x*i,y:this.y} )
        }
    }else{
        console.error("arguments is not string or number")
    }
}

captcha.prototype.disturb = function(){

    for( var i=0;i<3;i++ ){

        var start = {
            x: parseInt( Math.random()*this.width ),
            y: parseInt( Math.random()*this.height )
        }
        var end = {
            x: parseInt( Math.random()*this.width  ),
            y: parseInt( Math.random()*this.height  )
        }

        this.cvs.beginPath()
        this.cvs.moveTo(start.x,start.y)
        this.cvs.lineTo(end.x,end.y)
        this.cvs.stroke()
        this.cvs.closePath()
    }

}

captcha.prototype.draw = function(obj){
    
    this.cvs.beginPath()
    this.cvs.fillStyle = this.color
    this.cvs.textAlign = 'center'
    this.cvs.textBaseline = 'middle'
    this.cvs.font = "50px Arial"
    this.cvs.fillText(obj.text,obj.x,obj.y)
    this.cvs.closePath()

}