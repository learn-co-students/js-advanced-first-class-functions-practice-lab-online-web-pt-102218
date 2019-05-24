// Code your solution in this file!
function logDriverNames(drivers) {

  drivers.forEach(function(driver){
    console.log(driver.name);
  });
};

function logDriversByHometown(drivers, hometown) {

   drivers.forEach(function(driver){
     if (driver.hometown === hometown) {
       console.log(driver.name);
     }
   });
};


const driversByRevenue = function (drivers) {
  return [...drivers].sort(function (a, b){
    return a.revenue - b.revenue;
  });
};

const driversByName = function (drivers) {
  return [...drivers].sort(function(a, b){
    return a.name > b.name;
  });
};

const totalRevenue = function (drivers) {
  let total = 0;

  drivers.forEach(function (driver){
    total += driver.revenue;
  });
  return total;
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
    