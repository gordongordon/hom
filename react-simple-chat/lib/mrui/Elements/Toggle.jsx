import React from 'react';
import Slider from './Slider';
import SliderInput from './SliderInput';
import Switch from './Switch';

const Toggle = () => (
    <Switch>
        <SliderInput />
        <Slider />
    </Switch>
);

export default Toggle;