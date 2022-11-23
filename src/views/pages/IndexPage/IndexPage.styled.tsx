import styled from 'styled-components';

export const IndexHeader = styled.header`
`;

export const IndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    flex: 1;
  }
`;

export const IndexMain = styled.main`
  flex: 1;
  @media (min-width: 768px) {
    flex: 1;
  }
`;

export const IndexNav = styled.nav`
  order: -1;
  @media (min-width: 768px) {
    flex: 0 0 12em;
  }
`;

export const IndexAside = styled.aside`
  @media (min-width: 768px) {
    flex: 0 0 12em;
  }
`;

export const IndexFooter = styled.footer`
`;