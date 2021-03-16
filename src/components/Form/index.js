import React, {
  useContext, createContext, useState, useEffect,
} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from 'src/components/Button';
import Input from 'src/components/Input';
import Text from 'src/foundations/typography/Text';

const FormContext = createContext({
  onChange: () => null,
  values: [],
  status: [],
  isInvalid: true,
  setFormaPagto: () => {},
});

const createStoreStatus = (store) => {
  const status = {};

  Object.keys(store).forEach(
    (campo) => {
      status[campo] = { touched: false, error: '' };
    },
  );

  return status;
};

const FormWrapper = styled.form`
`;

const Form = ({
  children, initialData, schema, onSubmit,
}) => {
  const [formaPagto, setFormaPagto] = useState('');
  const [initialStore] = useState(initialData);
  const [store, setStore] = useState(initialData);
  const [storeStatus, setStoreStatus] = useState(createStoreStatus(initialData));
  const [isInvalid, setIsInvalid] = useState(true);

  const handleChange = async (event) => {
    const fieldName = event.target.getAttribute('name');
    const newStore = { ...store, [fieldName]: event.target.value };
    const newStoreStatus = { ...storeStatus };
    let hasError = true;

    setStore(newStore);

    storeStatus[fieldName].touched = true;

    // Resetar todos os erros
    Object.keys(newStoreStatus).forEach((campo) => { newStoreStatus[campo].error = ''; });

    try {
      await schema.validate(newStore, { abortEarly: false });
      hasError = false;
    } catch (err) {
      err.inner.forEach((erro) => { storeStatus[erro.path].error = JSON.stringify(erro.message); });
    } finally {
      setStoreStatus(newStoreStatus);
      setIsInvalid(hasError);
    }
  };

  Form.isInvalid = () => isInvalid;

  useEffect(() => {
    setStore({ ...store, formaPagto });
  }, [formaPagto]);

  return (
    <FormContext.Provider value={{
      onChange: handleChange,
      values: store,
      status: storeStatus,
      isInvalid,
      setFormaPagto,
    }}
    >
      <FormWrapper
        onSubmit={
        async (event) => {
          event.preventDefault();

          const newStoreStatus = { ...storeStatus };
          Object.keys(newStoreStatus).forEach(
            (campo) => {
              newStoreStatus[campo].touched = true;
              newStoreStatus[campo].error = '';
            },
          );

          try {
            await schema.validate(store, { abortEarly: false });
            onSubmit(store);
            setStore(initialStore);
          } catch (err) {
            err.inner.forEach(
              (erro) => {
                storeStatus[erro.path].error = JSON.stringify(erro.message);
              },
            );
          } finally {
            setStoreStatus(newStoreStatus);
          }
        }
      }
      >
        {children}
      </FormWrapper>
    </FormContext.Provider>
  );
};

Form.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  initialData: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  schema: PropTypes.object.isRequired,
};

Form.RowWrapper = styled.span`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
`;

Form.Row = ({ field, value, children }) => {
  const { setFormaPagto } = useContext(FormContext);

  useEffect(() => {
    if (field && value) setFormaPagto(value);
  }, [value]);

  return (
    <Form.RowWrapper>{children}</Form.RowWrapper>
  );
};

Form.Button = ({ children }) => {
  const { isInvalid } = useContext(FormContext);

  return (
    <Button disabled={isInvalid}>{children}</Button>
  );
};

Form.Button.propTypes = {
  children: PropTypes.node.isRequired,
};

Form.Field = ({
  label, name, autoFocus, mask,
}) => {
  const { onChange, values, status } = useContext(FormContext);

  return (
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
      <Input
        name={name}
        autoFocus={autoFocus}
        onChange={onChange}
        value={values[name]}
        alwaysShowMask
        mask={mask}
      />
      {((fieldStatus) => {
        let erro = '';

        if (fieldStatus && fieldStatus.touched && fieldStatus.error !== '') {
          erro = fieldStatus.error;
        }

        return (
          <Text variant="formFieldError">
            {erro}
            &nbsp;
          </Text>
        );
      })(status[name])}
    </span>
  );
};

Form.Field.defaultProps = {
  autoFocus: false,
  mask: null,
};

Form.Field.propTypes = {
  autoFocus: PropTypes.bool,
  label: PropTypes.string.isRequired,
  mask: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Form;
