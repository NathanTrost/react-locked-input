import React, { useState } from "react";
import classNames from "classnames";

import { UIComponentProps } from "../common/propTypes";
import withLogic from "../common/withLogic";
import FieldLockButton from "./FieldLockButton";
import "./styles.scss";

const MuiLockedInput = ({
  // btnClass,
  // btnType,
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
  type,
  value,
}) => {
  const [focused, setFocus] = useState(false);

  const muiStyles = {
    formGroup:
      "MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-flex-end MuiGrid-grid-xs-true",
    formLabel:
      "MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated",
    focusedLabel: "MuiInputLabel-shrink Mui-focused",
    inputGroup:
      "MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth",
    inputGroupPrepend: "MuiGrid-root MuiGrid-item",
    inputContainer: `MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl`,
    formControl: "MuiInputBase-input MuiInput-input",
    inputGroupAppend: "MuiGrid-root MuiGrid-item",
    inputWrapper:
      "MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth",
    itemExpanded: "MuiGrid-grid-xs-true",
    focusedInput: "Mui-focused",
    disabled: "Mui-disabled",
  };

  const btnProps = {
    id: `${id}-fieldLockButton`,
    locked: isLocked,
    // btnClass,
    // btnType,
    disabled,
    iconLocked,
    iconUnlocked,
    onClick: onIconClick,
  };

  return (
    <div className="lockedInput">
      <div
        className={classNames(["lockedInput-formGroup", muiStyles.formGroup])}
      >
        {prepended && (
          <div
            className={classNames([
              "lockedInput-inputGroupPrepend",
              muiStyles.inputGroupPrepend,
            ])}
          >
            <FieldLockButton {...btnProps} />
          </div>
        )}
        <div className={classNames([muiStyles.item, muiStyles.itemExpanded])}>
          <div className={classNames([muiStyles.inputWrapper])}>
            {label && (
              <label
                aria-label={label}
                className={classNames([
                  "lockedInput-formLabel",
                  muiStyles.formLabel,
                  focused && muiStyles.focusedLabel,
                  (isLocked || disabled) && muiStyles.disabled,
                ])}
                data-shrink={focused}
                htmlFor={name}
                title={label}
              >
                {label}
              </label>
            )}
            <div
              className={classNames([
                muiStyles.inputContainer,
                focused && muiStyles.focusedInput,
                (isLocked || disabled) && muiStyles.disabled,
              ])}
            >
              <input
                aria-describedby={name}
                className={classNames([
                  "lockedInput-formControl",
                  muiStyles.formControl,
                  (isLocked || disabled) && muiStyles.disabled,
                ])}
                disabled={isLocked || disabled}
                onBlur={() => setFocus(false)}
                onFocus={() => setFocus(true)}
                {...{ id, name, onChange, placeholder, type, value }}
              />
            </div>
          </div>
        </div>
        {!prepended && (
          <div
            className={classNames([
              "lockedInput-inputGroupAppend",
              muiStyles.inputGroupAppend,
            ])}
          >
            <FieldLockButton {...btnProps} />
          </div>
        )}
      </div>
    </div>
  );
};

MuiLockedInput.propTypes = UIComponentProps;

export default withLogic(MuiLockedInput);
