import React from 'react';
import { ButtonProps } from 'utils/types';

export const Button = ({
  color = 'plain',
  variant = 'solid',
  glyph = {
    icon: '',
    side: ''
  },
  onClick,
  children,
  ...props
}: ButtonProps) => {
  const className = `
  ${color !== 'plain' ? `btn-${color}` : ''}
  ${variant !== 'solid' ? 'outline' : ''}
  ${glyph ? `fa-wrapper fa fa-${glyph.icon} ${glyph.side}` : ''}
  `;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
