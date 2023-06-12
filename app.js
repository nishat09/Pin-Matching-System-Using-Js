var global=document.getElementById("pin-matcher")
document.getElementById('false').style.display='none'
document.getElementById('true').style.display='none'
var count=3

//Genrate Pin
document.getElementById('generate-btn').addEventListener("click",function(){
    const random = Math.floor(Math.random() * 9000 + 1000);
    const input=document.getElementById('pin')
    input.value=random

})


//with-the-help-of event bubble of js
document.getElementById('key-pad').addEventListener('click',function(event){
    // 
    var value=event.target.innerText
    if(isNaN(value)){
        if(value=='C'){
            global.value=''

        }
        else if(value=='<'){
            var new_val=global.value
            global.value=new_val.slice(0, new_val.length - 1);

        }
        
    }
    else{
        global.value=global.value+value


    }
})

//Pin-Matching


document.getElementById('submit').addEventListener('click',function(){
    var value1=document.getElementById('pin').value
    var value2=document.getElementById('pin-matcher').value

    if(value1==value2){
        document.getElementById('true').style.display='block'
        document.getElementById('false').style.display='none'
        document.getElementById('try').innerText=3
        count=3
        


    }
    else{
        document.getElementById('false').style.display='block'
        document.getElementById('true').style.display='none'
        if(count>0){

            count=count-1
            document.getElementById('try').innerText=count

        }
        if(count==0){
            window.open("warning.html","_self")

        }

    }
})