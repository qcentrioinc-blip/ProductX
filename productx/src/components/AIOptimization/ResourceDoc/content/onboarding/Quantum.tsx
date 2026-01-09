import React from "react";
import { H1 } from "../../../../../styles/Typography";

const QuantumComputing: React.FC = () => {
  return (
    <div>
     <H1 className="text-[#5551FF]">Quantum Computing Solutions</H1>
      
      <p>
        Quantum computing represents the next frontier in computational power. 
        Our quantum solutions enable organizations to solve complex problems 
        that are intractable for classical computers.
      </p>

      <h2>Overview</h2>
      <p>
        Quantum computers leverage quantum mechanical phenomena such as 
        superposition and entanglement to perform calculations exponentially 
        faster than classical computers for certain problem types.
      </p>

      <h2>Our Quantum Services</h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '1.5rem',
        margin: '2rem 0'
      }}>
        <div style={{
          padding: '1.5rem',
          border: '1px solid #e5e7eb',
          borderRadius: '0.5rem',
          backgroundColor: 'white'
        }}>
          <h3 style={{ marginTop: 0 }}>Quantum Simulation</h3>
          <p>
            Simulate complex quantum systems for drug discovery and materials 
            science applications.
          </p>
        </div>

        <div style={{
          padding: '1.5rem',
          border: '1px solid #e5e7eb',
          borderRadius: '0.5rem',
          backgroundColor: 'white'
        }}>
          <h3 style={{ marginTop: 0 }}>Optimization</h3>
          <p>
            Solve complex optimization problems in logistics, finance, and 
            supply chain management.
          </p>
        </div>

        <div style={{
          padding: '1.5rem',
          border: '1px solid #e5e7eb',
          borderRadius: '0.5rem',
          backgroundColor: 'white'
        }}>
          <h3 style={{ marginTop: 0 }}>Cryptography</h3>
          <p>
            Next-generation security solutions using quantum key distribution 
            and post-quantum cryptography.
          </p>
        </div>
      </div>

      <h2>Getting Started</h2>
      <p>
        Our team of quantum computing experts will work with you to identify 
        use cases where quantum computing can provide significant advantages 
        over classical approaches.
      </p>

      <h2>Technical Requirements</h2>
      <p>
        We provide both cloud-based quantum computing access and on-premises 
        solutions depending on your organization's needs and security requirements.
      </p>
    </div>
  );
};

export default QuantumComputing;
