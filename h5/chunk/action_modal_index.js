(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"254":function(e,t,n){},"29":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var l=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=_interopRequireDefault(n(1)),o=_interopRequireDefault(n(2)),i=n(62),r=n(69),c=_interopRequireDefault(n(64));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}n(254);var s=function(e){function ModalPage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ModalPage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ModalPage.__proto__||Object.getPrototypeOf(ModalPage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.handleClick=function(t){e.setState(_defineProperty({},"isOpened"+t,!0))},e.closeModal=function(t,n){console.log(n),e.setState(_defineProperty({},"isOpened"+t,!1)),a.default.showToast({"icon":"none","title":n})},e.closeModalConfirm=function(t,n){e.setState(_defineProperty({},"isOpened"+t,!1)),a.default.showToast({"icon":"none","title":n})},e.state={"isOpened1":!1,"isOpened2":!1,"isOpened3":!1,"isOpened4":!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ModalPage,a.default.Component),l(ModalPage,[{"key":"render","value":function render(){var e=this.state,t=e.isOpened1,n=e.isOpened2,l=e.isOpened3,a=e.isOpened4;return o.default.createElement(i.View,{"className":"page"},o.default.createElement(c.default,{"title":"Modal 模态框"}),o.default.createElement(i.View,{"className":"doc-body"},o.default.createElement(i.View,{"className":"panel"},o.default.createElement(i.View,{"className":"panel__title"},"基础模态框"),o.default.createElement(i.View,{"className":"panel__content"},o.default.createElement(i.View,{"className":"example-item"},o.default.createElement(r.AtButton,{"onClick":this.handleClick.bind(this,1)},"打开基础模态框")))),o.default.createElement(i.View,{"className":"panel"},o.default.createElement(i.View,{"className":"panel__title"},"单个按钮"),o.default.createElement(i.View,{"className":"panel__content"},o.default.createElement(i.View,{"className":"example-item"},o.default.createElement(r.AtButton,{"onClick":this.handleClick.bind(this,2)},"打开单个按钮模态框")))),o.default.createElement(i.View,{"className":"panel"},o.default.createElement(i.View,{"className":"panel__title"},"无标题"),o.default.createElement(i.View,{"className":"panel__content"},o.default.createElement(i.View,{"className":"example-item"},o.default.createElement(r.AtButton,{"onClick":this.handleClick.bind(this,3)},"打开无标题模态框")))),o.default.createElement(i.View,{"className":"panel"},o.default.createElement(i.View,{"className":"panel__title"},"简化使用"),o.default.createElement(i.View,{"className":"panel__content"},o.default.createElement(i.View,{"className":"example-item"},o.default.createElement(r.AtButton,{"onClick":this.handleClick.bind(this,4)},"打开简化使用模态框"))))),o.default.createElement(r.AtModal,{"isOpened":t,"onClose":this.closeModal.bind(this,1,"Modal被关闭了")},o.default.createElement(r.AtModalHeader,null,"标题"),o.default.createElement(r.AtModalContent,null,o.default.createElement(i.View,{"className":"modal-content"},"这里是正文内容，欢迎加入京东凹凸实验室 这里是正文内容，欢迎加入京东凹凸实验室 这里是正文内容，欢迎加入京东凹凸实验室")),o.default.createElement(r.AtModalAction,null,o.default.createElement(i.Button,{"onClick":this.closeModal.bind(this,1,"点击了取消")},"取消"),o.default.createElement(i.Button,{"style":"color:#6190E8","onClick":this.closeModal.bind(this,1,"点击了确定")},"确定"))),o.default.createElement(r.AtModal,{"isOpened":n,"onClose":this.closeModal.bind(this,2,"Modal被关闭了")},o.default.createElement(r.AtModalHeader,null,"标题"),o.default.createElement(r.AtModalContent,null,o.default.createElement(i.View,{"className":"modal-content"},"这里是正文内容，欢迎加入京东凹凸实验室 这里是正文内容，欢迎加入京东凹凸实验室 这里是正文内容，欢迎加入京东凹凸实验室")),o.default.createElement(r.AtModalAction,null,o.default.createElement(i.Button,{"onClick":this.closeModal.bind(this,2,"点击了确定")},"确定"))),o.default.createElement(r.AtModal,{"isOpened":l,"onClose":this.closeModal.bind(this,3,"Modal被关闭了")},o.default.createElement(r.AtModalContent,null,o.default.createElement(i.View,{"className":"modal-content"},"这里是正文内容，欢迎加入京东凹凸实验室 这里是正文内容，欢迎加入京东凹凸实验室 这里是正文内容，欢迎加入京东凹凸实验室")),o.default.createElement(r.AtModalAction,null,o.default.createElement(i.Button,{"onClick":this.closeModal.bind(this,3,"点击了取消")},"取消"),o.default.createElement(i.Button,{"style":"color:#6190E8","onClick":this.closeModal.bind(this,3,"点击了确定")},"确定"))),o.default.createElement(r.AtModal,{"isOpened":a,"title":"标题","cancelText":"取消","confirmText":"确认","content":"欢迎加入京东凹凸实验室\\\\n\\\\r欢迎加入京东凹凸实验室","onClose":this.closeModal.bind(this,4,"Modal被关闭了"),"onCancel":this.closeModal.bind(this,4,"点击了取消"),"onConfirm":this.closeModalConfirm.bind(this,4,"点击了确认")}))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),ModalPage}();t.default=s},"64":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var l=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=n(1),o=(_interopRequireDefault(a),_interopRequireDefault(n(2))),i=_interopRequireDefault(n(63)),r=n(62);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(65);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,a.Component),l(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return o.default.createElement(r.View,{"className":"doc-header"},o.default.createElement(r.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":i.default.string}},"65":function(e,t,n){}}]);