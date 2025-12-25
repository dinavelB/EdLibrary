import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Dashboard() {
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