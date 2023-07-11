import React from 'react';
import { featuredCardsInfo } from '../helpers';
import FeatureCard from './FeaturesCard';

const Features = () => {
  const featureElements = featuredCardsInfo.map((info, idx) => {
    return (
      <FeatureCard
        key={idx}
        title={info.title}
        content={info.content}
        image={info.image}
        bgColor={info.bgColor}
        border={info.border}
        float={info.float}
        even={idx % 2 === 0 ? true : false}
      />
    );
  });
  return <>{featureElements}</>;
};

export default Features;
