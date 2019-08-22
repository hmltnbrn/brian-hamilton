import React, { ReactNode } from 'react';
import styles from './Button.module.scss';

import classNames from 'classnames/bind';

import { Link, NavLink } from 'react-router-dom';

interface Props {
  type: string;
  href?: string;
  target?: string;
  rel?: string;
  to?: string;
  exact?: boolean;
  classNames?: string[];
  activeClassName?: string;
  isButtonLink?: boolean;
  isRoundButtonLink?: boolean;
  white?: boolean;
  inverse?: boolean;
  children?: ReactNode;
  onButtonClick?: () => void;
}

const cx = classNames.bind(styles);

const BaseButton = (props: Props): JSX.Element => {
  const btnClass = cx(
    {
      'button-link': props.isButtonLink,
      'round-button-link': props.isRoundButtonLink,
      white: props.white,
      inverse: props.inverse
    },
    props.classNames
  );

  const InnerButton = (): JSX.Element | null => {
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
            exact={props.exact || false}
            className={btnClass}
            to={props.to || '/'}
            activeClassName={props.activeClassName}
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

export const Button = (props: Props): JSX.Element => (
  <BaseButton {...props} isButtonLink={false}>
    {props.children}
  </BaseButton>
);

export const ButtonLink = (props: Props): JSX.Element => (
  <BaseButton {...props} isButtonLink={true} isRoundButtonLink={false}>
    {props.children}
  </BaseButton>
);

export const RoundButtonLink = (props: Props): JSX.Element => (
  <BaseButton {...props} isButtonLink={false} isRoundButtonLink={true}>
    {props.children}
  </BaseButton>
);
