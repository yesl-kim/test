import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const Tab = ({ children, onClick }: Props) => {
  return <Container onClick={onClick}>{children}</Container>;
};

const Container = styled.div`
  flex: 1;
  padding: 20px;
  margin: 10px;
  box-sizing: border-box;
  background-color: blue;
`;

export default Tab;
