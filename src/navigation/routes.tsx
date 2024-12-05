import type { ComponentType, JSX } from 'react';

import { InitDataPage } from '@/pages/InitDataPage.tsx';
import { LaunchParamsPage } from '@/pages/LaunchParamsPage.tsx';
import { ThemeParamsPage } from '@/pages/ThemeParamsPage.tsx';
import { AuditResult } from '@/pages/auditor/auditResult';
import { FraudDetectorResult } from '@/pages/fraud-detector/fraud-detector-result';
import { RugPullDetectorResult } from '@/pages/rug-pull-detector/rug-pull-detector-result';
import { IndexPage } from '@/pages/index/indexPage';

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
  { path: '/init-data', Component: InitDataPage, title: 'Init Data' },
  { path: '/theme-params', Component: ThemeParamsPage, title: 'Theme Params' },
  { path: '/launch-params', Component: LaunchParamsPage, title: 'Launch Params' }
];
