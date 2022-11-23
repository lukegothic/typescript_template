import styled from 'styled-components';

type LanguageSelectorButtonProps = {
  active: boolean
}
export const LanguageSelectorButton = styled.button<LanguageSelectorButtonProps>`
  background-color: ${({active}) => active ? "#444" : "default"};
  color: ${({active}) => active ? "#fff" : "default"}
`;