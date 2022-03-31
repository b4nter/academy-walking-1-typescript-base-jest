import {LeapYear} from "../main/LeapYear";

const leapYears = [4, 400, 2000, 1996];
const notLeapYears = [3, 100, 200, 300, 2001, 1900];

describe('LeapYear tests', () => {
    it.each(leapYears)
    ("Should return true when year is '%s'", (year) => {
        let example: LeapYear = new LeapYear();
        expect(example.isLeapYear(year)).toBe(true);
    })

    it.each(notLeapYears)
        ("Should return false when year is '%s'", (year) => {
            let example: LeapYear = new LeapYear();
            expect(example.isLeapYear(year)).toBe(false);
        })

})
