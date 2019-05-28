function logDriverNames(drivers) {
    const callback = function(el){
        console.log(el.name)
    }
    return drivers.forEach(callback);
}

function logDriversByHometown(drivers, location) {
    const callback = function (driver) {
        if (driver.hometown === location) {
            console.log(driver.name)
        }
    }
    return drivers.forEach(callback);
}

function driversByRevenue(drivers) {
    const numberSorter = function (driver1, driver2) {
        return driver1.revenue - driver2.revenue;
      };

      const newDrivers = [...drivers].sort(numberSorter);      
      
      return newDrivers;
}

function driversByName(drivers) {

    const sortByName = function (driv1, driv2) {
        return driv1.name.localeCompare(driv2.name);
    }

    const newDrivers = [...drivers].sort(sortByName);
    
    return newDrivers;
}

function totalRevenue(drivers) {
    const getTotalAmountForDrivers = function (drivers) {
        let totalRevenue = 0;
       
        drivers.forEach(function (driver) {
          totalRevenue += driver.revenue;
        });
       
        return totalRevenue;
      };

      return getTotalAmountForDrivers(drivers);
}

function averageRevenue(drivers) {
    return (totalRevenue(drivers))/drivers.length
}