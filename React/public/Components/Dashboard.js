import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
function NavigationBar() {
  return /*#__PURE__*/_jsx("nav", {
    children: /*#__PURE__*/_jsxs("div", {
      className: "me-btn",
      children: [/*#__PURE__*/_jsx(FontAwesomeIcon, {
        icon: faUser
      }), /*#__PURE__*/_jsx("label", {
        htmlFor: "",
        children: "Me"
      })]
    })
  });
}
export default function Dashboard() {
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsx(NavigationBar, {})
  });
}