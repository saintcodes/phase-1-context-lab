/* Your Code Here */

function createEmployeeRecord(employeeInformation) {
    return {
        firstName: employeeInformation[0],
        familyName: employeeInformation[1],
        title: employeeInformation[2],
        payPerHour: employeeInformation[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}

function createEmployeeRecords (recordsArray) {
    const employeeRecords = recordsArray.map((record) => {
      return createEmployeeRecord(record)
      })
      return employeeRecords
    }
    
    function createTimeInEvent(dateStamp) {
      let dateHourSplit = dateStamp.split(' ')
      let date = dateHourSplit[0]
      let hour = parseInt(dateHourSplit[1])
    
      let timeIn = {
        type: "TimeIn",
        hour: hour,
        date: date,
      }
     this.timeInEvents.push(timeIn); 
     return this
    }  
    
    function createTimeOutEvent(dateStamp) {
      let dateHourSplit = dateStamp.split(' ')
      let date = dateHourSplit[0]
      let hour = parseInt(dateHourSplit[1])
    
      let timeOut = {
        type: "TimeOut",
        hour: hour,
        date: date,
      }
      this.timeOutEvents.push(timeOut);
      return this
    }
    
    function hoursWorkedOnDate(date) {
      let timeInObjArray = this.timeInEvents;
      console.log("timeInObjArray: ", timeInObjArray)
      let timeOutObjArray = this.timeOutEvents;
      let timeOut = timeOutObjArray.find(timeOutObj => timeOutObj.date === date)
      let timeIn = timeInObjArray.find(timeInObj => timeInObj.date === date)
      return (timeOut.hour - timeIn.hour)/100
    }
    
    function wagesEarnedOnDate(date) {
        console.log("THIS IS BS in wages: " , this)
        // console.log("date: ", date)
        // console.log("hours worked on date: ", hoursWorkedOnDate(date))
        // console.log("this payperhour: ", call.payPerHour)
        // hoursWorkedOnDate.bind(date)
        return hoursWorkedOnDate(date) * recordObj.payPerHour
      
    }
    
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


// function findEmployeeByFirstName (srcArray, firstName) {
//     let srcArray
// }