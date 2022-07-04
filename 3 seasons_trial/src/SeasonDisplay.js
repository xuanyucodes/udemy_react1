import './SeasonDisplay.css';
import React from 'react';

// what we wanna do is from the latitude + current mth = summer or winter
// rmb in JS that months start from 0 (Jan) - 11 (Dec)
// northern hemisphere: 0-2 winter; 3-8 summer; 9-11 winter
// southern hemisphere: 0-2 summer; 3-8 winter; 9-11 summer

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr it is chilly',
        iconName: 'snowflake'
    }
};

// function to get the season (sure you can define inside SeasonDisplay but we doing it functional components!)
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'; // JS ternary expression. if T = summer, F = winter
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season]

    return ( // icon-left and icon-right are self-created classnames for CSS. massive is a built-in classname for semantic-ui. 
        <div className={`season-display ${season}`}> 
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;