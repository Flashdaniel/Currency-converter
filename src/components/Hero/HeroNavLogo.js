/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const HeroNavLogo = () => <h2 css={styles}>MovieApp</h2>

const styles = css`
    font-size: 22px;
    font-weight: 900;
    color: #cb62d2;
    user-select: none;
`;
export default HeroNavLogo;