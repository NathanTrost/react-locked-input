import React, { useEffect, useState } from "react";
import { BaseProps, DefaultProps } from "./propTypes";

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

withLogic.propTypes = BaseProps;
withLogic.defaultProps = DefaultProps;

export default withLogic;
