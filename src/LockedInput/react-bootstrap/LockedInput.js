import React from "react";
import classNames from "classnames";

import { UIComponentProps } from "../common/propTypes";
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
    <div className="lockedInput">
      <div
        className={classNames(["lockedInput-formGroup", bsStyles.formGroup])}
      >
        {label && (
          <label
            aria-label={label}
            className={classNames([
              "lockedInput-formLabel",
              bsStyles.formLabel,
            ])}
            htmlFor={name}
            title={label}
          >
            {label}
          </label>
        )}
        <div
          className={classNames([
            "lockedInput-inputGroup",
            bsStyles.inputGroup,
          ])}
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
            disabled={isLocked || disabled}
            {...{ id, name, onChange, placeholder, type, value }}
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
    </div>
  );
};

RbsLockedInput.propTypes = UIComponentProps;

export default withLogic(RbsLockedInput);
