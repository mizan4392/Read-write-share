import React from "react";
import { notification } from "antd";

export const openNotificationWithIcon = (type, msg, des?) => {
  notification[type]({
    message: msg,
    description: des,
  });
};
