import styled from 'styled-components';
import propToStyle from 'src/theme/utils/propToStyle';

const Box = styled.div`
    ${propToStyle('alignItems')}
    ${propToStyle('backgroundImage')}
    ${propToStyle('backgroundRepeat')}
    ${propToStyle('backgroundPosition')}
    ${propToStyle('backgroundColor')}
    ${propToStyle('border')}
    ${propToStyle('borderRadius')}
    ${propToStyle('boxShadow')}
    ${propToStyle('display')}
    ${propToStyle('flex')}
    ${propToStyle('flexDirection')}
    ${propToStyle('flexWrap')}
    ${propToStyle('justifyContent')}
    ${propToStyle('padding')}
    ${propToStyle('margin')}
    ${propToStyle('marginBottom')}
    ${propToStyle('marginLeft')}
    ${propToStyle('marginRight')}
    ${propToStyle('marginTop')}
    ${propToStyle('maxWidth')}
    ${propToStyle('padding')}
    ${propToStyle('width')}
    ${propToStyle('flexBasis')}
    ${propToStyle('flexGrow')}
`;

export { Box as default };
