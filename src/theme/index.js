import { css } from 'styled-components';

import breakpoints from './breakpoints';
import breakpointsMedia from './utils/breakpointsMedia';

export const textVariants = {
  formFieldError: css`
    font-size: 12px;
    margin-left: 8px;
    color: red;
  `,
  formTitle: css`
    font-family: Pattaya;
    line-height: 1.389;
    color: #0094E8;

    ${breakpointsMedia({
    xs: css`
        font-size: 36px;
        margin-bottom: 16px
      `,
    md: css`
        font-size: 72px;
        margin-bottom: 24px
      `,
  })}
  `,
  subtitle: css`
    font-size: 24px;
    margin-bottom: 18px;
  `,
};

export default {
  textVariants,
  breakpoints,
  transition: '200ms ease-in-out',
  fontFamily: 'Roboto',
};
