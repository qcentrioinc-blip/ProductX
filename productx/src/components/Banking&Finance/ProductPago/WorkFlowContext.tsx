import { createContext, useContext, useState } from "react";

// Define proper types instead of 'any'
interface WorkflowContextType {
  activeStep: number;
  setActiveStep: (step: number) => void;
}

// Create context with proper typing
const WorkflowContext = createContext<WorkflowContextType | null>(null);

export const WorkflowProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <WorkflowContext.Provider value={{ activeStep, setActiveStep }}>
      {children}
    </WorkflowContext.Provider>
  );
};

export const useWorkflow = () => {
  const context = useContext(WorkflowContext);
  if (!context) {
    throw new Error("useWorkflow must be used within WorkflowProvider");
  }
  return context;
};