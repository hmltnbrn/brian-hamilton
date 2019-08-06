import React, { ReactNode } from 'react';
import styles from './Button.module.scss';

import classNames from 'classnames/bind';

import { Link, NavLink } from 'react-router-dom';

type Props = {
  type: string,
  href?: string,
  target?: string,
  rel?: string,
  to?: string,
  exact?: boolean,
  classNames?: Array<string>,
  activeClassName?: string,
  isButtonLink?: boolean,
  isRoundButtonLink?: boolean,
  white?: boolean,
  inverse?: boolean,
  children?: ReactNode,
  onButtonClick?: () => void
};

let cx = classNames.bind(styles);

const BaseButton = (props: Props) => {

  var btnClass = cx({
    "button-link": props.isButtonLink,
    "round-button-link": props.isRoundButtonLink,
    "white": props.white,
    "inverse": props.inverse
  }, props.classNames);

  const Button = () => {
    switch(props.type) {
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
          <button
            type="submit"
            className={btnClass}
          >
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
          <Link
            to={props.to || "/"}
            className={btnClass}
          >
            {props.children}
          </Link>
        );
      case 'nav-link':
        return (
          <NavLink
            exact={props.exact || false}
            className={btnClass}
            to={props.to || "/"}
            activeClassName={props.activeClassName}
          >
            {props.children}
          </NavLink>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {Button()}
    </>
  );
};

export const Button = (props: Props) => (
  <BaseButton { ...props } isButtonLink={false}>{props.children}</BaseButton>
);

export const ButtonLink = (props: Props) => (
  <BaseButton { ...props } isButtonLink isRoundButtonLink={false}>{props.children}</BaseButton>
);

export const RoundButtonLink = (props: Props) => (
  <BaseButton { ...props } isButtonLink={false} isRoundButtonLink>{props.children}</BaseButton>
);
