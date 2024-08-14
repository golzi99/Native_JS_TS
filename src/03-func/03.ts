import {GovernmentBuildingsProps, HousesProps} from "../02-objects/02_types";

export function sum(a: number, b: number) {
    return a + b;
}

export function addSkill(student: StudentProps, skill: string) {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(student: StudentProps) {
    student.isActive = true
}

export function doesStudentLiveIn(student: StudentProps, city: string) {
    return student.address.city.title === city
}

export function changeBudget(building: GovernmentBuildingsProps, budget: number) {
    building.budget += budget
}

export function repairHouse(house: HousesProps) {
    house.repaired = true
}

export function toFireStaff(building: GovernmentBuildingsProps, fireStuff: number) {
    building.staffCount -= fireStuff
}

export function toHireStaff(building: GovernmentBuildingsProps, newStuff: number) {
    building.staffCount += newStuff
}