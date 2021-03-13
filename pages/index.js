import React from 'react';
// import styled, { css } from 'styled-components';

import Box from 'src/components/layout/Box';
import Button, { ImageButton } from 'src/components/Button';
import Form from 'src/components/Form';
import Paper from 'src/components/layout/Paper';
import Text from 'src/foundations/typography/Text';

import IconCard from 'src/theme/icons/Card';
import IconPayPal from 'src/theme/icons/PayPal';
import IconTransfer from 'src/theme/icons/Transfer';

export default function Home() {
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
        <Form>
          <Text variant="subtitle">Quando será a viagem?</Text>
          <Form.Row>
            <Form.Field
              autoFocus
              name="dataSaida"
              label="Data de saída"
            />
            <Form.Field
              name="dataRetorno"
              label="Data de retorno"
            />
          </Form.Row>
          <Form.Row>
            <Form.Field
              name="localOrigem"
              label="Local de origem"
            />
            <Form.Field
              name="localChegada"
              label="Local de chegada"
            />
          </Form.Row>
          <Text variant="subtitle">Como será o pagamento?</Text>
          <Form.Row>
            <ImageButton rounded="left">
              <IconTransfer />
            </ImageButton>
            <ImageButton>
              <IconCard />
            </ImageButton>
            <ImageButton rounded="right">
              <IconPayPal />
            </ImageButton>
          </Form.Row>
          <Text variant="subtitle">Quem irá viajar</Text>
          <Form.Row>
            <Form.Field
              name="nome"
              label="Nome"
            />
          </Form.Row>
          <Form.Row>
            <Form.Field
              name="sobrenome"
              label="Sobrenome"
            />
          </Form.Row>
          <Form.Row>
            <Form.Field
              name="paisResidencia"
              label="País de residência"
            />
            <Form.Field
              name="dataNascimento"
              label="Data de nascimento"
            />
          </Form.Row>
          <Form.Row>
            <Form.Field
              name="cpf"
              label="CPF"
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
            />
          </Form.Row>
          <Form.Row>
            <Button>Comprar</Button>
          </Form.Row>
        </Form>
      </Box>
    </Paper>
  );
}
