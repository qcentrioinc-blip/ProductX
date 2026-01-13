import React from "react";
import { H1, H3} from "../../../../../styles/Typography";

const Service: React.FC = () => {
  return (
    <div className="space-y-4">
      <H1 className="text-[#5551FF]">Service Security</H1>
      
      <p>
        Our AI solutions leverage cutting-edge technology to transform your 
        business operations. We provide comprehensive artificial intelligence 
        services that help organizations automate processes, gain insights, 
        and make data-driven decisions.
      </p>

      <H3>Key Capabilities</H3>
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

      <H3>Implementation Process</H3> 
      <p>
        Our implementation process is designed to minimize disruption while 
        maximizing value. We work closely with your team to understand your 
        specific needs and tailor our solutions accordingly.
      </p>

      <H3>Benefits</H3>
      <p>
        Organizations that implement our AI solutions typically see significant 
        improvements in efficiency, accuracy, and decision-making capabilities.
      </p>
    </div>
  );
};

export default Service;