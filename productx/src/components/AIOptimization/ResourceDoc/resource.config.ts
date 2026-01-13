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
    
  whyclouddiet: {
    label: "Why Clouddiet",
    items: [
     {
        slug: "clouddiet",
        label: "Clouddiet",
        component: () => import("./content/onboarding/Clouddiet"),
        type: "text",
      },
     ]
  },   
  onboarding: {
    label: "Onboarding",
    items: [
      // {
      //   slug: "clouddiet",
      //   label: "Clouddiet",
      //   component: () => import("./content/onboarding/Clouddiet"),
      //   type: "text",
      // },
      {
        slug: "register",
        label: "Register",
        component: () => import("./content/onboarding/Register"),
        type: "text",
      },
      {
        slug: "single-sign-on-sso",
        label: "Single Sign-On (SSO)",
        component: () => import("./content/onboarding/Sign-On"),
        type: "cards",
      },
      {
        slug: "clouddiet-permissions",
        label: "CloudDIET Permissions",
        component: () => import("./content/onboarding/Clouddietpermissions"),
        type: "text",
      },
      {
        slug: "adding-service-principal",
        label: "Adding Service Principals",
        component: () => import("./content/onboarding/AddingService"),
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
