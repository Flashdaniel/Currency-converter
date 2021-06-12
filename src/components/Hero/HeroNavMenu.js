/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import HeroNavLink from "./HeroNavLink";

const HeroNavMenu = () => {
    return(
        <div css={styles} className="heroNavMenu">
            <HeroNavLink btnText="Popular"/>
            <HeroNavLink btnText="All Movies"/>
        </div>
    );
};

const styles = css`
    padding-left: 80px;
    @media (max-width: 860px) {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 1;
        min-height: 100vh;
        background: rgba(0, 0, 0, 0.8);
        padding: 20px 50px;
        width: 100%;
        max-width: 340px;
        display: flex;
        flex-direction: column:
        align-items: flex-start;
        transform: all 800ms ease-in-out;
        &.hidden {
            left:-600px;
            opacity: 0;
        }
    }
`;

export default HeroNavMenu;