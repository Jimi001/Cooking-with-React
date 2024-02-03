import React from 'react'

const Hello = () => {
    // return (
    //     <div class='dummyClass'>
    //         <h1>Hello Folajmi</h1>
    //     </div>
    // )

    return React.createElement(
        'div',
        {id: 'hello', class: 'dummyClass'},
        React.createElement('h1', null, 'Hello Folajimi')
    )

}

export default Hello
