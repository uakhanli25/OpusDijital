
// Fix: Added React import to resolve 'Cannot find namespace React' error
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  content: string;
  category: string;
}

export interface SectorCard {
  title: string;
  painPoint: string;
  solution: string;
}