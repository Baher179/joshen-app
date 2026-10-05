/* @ds-bundle: {"format":4,"namespace":"DesignSystem_9729b4","components":[{"name":"NavigationBar","sourcePath":"components/bars/NavigationBar.jsx"},{"name":"SearchField","sourcePath":"components/bars/SearchField.jsx"},{"name":"StatusBar","sourcePath":"components/bars/StatusBar.jsx"},{"name":"TabBar","sourcePath":"components/bars/TabBar.jsx"},{"name":"Toolbar","sourcePath":"components/bars/Toolbar.jsx"},{"name":"ActivityView","sourcePath":"components/content/ActivityView.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"EmptyState","sourcePath":"components/content/EmptyState.jsx"},{"name":"Notification","sourcePath":"components/content/Notification.jsx"},{"name":"ActivityIndicator","sourcePath":"components/controls/ActivityIndicator.jsx"},{"name":"Button","sourcePath":"components/controls/Button.jsx"},{"name":"IconButton","sourcePath":"components/controls/IconButton.jsx"},{"name":"PageControl","sourcePath":"components/controls/PageControl.jsx"},{"name":"PopUpButton","sourcePath":"components/controls/PopUpButton.jsx"},{"name":"ProgressBar","sourcePath":"components/controls/ProgressBar.jsx"},{"name":"SegmentedControl","sourcePath":"components/controls/SegmentedControl.jsx"},{"name":"Slider","sourcePath":"components/controls/Slider.jsx"},{"name":"Stepper","sourcePath":"components/controls/Stepper.jsx"},{"name":"Toggle","sourcePath":"components/controls/Toggle.jsx"},{"name":"DatePicker","sourcePath":"components/forms/DatePicker.jsx"},{"name":"PickerWheel","sourcePath":"components/forms/PickerWheel.jsx"},{"name":"TextArea","sourcePath":"components/forms/TextArea.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"Icon","sourcePath":"components/foundations/Icon.jsx"},{"name":"Material","sourcePath":"components/foundations/Material.jsx"},{"name":"Separator","sourcePath":"components/foundations/Separator.jsx"},{"name":"Text","sourcePath":"components/foundations/Text.jsx"},{"name":"SF_SYMBOLS","sourcePath":"components/foundations/sf-symbols.js"},{"name":"List","sourcePath":"components/lists/List.jsx"},{"name":"ListFooter","sourcePath":"components/lists/ListFooter.jsx"},{"name":"ListRow","sourcePath":"components/lists/ListRow.jsx"},{"name":"ListSectionHeader","sourcePath":"components/lists/ListSectionHeader.jsx"},{"name":"SwipeActions","sourcePath":"components/lists/SwipeActions.jsx"},{"name":"DeviceFrame","sourcePath":"components/navigation/DeviceFrame.jsx"},{"name":"HomeIndicator","sourcePath":"components/navigation/HomeIndicator.jsx"},{"name":"Sidebar","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"SidebarRow","sourcePath":"components/navigation/SidebarRow.jsx"},{"name":"ActionSheet","sourcePath":"components/overlays/ActionSheet.jsx"},{"name":"Alert","sourcePath":"components/overlays/Alert.jsx"},{"name":"Menu","sourcePath":"components/overlays/Menu.jsx"},{"name":"Popover","sourcePath":"components/overlays/Popover.jsx"},{"name":"Scrim","sourcePath":"components/overlays/Scrim.jsx"},{"name":"Sheet","sourcePath":"components/overlays/Sheet.jsx"}],"sourceHashes":{"components/bars/NavigationBar.jsx":"1202936331ed","components/bars/SearchField.jsx":"55bd26681a8e","components/bars/StatusBar.jsx":"3ca70c88dec8","components/bars/TabBar.jsx":"07c7f6c3dc74","components/bars/Toolbar.jsx":"1ed8fc592716","components/content/ActivityView.jsx":"f93b6698b171","components/content/Badge.jsx":"0e359e54ef4e","components/content/EmptyState.jsx":"6e686cb9ae37","components/content/Notification.jsx":"08b5b23b2823","components/controls/ActivityIndicator.jsx":"c9fd424f1229","components/controls/Button.jsx":"64cd19165a87","components/controls/IconButton.jsx":"4893dd398c97","components/controls/PageControl.jsx":"3ba27f6f10a3","components/controls/PopUpButton.jsx":"e53bae22c02e","components/controls/ProgressBar.jsx":"72d04dba0bdc","components/controls/SegmentedControl.jsx":"222fdd375671","components/controls/Slider.jsx":"450f899e37c4","components/controls/Stepper.jsx":"0a88b8f93bd5","components/controls/Toggle.jsx":"3cb2510867e2","components/forms/DatePicker.jsx":"96a2a7f714ac","components/forms/PickerWheel.jsx":"5e55c534b6a3","components/forms/TextArea.jsx":"a57d02ed12d2","components/forms/TextField.jsx":"2c5f46cf14c1","components/foundations/Icon.jsx":"8d0cff26f762","components/foundations/Material.jsx":"46512c36cc70","components/foundations/Separator.jsx":"b1554dc13918","components/foundations/Text.jsx":"016810bd20f9","components/foundations/sf-symbols.js":"129ccd60cb70","components/lists/List.jsx":"25aef2b25b6c","components/lists/ListFooter.jsx":"10eeb192e842","components/lists/ListRow.jsx":"038ca9e62fc9","components/lists/ListSectionHeader.jsx":"157c796d336c","components/lists/SwipeActions.jsx":"ea7a6b74f094","components/navigation/DeviceFrame.jsx":"d55496dc71e8","components/navigation/HomeIndicator.jsx":"354f5c8d9900","components/navigation/Sidebar.jsx":"920aacda6fb0","components/navigation/SidebarRow.jsx":"c61b1e3d75db","components/overlays/ActionSheet.jsx":"de9950e1fb14","components/overlays/Alert.jsx":"d88e1ed8b7bd","components/overlays/Menu.jsx":"8e472af7f556","components/overlays/Popover.jsx":"41cd215c60e2","components/overlays/Scrim.jsx":"088c54d93138","components/overlays/Sheet.jsx":"96bf88c6f2ad"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_9729b4 = window.DesignSystem_9729b4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/bars/NavigationBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Two styles from the kit's Toolbars page:
   "default"     — 44pt row, centred inline title
   "large-title" — 44pt control row over a 61pt title block (34/41 large title
                   plus optional 15/20 subheadline), 125pt in total. */
function NavigationBar({
  title,
  subtitle,
  variant = 'default',
  leading,
  trailing,
  style,
  ...rest
}) {
  const barStyle = variant;
  /* Side clusters share equal flex basis so the inline title stays optically centred
     whatever sits on either side; each reserves the 44pt touch target only when filled. */
  const cluster = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: '1 1 0',
    minWidth: 0
  };
  const controls = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      height: 44,
      padding: '0 16px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...cluster,
      justifyContent: 'flex-start',
      minHeight: leading ? 44 : 0
    }
  }, leading), barStyle === 'default' && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 1 auto',
      minWidth: 0,
      textAlign: 'center',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-semibold)',
      fontSize: 'var(--type-headline-size)',
      lineHeight: 'var(--type-headline-line)',
      letterSpacing: 'var(--type-headline-tracking)',
      color: 'var(--content-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      ...cluster,
      justifyContent: 'flex-end',
      minHeight: trailing ? 44 : 0
    }
  }, trailing));
  if (barStyle === 'default') return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...style
    }
  }, rest), controls);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
      ...style
    }
  }, rest), controls, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      padding: '3px 16px 8px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--theme-font-display)',
      fontWeight: 'var(--font-weight-bold)',
      fontSize: 'var(--type-large-title-size)',
      lineHeight: 'var(--type-large-title-line)',
      letterSpacing: 'var(--type-large-title-tracking)',
      color: 'var(--content-primary)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-regular)',
      fontSize: 'var(--type-subheadline-size)',
      lineHeight: 'var(--type-subheadline-line)',
      letterSpacing: 'var(--type-subheadline-tracking)',
      color: 'var(--content-secondary)'
    }
  }, subtitle)));
}
Object.assign(__ds_scope, { NavigationBar, __ds_default_components_bars_NavigationBar_cwwt92: NavigationBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/bars/NavigationBar.jsx", error: String((e && e.message) || e) }); }

// components/bars/StatusBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The iPhone status bar as the kit draws it: 54pt tall, time leading at
   17pt semibold, signal / wifi / battery trailing, 27pt safe-area top. */
function StatusBar({
  time = '9:41',
  mode = 'light',
  style,
  ...rest
}) {
  const color = mode === 'dark' ? 'var(--grays-white)' : 'var(--labels-primary)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      height: 54,
      padding: '0 34px 12px 34px',
      boxSizing: 'border-box',
      color,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-system)',
      fontWeight: 'var(--font-weight-semibold)',
      fontSize: 17,
      lineHeight: '22px',
      letterSpacing: '-0.43px'
    }
  }, time), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 2,
      height: 12
    }
  }, [4, 6.5, 9, 11.5].map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 3,
      height: h,
      borderRadius: 1,
      background: 'currentColor'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 17,
      height: 12,
      borderRadius: 2,
      background: 'currentColor',
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 27,
      height: 13,
      borderRadius: 4,
      border: '1px solid currentColor',
      opacity: 0.9,
      padding: 1.5,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: '70%',
      height: '100%',
      borderRadius: 2,
      background: 'currentColor'
    }
  }))));
}
Object.assign(__ds_scope, { StatusBar, __ds_default_components_bars_StatusBar_1c7bokq: StatusBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/bars/StatusBar.jsx", error: String((e && e.message) || e) }); }

// components/bars/TabBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The kit's floating iPhone tab bar: a 62pt Liquid Glass pill inside a 95pt
   safe container with 25px side margins. Selected tab gets a 36pt pill and a
   15pt bold accent label; unselected tabs sit at the unselected label colour. */
function TabBar({
  tabs = [],
  selected = 0,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',
      height: 95,
      padding: '16px 25px 25px',
      boxSizing: 'border-box',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0 2px',
      height: 54,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--glass-bg)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      boxShadow: 'var(--shadow-glass)'
    }
  }, tabs.map((tab, i) => {
    const on = i === selected;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(i),
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        flexGrow: 1,
        height: 36,
        padding: '8px 18px',
        border: 'none',
        borderRadius: 'var(--radius-pill)',
        background: on ? 'var(--miscellaneous-floating-tab-pill-fill)' : 'transparent',
        color: on ? 'var(--selected-tab-content)' : 'var(--unselected-tab-content)',
        cursor: 'pointer',
        boxSizing: 'border-box'
      }
    }, tab.icon, tab.label && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--theme-font-text)',
        fontWeight: on ? 'var(--font-weight-bold)' : 'var(--font-weight-medium)',
        fontSize: 'var(--type-subheadline-size)',
        lineHeight: 'var(--type-subheadline-line)',
        letterSpacing: 'var(--type-subheadline-tracking)',
        whiteSpace: 'nowrap'
      }
    }, tab.label));
  })));
}
Object.assign(__ds_scope, { TabBar, __ds_default_components_bars_TabBar_sybdfh: TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/bars/TabBar.jsx", error: String((e && e.message) || e) }); }

// components/bars/Toolbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The kit's bottom toolbar: 1–6 symbol slots (or text actions) on a
   Liquid Glass pill, inside a 4px/28px/32px container. */
function Toolbar({
  items = [],
  glass = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '4px 28px 32px',
      boxSizing: 'border-box',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      gap: 4,
      flexGrow: 1,
      height: 48,
      padding: '0 10px',
      boxSizing: 'border-box',
      borderRadius: 'var(--radius-pill)',
      background: glass ? 'var(--glass-bg)' : 'transparent',
      backdropFilter: glass ? 'var(--glass-blur)' : undefined,
      WebkitBackdropFilter: glass ? 'var(--glass-blur)' : undefined,
      boxShadow: glass ? 'var(--shadow-glass)' : 'none'
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    "aria-label": item.label,
    onClick: item.onClick,
    disabled: item.disabled,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 44,
      height: 44,
      border: 'none',
      background: 'transparent',
      padding: 0,
      color: item.disabled ? 'var(--content-disabled)' : item.prominent ? 'var(--action-accent)' : 'var(--content-primary)',
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-medium)',
      fontSize: 'var(--type-body-size)',
      lineHeight: 'var(--type-body-line)',
      cursor: item.disabled ? 'default' : 'pointer'
    }
  }, item.icon || item.text))));
}
Object.assign(__ds_scope, { Toolbar, __ds_default_components_bars_Toolbar_15e8pb8: Toolbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/bars/Toolbar.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The kit's notification badge: a red capsule with a white 13pt semibold count,
   or a bare 10pt dot when there's no number. */
function Badge({
  count,
  dot = false,
  max = 99,
  color = 'var(--feedback-error)',
  style,
  ...rest
}) {
  if (dot || count == null) {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-block',
        width: 10,
        height: 10,
        borderRadius: 5,
        background: color,
        ...style
      }
    }, rest));
  }
  const label = count > max ? max + '+' : String(count);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 20,
      height: 20,
      padding: '0 6px',
      boxSizing: 'border-box',
      borderRadius: 'var(--radius-pill)',
      background: color,
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-semibold)',
      fontSize: 'var(--type-footnote-size)',
      lineHeight: '20px',
      color: 'var(--grays-white)',
      ...style
    }
  }, rest), label);
}
Object.assign(__ds_scope, { Badge, __ds_default_components_content_Badge_18g1xlj: Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Three variants from the kit's Empty States page:
   "title-subtitle"  — 22pt bold title + 17pt secondary body, centred, 30px gap
   "large-symbol"    — a 64pt tertiary symbol above the same block
   "symbol-in-circle"— the symbol inside a 96pt quaternary-fill circle */
function EmptyState({
  variant = 'title-subtitle',
  symbol,
  title,
  description,
  action,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 30,
      padding: '48px 40px',
      boxSizing: 'border-box',
      textAlign: 'center',
      ...style
    }
  }, rest), variant === 'large-symbol' && symbol && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 64,
      lineHeight: 1,
      color: 'var(--content-tertiary)'
    }
  }, symbol), variant === 'symbol-in-circle' && symbol && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 96,
      height: 96,
      borderRadius: 48,
      background: 'var(--fill-quaternary)',
      fontSize: 40,
      color: 'var(--content-tertiary)'
    }
  }, symbol), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--theme-font-display)',
      fontWeight: 'var(--font-weight-bold)',
      fontSize: 'var(--type-title2-size)',
      lineHeight: 'var(--type-title2-line)',
      letterSpacing: 'var(--type-title2-tracking)',
      color: 'var(--content-primary)'
    }
  }, title), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-regular)',
      fontSize: 'var(--type-body-size)',
      lineHeight: 'var(--type-body-line)',
      letterSpacing: 'var(--type-body-tracking)',
      color: 'var(--content-secondary)',
      textWrap: 'pretty'
    }
  }, description)), action);
}
Object.assign(__ds_scope, { EmptyState, __ds_default_components_content_EmptyState_1kpvbh0: EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/content/Notification.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The kit's notification: a 24pt-radius material card, 14px padding, a 38pt
   app icon, 15pt semibold title over 15pt body, and a 13pt vibrant-tertiary
   timestamp in the top-right. Expanded adds body lines and an image slot. */
function Notification({
  app,
  icon,
  title,
  body,
  time = 'now',
  expanded = false,
  media,
  stackCount = 0,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      ...style
    }
  }, rest), stackCount > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 10,
      right: 10,
      top: 8,
      height: '100%',
      borderRadius: 24,
      background: 'var(--material-thin-bg)',
      backdropFilter: 'var(--material-thin-blur)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 5,
      right: 5,
      top: 4,
      height: '100%',
      borderRadius: 24,
      background: 'var(--material-regular-bg)',
      backdropFilter: 'var(--material-regular-blur)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      gap: 10,
      padding: 14,
      boxSizing: 'border-box',
      borderRadius: 24,
      background: 'var(--material-thick-bg)',
      backdropFilter: 'var(--material-thick-blur)',
      WebkitBackdropFilter: 'var(--material-thick-blur)',
      boxShadow: 'var(--shadow-glass)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 9,
      overflow: 'hidden',
      flexShrink: 0,
      background: 'var(--fill-tertiary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      flexGrow: 1,
      minWidth: 0
    }
  }, app && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-medium)',
      fontSize: 'var(--type-caption2-size)',
      lineHeight: 'var(--type-caption2-line)',
      letterSpacing: '0.6px',
      textTransform: 'uppercase',
      color: 'var(--content-vibrant-tertiary)'
    }
  }, app), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-semibold)',
      fontSize: 'var(--type-subheadline-size)',
      lineHeight: 'var(--type-subheadline-line)',
      letterSpacing: 'var(--type-subheadline-tracking)',
      color: 'var(--content-primary)'
    }
  }, title), body && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-regular)',
      fontSize: 'var(--type-subheadline-size)',
      lineHeight: 'var(--type-subheadline-line)',
      letterSpacing: 'var(--type-subheadline-tracking)',
      color: 'var(--content-primary)',
      display: '-webkit-box',
      WebkitLineClamp: expanded ? 8 : 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      textWrap: 'pretty'
    }
  }, body), expanded && media && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      borderRadius: 12,
      overflow: 'hidden'
    }
  }, media)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-regular)',
      fontSize: 'var(--type-footnote-size)',
      lineHeight: 'var(--type-footnote-line)',
      color: 'var(--content-vibrant-tertiary)',
      flexShrink: 0
    }
  }, time)));
}
Object.assign(__ds_scope, { Notification, __ds_default_components_content_Notification_mov5t7: Notification });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Notification.jsx", error: String((e && e.message) || e) }); }

// components/controls/ActivityIndicator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The kit's indeterminate spinner: eight tapered spokes at tertiary label colour. */
function ActivityIndicator({
  size = 20,
  color = 'var(--content-tertiary)',
  style,
  ...rest
}) {
  const id = React.useMemo(() => 'ai' + Math.random().toString(36).slice(2), []);
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "status",
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, `@keyframes ${id}-spin{to{transform:rotate(360deg)}}`), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      position: 'relative',
      width: size,
      height: size,
      animation: `${id}-spin 1s steps(8) infinite`
    }
  }, Array.from({
    length: 8
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'absolute',
      left: '50%',
      top: 0,
      width: Math.max(1.5, size * 0.09),
      height: size * 0.28,
      marginLeft: -Math.max(0.75, size * 0.045),
      borderRadius: size,
      background: color,
      opacity: 0.25 + i / 8 * 0.75,
      transform: `rotate(${i * 45}deg)`,
      transformOrigin: `50% ${size / 2}px`
    }
  }))));
}
Object.assign(__ds_scope, { ActivityIndicator, __ds_default_components_controls_ActivityIndicator_arthqf: ActivityIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/ActivityIndicator.jsx", error: String((e && e.message) || e) }); }

// components/controls/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Sizes and type ramp transcribed from the kit's Button sticker sheet:
   Small 28pt @ 15/20 (-0.23) · Medium 34pt @ 15/20 (-0.23) · Large 50pt @ 17/22 (-0.43).
   Glass buttons are 48pt (52pt when full-width) with 6px/20px padding. */
const SIZES = {
  small: {
    h: 28,
    pad: '0 12px',
    size: 'subheadline',
    gap: 4
  },
  medium: {
    h: 34,
    pad: '0 14px',
    size: 'subheadline',
    gap: 4
  },
  large: {
    h: 50,
    pad: '0 20px',
    size: 'body',
    gap: 6
  },
  glass: {
    h: 48,
    pad: '6px 20px',
    size: 'body',
    gap: 4
  }
};
function look(variant, destructive, disabled) {
  if (disabled) return {
    background: 'var(--action-disabled-fill)',
    color: destructive ? 'var(--action-destructive-content-disabled)' : 'var(--action-disabled-content)'
  };
  switch (variant) {
    case 'prominent':
      return {
        background: destructive ? 'var(--content-destructive)' : 'var(--action-accent)',
        color: 'var(--action-accent-content)'
      };
    case 'tinted':
      return {
        background: destructive ? 'var(--action-destructive-fill)' : 'var(--action-tinted-fill)',
        color: destructive ? 'var(--content-destructive)' : 'var(--action-accent)'
      };
    case 'secondary':
      return {
        background: 'var(--action-secondary-fill)',
        color: destructive ? 'var(--content-destructive)' : 'var(--action-accent)'
      };
    case 'glass':
      return {
        background: 'var(--glass-bg)',
        backdropFilter: 'var(--glass-blur)',
        boxShadow: 'var(--shadow-glass)',
        color: destructive ? 'var(--content-destructive)' : 'var(--content-primary)'
      };
    case 'glass-tinted':
      return {
        background: 'var(--glass-tinted-bg)',
        backdropFilter: 'var(--glass-blur)',
        boxShadow: 'var(--shadow-glass)',
        color: 'var(--content-on-accent)'
      };
    default:
      return {
        background: 'transparent',
        color: destructive ? 'var(--content-destructive)' : 'var(--action-accent)'
      };
  }
}
function Button({
  children,
  size = 'large',
  variant = 'prominent',
  destructive = false,
  disabled = false,
  fullWidth = false,
  leading,
  trailing,
  onClick,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.large;
  const skin = look(variant, destructive, disabled);
  const t = s.size === 'body' ? {
    fontSize: 'var(--type-body-size)',
    lineHeight: 'var(--type-body-line)',
    letterSpacing: 'var(--type-body-tracking)'
  } : {
    fontSize: 'var(--type-subheadline-size)',
    lineHeight: 'var(--type-subheadline-line)',
    letterSpacing: 'var(--type-subheadline-tracking)'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    style: {
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: size === 'glass' && fullWidth ? 52 : s.h,
      padding: s.pad,
      width: fullWidth ? '100%' : 'fit-content',
      border: 'none',
      borderRadius: 'var(--theme-control-radius)',
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-medium)',
      whiteSpace: 'nowrap',
      cursor: disabled ? 'default' : 'pointer',
      transition: 'opacity var(--motion-duration-fast) var(--motion-ease-standard), transform var(--motion-duration-instant) var(--motion-ease-standard)',
      ...t,
      ...skin,
      ...style
    },
    onPointerDown: e => {
      if (!disabled) e.currentTarget.style.opacity = 'var(--motion-press-opacity)';
    },
    onPointerUp: e => {
      e.currentTarget.style.opacity = '1';
    },
    onPointerLeave: e => {
      e.currentTarget.style.opacity = '1';
    }
  }, rest), leading, children != null && /*#__PURE__*/React.createElement("span", null, children), trailing);
}
Object.assign(__ds_scope, { Button, __ds_default_components_controls_Button_ndyiyh: Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Button.jsx", error: String((e && e.message) || e) }); }

// components/controls/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BOX = {
  small: 28,
  medium: 34,
  large: 50,
  glass: 48
};
const GLYPH = {
  small: 15,
  medium: 15,
  large: 17,
  glass: 17
};

/* Square, symbol-only button. Same fills as Button; the kit draws these at
   28 / 34 / 50 with the symbol centred and no padding. */
function IconButton({
  icon,
  size = 'large',
  label,
  style,
  ...rest
}) {
  const box = BOX[size] || BOX.large;
  return /*#__PURE__*/React.createElement(__ds_scope.Button, _extends({
    size: size,
    "aria-label": label,
    style: {
      width: box,
      height: box,
      padding: 0,
      fontSize: GLYPH[size] || 17,
      ...style
    }
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton, __ds_default_components_controls_IconButton_qmos3m: IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/controls/PageControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A 24pt-tall capsule of dots, 8px apart inside 8/12 padding — the kit's page control. */
function PageControl({
  count = 3,
  selected = 0,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'row',
      gap: 8,
      padding: '8px 12px',
      height: 24,
      boxSizing: 'border-box',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
      ...style
    }
  }, rest), Array.from({
    length: count
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    onClick: () => onChange && onChange(i),
    style: {
      width: 8,
      height: 8,
      borderRadius: 4,
      background: i === selected ? 'var(--content-primary)' : 'var(--content-quaternary)',
      cursor: onChange ? 'pointer' : 'default',
      transition: 'background var(--motion-duration-fast) var(--motion-ease-standard)'
    }
  })));
}
Object.assign(__ds_scope, { PageControl, __ds_default_components_controls_PageControl_k9olln: PageControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/PageControl.jsx", error: String((e && e.message) || e) }); }

// components/controls/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 6pt track at radius 3, accent fill — the kit's determinate progress indicator.
   Regular sits in a 44pt row with 16px side margins; small is the inline size. */
function ProgressBar({
  value = 0,
  size = 'regular',
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "progressbar",
    "aria-valuenow": pct,
    style: {
      display: 'flex',
      alignItems: 'center',
      height: size === 'regular' ? 44 : 24,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flexGrow: 1,
      height: 6,
      borderRadius: 3,
      background: 'var(--fill-primary)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      width: pct + '%',
      height: 6,
      borderRadius: 3,
      background: 'var(--action-accent)',
      transition: 'width var(--motion-duration-default) var(--motion-ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar, __ds_default_components_controls_ProgressBar_5uybvr: ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/controls/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 32pt tall, pill radius, 2px padding, 4px gap, tertiary fill track.
   The selected segment is a 28pt white pill at radius 20 with a 13.333/18 (-0.08)
   semibold label — the kit's exact odd type size. */
function SegmentedControl({
  segments = [],
  selected = 0,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      flexDirection: 'row',
      gap: 4,
      padding: 2,
      boxSizing: 'border-box',
      height: 32,
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      background: 'var(--fill-tertiary)',
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, rest), segments.map((label, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    role: "tab",
    "aria-selected": i === selected,
    disabled: disabled,
    onClick: () => onChange && onChange(i),
    style: {
      flexGrow: 1,
      height: 28,
      padding: '3px 6px',
      border: 'none',
      borderRadius: i === selected ? 'var(--radius-20)' : 'var(--radius-20)',
      background: i === selected ? 'var(--selected-fill)' : 'transparent',
      boxShadow: i === selected ? 'var(--shadow-floating-pill)' : 'none',
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-semibold)',
      fontSize: 13.333,
      lineHeight: '18px',
      letterSpacing: '-0.08px',
      color: i === selected ? 'var(--content-primary)' : 'var(--content-secondary)',
      whiteSpace: 'nowrap',
      cursor: disabled ? 'default' : 'pointer',
      transition: 'background var(--motion-duration-fast) var(--motion-ease-standard)'
    }
  }, label)));
}
Object.assign(__ds_scope, { SegmentedControl, __ds_default_components_controls_SegmentedControl_1l48uyi: SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/controls/Slider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Track 6pt / radius 3 · knob 38×24 with the kit's two-layer shadow ·
   accent fill · optional leading and trailing symbols and tick marks. */
function Slider({
  value = 50,
  min = 0,
  max = 100,
  ticks = 0,
  leading,
  trailing,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, (value - min) / (max - min) * 100));
  const ref = React.useRef(null);
  const set = e => {
    if (disabled || !onChange || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const p = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
    onChange(Math.round(min + p * (max - min)));
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, rest), leading && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--content-secondary)',
      fontSize: 17,
      lineHeight: '22px'
    }
  }, leading), /*#__PURE__*/React.createElement("div", {
    ref: ref,
    role: "slider",
    "aria-valuenow": value,
    "aria-valuemin": min,
    "aria-valuemax": max,
    onPointerDown: set,
    onPointerMove: e => e.buttons === 1 && set(e),
    style: {
      position: 'relative',
      flexGrow: 1,
      height: 24,
      cursor: disabled ? 'default' : 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '9px 0 9px 0',
      height: 6,
      borderRadius: 3,
      background: 'var(--fill-primary)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 9,
      left: 0,
      width: pct + '%',
      height: 6,
      borderRadius: 3,
      background: 'var(--action-accent)'
    }
  }), ticks > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      left: 19,
      right: 19,
      height: 4,
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, Array.from({
    length: ticks
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 2,
      height: 4,
      borderRadius: 1,
      background: 'var(--content-quaternary)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: `calc(${pct}% - 19px)`,
      width: 38,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--grays-white)',
      boxShadow: 'var(--shadow-knob)'
    }
  })), trailing && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--content-secondary)',
      fontSize: 17,
      lineHeight: '22px'
    }
  }, trailing));
}
Object.assign(__ds_scope, { Slider, __ds_default_components_controls_Slider_y7gmqo: Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Slider.jsx", error: String((e && e.message) || e) }); }

// components/controls/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 64×28 track, 2px padding, 39pt knob, pill radius — exactly the kit's switch.
   The 1×10 white bar is the accessibility on/off indicator the kit ships. */
function Toggle({
  on = false,
  disabled = false,
  showAXLabel = false,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": on,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!on),
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: on ? 'space-between' : 'flex-start',
      width: 64,
      height: 28,
      padding: 2,
      boxSizing: 'border-box',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      background: on ? 'var(--feedback-success)' : 'var(--fill-secondary)',
      opacity: 1,
      filter: disabled ? 'grayscale(1)' : 'none',
      cursor: disabled ? 'default' : 'pointer',
      transition: 'background var(--motion-duration-fast) var(--motion-ease-standard)',
      ...style
    }
  }, rest), on && showAXLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 10,
      background: 'var(--grays-white)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 39,
      alignSelf: 'stretch',
      flexShrink: 0,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--grays-white)',
      order: on ? 2 : 0
    }
  }), !on && showAXLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 5,
      border: '1px solid var(--miscellaneous-toggle-ax-label-off)'
    }
  })));
}
Object.assign(__ds_scope, { Toggle, __ds_default_components_controls_Toggle_ywu87z: Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/forms/PickerWheel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The kit's wheel picker: 34pt rows, the selected row centred and at full
   opacity with a tertiary-fill selection band, neighbours dimmed. */
function PickerWheel({
  options = [],
  selected = 0,
  columns,
  onChange,
  style,
  ...rest
}) {
  const cols = columns || [{
    options,
    selected
  }];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
      height: 216,
      background: 'var(--surface-base)',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 8,
      right: 8,
      top: 'calc(50% - 18px)',
      height: 36,
      borderRadius: 8,
      background: 'var(--fill-tertiary)',
      pointerEvents: 'none'
    }
  }), cols.map((col, ci) => /*#__PURE__*/React.createElement("div", {
    key: ci,
    style: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, col.options.map((opt, i) => {
    const d = Math.abs(i - col.selected);
    if (d > 2) return null;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      onClick: () => (col.onChange || onChange) && (col.onChange || onChange)(i),
      style: {
        height: 34,
        border: 'none',
        background: 'transparent',
        width: '100%',
        fontFamily: 'var(--theme-font-text)',
        fontWeight: d === 0 ? 'var(--font-weight-medium)' : 'var(--font-weight-regular)',
        fontSize: d === 0 ? 22 : 20,
        lineHeight: '34px',
        color: 'var(--content-primary)',
        opacity: d === 0 ? 1 : d === 1 ? 0.45 : 0.2,
        cursor: 'pointer'
      }
    }, opt);
  }))));
}
Object.assign(__ds_scope, { PickerWheel, __ds_default_components_forms_PickerWheel_erjocj: PickerWheel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/PickerWheel.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextArea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Multi-line variant of the kit's field: same 16px inset and 17/22 body type,
   grown to the content with a minimum of three lines. */
function TextArea({
  value = '',
  placeholder = 'Value',
  rows = 3,
  disabled = false,
  separator = true,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      padding: '0 16px',
      boxSizing: 'border-box',
      ...style
    }
  }, rest), separator && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-separator)'
    }
  }), /*#__PURE__*/React.createElement("textarea", {
    value: value,
    placeholder: placeholder,
    rows: rows,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      border: 'none',
      background: 'transparent',
      outline: 'none',
      resize: 'none',
      padding: '15px 0',
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-regular)',
      fontSize: 'var(--type-body-size)',
      lineHeight: 'var(--type-body-line)',
      letterSpacing: 'var(--type-body-tracking)',
      color: disabled ? 'var(--content-disabled)' : 'var(--content-primary)',
      caretColor: 'var(--action-accent)'
    }
  }));
}
Object.assign(__ds_scope, { TextArea, __ds_default_components_forms_TextArea_fidizy: TextArea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextArea.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 52pt row, 16px side padding, hairline above, 17pt value.
   States from the kit: placeholder (tertiary label), typing (caret), value entered,
   focused (accent outline). */
function TextField({
  value = '',
  placeholder = 'Value',
  state,
  label,
  disabled = false,
  separator = true,
  type = 'text',
  onChange,
  onFocus,
  onBlur,
  trailing,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const isFocused = state === 'focused' || state === 'typing' || focused;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      height: 52,
      padding: '0 16px',
      boxSizing: 'border-box',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      flexGrow: 1,
      alignSelf: 'stretch',
      minWidth: 0
    }
  }, separator && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-separator)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      flexGrow: 1,
      minWidth: 0
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-regular)',
      fontSize: 'var(--type-body-size)',
      lineHeight: 'var(--type-body-line)',
      letterSpacing: 'var(--type-body-tracking)',
      color: 'var(--content-primary)',
      flexShrink: 0
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => {
      setFocused(true);
      onFocus && onFocus();
    },
    onBlur: () => {
      setFocused(false);
      onBlur && onBlur();
    },
    style: {
      flexGrow: 1,
      minWidth: 0,
      border: 'none',
      background: 'transparent',
      outline: 'none',
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-medium)',
      fontSize: 'var(--type-body-size)',
      lineHeight: '20px',
      letterSpacing: 'var(--type-body-tracking)',
      color: disabled ? 'var(--content-disabled)' : 'var(--content-primary)',
      caretColor: 'var(--action-accent)',
      textAlign: label ? 'right' : 'left'
    }
  }), trailing), isFocused && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      marginTop: -2,
      background: 'var(--action-accent)',
      borderRadius: 1
    }
  })));
}
Object.assign(__ds_scope, { TextField, __ds_default_components_forms_TextField_epy789: TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/foundations/Material.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BG = {
  ultrathin: 'var(--material-ultrathin-bg)',
  thin: 'var(--material-thin-bg)',
  regular: 'var(--material-regular-bg)',
  thick: 'var(--material-thick-bg)',
  chrome: 'var(--material-chrome-bg)',
  glass: 'var(--glass-bg)',
  'glass-medium': 'var(--glass-medium-bg)',
  'glass-large': 'var(--glass-large-bg)',
  'glass-tinted': 'var(--glass-tinted-bg)'
};
const BLUR = {
  ultrathin: 'var(--material-ultrathin-blur)',
  thin: 'var(--material-thin-blur)',
  regular: 'var(--material-regular-blur)',
  thick: 'var(--material-thick-blur)',
  chrome: 'var(--material-chrome-blur)',
  glass: 'var(--glass-blur)',
  'glass-medium': 'var(--glass-blur)',
  'glass-large': 'var(--glass-blur)',
  'glass-tinted': 'var(--glass-blur)'
};

/* Every translucent surface in the kit — the four blur materials, chrome, and the
   three Liquid Glass sizes. Composes a background plus a backdrop-filter. */
function Material({
  material = 'regular',
  radius = 0,
  shadow = false,
  children,
  style,
  ...rest
}) {
  const materialStyle = material;
  const isGlass = materialStyle.startsWith('glass');
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: BG[materialStyle] || BG.regular,
      backdropFilter: BLUR[materialStyle] || BLUR.regular,
      WebkitBackdropFilter: BLUR[materialStyle] || BLUR.regular,
      borderRadius: typeof radius === 'number' ? radius : radius,
      boxShadow: shadow || isGlass ? 'var(--shadow-glass)' : 'none',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Material, __ds_default_components_foundations_Material_ydixfm: Material });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundations/Material.jsx", error: String((e && e.message) || e) }); }

// components/foundations/Separator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The 1px hairline the kit puts between list rows, fields and sections. */
function Separator({
  variant = 'non-opaque',
  inset = 0,
  vertical = false,
  style,
  ...rest
}) {
  const color = variant === 'opaque' ? 'var(--border-separator-opaque)' : variant === 'vibrant' ? 'var(--border-separator-vibrant)' : 'var(--border-separator)';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    style: vertical ? {
      width: 1,
      alignSelf: 'stretch',
      background: color,
      marginBlock: inset,
      flexShrink: 0,
      ...style
    } : {
      height: 1,
      background: color,
      marginInlineStart: inset,
      flexShrink: 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Separator, __ds_default_components_foundations_Separator_auwrl0: Separator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundations/Separator.jsx", error: String((e && e.message) || e) }); }

// components/content/ActivityView.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The kit's share sheet: a glass surface with a header (title / subtitle /
   close), a horizontal row of 60pt round contact or app targets, then a
   grouped list of actions. */
function ActivityView({
  title,
  subtitle,
  thumbnail,
  people = [],
  apps = [],
  actions = [],
  onClose,
  width = 340,
  style,
  ...rest
}) {
  const targets = (items, round) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      gap: 16,
      padding: '12px 16px',
      overflowX: 'auto'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    onClick: it.onClick,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      border: 'none',
      background: 'transparent',
      width: 60,
      flexShrink: 0,
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 60,
      height: 60,
      borderRadius: round ? 30 : 14,
      overflow: 'hidden',
      background: it.color || 'var(--fill-tertiary)',
      color: 'var(--content-primary)'
    }
  }, it.icon || it.initials), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-regular)',
      fontSize: 'var(--type-caption1-size)',
      lineHeight: 'var(--type-caption1-line)',
      color: 'var(--content-primary)',
      textAlign: 'center',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      width: '100%'
    }
  }, it.label))));
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    style: {
      display: 'flex',
      flexDirection: 'column',
      width,
      boxSizing: 'border-box',
      borderRadius: 'var(--radius-34)',
      overflow: 'hidden',
      background: 'var(--glass-large-bg)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      boxShadow: 'var(--shadow-glass)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      padding: 16
    }
  }, thumbnail && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 8,
      overflow: 'hidden',
      flexShrink: 0,
      background: 'var(--fill-tertiary)'
    }
  }, thumbnail), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-semibold)',
      fontSize: 'var(--type-headline-size)',
      lineHeight: 'var(--type-headline-line)',
      color: 'var(--content-primary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-regular)',
      fontSize: 'var(--type-footnote-size)',
      lineHeight: 'var(--type-footnote-line)',
      color: 'var(--content-secondary)'
    }
  }, subtitle)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      width: 30,
      height: 30,
      borderRadius: 15,
      border: 'none',
      flexShrink: 0,
      background: 'var(--fill-secondary)',
      color: 'var(--content-secondary)',
      fontSize: 15,
      cursor: 'pointer'
    }
  }, "\u2715")), people.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, targets(people, true), /*#__PURE__*/React.createElement(__ds_scope.Separator, {
    inset: 16
  })), apps.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, targets(apps, false), /*#__PURE__*/React.createElement(__ds_scope.Separator, {
    inset: 16
  })), actions.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, actions.map((a, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    onClick: a.onClick,
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 52,
      padding: '0 16px',
      border: 'none',
      background: 'transparent',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-separator)',
      color: a.destructive ? 'var(--content-destructive)' : 'var(--content-primary)',
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-regular)',
      fontSize: 'var(--type-body-size)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", null, a.label), a.icon))));
}
Object.assign(__ds_scope, { ActivityView, __ds_default_components_content_ActivityView_107ajxo: ActivityView });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ActivityView.jsx", error: String((e && e.message) || e) }); }

// components/foundations/Text.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLES = {
  'large-title': ['large-title', 'bold'],
  title1: ['title1', 'bold'],
  title2: ['title2', 'bold'],
  title3: ['title3', 'semibold'],
  headline: ['headline', 'semibold'],
  body: ['body', 'regular'],
  callout: ['callout', 'regular'],
  subheadline: ['subheadline', 'regular'],
  footnote: ['footnote', 'regular'],
  caption1: ['caption1', 'regular'],
  caption2: ['caption2', 'semibold']
};
const COLORS = {
  primary: 'var(--content-primary)',
  secondary: 'var(--content-secondary)',
  tertiary: 'var(--content-tertiary)',
  quaternary: 'var(--content-quaternary)',
  accent: 'var(--action-accent)',
  destructive: 'var(--content-destructive)',
  'on-accent': 'var(--content-on-accent)',
  inherit: 'inherit'
};

/* Any string in the system, set to one of the eleven iOS text styles. */
function Text({
  variant = 'body',
  weight,
  color = 'primary',
  as: Tag = 'span',
  align,
  children,
  style,
  ...rest
}) {
  const [key, defWeight] = STYLES[variant] || STYLES.body;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      margin: 0,
      fontFamily: 'var(--theme-font-text)',
      fontWeight: `var(--font-weight-${weight || defWeight})`,
      fontSize: `var(--type-${key}-size)`,
      lineHeight: `var(--type-${key}-line)`,
      letterSpacing: `var(--type-${key}-tracking)`,
      color: COLORS[color] || color,
      textAlign: align,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Text, __ds_default_components_foundations_Text_18v67nc: Text });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundations/Text.jsx", error: String((e && e.message) || e) }); }

// components/foundations/sf-symbols.js
try { (() => {
// SF Symbol codepoints as they appear in the source kit.
// The kit sets every icon as a private-use glyph in SF Pro; these are the codepoints it uses.
// SF Pro is Apple-licensed and not bundled, so these render only where the real face is installed.
const SF_SYMBOLS = {
  play: "\u{100284}",
  pause: "\u{100285}",
  minus: "\u{10017D}",
  plus: "\u{10017C}",
  "chevron.down": "\u{100188}",
  "chevron.up.chevron.down": "\u{1001CF}",
  "chevron.right": "\u{100189}",
  "chevron.left": "\u{100187}",
  "speaker.wave.1": "\u{1004D1}",
  "speaker.wave.3": "\u{1004CF}",
  magnifyingglass: "\u{1002B0}",
  mic: "\u{1002F0}",
  house: "\u{1007C9}",
  "square.grid.2x2": "\u{1006E4}",
  "person.crop.circle": "\u{100594}",
  gearshape: "\u{1005D4}",
  ellipsis: "\u{100198}",
  checkmark: "\u{100185}",
  xmark: "\u{100184}",
  trash: "\u{1002DA}",
  square_and_arrow_up: "\u{100240}"
};
Object.assign(__ds_scope, { SF_SYMBOLS, __ds_default_components_foundations_sf_symbols_1a9ts8y: SF_SYMBOLS });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundations/sf-symbols.js", error: String((e && e.message) || e) }); }

// components/foundations/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  small: 15,
  medium: 17,
  large: 18,
  xlarge: 22
};

/* Renders one SF Symbol exactly the way the source kit does: as a private-use glyph
   set in the system font. Pass `name` for a symbol the kit uses, or `glyph` for any
   other codepoint. `fallback` shows where SF Pro is unavailable. */
function Icon({
  name,
  glyph,
  size = 'medium',
  weight = 'regular',
  color,
  fallback,
  style,
  ...rest
}) {
  const px = typeof size === 'number' ? size : SIZES[size] || SIZES.medium;
  const ch = glyph || name && __ds_scope.SF_SYMBOLS[name] || null;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": true,
    "data-icon": name || undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: px,
      height: px,
      flexShrink: 0,
      fontFamily: 'var(--font-system)',
      fontWeight: `var(--font-weight-${weight})`,
      fontSize: px,
      lineHeight: 1,
      color: color || 'currentColor',
      ...style
    }
  }, rest), ch || fallback || '');
}
Object.assign(__ds_scope, { Icon, __ds_default_components_foundations_Icon_18uxopo: Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundations/Icon.jsx", error: String((e && e.message) || e) }); }

// components/bars/SearchField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The kit's bottom search field: 48pt tall Liquid Glass pill, radius 296 in
   the source (i.e. fully rounded), magnifier leading and mic trailing. */
function SearchField({
  value = '',
  placeholder = 'Search',
  state = 'placeholder',
  onChange,
  onFocus,
  style,
  ...rest
}) {
  const typing = state === 'typing' || state === 'focused';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      height: 48,
      padding: '0 10px 0 11px',
      boxSizing: 'border-box',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--glass-bg)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      boxShadow: 'var(--shadow-glass)',
      outline: typing ? '2px solid var(--action-accent)' : 'none',
      outlineOffset: -2,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "magnifyingglass",
    size: "medium",
    color: "var(--content-secondary)",
    fallback: "\u2315"
  }), /*#__PURE__*/React.createElement("input", {
    value: value,
    placeholder: placeholder,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: onFocus,
    style: {
      flexGrow: 1,
      border: 'none',
      background: 'transparent',
      outline: 'none',
      minWidth: 0,
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-regular)',
      fontSize: 'var(--type-body-size)',
      lineHeight: 'var(--type-body-line)',
      letterSpacing: 'var(--type-body-tracking)',
      color: 'var(--content-primary)'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mic",
    size: "medium",
    color: "var(--content-secondary)"
  }));
}
Object.assign(__ds_scope, { SearchField, __ds_default_components_bars_SearchField_uk3xcb: SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/bars/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/controls/PopUpButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accent label plus the up/down chevron, 18pt semibold, 44pt tall row —
   the kit's pop-up button in Enabled and Disabled. */
function PopUpButton({
  label,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const color = disabled ? 'var(--content-disabled)' : 'var(--action-accent)';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    style: {
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 3,
      height: 44,
      padding: '13px 0',
      border: 'none',
      background: 'transparent',
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-semibold)',
      fontSize: 18,
      lineHeight: '18px',
      color,
      whiteSpace: 'nowrap',
      cursor: disabled ? 'default' : 'pointer',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron.up.chevron.down",
    size: 18,
    weight: "semibold",
    color: color,
    fallback: "\u2304"
  }));
}
Object.assign(__ds_scope, { PopUpButton, __ds_default_components_controls_PopUpButton_1w38yq5: PopUpButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/PopUpButton.jsx", error: String((e && e.message) || e) }); }

// components/controls/Stepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Two 46×32 halves, pill-capped on the outside, hairline between —
   quaternary fill, semibold 17pt symbols, exactly as the kit draws it. */
function Stepper({
  value = 0,
  min = -Infinity,
  max = Infinity,
  step = 1,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const half = dir => ({
    width: 46,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    background: 'var(--fill-quaternary)',
    borderRadius: dir < 0 ? 'var(--radius-pill) 0 0 var(--radius-pill)' : '0 var(--radius-pill) var(--radius-pill) 0',
    color: 'var(--content-primary)',
    cursor: 'pointer',
    padding: 0
  });
  const go = d => {
    const next = value + d * step;
    if (next < min || next > max || disabled || !onChange) return;
    onChange(next);
  };
  const off = d => disabled || (d < 0 ? value - step < min : value + step > max);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 1,
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Decrement",
    onClick: () => go(-1),
    disabled: off(-1),
    style: {
      ...half(-1),
      color: off(-1) ? 'var(--content-disabled)' : 'var(--content-primary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: "medium",
    weight: "semibold",
    fallback: "\u2212"
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Increment",
    onClick: () => go(1),
    disabled: off(1),
    style: {
      ...half(1),
      color: off(1) ? 'var(--content-disabled)' : 'var(--content-primary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: "medium",
    weight: "semibold",
    fallback: "+"
  })));
}
Object.assign(__ds_scope, { Stepper, __ds_default_components_controls_Stepper_1wheatc: Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/DatePicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The kit's calendar date picker: month header with prev/next, a 7-column
   grid of 5 states (default, selected, today, dimmed, disabled). */
const DOW = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
function DatePicker({
  month = 'September 2026',
  days = 30,
  startWeekday = 2,
  selected = 12,
  today = 2,
  onSelect,
  style,
  ...rest
}) {
  const cells = [...Array(startWeekday).fill(null), ...Array.from({
    length: days
  }, (_, i) => i + 1)];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: '0 16px 12px',
      boxSizing: 'border-box',
      background: 'var(--surface-base)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 44
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-semibold)',
      fontSize: 'var(--type-headline-size)',
      lineHeight: 'var(--type-headline-line)',
      color: 'var(--content-primary)'
    }
  }, month), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      gap: 24,
      color: 'var(--action-accent)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron.left",
    size: "medium",
    weight: "semibold",
    fallback: "\u2039"
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron.right",
    size: "medium",
    weight: "semibold",
    fallback: "\u203A"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gap: 0
    }
  }, DOW.map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: 'd' + i,
    style: {
      textAlign: 'center',
      paddingBottom: 8,
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-semibold)',
      fontSize: 'var(--type-footnote-size)',
      lineHeight: 'var(--type-footnote-line)',
      color: 'var(--content-tertiary)'
    }
  }, d)), cells.map((n, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    disabled: n == null,
    onClick: () => n != null && onSelect && onSelect(n),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 44,
      border: 'none',
      background: 'transparent',
      cursor: n ? 'pointer' : 'default'
    }
  }, n != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 36,
      height: 36,
      borderRadius: 18,
      background: n === selected ? 'var(--action-accent)' : 'transparent',
      color: n === selected ? 'var(--content-on-accent)' : n === today ? 'var(--action-accent)' : 'var(--content-primary)',
      fontFamily: 'var(--theme-font-text)',
      fontWeight: n === selected || n === today ? 'var(--font-weight-semibold)' : 'var(--font-weight-regular)',
      fontSize: 'var(--type-title3-size)',
      lineHeight: 1
    }
  }, n)))));
}
Object.assign(__ds_scope, { DatePicker, __ds_default_components_forms_DatePicker_1akgv8s: DatePicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/DatePicker.jsx", error: String((e && e.message) || e) }); }

// components/lists/List.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Wraps rows in one of the kit's two list appearances:
   "plain"    — rows on the primary background, edge to edge
   "inset"    — rounded card on the grouped background (radius 34, 16px margins)
   "grouped"  — full-bleed card on the grouped background */
function List({
  appearance = 'inset',
  header,
  footer,
  children,
  style,
  ...rest
}) {
  const card = appearance !== 'plain';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: card ? 'var(--surface-grouped-base)' : 'var(--surface-base)',
      ...style
    }
  }, rest), header, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: appearance === 'inset' ? '0 16px' : 0,
      borderRadius: appearance === 'inset' ? 'var(--theme-surface-radius)' : 0,
      overflow: 'hidden',
      background: card ? 'var(--surface-grouped-card)' : 'transparent'
    }
  }, children), footer);
}
Object.assign(__ds_scope, { List, __ds_default_components_lists_List_yxaer8: List });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/List.jsx", error: String((e && e.message) || e) }); }

// components/lists/ListFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The grouped-table footer: 13/18 (-0.08) secondary caption under a section,
   16px side margins, 8px above / 20px below. */
function ListFooter({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: '8px 16px 20px',
      boxSizing: 'border-box',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-regular)',
      fontSize: 'var(--type-footnote-size)',
      lineHeight: 'var(--type-footnote-line)',
      letterSpacing: 'var(--type-footnote-tracking)',
      color: 'var(--content-secondary)',
      textWrap: 'pretty'
    }
  }, children));
}
Object.assign(__ds_scope, { ListFooter, __ds_default_components_lists_ListFooter_1jhsppf: ListFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/ListFooter.jsx", error: String((e && e.message) || e) }); }

// components/lists/ListRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The kit's list row: 52pt regular / 60pt tall, 16px side padding, hairline
   separator at the top of the content column, 17/22 (-0.43) title.
   Trailing accessory slots come straight from the source's _Trailing variants. */
function ListRow({
  title,
  subtitle,
  value,
  leading,
  image,
  accessory = 'none',
  trailing,
  height = 'regular',
  destructive = false,
  disabled = false,
  separator = true,
  selected = false,
  onClick,
  style,
  ...rest
}) {
  const color = destructive ? 'var(--content-destructive)' : disabled ? 'var(--content-disabled)' : 'var(--content-primary)';
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: disabled ? undefined : onClick,
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      height: height === 'tall' ? 60 : 52,
      padding: '0 16px',
      boxSizing: 'border-box',
      background: selected ? 'var(--fill-quaternary)' : 'transparent',
      cursor: onClick && !disabled ? 'pointer' : 'default',
      ...style
    }
  }, rest), leading && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      paddingRight: 12,
      flexShrink: 0,
      color: 'var(--action-accent)'
    }
  }, leading), image && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 60,
      paddingRight: 8,
      boxSizing: 'border-box',
      alignSelf: 'stretch',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      alignSelf: 'stretch',
      borderRadius: 8,
      overflow: 'hidden',
      background: 'var(--fill-tertiary)'
    }
  }, image)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      flexGrow: 1,
      alignSelf: 'stretch',
      paddingBottom: 1,
      minWidth: 0
    }
  }, separator && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-separator)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      flexGrow: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-regular)',
      fontSize: 'var(--type-body-size)',
      lineHeight: 'var(--type-body-line)',
      letterSpacing: 'var(--type-body-tracking)',
      color,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-regular)',
      fontSize: 'var(--type-footnote-size)',
      lineHeight: 'var(--type-footnote-line)',
      letterSpacing: 'var(--type-footnote-tracking)',
      color: 'var(--content-secondary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      flexShrink: 0,
      paddingLeft: 8
    }
  }, value != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-regular)',
      fontSize: 'var(--type-body-size)',
      lineHeight: 'var(--type-body-line)',
      letterSpacing: 'var(--type-body-tracking)',
      color: 'var(--content-secondary)'
    }
  }, value), trailing, accessory === 'disclosure' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron.right",
    size: "small",
    weight: "semibold",
    color: "var(--content-tertiary)",
    fallback: "\u203A"
  }), accessory === 'checkmark' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "checkmark",
    size: "medium",
    weight: "semibold",
    color: "var(--action-accent)",
    fallback: "\u2713"
  })))));
}
Object.assign(__ds_scope, { ListRow, __ds_default_components_lists_ListRow_17tkuoc: ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/lists/ListSectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 39pt tall, 16px side padding, 9px bottom padding on the title, blurred
   background (the sticky-header treatment), 17pt semibold secondary label. */
function ListSectionHeader({
  title,
  trailing,
  uppercase = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      gap: 10,
      height: 39,
      padding: '0 16px',
      boxSizing: 'border-box',
      backdropFilter: 'blur(100px)',
      WebkitBackdropFilter: 'blur(100px)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexGrow: 1,
      alignItems: 'flex-end',
      paddingBottom: 9,
      alignSelf: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-semibold)',
      fontSize: 'var(--type-headline-size)',
      lineHeight: 'var(--type-headline-line)',
      color: 'var(--content-secondary)',
      textTransform: uppercase ? 'uppercase' : 'none',
      letterSpacing: uppercase ? '0.5px' : undefined
    }
  }, title)), trailing);
}
Object.assign(__ds_scope, { ListSectionHeader, __ds_default_components_lists_ListSectionHeader_1ie01w2: ListSectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/ListSectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/lists/SwipeActions.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The kit's swipe-action rail — revealed behind a row on swipe. Large (60pt)
   and small (52pt) heights, destructive red or neutral fill. */
function SwipeActions({
  actions = [],
  side = 'trailing',
  height = 'small',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'row',
      height: height === 'large' ? 60 : 52,
      justifyContent: side === 'trailing' ? 'flex-end' : 'flex-start',
      ...style
    }
  }, rest), actions.map((a, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    onClick: a.onClick,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2,
      minWidth: 74,
      border: 'none',
      padding: '0 16px',
      background: a.destructive ? 'var(--content-destructive)' : a.background || 'var(--fill-primary)',
      color: 'var(--grays-white)',
      cursor: 'pointer'
    }
  }, a.icon, a.label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-regular)',
      fontSize: 'var(--type-caption1-size)',
      lineHeight: 'var(--type-caption1-line)'
    }
  }, a.label))));
}
Object.assign(__ds_scope, { SwipeActions, __ds_default_components_lists_SwipeActions_8xqckx: SwipeActions });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/SwipeActions.jsx", error: String((e && e.message) || e) }); }

// components/navigation/DeviceFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The canonical device canvases the kit designs against — 402×874 for iPhone
   (the Dynamic Island class), 1024×1366 for iPad Pro 13". The 44pt content
   radius is the kit's own full-screen container radius. */
const DEVICES = {
  iphone: {
    w: 402,
    h: 874,
    radius: 55
  },
  'iphone-max': {
    w: 440,
    h: 956,
    radius: 60
  },
  ipad: {
    w: 1024,
    h: 1366,
    radius: 42
  }
};
function DeviceFrame({
  device = 'iphone',
  scale = 1,
  children,
  style,
  ...rest
}) {
  const d = DEVICES[device] || DEVICES.iphone;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: d.w * scale,
      height: d.h * scale,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: d.w,
      height: d.h,
      transform: scale === 1 ? undefined : `scale(${scale})`,
      transformOrigin: 'top left',
      position: 'relative',
      borderRadius: d.radius,
      overflow: 'hidden',
      background: 'var(--surface-base)',
      boxShadow: 'var(--shadow-glass)'
    }
  }, children));
}
Object.assign(__ds_scope, { DeviceFrame, __ds_default_components_navigation_DeviceFrame_lese50: DeviceFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/DeviceFrame.jsx", error: String((e && e.message) || e) }); }

// components/navigation/HomeIndicator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The 5×140 home indicator inside the kit's 34pt bottom safe area. */
function HomeIndicator({
  mode = 'light',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 34,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 140,
      height: 5,
      borderRadius: 2.5,
      background: mode === 'dark' ? 'var(--grays-white)' : 'var(--labels-primary)'
    }
  }));
}
Object.assign(__ds_scope, { HomeIndicator, __ds_default_components_navigation_HomeIndicator_53dhzz: HomeIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/HomeIndicator.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Sidebar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The iPad sidebar container: 320pt wide on the grouped background, 12px
   padding, with an optional large title above the rows. */
function Sidebar({
  title,
  width = 320,
  footer,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      width,
      height: '100%',
      boxSizing: 'border-box',
      padding: 12,
      background: 'var(--surface-grouped-base)',
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '8px 8px 16px',
      fontFamily: 'var(--theme-font-display)',
      fontWeight: 'var(--font-weight-bold)',
      fontSize: 'var(--type-title1-size)',
      lineHeight: 'var(--type-title1-line)',
      letterSpacing: 'var(--type-title1-tracking)',
      color: 'var(--content-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      flexGrow: 1,
      overflow: 'auto',
      minHeight: 0
    }
  }, children), footer);
}
Object.assign(__ds_scope, { Sidebar, __ds_default_components_navigation_Sidebar_5hywdv: Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The kit's sidebar row: 32pt tall, 8px radius, 28pt symbol slot, 17pt label,
   indent levels of 16px each. Selected rows take the sidebar selection fill
   and its own label colour. */
function SidebarRow({
  label,
  icon,
  image,
  selected = false,
  indent = 0,
  badge,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      height: 32,
      width: '100%',
      boxSizing: 'border-box',
      padding: `0 8px 0 ${8 + indent * 16}px`,
      border: 'none',
      borderRadius: 8,
      background: selected ? 'var(--selected-sidebar-fill)' : 'transparent',
      color: selected ? 'var(--selected-sidebar-content)' : 'var(--content-primary)',
      cursor: 'pointer',
      textAlign: 'left',
      ...style
    }
  }, rest), (icon || image) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 28,
      flexShrink: 0,
      color: selected ? 'inherit' : 'var(--action-accent)'
    }
  }, icon || image), /*#__PURE__*/React.createElement("span", {
    style: {
      flexGrow: 1,
      minWidth: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--theme-font-text)',
      fontWeight: selected ? 'var(--font-weight-semibold)' : 'var(--font-weight-regular)',
      fontSize: 'var(--type-body-size)',
      lineHeight: 'var(--type-body-line)',
      letterSpacing: 'var(--type-body-tracking)'
    }
  }, label), badge);
}
Object.assign(__ds_scope, { SidebarRow, __ds_default_components_navigation_SidebarRow_f07pd7: SidebarRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarRow.jsx", error: String((e && e.message) || e) }); }

// components/overlays/ActionSheet.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Same glass surface and 14px padding as the alert, but the action list runs
   long (the kit draws up to seven) and a Cancel button is separated below. */
function ActionSheet({
  title,
  description,
  actions = [],
  cancelLabel = 'Cancel',
  onCancel,
  width = 300,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      width,
      padding: 14,
      boxSizing: 'border-box',
      borderRadius: 'var(--radius-34)',
      background: 'var(--glass-medium-bg)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      boxShadow: 'var(--shadow-glass)',
      ...style
    }
  }, rest), (title || description) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      padding: '8px 8px 24px',
      boxSizing: 'border-box',
      alignItems: 'center'
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-semibold)',
      fontSize: 'var(--type-headline-size)',
      lineHeight: 'var(--type-headline-line)',
      letterSpacing: 'var(--type-headline-tracking)',
      color: 'var(--content-primary)',
      textAlign: 'center',
      width: '100%'
    }
  }, title), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-regular)',
      fontSize: 'var(--type-body-size)',
      lineHeight: 'var(--type-body-line)',
      letterSpacing: 'var(--type-body-tracking)',
      color: 'var(--content-primary)',
      textAlign: 'center',
      width: '100%',
      textWrap: 'pretty'
    }
  }, description)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, actions.map((a, i) => /*#__PURE__*/React.createElement(__ds_scope.Button, {
    key: i,
    size: "glass",
    fullWidth: true,
    variant: "glass",
    destructive: a.destructive,
    onClick: a.onClick
  }, a.label))), cancelLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "glass",
    fullWidth: true,
    variant: "glass",
    onClick: onCancel,
    style: {
      marginTop: 10,
      fontWeight: 'var(--font-weight-semibold)'
    }
  }, cancelLabel));
}
Object.assign(__ds_scope, { ActionSheet, __ds_default_components_overlays_ActionSheet_c9rqt: ActionSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/ActionSheet.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The kit's alert: a glass-medium surface at 14px padding, a centred 108pt
   title/description block (17pt semibold + 17pt regular), then 48pt action
   buttons — stacked with 10px gaps, or side by side for two actions. */
function Alert({
  title,
  description,
  actions = [],
  layout = 'stacked',
  fields,
  width = 300,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alertdialog",
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      width,
      padding: 14,
      boxSizing: 'border-box',
      borderRadius: 'var(--radius-34)',
      background: 'var(--glass-medium-bg)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      boxShadow: 'var(--shadow-glass)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      padding: '8px 8px 24px',
      boxSizing: 'border-box',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-semibold)',
      fontSize: 'var(--type-headline-size)',
      lineHeight: 'var(--type-headline-line)',
      letterSpacing: 'var(--type-headline-tracking)',
      color: 'var(--content-primary)',
      textAlign: 'center',
      width: '100%'
    }
  }, title), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-regular)',
      fontSize: 'var(--type-body-size)',
      lineHeight: 'var(--type-body-line)',
      letterSpacing: 'var(--type-body-tracking)',
      color: 'var(--content-primary)',
      textAlign: 'center',
      width: '100%',
      textWrap: 'pretty'
    }
  }, description)), fields && /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-26)',
      overflow: 'hidden',
      background: 'var(--field-bg)',
      marginBottom: 9
    }
  }, fields), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: layout === 'side-by-side' ? 'row' : 'column',
      gap: 10
    }
  }, actions.map((a, i) => /*#__PURE__*/React.createElement(__ds_scope.Button, {
    key: i,
    size: "glass",
    fullWidth: layout !== 'side-by-side',
    variant: a.type === 'primary' ? 'prominent' : 'glass',
    destructive: a.type === 'destructive',
    onClick: a.onClick,
    style: layout === 'side-by-side' ? {
      flexGrow: 1
    } : undefined
  }, a.label))));
}
Object.assign(__ds_scope, { Alert, __ds_default_components_overlays_Alert_1sjnl2u: Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Alert.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Menu.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The kit's menu: 190pt wide, 40pt rows, 36px leading inset when the menu has
   a selection, 8px trailing, 17pt label with optional 13pt subtitle and a
   28pt symbol slot. Vibrant label colours; destructive rows in red. */
function Menu({
  items = [],
  width = 250,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "menu",
    style: {
      display: 'flex',
      flexDirection: 'column',
      width,
      padding: 0,
      boxSizing: 'border-box',
      borderRadius: 'var(--radius-20)',
      overflow: 'hidden',
      background: 'var(--glass-medium-bg)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      boxShadow: 'var(--shadow-glass)',
      ...style
    }
  }, rest), items.map((item, i) => item.separator ? /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 1,
      background: 'var(--border-separator-vibrant)'
    }
  }) : /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    role: "menuitem",
    disabled: item.disabled,
    onClick: item.onClick,
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      minHeight: 40,
      padding: item.selected != null ? '0 8px 0 8px' : '0 8px 0 12px',
      border: 'none',
      background: 'transparent',
      boxSizing: 'border-box',
      width: '100%',
      color: item.destructive ? 'var(--content-destructive)' : item.disabled ? 'var(--content-disabled)' : 'var(--content-vibrant-primary)',
      cursor: item.disabled ? 'default' : 'pointer',
      textAlign: 'left'
    }
  }, item.selected != null && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      flexShrink: 0,
      opacity: item.selected ? 1 : 0,
      color: 'var(--content-vibrant-primary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "checkmark",
    size: "small",
    weight: "semibold",
    fallback: "\u2713"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      padding: '10px 0',
      flexGrow: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-regular)',
      fontSize: 'var(--type-body-size)',
      lineHeight: '20px',
      letterSpacing: 'var(--type-body-tracking)'
    }
  }, item.label), item.subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--theme-font-text)',
      fontWeight: 'var(--font-weight-regular)',
      fontSize: 'var(--type-footnote-size)',
      lineHeight: 'var(--type-footnote-line)',
      color: 'var(--content-vibrant-secondary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, item.subtitle)), item.icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      textAlign: 'center',
      flexShrink: 0
    }
  }, item.icon), item.submenu && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron.right",
    size: "small",
    weight: "bold",
    fallback: "\u203A"
  }))));
}
Object.assign(__ds_scope, { Menu, __ds_default_components_overlays_Menu_j6klo3: Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Menu.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Popover.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A glass surface with an arrow on one edge — the kit's popover.
   Radius 34, glass-medium fill, 8px content padding. */
function Popover({
  arrow = 'bottom',
  width = 250,
  children,
  style,
  ...rest
}) {
  const arrowStyle = {
    position: 'absolute',
    width: 16,
    height: 8,
    background: 'inherit',
    clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)'
  };
  const pos = {
    bottom: {
      ...arrowStyle,
      bottom: -8,
      left: 'calc(50% - 8px)',
      transform: 'rotate(180deg)'
    },
    top: {
      ...arrowStyle,
      top: -8,
      left: 'calc(50% - 8px)'
    },
    left: {
      ...arrowStyle,
      left: -12,
      top: 'calc(50% - 4px)',
      transform: 'rotate(-90deg)'
    },
    right: {
      ...arrowStyle,
      right: -12,
      top: 'calc(50% - 4px)',
      transform: 'rotate(90deg)'
    }
  }[arrow];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    style: {
      position: 'relative',
      width,
      padding: 8,
      boxSizing: 'border-box',
      borderRadius: 'var(--radius-34)',
      background: 'var(--glass-medium-bg)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      boxShadow: 'var(--shadow-glass)',
      ...style
    }
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    style: pos
  }));
}
Object.assign(__ds_scope, { Popover, __ds_default_components_overlays_Popover_8dpj7t: Popover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Popover.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Scrim.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The dimming layer behind a modal. The kit ships three densities:
   default (20% black), alert (23% #29293A) and activity-view (20/29%). */
function Scrim({
  variant = 'default',
  onClick,
  children,
  style,
  ...rest
}) {
  const bg = variant === 'alert' ? 'var(--overlay-alert-scrim)' : variant === 'activity' ? 'var(--overlay-activity-scrim)' : 'var(--overlay-scrim)';
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      position: 'absolute',
      inset: 0,
      background: bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Scrim, __ds_default_components_overlays_Scrim_1sw6hbw: Scrim });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Scrim.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Sheet.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The kit's bottom sheet: 34pt top radius / 58pt bottom radius on iPhone
   (38 all round on iPad), a 5×36 grabber, and content on the elevated surface. */
function Sheet({
  grabber = true,
  platform = 'iphone',
  detent = 'medium',
  children,
  style,
  ...rest
}) {
  const radius = platform === 'ipad' ? 'var(--sheet-radius-ipad)' : `var(--sheet-radius-iphone-top) var(--sheet-radius-iphone-top) var(--sheet-radius-iphone-bottom) var(--sheet-radius-iphone-bottom)`;
  const height = detent === 'large' ? '92%' : detent === 'small' ? '30%' : '58%';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    style: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height,
      borderRadius: radius,
      overflow: 'hidden',
      background: 'var(--surface-elevated)',
      boxShadow: 'var(--shadow-glass)',
      ...style
    }
  }, rest), grabber && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: 5,
      paddingBottom: 5,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 5,
      borderRadius: 2.5,
      background: 'var(--content-quaternary)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flexGrow: 1,
      overflow: 'auto',
      minHeight: 0
    }
  }, children));
}
Object.assign(__ds_scope, { Sheet, __ds_default_components_overlays_Sheet_1swa0yf: Sheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Sheet.jsx", error: String((e && e.message) || e) }); }

__ds_ns.NavigationBar = __ds_scope.NavigationBar;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.StatusBar = __ds_scope.StatusBar;

__ds_ns.TabBar = __ds_scope.TabBar;

__ds_ns.Toolbar = __ds_scope.Toolbar;

__ds_ns.ActivityView = __ds_scope.ActivityView;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Notification = __ds_scope.Notification;

__ds_ns.ActivityIndicator = __ds_scope.ActivityIndicator;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.PageControl = __ds_scope.PageControl;

__ds_ns.PopUpButton = __ds_scope.PopUpButton;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.DatePicker = __ds_scope.DatePicker;

__ds_ns.PickerWheel = __ds_scope.PickerWheel;

__ds_ns.TextArea = __ds_scope.TextArea;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Material = __ds_scope.Material;

__ds_ns.Separator = __ds_scope.Separator;

__ds_ns.Text = __ds_scope.Text;

__ds_ns.SF_SYMBOLS = __ds_scope.SF_SYMBOLS;

__ds_ns.List = __ds_scope.List;

__ds_ns.ListFooter = __ds_scope.ListFooter;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.ListSectionHeader = __ds_scope.ListSectionHeader;

__ds_ns.SwipeActions = __ds_scope.SwipeActions;

__ds_ns.DeviceFrame = __ds_scope.DeviceFrame;

__ds_ns.HomeIndicator = __ds_scope.HomeIndicator;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.SidebarRow = __ds_scope.SidebarRow;

__ds_ns.ActionSheet = __ds_scope.ActionSheet;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.Popover = __ds_scope.Popover;

__ds_ns.Scrim = __ds_scope.Scrim;

__ds_ns.Sheet = __ds_scope.Sheet;

})();
