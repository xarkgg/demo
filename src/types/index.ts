export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Privacy / ZK' | 'DeFi Protocol' | 'Infrastructure' | 'Security / Oracles';
  description: string;
  tags: string[];
  whatActuallyHappens: {
    trigger: string;
    fundsFlow: string;
    whoBenefits: string;
    failureModesMitigated: string;
  };
  invariants: string[];
  architectureSummary: string;
  codeSnippet?: string;
  githubUrl: string;
  demoUrl?: string;
  status: 'Deployed / Mainnet' | 'Testnet / Audit' | 'Open Source Research';
}

export interface StateSimulationStep {
  stepNumber: number;
  action: string;
  actor: string;
  stateBefore: Record<string, string | number>;
  stateAfter: Record<string, string | number>;
  invariantsChecked: string[];
  eventsEmitted: string[];
  reverted: boolean;
  revertReason?: string;
  explanation: string;
}

export interface SimulationScenario {
  id: string;
  title: string;
  description: string;
  difficulty: 'Elementary' | 'Intermediate' | 'Advanced Protocol';
  initialState: Record<string, string | number>;
  steps: StateSimulationStep[];
}

export interface MentalModel {
  id: string;
  title: string;
  headline: string;
  coreQuestion: string;
  elaboration: string;
  codeExample: {
    title: string;
    badPractice: string;
    auditedPractice: string;
    explanation: string;
  };
}

export interface SimplifiedConcept {
  id: string;
  title: string;
  category: string;
  techExplanation: string;
  simplifiedExplanation: string;
  realWorldAnalogy: string;
  keyTakeaway: string;
}
