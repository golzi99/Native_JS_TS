type UserType = {
    name: string,
    age: number,
    address: {
        title: string
    }
}

function increaseAge(u: UserType) {
    u.age++
}

test('test reference type', () => {
    let user = {
        name: 'Paul',
        age: 25,
        address: {
            title: 'Tomsk'
        }
    }

    increaseAge(user)

    expect(user.age).toBe(26)

    const superman = user

    superman.age = 1000

    expect(user.age).toBe(1000)
})

test('array test', () => {
    let users = [{
        name: 'Paul',
        age: 25
    }, {
        name: 'Dimych',
        age: 25
    }
    ]

    let admins = users

    admins.push({name: 'bandit', age: 10})

    expect(users[2]).toEqual({name: 'bandit', age: 10})
})

test('value type test', () => {
    let usersCount = 100
    let adminCount = usersCount

    adminCount = adminCount + 1

    expect(usersCount).toBe(100)
})

test('test reference type', () => {
    let address = {
        title: 'Tomsk'
    }

    let user = {
        name: 'Paul',
        age: 25,
        address: address
    }

    let user2: UserType = {
        name: 'Natasha',
        age: 21,
        address: address
    }

    address.title = 'Kanary'

    expect(user.address.title).toBe('Kanary')
    expect(user.address).toBe(user2.address)
})

test('test reference type array', () => {
    let address = {
        title: 'Tomsk'
    }

    let user = {
        name: 'Paul',
        age: 25,
        address: address
    }

    let user2: UserType = {
        name: 'Natasha',
        age: 21,
        address: address
    }

    const users = [user, user2, {name: 'Katya', age: 22, address: address}]

    const admins = [user, user2]

    admins[0].name = 'Dmitry'

    expect(users[0].name).toBe('Dmitry')
})