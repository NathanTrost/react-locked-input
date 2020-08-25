import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";

import withLogic from "../common/withLogic";
import FieldLockButton from "./FieldLockButton";

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
            {...{ id, name, onChange, placeholder, type, value }}
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
