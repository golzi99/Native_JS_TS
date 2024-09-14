export type UserType = {
    name: string,
    hair: number,
    address: {
        title: string
    }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptop = UserType & {
    laptop: LaptopType
}

export type UserWithBooks = UserType & {
    books: Array<string>
}

export type UserWorkCompanies = UserType & {
    companies: Array<{title: string, id: number}>
}


export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }

    return copy
}

export function moveUser(u: UserWithLaptop, city: string) {

    return {
        ...u,
        address: {...u.address, city: city}
    }
}

export function upgradeUserLaptop(u: UserWithLaptop, newLaptop: string) {

    return {
        ...u,
        laptop: {...u.laptop, title: newLaptop}
    }
}

export function addBooks(u: UserWithLaptop & UserWithBooks, newBooks: Array<string>) {

    return {
        ...u,
        books: [...u.books, ...newBooks]
    }
}

export function updateBook(u: UserWithLaptop & UserWithBooks, oldBook: string, newBook: string) {

    return {
        ...u,
        books: u.books.map(book => book.toLowerCase() === oldBook.toLowerCase() ? newBook : book)
    }
}

export function removeBook(u: UserWithLaptop & UserWithBooks, bookToRemove: string) {

    return {
        ...u,
        books: u.books.filter(book => book.toLowerCase() !== bookToRemove.toLowerCase())
    }
}

export function updateCompany(u: UserWithLaptop & UserWithBooks & UserWorkCompanies, newCompany: string, id: number) {

    return {
        ...u,
        companies: u.companies.map((c) => c.id === id ? {...c, title: newCompany} : c)
    }
}

export function addCompany(u: UserWithLaptop & UserWithBooks & UserWorkCompanies, newCompany: string, id: number) {

    return {
        ...u,
        companies: [...u.companies, {id: id, title: newCompany}]
    }
}