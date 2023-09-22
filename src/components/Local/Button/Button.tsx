import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './Button.module.scss';

type Props = {
    type: string;
    href?: string;
    target?: string;
    rel?: string;
    to?: string;
    exact?: boolean;
    classNames?: string[];
    className?: string;
    activeClassName?: string;
    isButtonLink?: boolean;
    isRoundButtonLink?: boolean;
    white?: boolean;
    inverse?: boolean;
    children?: ReactNode;
    onButtonClick?: () => void;
};

const BaseButton: FC<Props> = (props) => {
    const btnClass = classNames(
        {
            [styles.buttonLink]: props.isButtonLink,
            [styles.roundButtonLink]: props.isRoundButtonLink,
            [styles.white]: props.white,
            [styles.inverse]: props.inverse,
        },
        props.classNames,
    );

    const InnerButton = () => {
        switch (props.type) {
            case 'button':
                return (
                    <button
                        type="button"
                        className={btnClass}
                        onClick={props.onButtonClick}
                    >
                        {props.children}
                    </button>
                );
            case 'submit':
                return (
                    <button type="submit" className={btnClass}>
                        {props.children}
                    </button>
                );
            case 'a':
                return (
                    <a
                        href={props.href}
                        target={props.target}
                        rel={props.rel}
                        className={btnClass}
                    >
                        {props.children}
                    </a>
                );
            case 'link':
                return (
                    <Link to={props.to || '/'} className={btnClass}>
                        {props.children}
                    </Link>
                );
            case 'nav-link':
                return (
                    <NavLink
                        end={props.exact || false}
                        className={({ isActive }) =>
                            [btnClass, isActive ? props.activeClassName : null]
                                .filter(Boolean)
                                .join(' ')
                        }
                        to={props.to || '/'}
                    >
                        {props.children}
                    </NavLink>
                );
            default:
                return null;
        }
    };

    return <>{InnerButton()}</>;
};

export const Button: FC<Props> = (props) => (
    <BaseButton {...props}>{props.children}</BaseButton>
);

export const ButtonLink: FC<Props> = (props) => (
    <BaseButton {...props} isButtonLink>
        {props.children}
    </BaseButton>
);

export const RoundButtonLink: FC<Props> = (props) => (
    <BaseButton {...props} isRoundButtonLink>
        {props.children}
    </BaseButton>
);
