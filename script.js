function updateTime(){
    const currentTimeUTC = document.getElementById("currentTimeUTC")
    const currentDay = document.getElementById("currentDay")
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const date = new Date()
    
    const day = date.getDay()
    // console.log(day)
    const currentDayName = daysOfWeek[day]
    // console.log(currentDayName)
   
    const time = date.toLocaleString().split(' ')[1]

    // console.log(time)
    // console.log(day)

    currentTimeUTC.textContent = time
    currentDay.textContent = currentDayName

}

document.addEventListener('DOMContentLoaded',(event)=>{
    updateTime()
    setInterval(updateTime,60000)
})
