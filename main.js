/*
const createStudent = (name, grade) => {
    const studentInfo = {
        studentName: name,
        studentGrade: grade
    }
    return studentInfo
}

const addMathGrade = (studentInfo, mathGrade) => {
    return studentInfo.math = mathGrade
}

const addHistoryGrade = (studentInfo, historyGrade) => {
    return studentInfo.history = historyGrade
}

const addScienceGrade = (studentInfo, scienceGrade) => {
    return studentInfo.science = scienceGrade
}

let studentData = createStudent ('Phil', 6)
let mathGrade = addMathGrade (studentData, "B")
let historyGrade = addHistoryGrade(studentData, "C")
let scienceGrade = addScienceGrade (studentData, "A")
console.log(studentData)
*/



const buyClay = () => {
    const clay = { }
    return clay
}

const makePottery = (clay) => {
clay.shape = "bowl"
return clay
}

const bisqueFire = (clay) => {
    clay.readyForGlazing = true
    return clay
}

const glazePottery = (clay) => {
    if (clay.readyForGlazing === true){
        (clay.glazing = "Midnight Blue")
        return clay
    }
    else {return (console.log("Make sure you bisque fire the pottery before you glaze it."))}
}

const finalFiring = (clay, kilnTemp) => {
    if (kilnTemp > 1200){clay.cracked = true}
    else {clay.cracked = false}
    return clay
}

newClay = buyClay()
newPot = makePottery(newClay)
firedPot = bisqueFire(newPot)
glazedPot = glazePottery(firedPot)
finished = finalFiring (glazedPot, 1100)

console.log(finished)
