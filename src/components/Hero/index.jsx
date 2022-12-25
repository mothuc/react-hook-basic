import React from 'react';

function Hero({name}) {
    console.log(name);
    return (
        <div>
            Hero name: {name}
        </div>
    );
}

export default React.memo(Hero) ;