import { css, FlattenSimpleInterpolation } from 'styled-components';

import pxToRem from 'logic/pxToRem';

export const mobile = (content: FlattenSimpleInterpolation) => {
  return css`
    @media (max-width: ${({ theme }) =>
        pxToRem(theme.resolutions.mobile.max)}) {
      ${content}
    }
  `;
};

export const mobileTablet = (content: FlattenSimpleInterpolation) => {
  return css`
    @media (max-width: ${({ theme }) =>
        pxToRem(theme.resolutions.tablet.max)}) {
      ${content}
    }
  `;
};

export const tablet = (content: FlattenSimpleInterpolation) => {
  return css`
    @media (min-width: ${({ theme }) =>
        pxToRem(theme.resolutions.tablet.min)}) and (max-width: ${({ theme }) =>
        pxToRem(theme.resolutions.tablet.max)}) {
      ${content}
    }
  `;
};

export const tabletDesktop = (content: FlattenSimpleInterpolation) => {
  return css`
    @media (min-width: ${({ theme }) =>
        pxToRem(theme.resolutions.tablet.min)}) {
      ${content}
    }
  `;
};

export const desktop = (content: FlattenSimpleInterpolation) => {
  return css`
    @media (min-width: ${({ theme }) =>
        pxToRem(theme.resolutions.desktop.min)}) {
      ${content}
    }
  `;
};
