function step1(fn){
    setTimeout(()=>{
        console.log("select3edddd");
        //console.log(fn);
        fn()
    },5000)
}
function step2(fn){
     setTimeout(()=>{
        console.log("filterrr");
        //console.log(fn);
        fn()
    },4000)
}
function step3(fn){
     setTimeout(()=>{
        console.log("caption");
        //console.log(fn);
        fn()
    },3000)
}
function step4(){
     setTimeout(()=>{
        console.log("post");
        //console.log(fn);
        // fn()
    },2000)
}
step1(function(){
    step2(function(){
        step3(function(){
            step4()
        })
    })
})