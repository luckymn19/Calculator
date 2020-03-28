import React from 'react';
import '../../../styles/style.css';

import ResultScreen from './ResultScreen/ResultScreen';
import ComputationScreen from './ComputationScreen/ComputationScreen';


const screen = (props) => (
    <section className="screen">
        <ResultScreen>{props.result}</ResultScreen>
        <ComputationScreen>{props.equation}</ComputationScreen>
    </section>
)

export default screen;