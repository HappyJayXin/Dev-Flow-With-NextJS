import { Wrapper } from './styled';

const Button = ({ children, onClick }) => (
    <Wrapper onClick={onClick}>{children}</Wrapper>
)

export default Button;
