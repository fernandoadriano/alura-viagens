import styled, { css } from 'styled-components';

const Button = styled.button`
  background: #35B6FF;
  border: 0px;
  border-radius: 10px;
  width: 145px;
  height: 48px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 1.167;
  color: #FFFFFF;
`;

const ImageButton = styled.button`
  width: 106.57px;
  height: 79px;
  left: 20px;
  top: 732px;

  border: 1px solid #35B6FF;
  box-sizing: border-box;
  background-color: transparent;
  margin-bottom: 32px;

  &:focus {
    background-color: rgba(211, 234, 255, 0.56);
  }

  ${({ rounded }) => {
    if (rounded === 'left') {
      return css`border-radius: 10px 0px 0px 10px;`;
    } if (rounded === 'right') {
      return css`border-radius: 0px 10px 10px 0px;`;
    }

    return css`border-radius: 0px 0px 0px 0px;`;
  }}
`;

export {
  Button as default,
  ImageButton,
};
