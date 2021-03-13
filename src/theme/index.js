import { css } from 'styled-components';
import breakpointsMedia from './utils/breakpointsMedia';

export const breakpoints = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  };
  
export const textVariants = {
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
}

export default {
  textVariants,
  breakpoints,
  transition: '200ms ease-in-out',
  fontFamily: 'Roboto',
};