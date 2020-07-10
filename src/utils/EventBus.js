import Vue from "vue";
const vue = new Vue();

export const addEventListener = (eventType, listener) => {
  vue.$on(eventType, listener);
};

export const removeEventListener = (eventType, listener) => {
  vue.$off(eventType, listener);
};

export const fireEvent = (eventType, ...args) => {
  vue.$emit(eventType, ...args);
};
