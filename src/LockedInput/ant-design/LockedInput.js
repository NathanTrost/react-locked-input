import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./styles.scss";
import FieldLockButton from "./FieldLockButton";

const AntDLockedInput = ({
  // btnClass,
  // btnType,
  disabled = false,
  iconLocked,
  iconUnlocked,
  id,
  label,
  locked = false,
  name,
  onChange,
  placeholder,
  prepended = true,
  type,
  value,
}) => {
  const [lockedValue, setLockedValue] = useState(null);
  const [isLocked, setIsLocked] = useState(locked);

  useEffect(() => {
    setIsLocked(locked);
  }, [locked]);

  const resetValueAtUnlock = (lockedValue, event) => {
    onChange && onChange({ name, value: lockedValue }, event);
  };

  const onIconClick = (event) => {
    isLocked && resetValueAtUnlock(lockedValue, event);
    const newValue = !isLocked && value;
    setLockedValue(newValue);
    setIsLocked(!isLocked);
  };

  const antdSpecificStyles = {
    item: "ant-form-item",
    itemControl: "ant-form-item-control",
    controlInput: "ant-form-item-control-input",
    inputContent: "ant-form-item-control-input-content",
  };

  const antdStyles = {
    inputGroup: "ant-input-affix-wrapper",
    inputGroupAppend: "ant-input-suffix",
    inputGroupPrepend: "ant-input-prefix",
    formControl: "ant-input",
    formLabel: "ant-form-item-label",
    formGroup: `ant-form`,
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
    <div
      className={classNames([
        "lockedInput",
        "lockedInput-formGroup",
        antdStyles.formGroup,
      ])}
    >
      <div className="ant-form-item">
        {label && (
          <div
            className={classNames([
              "lockedInput-formLabel",
              antdStyles.formLabel,
            ])}
          >
            <label htmlFor={name} title={label}>
              {label}
            </label>
          </div>
        )}
        <div className={antdSpecificStyles.item}>
          <div className={antdSpecificStyles.itemControl}>
            <div className={antdSpecificStyles.controlInput}>
              <div className={antdSpecificStyles.inputContent}>
                <div
                  className={classNames([
                    "lockedInput-inputGroup",
                    antdStyles.inputGroup,
                  ])}
                >
                  {prepended && (
                    <span
                      className={classNames([
                        "lockedInput-inputGroupPrepend",
                        antdStyles.inputGroupPrepend,
                      ])}
                    >
                      <FieldLockButton {...btnProps} />
                    </span>
                  )}
                  <input
                    aria-describedby={name}
                    className={classNames([
                      "lockedInput-formControl",
                      antdStyles.formControl,
                    ])}
                    id={name}
                    placeholder={placeholder}
                    readOnly={isLocked}
                    type={type}
                    value={lockedValue || value}
                    {...{ name, onChange }}
                  />

                  {!prepended && (
                    <span
                      className={classNames([
                        "lockedInput-inputGroupAppend",
                        antdStyles.inputGroupAppend,
                      ])}
                    >
                      <FieldLockButton {...btnProps} />
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AntDLockedInput.propTypes = {
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
  locked: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
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

export default AntDLockedInput;
