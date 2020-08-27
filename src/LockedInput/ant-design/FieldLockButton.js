import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import UnlockFilled from "@ant-design/icons/UnlockFilled";
import LockFilled from "@ant-design/icons/LockFilled";

const FieldLockButton = ({
  disabled = false,
  iconLocked = LockFilled,
  iconUnlocked = UnlockFilled,
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
        cursor: "pointer",
        margin: "0px 8px 0px 4px",
      }}
    />
  ) : (
    <Unlocked
      className={classNames(["lock-btn", "unlocked"])}
      id={`${id}-unLockedIcon`}
      onClick={onClick}
      style={{
        cursor: "pointer",
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
