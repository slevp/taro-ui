(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"306":function(e,t,n){},"53":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=_interopRequireDefault(n(1)),o=_interopRequireDefault(n(2)),i=n(62),l=n(69),u=_interopRequireDefault(n(64));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(306);var c=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"switchValue":!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,a.default.Component),r(Index,[{"key":"handleChange","value":function handleChange(e){console.log(this.state.switchValue),this.setState({"switchValue":e})}},{"key":"render","value":function render(){return o.default.createElement(i.View,{"className":"page"},o.default.createElement(u.default,{"title":"Switch 开关"}),o.default.createElement(i.View,{"className":"doc-body"},o.default.createElement(i.View,{"className":"panel"},o.default.createElement(i.View,{"className":"panel__title"},"基础用法"),o.default.createElement(i.View,{"className":"panel__content no-padding"},o.default.createElement(i.View,{"className":"example-item"},o.default.createElement(l.AtForm,null,o.default.createElement(l.AtSwitch,{"title":"开启中","checked":!0,"onChange":this.handleChange.bind(this)}),o.default.createElement(l.AtSwitch,{"title":"已关闭","border":!1}))))),o.default.createElement(i.View,{"className":"panel"},o.default.createElement(i.View,{"className":"panel__title"},"禁用状态"),o.default.createElement(i.View,{"className":"panel__content no-padding"},o.default.createElement(i.View,{"className":"example-item"},o.default.createElement(l.AtForm,null,o.default.createElement(l.AtSwitch,{"title":"不可点击","checked":!0,"disabled":!0}),o.default.createElement(l.AtSwitch,{"title":"不可点击","border":!1,"disabled":!0})))))))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),Index}();t.default=c},"64":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=n(1),o=(_interopRequireDefault(a),_interopRequireDefault(n(2))),i=_interopRequireDefault(n(63)),l=n(62);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(65);var u=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,a.Component),r(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return o.default.createElement(l.View,{"className":"doc-header"},o.default.createElement(l.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=u,u.defaultProps={"title":"标题"},u.propTypes={"title":i.default.string}},"65":function(e,t,n){}}]);