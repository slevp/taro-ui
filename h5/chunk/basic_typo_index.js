(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"15":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),r=_interopRequireDefault(a(1)),o=_interopRequireDefault(a(2)),l=a(62),i=_interopRequireDefault(a(64));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}a(223);var c=function(e){function BasicTypo(){var e,t,a;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,BasicTypo);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=a=_possibleConstructorReturn(this,(e=BasicTypo.__proto__||Object.getPrototypeOf(BasicTypo)).call.apply(e,[this].concat(r))),a.config={"navigationBarTitleText":"Taro UI"},_possibleConstructorReturn(a,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(BasicTypo,r.default.Component),n(BasicTypo,[{"key":"render","value":function render(){return o.default.createElement(l.View,{"className":"page"},o.default.createElement(i.default,{"title":"Typography 字体"}),o.default.createElement(l.View,{"className":"doc-body"},o.default.createElement(l.View,{"className":"panel"},o.default.createElement(l.View,{"className":"panel__title"},"示例"),o.default.createElement(l.View,{"className":"panel__content"},o.default.createElement(l.View,{"className":"table-typo"},o.default.createElement(l.View,{"className":"table-typo__head"},o.default.createElement(l.View,{"className":"thead"},"类型"),o.default.createElement(l.View,{"className":"thead"},"行高"),o.default.createElement(l.View,{"className":"thead"},"用途")),o.default.createElement(l.View,{"className":"table-typo__body"},o.default.createElement(l.View,{"className":"table-typo__line"},o.default.createElement(l.View,{"className":"col h0"},"H0，40PX"),o.default.createElement(l.View,{"className":"col"},"60PX"),o.default.createElement(l.View,{"className":"col"},"仅用于数字")),o.default.createElement(l.View,{"className":"table-typo__line"},o.default.createElement(l.View,{"className":"col h1"},"H1，36PX"),o.default.createElement(l.View,{"className":"col"},"54PX"),o.default.createElement(l.View,{"className":"col"},"大模块标题")),o.default.createElement(l.View,{"className":"table-typo__line"},o.default.createElement(l.View,{"className":"col h2"},"H2，32PX"),o.default.createElement(l.View,{"className":"col"},"48PX"),o.default.createElement(l.View,{"className":"col"},"常规标题")),o.default.createElement(l.View,{"className":"table-typo__line"},o.default.createElement(l.View,{"className":"col h3"},"H3，28PX"),o.default.createElement(l.View,{"className":"col"},"42PX"),o.default.createElement(l.View,{"className":"col"},"正文")),o.default.createElement(l.View,{"className":"table-typo__line"},o.default.createElement(l.View,{"className":"col h4"},"H4，24PX"),o.default.createElement(l.View,{"className":"col"},"36PX"),o.default.createElement(l.View,{"className":"col"},"辅助信息、注释")),o.default.createElement(l.View,{"className":"table-typo__line"},o.default.createElement(l.View,{"className":"col h5"},"H5，20PX"),o.default.createElement(l.View,{"className":"col"},"30PX"),o.default.createElement(l.View,{"className":"col"},"标签"))))))))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),BasicTypo}();t.default=c},"223":function(e,t,a){},"62":function(e,t,a){e.exports=a(0)(18)},"63":function(e,t,a){e.exports=a(71)()},"64":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),r=a(1),o=(_interopRequireDefault(r),_interopRequireDefault(a(2))),l=_interopRequireDefault(a(63)),i=a(62);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(65);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,r.Component),n(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return o.default.createElement(i.View,{"className":"doc-header"},o.default.createElement(i.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":l.default.string}},"65":function(e,t,a){},"71":function(e,t,a){"use strict";var n=a(72);function emptyFunction(){}e.exports=function(){function shim(e,t,a,r,o,l){if(l!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"72":function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);