import React, { ReactNode } from 'react';

export type GithubTestProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function GithubTest({ children }: GithubTestProps) {
  return (
    <div>
      {children}
    </div>
  );
}
