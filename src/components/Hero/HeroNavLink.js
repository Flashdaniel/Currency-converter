/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const HeroNavLink = ({btnText}) => {
    return(
        <button css={styles}>{btnText}</button>
    );
};

const styles = css`
    border: none;
    outline: none;
    background: transparent;
    font-size: 22px;
    margin-right: 24px;
    font-weight: 70px;
    cursor: pointer;
    user-select: none;
    @media(max-width: 860px) {
        font-size: 40px;
    }
`;

export default HeroNavLink;