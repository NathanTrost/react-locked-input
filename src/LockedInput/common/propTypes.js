import PropTypes from "prop-types";

const sharedProps = {
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

export const BaseProps = {
  //   btnClass: PropTypes.string,
  //   btnType: PropTypes.oneOf([
  //     "primary",
  //     "secondary",
  //     "success",
  //     "warning",
  //     "danger",
  //     "info",
  //     "light",
  //     "dark",
  //     "link",
  //   ]),
  //   disabled: PropTypes.bool,
  //   iconLocked: PropTypes.node,
  //   iconUnlocked: PropTypes.node,
  //   label: PropTypes.string,
  locked: PropTypes.bool,
  ...sharedProps,
};

export const DefaultProps = {
  disabled: false,
  locked: false,
  prepended: true,
};

export const UIComponentProps = {
  isLocked: PropTypes.bool,
  onIconClick: PropTypes.func,
  ...sharedProps,
};
