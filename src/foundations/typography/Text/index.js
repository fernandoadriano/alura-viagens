import styled from 'styled-components';
import propToStyle from 'src/theme/utils/propToStyle';

const TextBase = styled.span`
  display: block;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  line-height: 1.167;

  ${propToStyle('fontFamily')}
  ${propToStyle('fontSize')}
  ${propToStyle('lineHeight')}
  ${propToStyle('marginBottom')}
  ${propToStyle('marginLeft')}
`;

const Text = styled(TextBase)`
  ${({ variant, theme }) => {
    if (variant && theme.textVariants[variant]) {
      return theme.textVariants[variant];
    }

    return null;
  }}
`;

export default Text;
