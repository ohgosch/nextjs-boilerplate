import { css, FlattenSimpleInterpolation } from 'styled-components';

import { RESOLUTIONS } from 'visual/constants';

export const mobile = (
  content: FlattenSimpleInterpolation,
): FlattenSimpleInterpolation => {
  return css`
    @media (max-width: ${RESOLUTIONS.mobile.max}) {
      ${content}
    }
  `;
};

export const mobileTablet = (
  content: FlattenSimpleInterpolation,
): FlattenSimpleInterpolation => {
  return css`
    @media (max-width: ${RESOLUTIONS.tablet.max}) {
      ${content}
    }
  `;
};

export const tablet = (
  content: FlattenSimpleInterpolation,
): FlattenSimpleInterpolation => {
  return css`
    @media (min-width: ${RESOLUTIONS.tablet.min}) and (max-width: ${RESOLUTIONS
        .tablet.max}) {
      ${content}
    }
  `;
};

export const tabletDesktop = (
  content: FlattenSimpleInterpolation,
): FlattenSimpleInterpolation => {
  return css`
    @media (min-width: ${RESOLUTIONS.tablet.min}) {
      ${content}
    }
  `;
};

export const desktop = (
  content: FlattenSimpleInterpolation,
): FlattenSimpleInterpolation => {
  return css`
    @media (min-width: ${RESOLUTIONS.desktop.min}) {
      ${content}
    }
  `;
};
