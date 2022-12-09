export const addTargetClassName = (target, ...classNames) => {
  target.classList.add(...classNames);
};

export const removeTargetClassName = (target, ...classNames) => {
  target.classList.remove(...classNames);
};

export const appendTargetChild = (target, child) => {
  target.appendChild(child);
};

export const getTargetClosestElement = (target, selector) => {
  return target.closest(selector);
};
