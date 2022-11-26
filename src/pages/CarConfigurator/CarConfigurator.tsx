import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { MacanCarConfigurator } from '../../components/MacanCarConfigurator/MacanCarConfigurator';
import { PanameraCarConfigurator } from '../../components/PanameraCarConfigurator/PanameraCarConfigurator';
import { CarreraCarConfigurator } from '../../components/CarreraCarConfigurator/CarreraCarConfigurator';


export const CarConfigurator: React.FC = () => {

    const location = useLocation();

    return (
        <>
            {location.pathname === '/porscheMacan' ? <MacanCarConfigurator car={"macan"}/> : null}
            {location.pathname === '/porschePanamera' ? <PanameraCarConfigurator car={"panamera"}/> : null}
            {location.pathname === '/porsche911' ? <CarreraCarConfigurator car={"carrera"}/> : null}
        </>
    )
}
