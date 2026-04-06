import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  logo: string;
  link: string;
  linkText: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}
