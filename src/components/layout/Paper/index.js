import styled from 'styled-components';
import breakpointsMedia from 'src/theme/utils/breakpointsMedia';

const Paper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  flex: 1;
  background-color: #35B6FF;
  ${breakpointsMedia({ xs: 'padding: 0px 12px', md: 'padding: 0px 270px' })}
`;

export default Paper;
