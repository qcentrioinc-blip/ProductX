import React from "react";
import { H2 ,H1} from "../../../../../styles/Typography";

const CloudData: React.FC = () => {
  return (
    <div>
     <H1 className="text-[#5551FF]">Cloud Data</H1>
      
      <p>
        Our AI solutions leverage cutting-edge technology to transform your 
        business operations. We provide comprehensive artificial intelligence 
        services that help organizations automate processes, gain insights, 
        and make data-driven decisions.
      </p>

      <h2>Key Capabilities</h2>
      <p>
        We offer a wide range of AI capabilities including machine learning, 
        natural language processing, computer vision, and predictive analytics.
      </p>

      <ul>
        <li>Machine Learning and Deep Learning</li>
        <li>Natural Language Processing (NLP)</li>
        <li>Computer Vision and Image Recognition</li>
        <li>Predictive Analytics and Forecasting</li>
      </ul>

      <H2>Implementation Process</H2> 
      <p>
        Our implementation process is designed to minimize disruption while 
        maximizing value. We work closely with your team to understand your 
        specific needs and tailor our solutions accordingly.
      </p>

      <h2>Benefits</h2>
      <p>
        Organizations that implement our AI solutions typically see significant 
        improvements in efficiency, accuracy, and decision-making capabilities.
      </p>
    </div>
  );
};

export default CloudData;