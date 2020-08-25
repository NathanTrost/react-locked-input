import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import withLogic from "../common/withLogic";
import FieldLockButton from "./FieldLockButton";
import "./styles.scss";

const RbsLockedInput = ({
  btnClass,
  btnType,
  disabled = false,
  iconLocked,
  iconUnlocked,
  id,
  label,
  isLocked = false,
  name,
  onChange,
  onIconClick,
  placeholder,
  prepended = true,
  type = "text",
  value,
}) => {
  const bsStyles = {
    inputGroup: `input-group`,
    inputGroupAppend: "input-group-append",
    inputGroupPrepend: "input-group-prepend",
    formControl: "form-control",
    formLabel: `form-label`,
    formGroup: `form-group`,
  };

  const btnProps = {
    id: `${id}-fieldLockButton`,
    locked: isLocked,
    btnClass,
    btnType,
    disabled,
    iconLocked,
    iconUnlocked,
    onClick: onIconClick,
  };

  return (
    <div
      className={classNames([
        "lockedInput",
        "lockedInput-formGroup",
        bsStyles.formGroup,
      ])}
    >
      {label && (
        <label
          className={classNames(["lockedInput-formLabel", bsStyles.formLabel])}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div
        className={classNames(["lockedInput-inputGroup", bsStyles.inputGroup])}
      >
        {prepended && (
          <div
            className={classNames([
              "lockedInput-inputGroupPrepend",
              bsStyles.inputGroupPrepend,
            ])}
          >
            <FieldLockButton {...btnProps} />
          </div>
        )}
        <input
          aria-describedby={name}
          className={classNames([
            "lockedInput-formControl",
            bsStyles.formControl,
          ])}
          id={name}
          readOnly={isLocked}
          {...{ name, onChange, placeholder, type, value }}
        />
        {!prepended && (
          <div
            className={classNames([
              "lockedInput-inputGroupAppend",
              bsStyles.inputGroupAppend,
            ])}
          >
            <FieldLockButton {...btnProps} />
          </div>
        )}
      </div>
    </div>
  );
};

RbsLockedInput.propTypes = {
  btnClass: PropTypes.string,
  btnType: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
    "light",
    "dark",
    "link",
  ]),
  disabled: PropTypes.bool,
  iconLocked: PropTypes.node,
  iconUnlocked: PropTypes.node,
  isLocked: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onIconClick: PropTypes.func,
  prepended: PropTypes.bool,
  type: PropTypes.oneOf([
    "date",
    "datetime-local",
    "email",
    "file",
    "month",
    "number",
    "password",
    "tel",
    "text",
    "time",
    "url",
    "week",
  ]),
  value: PropTypes.string,
};

export default withLogic(RbsLockedInput);
