"use strict";(self.webpackChunkFormik=self.webpackChunkFormik||[]).push([[139],{8205:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(2791),i=n(6382),r="FormTextField_block__MEJDx",l="FormTextField_label__lF6en",s="FormTextField_input__xOyRo",o=n(3329),u=function(e){var t=e.label,n=e.name,u=e.value,c=e.onChange,m=e.required,d=e.type,h=e.placeholder,b=e.title,f=e.pattern,p=(0,a.useMemo)((function(){return(0,i.x0)()}),[]);return(0,o.jsxs)("div",{className:r,children:[(0,o.jsx)("input",{className:s,id:p,name:n,value:u,onChange:c,required:m,placeholder:h,type:d,title:b,pattern:f}),t&&(0,o.jsx)("label",{className:l,htmlFor:p,children:t})]})},c=u;u.defaultProps={type:"text",required:!1}},9473:function(e,t,n){n.d(t,{Z:function(){return l}});var a="Section_title__SLHvV",i="Section_section__Z2PLw",r=n(3329);var l=function(e){var t=e.title,n=e.children;return(0,r.jsxs)("section",{className:i,children:[(0,r.jsx)("h2",{className:a,children:t}),n]})}},1139:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var a="RegisterPage_container__l-2BF",i=n(9434),r=n(1413),l="RegisterForm_form__Tv43W",s="RegisterForm_btn__bgTuW",o=n(7726),u=n(8205),c=n(9473),m={label:"Name",name:"name",type:"text",required:!0},d={label:"Email",name:"email",type:"email",required:!0},h={label:"Password",name:"password",type:"password",required:!0,placeholder:"min 7 symbols"},b=n(3329),f={name:"",email:"",password:""},p=function(e){var t=e.onSubmitClick,n=(0,o.Z)({onSubmitClick:t,initialState:f}),a=n.state,i=n.handleChange,p=n.handleSubmit,x=a.name,_=a.email,v=a.password,Z=x&&_&&v.length>6;return(0,b.jsx)(c.Z,{title:"Registration form",children:(0,b.jsxs)("form",{className:l,onSubmit:p,children:[(0,b.jsx)(u.Z,(0,r.Z)({value:x,onChange:i},m)),(0,b.jsx)(u.Z,(0,r.Z)({value:_,onChange:i},d)),(0,b.jsx)(u.Z,(0,r.Z)({value:v,onChange:i},h)),(0,b.jsx)("button",{type:"submit",disabled:!Z,className:s,children:"Submit"})]})})},x=n(8724),_=function(){var e=(0,i.I0)();return(0,b.jsx)("main",{children:(0,b.jsxs)("div",{className:a,children:[(0,b.jsx)("h3",{children:"You are on the right way. To access to the phonebook you need to register"}),(0,b.jsx)(p,{onSubmitClick:function(t){e((0,x.z2)(t))}})]})})}},7726:function(e,t,n){var a=n(4942),i=n(1413),r=n(885),l=n(2791);t.Z=function(e){var t=e.onSubmitClick,n=e.initialState,s=e.clearFields,o=void 0===s||s,u=(0,l.useState)((0,i.Z)({},n)),c=(0,r.Z)(u,2),m=c[0],d=c[1];return{state:m,setState:d,handleChange:function(e){var t=e.target,n=t.name,r=t.value,l=t.type,s=t.checked,o="checkbox"===l?s:r;d((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,a.Z)({},n,o))}))},handleSubmit:function(e){e.preventDefault(),t((0,i.Z)({},m)),o&&d((0,i.Z)({},n))}}}}}]);
//# sourceMappingURL=139.b9636511.chunk.js.map