function walk(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const walked = false;

            if(walked){
                resolve("You walk");
            }
            else{
                reject("You didn't walk");
            }
        }, 1500);
    })
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleaned = true;

            if(cleaned){
                resolve("You clean the kitchen 🧹");
            }
            else{
                reject("You didn't clean the kitchen");
            }
        }, 2500);
    })
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;

            if(trashTakenOut){
                resolve("You take out the trash");
            }
            else{
                reject("You didn't take out the trash");
            }
        }, 500);
    })
}

walk()
    .then(value => {
        console.log(value);
        return cleanKitchen();
    })
    .then(value => {
        console.log(value);
        return takeOutTrash();
    })
    .then(value => {
        console.log(value);
        console.log("all is cleaned up");
    })
    .catch(error => {
        console.error(error);
    });