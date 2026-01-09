import React from "react";
 
 
import { Li } from "../../../../../styles/Typography";
import { RD_H1, RD_H2, RD_P } from "../../RDtypo";

const ArtificialIntelligence: React.FC = () => {
  return (
    <div className="space-y-4">
      <RD_H1 className="text-[#5551FF] mb-4">Artificial Intelligence Overview</RD_H1>

     <RD_P className="my-4">
        Our AI solutions leverage cutting-edge technology to transform your
        business operations. We provide comprehensive artificial intelligence
        services that help organizations automate processes, gain insights,
        and make data-driven decisions.
      </RD_P>

     <RD_H2>  Key Capabilities</RD_H2>
     <RD_P>
        We offer a wide range of AI capabilities including machine learning,
        natural language processing, computer vision, and predictive analytics.
      </RD_P>

      <ul className="list-disc pl-5 space-y-1">
        <Li>Machine Learning and Deep Learning</Li>
        <Li>Natural Language Processing (NLP)</Li>
        <Li>Computer Vision and Image Recognition</Li>
        <Li>Predictive Analytics and Forecasting</Li>
      </ul>

     <RD_H2> Implementation Process</RD_H2>
     <RD_P>
        Our implementation process is designed to minimize disruption while
        maximizing value. We work closely with your team to understand your
        specific needs and tailor our solutions accordingly.
      </RD_P>

     <RD_H2>Benefits</RD_H2>
     <RD_P>
        Organizations that implement our AI solutions typically see significant
        improvements in efficiency, accuracy, and decision-making capabilities.
      </RD_P>
    </div>
  );
};

export default ArtificialIntelligence;
