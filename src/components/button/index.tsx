import React from 'react';
import { Button as ButtonType } from 'utils/types';

export const Button = ({
  color = 'plain',
  variant = 'solid',
  glyph,
  children,
  ...props
}: ButtonType) => {
  const className = `
  ${color !== 'plain' ? `btn-${color}` : ''}
  ${variant !== 'solid' ? 'outline' : ''}
  ${glyph ? `fa-wrapper fa fa-${glyph.icon} ${glyph.side}` : ''}
  `;
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};
