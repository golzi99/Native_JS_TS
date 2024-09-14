import {
    addBooks, addCompany,
    makeHairStyle,
    moveUser, removeBook,
    updateBook, updateCompany,
    upgradeUserLaptop,
    UserType,
    UserWithBooks,
    UserWithLaptop, UserWorkCompanies
} from './10_01';

test('test1', () => {
    let user: UserType = {
        name: 'Paul',
        hair: 25,
        address: {
            title: 'Tomsk'
        }
    }

    const awesomeUser = makeHairStyle(user, 2)

    user.address.title = 'Moscow'

    expect(user.hair).toBe(25)
    expect(awesomeUser.hair).toBe(12.5)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address', () => {
    let user: UserWithLaptop = {
        name: 'Paul',
        hair: 25,
        address: {
            title: 'Tomsk'
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Moscow')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.address.title).not.toBe('Moscow')
    expect(user.laptop).toBe(movedUser.laptop)
})

test('upgrade laptop', () => {
    let user: UserWithLaptop = {
        name: 'Paul',
        hair: 25,
        address: {
            title: 'Tomsk'
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const userWithNewLaptop = upgradeUserLaptop(user, 'MacBook')

    expect(user).not.toBe(userWithNewLaptop)
    expect(user.laptop).not.toBe(userWithNewLaptop.laptop)
    expect(user.laptop.title).not.toBe('MacBook')
    expect(user.laptop.title).toBe('ZenBook')
    expect(user.address).toBe(userWithNewLaptop.address)
})

test('add books', () => {
    let user: UserWithBooks & UserWithLaptop = {
        name: 'Paul',
        hair: 25,
        address: {
            title: 'Tomsk'
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'React', 'HTML', 'TS']
    }

    const userWithBooks = addBooks(user, ['RestAPI', 'Redux'])

    expect(user).not.toBe(userWithBooks)
    expect(user.address).toBe(userWithBooks.address)
    expect(user.laptop).toBe(userWithBooks.laptop)
    expect(user.books).not.toBe(userWithBooks.books)
    expect(userWithBooks.books[4]).toBe('RestAPI')
    expect(userWithBooks.books[5]).toBe('Redux')
})

test('update book', () => {
    let user: UserWithBooks & UserWithLaptop = {
        name: 'Paul',
        hair: 25,
        address: {
            title: 'Tomsk'
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'React', 'HTML', 'JS']
    }

    const userUpdateBooks = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userUpdateBooks)
    expect(user.address).toBe(userUpdateBooks.address)
    expect(user.laptop).toBe(userUpdateBooks.laptop)
    expect(user.books).not.toBe(userUpdateBooks.books)
    expect(userUpdateBooks.books[3]).toBe('ts')
})

test('remove book', () => {
    let user: UserWithBooks & UserWithLaptop = {
        name: 'Paul',
        hair: 25,
        address: {
            title: 'Tomsk'
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'React', 'HTML', 'JS']
    }

    const userWithDeletedBooks = removeBook(user, 'js')

    expect(user).not.toBe(userWithDeletedBooks)
    expect(user.address).toBe(userWithDeletedBooks.address)
    expect(user.laptop).toBe(userWithDeletedBooks.laptop)
    expect(user.books).not.toBe(userWithDeletedBooks.books)
    expect(user.books.length).toBe(4)
    expect(userWithDeletedBooks.books.length).toBe(3)
})

test('add companies', () => {
    let user: UserWithBooks & UserWithLaptop & UserWorkCompanies = {
        name: 'Paul',
        hair: 25,
        address: {
            title: 'Tomsk'
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'React', 'HTML', 'JS'],
        companies: [
            {title: 'IT-Incubartor', id: 1},
            {title: 'RosAtom', id: 2},
        ]
    }

    const userWithNewJobPlace = addCompany(user, 'Google', 3)

    expect(userWithNewJobPlace.companies.length).toBe(3)
    expect(userWithNewJobPlace.companies[2].title).toBe('Google')
    expect(userWithNewJobPlace.companies[2].id).toBe(3)
    expect(user).not.toBe(userWithNewJobPlace)
    expect(user.companies).not.toBe(userWithNewJobPlace.companies)
})

test('update companies', () => {
    let user: UserWithBooks & UserWithLaptop & UserWorkCompanies = {
        name: 'Paul',
        hair: 25,
        address: {
            title: 'Tomsk'
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'React', 'HTML', 'JS'],
        companies: [
            {title: 'IT-Incubartor', id: 1},
            {title: 'RosAtom', id: 2},
        ]
    }

    const userWithNewJobPlace = updateCompany(user, 'Google', 1)

    expect(userWithNewJobPlace.companies.length).toBe(2)
    expect(userWithNewJobPlace.companies[0].title).toBe('Google')
    expect(userWithNewJobPlace.companies[0].id).toBe(1)
    expect(user).not.toBe(userWithNewJobPlace)
    expect(user.companies).not.toBe(userWithNewJobPlace.companies)
})