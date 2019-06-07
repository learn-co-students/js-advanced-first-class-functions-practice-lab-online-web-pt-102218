// Code your solution in this file!

function logDriverNames(dArr) {
  dArr.forEach(d => {
    console.log(d.name);
  });
}

function logDriversByHometown(dArr, loc) {
  dArr.filter( d => { return d.hometown === loc}).forEach(d => {
    console.log(d.name);
  });
}


function driversByRevenue(dArr) {
  return dArr.slice().sort( function (d1, d2) {return d1.revenue - d2.revenue })
}

function driversByName(dArr) {
  return dArr.slice().sort(function (d1, d2) {
    return d1.name.localeCompare(d2.name);
  })
}

function totalRevenue(dArr) {
  return dArr.reduce(function (a, e, i, r) {
    return a + e.revenue;
  }, 0);
}

function averageRevenue(dArr) {
  return totalRevenue(dArr) / dArr.length;
}
