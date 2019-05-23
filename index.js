const logDriverNames = function(drivers) {
  drivers.forEach(function(element) {
    console.log(element.name)
  })
}

const logDriversByHometown = function(driver, location) {
  driver.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  })
} 

const driversByRevenue = function(driver) {
  return driver.slice().sort(function(driver1, driver2) {
    return driver1.revenue - driver2.revenue
  })
}

const driversByName = function(driver) {
  return driver.slice().sort(function(driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name)
  })
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length
}

