import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultContainer.css';
// import NameCard from '../NameCard/NameCard';
const ResultContainer = ({ SuggestedNames }) => {

    const SuggestedNamesJsx = SuggestedNames.map((SuggestedName) => {
        // return <NameCard key={SuggestedName} SuggestedName={SuggestedName} />;
        return <NameCard key={SuggestedName} SuggestedName={SuggestedName} />
    });
    return (
        <div className="result-container">
            {SuggestedNamesJsx}
        </div>
    );
}

export default ResultContainer;