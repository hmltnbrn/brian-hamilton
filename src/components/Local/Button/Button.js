// @flow

import React from 'react';
import type { Node } from 'react';
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
  children?: Node,
  onButtonClick?: () => void
};

let cx = classNames.bind(styles);

class BaseButton extends React.Component<Props> {

  render() {

    const { type, classNames } = this.props;

    var btnClass = cx({
      "button-link": this.props.isButtonLink,
      "round-button-link": this.props.isRoundButtonLink,
      "white": this.props.white,
      "inverse": this.props.inverse
    }, classNames);

    const Button = () => {
      switch(type) {
        case 'button':
          return (
            <button
              type="button"
              className={btnClass}
              onClick={this.props.onButtonClick}
            >
              {this.props.children}
            </button>
          );
        case 'submit':
          return (
            <button
              type="submit"
              className={btnClass}
            >
              {this.props.children}
            </button>
          );
        case 'a':
          return (
            <a
              href={this.props.href}
              target={this.props.target}
              rel={this.props.rel}
              className={btnClass}
            >
              {this.props.children}
            </a>
          );
        case 'link':
          return (
            <Link
              to={this.props.to || "/"}
              className={btnClass}
            >
              {this.props.children}
            </Link>
          );
        case 'nav-link':
          return (
            <NavLink
              exact={this.props.exact || false}
              className={btnClass}
              to={this.props.to || "/"}
              activeClassName={this.props.activeClassName}
            >
              {this.props.children}
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
  }
};

export const Button = (props:Props) => (
  <BaseButton { ...props } isButtonLink={false}>{props.children}</BaseButton>
);

export const ButtonLink = (props:Props) => (
  <BaseButton { ...props } isButtonLink isRoundButtonLink={false}>{props.children}</BaseButton>
);

export const RoundButtonLink = (props:Props) => (
  <BaseButton { ...props } isButtonLink={false} isRoundButtonLink>{props.children}</BaseButton>
);
