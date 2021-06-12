/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const HeroNavSearch = () => {
    return(
        <form css={styles}>
            <input type="text" placeholder="search for movies..." />
        </form>
    );
};

const styles = css`
    height: 40px;
    min-height: 40px;
    input {
        border: none;
        outline: none;
        border-radius: 50px;
        border: 1px solid #2c2f39;
        background: transparent;
        padding: 10px 16px;
        width: 250px;
        color: #f9a5ff;
        &::placeholder {
            color: #f9a5ff;
            letter-spacing: 1px;
        }
    }
    @media (max-width: 860px) {
        input {
            width: 220px;
        }
    }
`;

export default HeroNavSearch;