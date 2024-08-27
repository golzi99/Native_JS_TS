import React from 'react';


export type ManType = {
    name: string
    age: number
    lessons: Array<{title: string}>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {module: string}
}

export const ManComponent: React.FC<PropsType> = ({title, man: {name}, ...props}) => {

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {name}
            </div>
            <div>
                {props.food}
            </div>
            <div>
                {props.car.module}
            </div>
        </div>
    )
}