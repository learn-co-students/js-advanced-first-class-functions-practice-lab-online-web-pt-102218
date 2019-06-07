 function logDriverNames(drivers){
    drivers.forEach(driver => console.log(driver.name))
 }


function logDriversByHometown(drivers, town){
    
    drivers.forEach(function(driver) {
        if(driver.hometown === town){
            console.log(driver.name)
        }
    })
}

function driversByRevenue(drivers){
    const drive = [...drivers]
    const newDrivers =  function(driver1, driver2){
        return driver1["revenue"] - driver2["revenue"]
    }
    return drive.sort(newDrivers)
}

function driversByName(drivers){
    const drive = [...drivers]
    const newDrivers = (function(a, b){
        return a.name.localeCompare(b.name)
    })
    return drive.sort(newDrivers)

}
    

function totalRevenue(drivers){
    return drivers.reduce(function(total, driver){
        return driver["revenue"] + total
    }, 0)
}

function averageRevenue(drivers){
    return drivers.reduce(function(total, driver){
        return driver["revenue"] + total
    }, 0) / drivers.length
}

//  const reduceProductNames = function (agg, el, i, arr) {
   
//     return [...agg, el.name];
//   };