import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";

import FieldLockButton from "./FieldLockButton";

const MuiLockedInput = ({
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
    <div className={classNames(["lockedInput", "lockedInput-formGroup"])}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Grid container alignItems="flex-end">
        {prepended && (
          <Grid item>
            <FieldLockButton {...btnProps} />
          </Grid>
        )}
        <Grid item>
          <Input
            readOnly={isLocked}
            value={lockedValue || value}
            {...{ id, name, onChange, placeholder, type }}
          />
        </Grid>
        {!prepended && (
          <Grid item>
            <FieldLockButton {...btnProps} />
          </Grid>
        )}
      </Grid>
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

export default MuiLockedInput;
