(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"20":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),n=_interopRequireDefault(r(1)),i=_interopRequireDefault(r(2)),o=r(62),c=_interopRequireDefault(r(64));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}r(233),r(235);var l=function(e){function ArticlePage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ArticlePage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ArticlePage.__proto__||Object.getPrototypeOf(ArticlePage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Article 文章"},e.state={},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ArticlePage,n.default.Component),a(ArticlePage,[{"key":"render","value":function render(){return i.default.createElement(o.View,{"className":"page"},i.default.createElement(c.default,{"title":"Article 文章"}),i.default.createElement(o.View,{"className":"doc-body"},i.default.createElement(o.View,{"className":"panel"},i.default.createElement(o.View,{"className":"panel__title"},"示例"),i.default.createElement(o.View,{"className":"panel__content no-padding"},i.default.createElement(o.View,{"className":"at-article"},i.default.createElement(o.View,{"className":"at-article__h1"},"这是一级标题这是一级标题"),i.default.createElement(o.View,{"className":"at-article__info"},"2017-05-07   这是作者"),i.default.createElement(o.View,{"className":"at-article__content"},i.default.createElement(o.View,{"className":"at-article__section"},i.default.createElement(o.View,{"className":"at-article__h2"},"这是二级标题"),i.default.createElement(o.View,{"className":"at-article__h3"},"这是三级标题"),i.default.createElement(o.View,{"className":"at-article__p"},"这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ"),i.default.createElement(o.View,{"className":"at-article__p"},"这是文本段落。这是文本段落。"),i.default.createElement(o.Image,{"className":"at-article__img","src":"http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg","mode":"widthFix"})),i.default.createElement(o.View,{"className":"at-article__section"},i.default.createElement(o.View,{"className":"at-article__h2"},"这是二级标题"),i.default.createElement(o.View,{"className":"at-article__h3"},"这是三级标题"),i.default.createElement(o.View,{"className":"at-article__p"},"这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ"),i.default.createElement(o.Image,{"className":"at-article__img","src":"https://img30.360buyimg.com/sku/jfs/t19660/324/841553494/117886/ad2742c1/5aab8d20Ne56ae3bf.jpg","mode":"widthFix"}))))))))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),ArticlePage}();t.default=l},"233":function(e,t,r){},"235":function(e,t,r){},"62":function(e,t,r){e.exports=r(0)(18)},"63":function(e,t,r){e.exports=r(71)()},"64":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),n=r(1),i=(_interopRequireDefault(n),_interopRequireDefault(r(2))),o=_interopRequireDefault(r(63)),c=r(62);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}r(65);var l=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,n.Component),a(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return i.default.createElement(c.View,{"className":"doc-header"},i.default.createElement(c.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=l,l.defaultProps={"title":"标题"},l.propTypes={"title":o.default.string}},"65":function(e,t,r){},"71":function(e,t,r){"use strict";var a=r(72);function emptyFunction(){}e.exports=function(){function shim(e,t,r,n,i,o){if(o!==a){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"72":function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);