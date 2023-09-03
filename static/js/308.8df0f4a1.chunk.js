"use strict";(self.webpackChunktask_pro=self.webpackChunktask_pro||[]).push([[308],{1308:function(n,e,r){r.r(e),r.d(e,{default:function(){return F}});var i,o,a,t,l,s,d,p,c,h,u=r(4165),x=r(5861),g=r(9439),m=r(5048),w=r(2791),v=r(5705),f=r(6727),Z=f.Ry().shape({email:f.Z_().email("Invalid email").required("Email is required"),password:f.Z_().min(6,"Password must be at least 6 characters").required("Password is required")}),b=r(168),y=r(1087),k=r(9256),j=k.ZP.div(i||(i=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  width: 100%;\n  background: linear-gradient(\n    180deg,\n    var(--color-white) 0%,\n    var(--color-white) 25%,\n    var(--color-green) 92.19%\n  );\n  background-repeat: no-repeat;\n  background-size: cover;\n"]))),P=k.ZP.div(o||(o=(0,b.Z)(["\n  text-align: center;\n  background: var(--bg-color-form);\n  border-radius: 8px;\n  padding: 40px;\n\n  @media screen and (max-width: 767px) {\n    padding: 24px;\n  }\n"]))),C=k.ZP.div(a||(a=(0,b.Z)(["\n  display: flex;\n"]))),S=(0,k.ZP)(y.rU)(t||(t=(0,b.Z)(["\n  left: 160px;\n  top: 40px;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: -0.02em;\n  color: var(--color-white);\n  text-decoration: none;\n"]))),z=(0,k.ZP)(y.rU)(l||(l=(0,b.Z)(["\n  margin-right: 14px;\n  display: inline-block;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: -0.02em;\n  color: var(--color-pale-white);\n  text-decoration: none;\n"]))),I=k.ZP.div(s||(s=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 40px;\n  gap: 14px;\n\n  input {\n    width: 344px;\n    height: 49px;\n    left: 40px;\n    top: 107px;\n    color: var(--color-white);\n    background: var(--bg-color-form-input);\n    opacity: 0.4;\n    border: 1px solid var(--color-green);\n    padding-left: 18px;\n    box-shadow: 0px 4px 16px var(--color-shadow);\n    border-radius: 8px;\n    @media screen and (max-width: 767px) {\n      width: 287px;\n    }\n  }\n"]))),q=k.ZP.button(d||(d=(0,b.Z)(["\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  text-align: center;\n  letter-spacing: -0.02em;\n  width: 100%;\n  height: 49px;\n  margin-top: 24px;\n  background: var(--color-green);\n  border-radius: 8px;\n  color: var(--color-dark);\n  cursor: pointer;\n  &:hover {\n    opacity: 0.8;\n  }\n  @media screen and (max-width: 767px) {\n    width: 287px;\n  }\n  @media screen and (max-width: 375px) {\n    width: 100%;\n  }\n"]))),B=k.ZP.div(p||(p=(0,b.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 14px;\n"]))),_=k.ZP.svg(c||(c=(0,b.Z)(["\n  position: absolute;\n  right: 18px;\n  top: 19px;\n  cursor: pointer;\n  color: var(--color-white);\n  width: 16.5px;\n  height: 16px;\n  right: 15px;\n  opacity: 0.4;\n"]))),A=k.ZP.div(h||(h=(0,b.Z)(["\n  font-size: 15px;\n  color: var(--color-white);\n"]))),E=r(5147),L=r(5218),R=r(5780),U=r(184),F=function(){var n=(0,m.I0)(),e=(0,w.useState)(!1),r=(0,g.Z)(e,2),i=r[0],o=r[1],a=(0,v.TA)({initialValues:{email:"",password:""},validationSchema:Z,onSubmit:function(){var e=(0,x.Z)((0,u.Z)().mark((function e(r){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n((0,E.Ib)({email:r.email,password:r.password})).unwrap();case 3:L.Am.success("You have logged in successfully!!!"),a.resetForm(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),L.Am.error("Sorry, you entered invalid email or password");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()});return(0,U.jsx)(j,{children:(0,U.jsx)(P,{children:(0,U.jsxs)("form",{onSubmit:a.handleSubmit,children:[(0,U.jsxs)(C,{children:[(0,U.jsx)(z,{to:"/auth/register",underline:"none",children:" Registration "}),(0,U.jsx)(S,{to:"/auth/login",underline:"none",children:" Log In "})]}),(0,U.jsxs)(I,{children:[(0,U.jsx)("input",{type:"email",id:"email",name:"email",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.email,placeholder:"Enter your email"}),a.touched.email&&a.errors.email?(0,U.jsx)(A,{children:a.errors.email}):null,(0,U.jsxs)(B,{children:[(0,U.jsx)("input",{type:i?"text":"password",id:"password",name:"password",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.password,placeholder:"Create a password"}),(0,U.jsxs)(_,{width:"18px",onClick:function(){o((function(n){return!n}))},children:[" ",(0,U.jsx)("use",{href:"".concat(R.Z,"#icon-eye")})," "]})," "]}),a.touched.password&&a.errors.password?(0,U.jsx)(A,{children:a.errors.password}):null]}),(0,U.jsx)(q,{type:"submit",children:"Log In Now"})]})})})}}}]);
//# sourceMappingURL=308.8df0f4a1.chunk.js.map