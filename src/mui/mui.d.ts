import { ButtonPropsVariantOverrides } from '@mui/material/Button';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    custom: true; // agregamos nuestra variante
  }
}
