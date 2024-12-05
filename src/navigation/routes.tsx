import type { ComponentType, JSX } from 'react';


import { AuditResult } from '@/pages/auditor/auditResult';
import { FraudDetectorResult } from '@/pages/fraud-detector/fraud-detector-result';
import { IndexPage } from '@/pages/index/indexPage';
import { RugPullDetectorResult } from '@/pages/rug-pull-detector/rug-pull-detector-result';

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: '/', Component: IndexPage },
  { path: '/audit/result', Component: AuditResult },
  { path: '/fraud-detector/result', Component: FraudDetectorResult },
  { path: '/rug-pull-detector/result', Component: RugPullDetectorResult },
];
