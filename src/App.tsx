import React from 'react';
import './App.css';

function App() {
    // function getCount(str: string): number {
    //     const vowels = ['a', 'e', 'i', 'o', 'u'];
    //     let res: number = 0;
    //     for (let i = 0; i < str.length; i++) {
    //         if (vowels.includes(str[i])) {
    //             res++;
    //         }
    //     }
    //     return res
    // }
    //
    // console.log(getCount("abracadabra"))

    function getCount(str: string) {
        let list = str.match(/[aeiou]/gi);
        return list ? list.length : 0;
    }

    console.log(getCount('abracadabra'))

    return (
        <div>
            <div>
                <button></button>
                <div></div>
            </div>
        </div>
    );
}

export default App;
