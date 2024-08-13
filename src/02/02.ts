type AddressPropsLocal = {
    street: string,
    dom: number
    city: CityPropsLocal
}

type CityPropsLocal = {
    title: string,
    countryTitle: string
}

type TechnologiesProps = {id: number, title: string}

type StudentProps = {
    id: number,
    name: string,
    age: number,
    isActive: boolean,
    address : AddressPropsLocal,
    technologies: Array<TechnologiesProps>
}

const student: StudentProps = {
    id: 1,
    name: "Paul",
    age: 25,
    isActive: true,
    address: {
        street: "Tverskay",
        dom: 14,
        city: {
            title: "Tomsk",
            countryTitle: "Russia"
        }
    },
    technologies: [
        {id: 1, title: "HTML"},
        {id: 2, title: "CSS"},
        {id: 3, title: "React"},
    ]
}