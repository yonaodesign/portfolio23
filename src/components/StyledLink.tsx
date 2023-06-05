import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)`
color: #000000;
text-decoration: none;
cursor: pointer;
border-bottom: 1px solid transparent;
&: hover {
  text-decoration: underline;
}
}
`;
