import {CityProps, GovernmentBuildingsProps} from '../02-objects/02_types';

export const demolishHousesOnTheStreet = (city: CityProps, street: string) => {
    city.houses = city.houses.filter(house =>
        house.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen =(governmentBuildings: Array<GovernmentBuildingsProps>, staffCount: number) => {
    return governmentBuildings.filter(building => building.staffCount > staffCount)
}