import React from "react";

export const IfElseComponent: React.FC<{ checked: boolean, if: React.ReactElement, else: React.ReactElement }> = (props) => {
  if (props.checked) {
    return props.if;
  }
  return props.else;
};

export const ConditionComponent: React.FC<{ isShow: boolean }> = (props) => {
  if (!props.isShow) {
    return null;
  }
  return props.children as React.ReactElement;
};

export const SwitchComponent: React.FC<{ index: number }> = (props) => {
  if (!Array.isArray(props.children)) {
    return null;
  }
  if (props.children.length <= props.index) {
    return null;
  }
  return props.children[props.index] as React.ReactElement;
};