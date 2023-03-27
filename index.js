// Code your solution here
function findMatching(drivers,name){
    return drivers.filter(function(driverName){
        return driverName.toLowerCase()=== name.toLowerCase();
    })
}
function fuzzyMatch(drivers,name){
    let lengthName = name.length;
    return drivers.filter(function(driverName){
        return driverName.slice(0, lengthName) === name;

    })
    }
    function matchName(drivers, name) {
        return drivers.filter(function (driver){
            return driver.name.toLowerCase() === name.toLowerCase();
        });
    }