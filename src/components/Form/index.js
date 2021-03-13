import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Input from 'src/components/Input';
import Text from 'src/foundations/typography/Text';

const Form = styled.form`
`;

Form.Row = styled.span`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
`;

Form.Field = ({ label, name, autoFocus }) => (
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

Form.Field.defaultProps = {
  autoFocus: false,
};

Form.Field.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
};

export default Form;
