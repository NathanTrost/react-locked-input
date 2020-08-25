import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { LockFill, UnlockFill } from "react-bootstrap-icons";

const FieldLockButton = ({
  btnClass,
  btnType = "primary",
  disabled = false,
  iconLocked = LockFill,
  iconUnlocked = UnlockFill,
  id,
  locked,
  onClick,
}) => {
  const Locked = iconLocked;
  const Unlocked = iconUnlocked;
  return (
    <button
      className={classNames([
        "btn",
        `btn-${btnType}`,
        locked ? "btn-locked" : "btn-unlocked",
        btnClass,
      ])}
      disabled={disabled}
      type="button"
    >
      {locked ? (
        <Locked
          className="locked"
          id={`${id}-lockedIcon`}
          onClick={onClick}
          style={{
            cursor: "pointer",
            minWidth: "36px",
          }}
        />
      ) : (
        <Unlocked
          className="unlocked"
          id={`${id}-unlockedIcon`}
          onClick={onClick}
          style={{
            cursor: "pointer",
            minWidth: "36px",
          }}
        />
      )}
    </button>
  );
};
FieldLockButton.propTypes = {
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
  id: PropTypes.string,
  locked: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default FieldLockButton;
