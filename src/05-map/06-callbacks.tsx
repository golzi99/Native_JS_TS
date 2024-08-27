// const callback = () => {
//     alert('hey')
// }
//
// window.setTimeout(callback, 1000)

import {ChangeEvent, MouseEvent} from 'react';

export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    }

    const onNameChanged = () => {
        console.log('name changed')
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value)
    }

    const focusLostHandler = () => {
        console.log('focus lost')
    }

    return (
        <div>
            <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimych</textarea>
            <input onChange={onAgeChanged} type={'number'}/>
            <button name={'delete'} onClick={deleteUser}>x</button>
        </div>
    )
}