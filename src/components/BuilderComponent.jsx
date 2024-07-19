import React from 'react';
import { BuilderComponent, builder } from '@builder.io/react';

// Initialize Builder.io with your public API key
builder.init('YOUR_PUBLIC_API_KEY');

export default function MyBuilderComponent({ model }) {
  return <BuilderComponent model={model} />;
}