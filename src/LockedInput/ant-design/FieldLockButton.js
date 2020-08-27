import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import UnlockOutlined from "@ant-design/icons/UnlockOutlined";
import LockFilled from "@ant-design/icons/LockFilled";

const FieldLockButton = ({
  disabled = false,
  iconLocked = LockFilled,
  iconUnlocked = UnlockOutlined,
  id,
  locked,
  onClick,
}) => {
  const Locked = iconLocked;
  const Unlocked = iconUnlocked;

  return locked ? (
    <Locked
      className={classNames(["lock-btn", "locked"])}
      id={`${id}-lockedIcon`}
      onClick={onClick}
      style={{
        color: disabled ? "inherit" : "black",
        cursor: disabled ? "none" : "pointer",
        margin: "0px 8px 0px 4px",
      }}
    />
  ) : (
    <Unlocked
      className={classNames(["lock-btn", "unlocked"])}
      id={`${id}-unLockedIcon`}
      onClick={onClick}
      style={{
        color: disabled ? "inherit" : "black",
        cursor: disabled ? "none" : "pointer",
        margin: "0px 8px 0px 4px",
      }}
    />
  );
};

FieldLockButton.propTypes = {
  disabled: PropTypes.bool,
  iconLocked: PropTypes.node,
  iconUnlocked: PropTypes.node,
  id: PropTypes.string,
  locked: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default FieldLockButton;
