"use strict";(self.webpackChunktask_pro=self.webpackChunktask_pro||[]).push([[415],{1415:function(n,e,r){r.r(e),r.d(e,{default:function(){return T}});var i,o,t,a,s,l,d,p,c,h,u,x=r(4165),m=r(5861),g=r(9439),f=r(2791),w=r(3439),v=r(6727),Z=v.Ry().shape({email:v.Z_().email("Invalid email").required("Email is required"),password:v.Z_().min(6,"Password must be at least 6 characters").required("Password is required")}),b=r(5705),y=r(5048),k=r(168),j=r(1087),P=r(9256),C=P.ZP.div(i||(i=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  width: 100%;\n  background: linear-gradient(\n    180deg,\n    var(--color-white) 0%,\n    var(--color-white) 25%,\n    var(--color-green) 92.19%\n  );\n  background-repeat: no-repeat;\n  background-size: cover;\n"]))),S=P.ZP.div(o||(o=(0,k.Z)(["\n  text-align: center;\n  background: var(--bg-color-form);\n  border-radius: 8px;\n  padding: 40px;\n\n  @media screen and (max-width: 767px) {\n    padding: 24px;\n  }\n"]))),z=P.ZP.div(t||(t=(0,k.Z)(["\n  display: flex;\n"]))),I=(0,P.ZP)(j.rU)(a||(a=(0,k.Z)(["\n  left: 160px;\n  top: 40px;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: -0.02em;\n  color: var(--color-white);\n  text-decoration: none;\n"]))),q=(0,P.ZP)(j.rU)(s||(s=(0,k.Z)(["\n  margin-right: 14px;\n  display: inline-block;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: -0.02em;\n  color: var(--color-pale-white);\n  text-decoration: none;\n"]))),B=P.ZP.div(l||(l=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 40px;\n  gap: 14px;\n\n  input {\n    width: 344px;\n    height: 49px;\n    left: 40px;\n    top: 107px;\n    color: var(--color-white);\n    background: var(--bg-color-form-input);\n    opacity: 0.4;\n    border: 1px solid var(--color-green);\n    padding-left: 18px;\n    box-shadow: 0px 4px 16px var(--color-shadow);\n    border-radius: 8px;\n    @media screen and (max-width: 767px) {\n      width: 287px;\n    }\n  }\n"]))),_=P.ZP.button(d||(d=(0,k.Z)(["\n  font-style: normal;\n  font-weight: 500;\n  font-family: Poppins;\n  font-size: 14px;\n  line-height: 21px;\n  text-align: center;\n  letter-spacing: -0.02em;\n  width: 100%;\n  height: 49px;\n  margin-top: 24px;\n  background: var(--color-green);\n  border-radius: 8px;\n  color: var(--color-dark);\n  cursor: pointer;\n\n  transition: opacity 200ms linear;\n\n  &:hover {\n    opacity: 0.8;\n  }\n  @media screen and (max-width: 767px) {\n    width: 287px;\n  }\n  @media screen and (max-width: 375px) {\n    width: 100%;\n  }\n"]))),A=P.ZP.div(p||(p=(0,k.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 14px;\n"]))),E=P.ZP.svg(c||(c=(0,k.Z)(["\n  position: absolute;\n  right: 18px;\n  top: 19px;\n  cursor: pointer;\n  stroke: #fff;\n  width: 16.5px;\n  height: 16px;\n  right: 15px;\n  opacity: 0.4;\n  &:hover,\n  &:focus {\n    stroke: #9dc888;\n  }\n"]))),L=P.ZP.div(h||(h=(0,k.Z)(["\n  position: absolute;\n  bottom: -15px;\n  right: 0;\n  font-size: 11px;\n  font-weight: 400;\n  font-style: normal;\n  letter-spacing: -1%;\n  opacity: 0.9;\n  color: #fff;\n"]))),R=P.ZP.div(u||(u=(0,k.Z)(["\n  position: relative;\n"]))),U=r(5147),F=r(5218),N=r(184),T=function(){var n=(0,y.I0)(),e=(0,f.useState)(!1),r=(0,g.Z)(e,2),i=r[0],o=r[1],t=(0,b.TA)({initialValues:{email:"",password:""},validationSchema:Z,onSubmit:function(){var e=(0,m.Z)((0,x.Z)().mark((function e(r){return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n((0,U.Ib)({email:r.email,password:r.password})).unwrap();case 3:F.Am.success("You have logged in successfully!!!"),t.resetForm(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),F.Am.error("Sorry, you entered invalid email or password");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()});return(0,N.jsx)(C,{children:(0,N.jsx)(S,{children:(0,N.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,N.jsxs)(z,{children:[(0,N.jsx)(q,{to:"/auth/register",underline:"none",children:" Registration "}),(0,N.jsx)(I,{to:"/auth/login",underline:"none",children:" Log In "})]}),(0,N.jsxs)(B,{children:[(0,N.jsxs)(R,{children:[(0,N.jsx)("input",{type:"email",id:"email",name:"email",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.email,placeholder:"Enter your email"}),t.touched.email&&t.errors.email?(0,N.jsx)(L,{children:t.errors.email}):null," "]}),(0,N.jsxs)(R,{children:[(0,N.jsxs)(A,{children:[(0,N.jsx)("input",{type:i?"text":"password",id:"password",name:"password",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.password,placeholder:"Confirm a password"}),(0,N.jsxs)(E,{width:"18px",onClick:function(){o((function(n){return!n}))},children:[" ",(0,N.jsx)("use",{href:w.Z+"#icon-eye"})," "]})," "]}),t.touched.password&&t.errors.password?(0,N.jsx)(L,{children:t.errors.password}):null," "]})]}),(0,N.jsx)(_,{type:"submit",children:"Log In Now"})]})})})}}}]);
//# sourceMappingURL=415.58060e7c.chunk.js.map