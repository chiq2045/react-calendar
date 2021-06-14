export interface ButtonProps {
  color?: Color;
  variant?: Variant;
  glyph?: Glyph;
  children?: any;
  onClick?: any;
}

type Color =
  | 'plain'
  | 'transparent'
  | 'light'
  | 'dark'
  | 'black'
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger';

type Variant = 'solid' | 'outline';

type Glyph = {
  icon: string;
  side?: '' | 'pad-left' | 'pad-right';
};
