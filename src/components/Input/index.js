import styled, { css } from 'styled-components'
import Box from 'src/components/layout/Box';
import Paper from 'src/components/layout/Paper';
import Text from 'src/foundations/typography/Text';
import IconCard from 'src/theme/icons/Card';
import IconPayPal from 'src/theme/icons/PayPal';
import IconTransfer from 'src/theme/icons/Transfer';

const Input = styled.input`
  margin-top: 8px;
  margin-bottom: 16px;
  border: 1px solid #35B6FF;
  box-sizing: border-box;
  border-radius: 10px;
  height: 48px;
  padding: 10px;
`;

export default Input;
