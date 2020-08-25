import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const withLogic = (BaseComponent) => (props) => {
  const { locked, name, onChange, value } = props;
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

  return (
    <BaseComponent
      {...{ isLocked, ...props }}
      value={lockedValue || value}
      onIconClick={onIconClick}
    />
  );
};

withLogic.propTypes = {
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

withLogic.defaultProps = {
  disabled: false,
  locked: false,
  prepended: true,
};

export default withLogic;
