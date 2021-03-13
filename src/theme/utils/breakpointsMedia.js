import { css } from 'styled-components';
import { breakpoints } from '../index';

export default function breakpointsMedia(cssByBreakpoint) {
  const breakpointNames = Object.keys(breakpoints);
  return breakpointNames
    .filter((breakpointName) => Boolean(cssByBreakpoint[String(breakpointName)]))
    .map((breakpointName) => {
      return css`
            @media only screen and (min-width: ${breakpoints[String(breakpointName)]}px) {
            ${cssByBreakpoint[String(breakpointName)]}
        }
        `;
    });
}
