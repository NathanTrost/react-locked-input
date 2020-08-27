import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

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

  const muiSpecificStyles = {
    inputGroup:
      "MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-flex-end",
    item: "MuiGrid-root MuiGrid-item",
    focusedInput: "Mui-focused",
    inputContainer: `MuiInputBase-root MuiInput-root MuiInput-underline`,
  };

  const muiStyles = {
    inputGroup: "ant-input-affix-wrapper",
    inputGroupAppend: "ant-input-suffix",
    inputGroupPrepend: "ant-input-prefix",
    formControl: "MuiInputBase-input MuiInput-input",
    formLabel: "MuiFormLabel-root MuiInputLabel-root MuiInputLabel-animated",
    formGroup: "",
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
      <div className="lockedInput-formGroup">
        {label && (
          <label
            aria-label={label}
            className={classNames([
              "lockedInput-formLabel",
              muiStyles.formLabel,
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
            muiSpecificStyles.inputGroup,
          ])}
        >
          {prepended && (
            <div
              className={classNames([
                "lockedInput-inputGroupPrepend",
                muiSpecificStyles.item,
              ])}
            >
              <FieldLockButton {...btnProps} />
            </div>
          )}
          <div className={classNames([muiSpecificStyles.item])}>
            <div
              className={classNames([
                muiSpecificStyles.inputContainer,
                focused && muiSpecificStyles.focusedInput,
              ])}
            >
              <input
                aria-describedby={name}
                className={classNames([
                  "lockedInput-formControl",
                  muiStyles.formControl,
                ])}
                onBlur={() => setFocus(false)}
                onFocus={() => setFocus(true)}
                readOnly={isLocked}
                {...{ id, name, onChange, placeholder, type, value }}
              />
            </div>
          </div>
          {!prepended && (
            <div
              className={classNames([
                "lockedInput-inputGroupAppend",
                muiSpecificStyles.item,
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

MuiLockedInput.propTypes = {
  // btnClass: PropTypes.string,
  // btnType: PropTypes.oneOf([
  //   "primary",
  //   "secondary",
  //   "success",
  //   "warning",
  //   "danger",
  //   "info",
  //   "light",
  //   "dark",
  //   "link",
  // ]),
  disabled: PropTypes.bool,
  iconLocked: PropTypes.node,
  iconUnlocked: PropTypes.node,
  label: PropTypes.string,
  isLocked: PropTypes.bool,
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

export default withLogic(MuiLockedInput);
