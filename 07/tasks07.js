/**
 *  @author Levan Alimbarashvili
 */

//task1 alternative function of setTimeout, based on promise

function mySetTimeout(delay){
    return new Promise (x => setTimeout(x, delay*1000))
}

//task2 simple toy business scheme (version with then/catch)

function process(time, unsuccessRate, resolveStr, rejectStr){
    return new Promise((resolve, reject)=>{
        mySetTimeout(time)
            .then(()=>{
                if(Math.random() > unsuccessRate) { 
                    resolve(resolveStr)
                }else{
                    reject(rejectStr)
                }
            })
    })
}

function makeToys(time) {
    return process(
        time,
        0.1,
        "undefected",
        "defected"
    )
}

function deliverToys(time) {
    return process(
        time,
        0.2,
        "delivered",
        "lost or damaged during transportation"
    )
}

function sellToys(time) {
    return process(
        time,
        0.3,
        "sold out",
        "not attractive to the market"
    )
}


makeToys(3)
    .then((result) => {
        console.log(result)
        return deliverToys(2)
    })
    .then((result) => {
        console.log(result)
        return sellToys(1)
    })
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.error(err)
    });

//task2 simple toy business scheme (version with async/await)

async function processV2(time, unsuccessRate, result, error){
    await mySetTimeout(time)
    if(Math.random() > unsuccessRate) { 
        return result
    }else{
        throw new Error(error)
    }
}
 
function makeToysV2(time) {
    return processV2(
        time,
        0.1,
        "undefected",
        "defected"
    )
}
 
function deliverToysV2(time) {
    return processV2(
        time,
        0.2,
        "delivered",
        "lost or damaged during transportation"
    )
}
 
function sellToysV2(time) {
    return processV2(
        time,
        0.3,
        "sold out",
        "not attractive to the market"
    )
}
 
async function toyCo(time1, time2, time3){
    try{
        let step1 = await makeToysV2(time1)
        console.log(step1) 
        let step2 = await deliverToysV2(time2)
        console.log(step2)
        let step3 = await sellToysV2(time3)
        console.log(step3)
    }catch(err){
        err = err.message
        console.error(err)
    }
}
 
toyCo(3,2,1)


// ***remark***
// Both versions of task2 will work together
// They have the same values and can confuse us
// To check one, the second version should be commented out