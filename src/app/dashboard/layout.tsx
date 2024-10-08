import type { Metadata } from 'next';
import { DashboardLayout } from '~/components/DashboardLayout';

export default function DashboardPageLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}

export const metadata: Metadata = {
  title: 'Dashboard',
};
