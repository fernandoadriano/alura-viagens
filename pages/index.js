/* eslint-disable func-names */
import React, { useState } from 'react';
import moment from 'moment';
import * as yup from 'yup';

import { cpf } from 'cpf-cnpj-validator';
import validator from 'validar-telefone';

import Box from 'src/components/layout/Box';
import { ImageButton } from 'src/components/Button';
import Form from 'src/components/Form';
import Paper from 'src/components/layout/Paper';
import Text from 'src/foundations/typography/Text';

import IconCard from 'src/theme/icons/Card';
import IconPayPal from 'src/theme/icons/PayPal';
import IconTransfer from 'src/theme/icons/Transfer';

moment.locale('pt-br');

yup.addMethod(yup.string, 'checkDate', function (mensagem) {
  return this.test('checkDate', mensagem, (value) => {
    let isValid = false;

    if (value.length === 10) {
      const data = moment(value, 'DD/MM/YYYY');
      isValid = data.isValid();
    }

    return isValid; // ? true : createError({ path });
  });
});

yup.addMethod(yup.string, 'notBefore', function (antes, mensagem) {
  return this.test('notBefore', mensagem, function (value) {
    const { resolve } = this;
    const data = moment(value, 'DD/MM/YYYY');
    const dataAnterior = moment(resolve(antes), 'DD/MM/YYYY');
    const isValid = data.isSameOrAfter(dataAnterior);

    return isValid;
  });
});

const SchemaPedido = yup.object().shape({
  dataSaida: yup
    .string()
    .checkDate('Informar data de saída válida')
    .required('Quando pretende viajar?'),
  dataRetorno: yup
    .string()
    .checkDate('Informar data de retorno válida')
    .notBefore(yup.ref('dataSaida'), 'Data de retorno inválida')
    .required('Quando pretende retornar?'),
  localOrigem: yup
    .string()
    .required('Informe o local de origem'),
  localChegada: yup
    .string()
    .required('Informe o local de chegada'),
  nome: yup
    .string()
    .min(3, 'O nome deve ter ao menos 3 letras')
    .required('Informe o nome'),
  sobrenome: yup
    .string()
    .min(3, 'O sobrenome deve ter ao menos 3 letras')
    .required('Informe o sobrenome'),
  paisResidencia: yup
    .string()
    .min(3, 'O país de residência deve ter ao menos 3 letras')
    .required('Informe o pais de residência'),
  dataNascimento: yup
    .string()
    .checkDate('Informar data de nascimento válida')
    .required('Qual seu aniversário?'),
  cpf: yup
    .string()
    .test('cpfValido', 'Informe um CPF válido', (value) => cpf.isValid(value))
    .required('Informe um CPF válido'),
  email: yup
    .string()
    .email('E-mail inválido!')
    .required('Informe um e-mail válido'),
  fone: yup
    .string()
    .test('validarTelefone', 'Telefone inválido', (value) => validator(value))
    .required('Informe um telefone válido'),

});

export default function Home() {
  const [formaPagto, setFormaPagto] = useState('Cash');
  const handleSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(data, null, 4).replace('_', ''));
  };

  return (
    <Paper>
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        backgroundColor="white"
        padding={{ xs: '18px 16px', md: '0px 170px' }}
      >
        <Text variant="formTitle">Alura Viagens</Text>
        <Form
          initialData={{
            dataSaida: '',
            dataRetorno: '',
            localOrigem: '',
            localChegada: '',
            formaPagto: '',
            nome: '',
            sobrenome: '',
            paisResidencia: '',
            dataNascimento: '',
            cpf: cpf.generate().toString(),
            email: '',
            fone: '',
          }}
          schema={SchemaPedido}
          onSubmit={handleSubmit}
        >
          <Text variant="subtitle">Quando será a viagem?</Text>
          <Form.Row>
            <Form.Field
              autoFocus
              name="dataSaida"
              label="Data de saída"
              mask="99/99/9999"
            />
            <Form.Field
              name="dataRetorno"
              label="Data de retorno"
              mask="99/99/9999"
            />
          </Form.Row>
          <Form.Row>
            <Form.Field
              name="localOrigem"
              label="Local de origem"
              mask="aaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            />
            <Form.Field
              name="localChegada"
              label="Local de chegada"
              mask="aaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            />
          </Form.Row>
          <Text variant="subtitle">Como será o pagamento?</Text>
          <Form.Row value={formaPagto}>
            <ImageButton
              rounded="left"
              selected={formaPagto === 'Cash'}
              onClick={(event) => { event.preventDefault(); setFormaPagto('Cash'); }}
            >
              <IconTransfer />
            </ImageButton>
            <ImageButton
              selected={formaPagto === 'Card'}
              onClick={(event) => { event.preventDefault(); setFormaPagto('Card'); }}
            >
              <IconCard />
            </ImageButton>
            <ImageButton
              rounded="right"
              selected={formaPagto === 'PayPal'}
              onClick={(event) => { event.preventDefault(); setFormaPagto('PayPal'); }}
            >
              <IconPayPal />
            </ImageButton>
          </Form.Row>
          <Text variant="subtitle">Quem irá viajar</Text>
          <Form.Row>
            <Form.Field
              name="nome"
              label="Nome"
              mask="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            />
          </Form.Row>
          <Form.Row>
            <Form.Field
              name="sobrenome"
              label="Sobrenome"
              mask="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            />
          </Form.Row>
          <Form.Row>
            <Form.Field
              name="paisResidencia"
              label="País de residência"
              mask="aaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            />
            <Form.Field
              name="dataNascimento"
              label="Data de nascimento"
              mask="99/99/9999"
            />
          </Form.Row>
          <Form.Row>
            <Form.Field
              name="cpf"
              label="CPF"
              mask="999.999.999-99"
            />
          </Form.Row>
          <Form.Row>
            <Form.Field
              name="email"
              label="E-mail"
            />
          </Form.Row>
          <Form.Row>
            <Form.Field
              name="fone"
              label="Telefone"
              mask="(99) 99999-9999"
            />
          </Form.Row>
          <Form.Row>
            <Form.Button>Comprar</Form.Button>
          </Form.Row>
        </Form>
      </Box>
    </Paper>
  );
}
