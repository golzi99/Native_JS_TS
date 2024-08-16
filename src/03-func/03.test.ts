import {addSkill, doesStudentLiveIn, makeStudentActive} from './03';


let student: StudentProps;

beforeEach(() => {
    student = {
        id: 1,
        name: 'Paul',
        age: 25,
        isActive: false,
        address: {
            street: 'Tverskay',
            dom: 14,
            city: {
                title: 'Tomsk',
                countryTitle: 'Russia'
            }
        },
        technologies: [
            {id: 1, title: 'HTML'},
            {id: 2, title: 'CSS'},
            {id: 3, title: 'React'},
        ]
    }
})

test('new tech skill shoud be adeded to student', () => {
    addSkill(student, 'JS')

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()
})

test('student should be made active', () => {
    expect(student.isActive).toBe(false)

    makeStudentActive(student)

    expect(student.isActive).toBe(true)
})

test('does student lives in city?', () => {
    let result1 = doesStudentLiveIn(student, 'Moscow')
    let result2 = doesStudentLiveIn(student, 'Tomsk')

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})
