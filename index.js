// Code your solution in this file!
const drivers = [
    { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
    { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
    { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
    { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
    { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
  ];

const logDriverNames = (drivers)=>{
   drivers.forEach((driver)=>{
       console.log(driver.name)
   })
}

const logDriversByHometown = (drivers,hometown)=>{
    
    drivers.forEach((driver)=>{
        if (driver.hometown==hometown){
            console.log(driver.name)
        }
    })
}

const driversByRevenue = (drivers)=>{
    return drivers.slice().sort((driver1,driver2)=>{
        return driver1.revenue-driver2.revenue
    })
}

const driversByName = (drivers)=>{
    return drivers.slice().sort((driver1,driver2)=>{
        if (driver1.name>driver2.name){
            return 1
        }
        else{
            return -1
        }
    })
}

const totalRevenue = (drivers)=>{
    return drivers.map((driver)=> driver.revenue).reduce((tot,rev)=>{
        return tot+rev
    }
)
}
const averageRevenue = (drivers)=>{
    return totalRevenue(drivers)/drivers.length
}



//logDriversByHometown(drivers)
