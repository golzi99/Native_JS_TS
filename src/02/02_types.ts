export type StreetProps = {
    title: string
}

export type AddressProps = {
    number?: number,
    street: StreetProps
}

export type GovernmentBuildingsProps = {
    type: string,
    budget: number,
    staffCount: number,
    address: AddressProps
}

export type HousesProps = {
    buildedAt: number,
    repaired: boolean,
    address: AddressProps
}

export type CityProps = {
    title: string,
    houses: Array<HousesProps>,
    governmentBuildings: Array<GovernmentBuildingsProps>,
    citizensNumber: number
}