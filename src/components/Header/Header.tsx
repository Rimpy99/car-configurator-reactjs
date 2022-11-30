import React from 'react';

type Props = {
    carModel: string,
}

export const Header = ({carModel}: Props) => {

    return(
        <div>
            <h1>{carModel} CONFIGURATOR</h1>
        </div>
    )
}