"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[97],{7097:function(e,s,r){r.r(s),r.d(s,{default:function(){return $}});var i=r(7689),a=r(1087),t="AuthPage_title__Lon1J",n="AuthPage_text__39734",o="AuthPage_textWrapper__qT-PO",c="AuthPage_textHint__nlAFj",l="AuthPage_link__HQ0pz",d=r(2041),u=r(2791),m=r(9434),h=r(5705),_="AuthForm_form__Fzy2u",p="AuthForm_formWrapper__i4Npv",f="AuthForm_buttonEye__sThsg",g="AuthForm_svgEye__9zGoC",x=r(9894),v=r(182),w="FormField_fieldWrapper__KIXAg",F="FormField_error__wnDNA",N="FormField_success__y+nuE",j="FormField_field__SGWnB",b="FormField_messageWrapper__-J9sU",y="FormField_errorMessage__A9nB5",q="FormField_svgSuccess__eH+rK",Z="FormField_svgError__7bZSD",A="FormField_successMessage__n1ZSt",S=r(3329),k=function(e){var s=e.fieldName,r=e.fieldType,i=e.placeholder,a=e.formik,t=e.successMessage;e.isPassword;return(0,S.jsxs)("div",{className:"".concat(w," ").concat(a.touched[s]&&a.errors[s]?"".concat(F):a.touched[s]&&!a.errors[s]?"".concat(N):""),children:[(0,S.jsx)(h.gN,{className:j,type:r,name:s,placeholder:i}),(0,S.jsxs)("div",{className:b,children:[(0,S.jsx)(v.Z,{"data-status":"error",className:Z,iconId:"icon-red"}),(0,S.jsx)(h.Bc,{className:y,name:s,component:"div"})]}),a.touched[s]&&!a.errors[s]&&(0,S.jsxs)("div",{className:b,children:[(0,S.jsx)(v.Z,{"data-status":"success",className:q,iconId:"icon-green"}),(0,S.jsx)("div",{className:A,children:t})]})]})},R=function(e,s,r,i,a,t){return(0,S.jsx)(k,{fieldName:e,fieldType:s,placeholder:r,formik:i,successMessage:a,isPassword:t})},M=r(2598),P=r(8007),z=/^\w+(-?\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,C=/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$/,E=P.Ry().shape({email:P.Z_().matches(z,"Invalid email format").required("Required field"),password:P.Z_().matches(C,"Must contain at least 1 capital and 1 digit").required("Required field")}),I=P.Ry().shape({name:P.Z_().required("Required field"),email:P.Z_().matches(z,"Invalid email format").required("Required field"),password:P.Z_().matches(C,"Must contain 8 characters, at least 1 capital and 1 number.").required("Required field")}),T=(r(9880),r(7834)),W=r(9439),D=function(){var e=(0,u.useState)(!1),s=(0,W.Z)(e,2),r=s[0],i=s[1];return{showPassword:r,handleClick:(0,u.useCallback)((function(){i((function(e){return!e}))}),[])}},H={name:"",email:"",password:""},B={email:"",password:""},U=function(e){var s=e.isSignUp,r=e.title,a=(0,m.I0)(),t=(0,i.s0)(),n=D(),o=n.showPassword,c=n.handleClick,l=(0,T.Z)(),w=l.isVerify,F=l.user,N=(0,u.useRef)();(0,u.useEffect)((function(){N.current&&N.current.resetForm(),w&&!F.profileSettings&&t(d._2),w&&F.profileSettings&&t(d.zw)}),[s,w,t,F]);var j=s?H:B,b=s?I:E,y=s?function(e,s){var r=e.name,i=e.email,t=e.password,n=s.resetForm;a((0,M.$_)({name:r,email:i,password:t})),n()}:function(e,s){var r=e.email,i=e.password,t=s.resetForm;a((0,M.pH)({email:r,password:i})),t()};return(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(h.J9,{initialValues:j,validationSchema:b,onSubmit:y,innerRef:N,children:function(e){return(0,S.jsxs)(h.l0,{className:_,children:[(0,S.jsxs)("div",{className:p,children:[s&&R("name","text","Name",e,"Success name"),R("email","email","Email",e,"Success email"),(0,S.jsxs)("div",{style:{position:"relative"},children:[R("password",o?"text":"password","Password",e,"Success password",!0),(0,S.jsx)("button",{className:f,type:"button",onClick:c,children:(0,S.jsx)(v.Z,{className:g,iconId:o?"icon-eye":"icon-eye-off"})})]})]}),(0,S.jsx)(x.Z,{text:r})]})}})})},J=r(427),$=function(){var e=(0,i.TH)().pathname===d.zN,s=e?"Sign Up":"Sign In",r=e?"Sign In":"Sign Up",u=e?d.vf:d.zN,m=e?" Thank you for your interest in our platform. To complete the registration process, please provide us with the following information.":"Welcome! Please enter your credentials to login to the platform:";return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(J.Z,{}),(0,S.jsx)("h1",{className:t,children:s}),(0,S.jsx)("p",{className:n,children:m}),(0,S.jsx)(U,{isSignUp:e,title:s}),(0,S.jsxs)("div",{className:o,children:[(0,S.jsx)("p",{className:c,children:"Don\u2019t have an account?"}),(0,S.jsx)(a.rU,{className:l,to:u,children:r})]})]})}},9880:function(e,s,r){var i=r(8007),a=i.Ry({name:i.Z_().required("Name is required"),height:i.Rx("Number").typeError("Must be a number").positive("Must be positive.").min(150,"Height must be at least 150cm").required("Height is required"),currentWeight:i.Rx().typeError("Must be a number").positive("Must be positive.").min(35,"Current weight must be at least 35kg").required("Current weight is required"),desiredWeight:i.Rx().typeError("Must be a number").positive("Must be positive.").min(35,"Desired weight must be at least 35kg").required("Desired weight is required"),birthday:i.hT().max(new Date,"Birthday must be in the past").min(new Date("1900-01-01"),"Birthday must be after 1900-01-01").required("Birthday is required")});s.Z=a}}]);
//# sourceMappingURL=97.ce1fbc29.chunk.js.map