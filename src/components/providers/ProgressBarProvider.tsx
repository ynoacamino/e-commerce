'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function ProgressBarProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgressBar
        color="#18181b"
        height="6px"
      />
      {children}
    </>
  );
}
