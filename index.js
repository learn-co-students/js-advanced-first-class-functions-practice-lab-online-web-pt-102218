// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function (driver){
    console.log(driver.name)
  })
  };

  function logDriversByHometown(drivers, hometown) {
    drivers.forEach( function(driver){
      if (driver.hometown === hometown) {
        console.log(driver.name)
      }
    })
  };

  const driversByRevenue = function (drivers) {
    return drivers.slice().sort(function (driverOne, driverTwo) {
      return driverOne.revenue - driverTwo.revenue;
    });
  };

  function driversByName(drivers) {
    return drivers.slice().sort( function (driver1, driver2) {
      return driver1.name.localeCompare(driver2.name);
    });
  };
  const totalRevenue = function (drivers) {
    const reduceRevenue = function (agg, dr, i, drivers) {
      return agg + dr.revenue;
    };
    return drivers.reduce(reduceRevenue, 0);
  };

  const averageRevenue = function (drivers) {
    const averageRevenue = function (agg, dr, i, drivers) {
      return (agg + dr.revenue) / (drivers.length)
    };
      return drivers.reduce(averageRevenue, 0);
  }