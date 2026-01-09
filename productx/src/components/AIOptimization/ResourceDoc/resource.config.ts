import React from "react";

export type ResourceItem = {
  slug: string;
  label: string;
  component: () => Promise<{ default: React.ComponentType<Record<string, unknown>>
 }>;
  type?: "text" | "cards";
};

export type ResourceCategory = {
  label: string;
  items: ResourceItem[];
};

export const resourceConfig: Record<string, ResourceCategory> = {
    
  onboarding: {
    label: "Onboarding",
    items: [
      {
        slug: "artificial-intelligence",
        label: "Artificial Intelligence",
        component: () => import("./content/onboarding/Artificial"),
        type: "text",
      },
      {
        slug: "quantum-computing",
        label: "Quantum Computing",
        component: () => import("./content/onboarding/Quantum"),
        type: "cards",
      },
      {
        slug: "cloud-data",
        label: "Cloud Data",
        component: () => import("./content/onboarding/CloudData"),
        type: "text",
      },
      {
        slug: "cyber-security",
        label: "Cyber Security",
        component: () => import("./content/onboarding/CyberSecurity"),
        type: "text",
      },
      
    ],
  },
  management: {
    label: "Management",
    items: [
      {
        slug: "case-studies",
        label: "Case Studies",
        component: () => import("./content/management/CaseStudies"),
        type: "cards",
      },
      {
        slug: "service",
        label: "Service",
        component: () => import("./content/management/Service"),
        type: "text",
      },
      {
        slug: "user-permissions",
        label: "User Permission",
        component: () => import("./content/management/UserPermission"),
        type: "text",
      },
    ],
  },

  features: {
    label: "Features",
    items: [
      {
        slug: "cost-explorer",
        label: "Cost Explorer",
        component: () => import("./content/features/CostExplorer"),
        type: "cards",
      },
      {
        slug: "optimizations",
        label: "optimizations",
        component: () => import("./content/features/Optimizations"),
        type: "text",
      },
      {
        slug: "saving-plans",
        label: "Saving Plans",
        component: () => import("./content/features/SavingPlans"),
        type: "text",
      },
    ],
  },

  additional: {
    label: "Additional",
    items: [
      {
        slug: "support",
        label: "Support",
        component: () => import("./content/Additional/upport"),
        type: "text",
      },
      
    ],
  },
};
