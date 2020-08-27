import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";

const FieldLockButton = ({
  disabled = false,
  iconLocked = LockIcon,
  iconUnlocked = LockOpenIcon,
  id,
  locked,
  onClick,
}) => {
  const Locked = iconLocked;
  const Unlocked = iconUnlocked;

  return locked ? (
    <Locked
      className={classNames(["lock-btn", "locked"])}
      fontSize="small" // MUI specific prop
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
      fontSize="small" // MUI specific prop
      id={`${id}-unlockedIcon`}
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
