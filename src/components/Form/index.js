import styled, { css } from 'styled-components';

import Input from 'src/components/Input';
import Text from 'src/foundations/typography/Text';
// import IconCard from 'src/theme/icons/Card';
// import IconPayPal from 'src/theme/icons/PayPal';
// import IconTransfer from 'src/theme/icons/Transfer';

const Form = styled.form`
`;

Form.Row = styled.span`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
`;

Form.Field = ({ label, name, autoFocus = false }) => (
  <span
    style={{
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'space-between',
      marginRight: '20px',
      marginTop: '16px',
      marginBottom: '16px',
    }}
  >
    <Text marginLeft="8px">{label}</Text>
    <Input name={name} autoFocus={autoFocus} />
  </span>
);

export default Form;
