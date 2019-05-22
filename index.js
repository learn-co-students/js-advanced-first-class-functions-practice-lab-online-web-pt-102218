// Code your solution in this file!
function logDriverNames(drivers) {
    drivers.forEach(function (name) {
        console.log(name.name);
    })
}

function logDriversByHometown(drivers, home) {
    drivers.forEach(function(driver) { 
        if (driver.hometown === home) {
            console.log(driver.name)
        }
    })
}

function driversByRevenue(drivers) {
    let newDrivers = [...drivers]
    console.log(newDrivers)
    const out = function (num1, num2) {
        return num1.revenue - num2.revenue;
      };
   return newDrivers.sort(out)
}

function driversByName(drivers) {
    let newDrivers = [...drivers]
    const out = function (a,b) {
        return a.name.localeCompare(b.name);
      };
   return newDrivers.sort(out)
}

function totalRevenue(drivers) {
    let newDrivers = [...drivers]
    const out = function(agg, el) {
        return agg + el.revenue
    }
    return newDrivers.reduce(out, 0)
}

function averageRevenue(drivers) {
    let newDrivers = [...drivers]
    const out = function(agg, el) {
        return agg + el.revenue
    }
    
    return newDrivers.reduce(out, 0)/newDrivers.length
}