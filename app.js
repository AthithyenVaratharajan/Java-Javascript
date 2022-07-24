

//setTimeout
setTimeout(() => {
    console.log("Waited 1 second");
} , 1000)


//nestedsetTimeouts
setTimeout(() =>{
    console.log(3);
    setTimeout(() =>{
        console.log(2);
        setTimeout(() =>{
            console.log(1);
        } , 1000)
    }, 1000)
}, 1000)

//button eventhandler
// let btn;
// btn.addEvenListener('click', () =>{

// })
