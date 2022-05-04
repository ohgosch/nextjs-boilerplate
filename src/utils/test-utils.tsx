import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ReactElement } from 'react';

import theme from 'visual/theme';

const AllTheProviders = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (
  ui: ReactElement,
  options: Omit<RenderOptions, 'wrapper'> = {},
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
