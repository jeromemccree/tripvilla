(self.webpackChunktripvilla=self.webpackChunktripvilla||[]).push([[179],{"./app/components lazy recursive ^\\.\\/.*$ include: (?:\\/app\\/components(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.[^/]*?\\/?)$":(a,r,t)=>{var e={"./Navbar.stories":["./app/components/Navbar.stories.tsx",107,651],"./Navbar.stories.tsx":["./app/components/Navbar.stories.tsx",107,651],"./modal/Modal.stories":["./app/components/modal/Modal.stories.tsx",744],"./modal/Modal.stories.tsx":["./app/components/modal/Modal.stories.tsx",744]};function o(l){if(!t.o(e,l))return Promise.resolve().then(()=>{var w=new Error("Cannot find module '"+l+"'");throw w.code="MODULE_NOT_FOUND",w});var n=e[l],u=n[0];return Promise.all(n.slice(1).map(t.e)).then(()=>t(u))}o.keys=()=>Object.keys(e),o.id="./app/components lazy recursive ^\\.\\/.*$ include: (?:\\/app\\/components(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.[^/]*?\\/?)$",a.exports=o},"./node_modules/@storybook/addon-interactions/dist sync recursive":a=>{function r(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}r.keys=()=>[],r.resolve=r,r.id="./node_modules/@storybook/addon-interactions/dist sync recursive",a.exports=r},"./.storybook/preview.tsx":(a,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>fe});var e=t("./node_modules/next/dist/compiled/react/jsx-runtime.js"),o=t("./node_modules/next/dist/compiled/react/index.js"),l=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=t.n(l),u=t("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),w=t.n(u),S=t("./node_modules/style-loader/dist/runtime/insertBySelector.js"),E=t.n(S),f=t("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),c=t.n(f),O=t("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),k=t.n(O),v=t("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),M=t.n(v),y=t("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./app/globals.css"),g={};g.styleTagTransform=M(),g.setAttributes=c(),g.insert=E().bind(null,"head"),g.domAPI=w(),g.insertStyleElement=k();var Y=n()(y.default,g);const U=y.default&&y.default.locals?y.default.locals:void 0;var z=t("./node_modules/@headlessui/react/dist/components/transitions/transition.js"),j=t("./node_modules/@headlessui/react/dist/components/dialog/dialog.js"),P=t("./node_modules/next-auth/react/index.js"),T=t("./app/hooks/useOpenClose.ts"),D=t("./app/components/Button.tsx"),m=t("./node_modules/untitledui-js/index.js"),R=t("./app/components/Logo.tsx"),F=t("./app/components/avatar/AvatarLabelGroup.tsx"),G=t("./app/components/avatar/Avatar.tsx"),H=t("./node_modules/next/navigation.js"),ie=t("./node_modules/classnames/index.js"),W=t.n(ie);const ne=()=>{var s;const p=(0,T.useMobileSidebarModal)(),{data:i}=(0,P.useSession)(),d=(0,H.useRouter)(),h=(0,H.usePathname)(),b=[{icon:(0,e.jsx)(m.Communication.MessageTextSquare01,{}),name:"Messages ",path:"/messages",dividerBelow:!1},{icon:(0,e.jsx)(m.Alerts.Bell01,{}),name:"Notifications",path:"/notifications",dividerBelow:!1},{icon:(0,e.jsx)(m.General.Bookmark,{}),name:"Collections",path:"/collections",dividerBelow:!1},{icon:(0,e.jsx)(m.Maps.Route,{}),name:"Trips",path:"/trips",dividerBelow:!1},{icon:(0,e.jsx)(m.General.Home03,{}),name:"Become a Host",path:"/host",dividerBelow:!1}],C=[{icon:(0,e.jsx)(m.General.Home03,{}),name:"Become a Host",path:"/host",dividerBelow:!1}],N=i?b:C,I=[{icon:(0,e.jsx)(m.General.Settings01,{}),name:"Settings",path:"/settings",dividerBelow:!1},{icon:(0,e.jsx)(m.General.HelpCircle,{}),name:"Help",path:"/help",dividerBelow:!1}],x=A=>(0,e.jsx)("div",{className:"px-2",children:A.map((L,K)=>(0,e.jsxs)("button",{onClick:()=>d.push(L.path),className:W()("flex w-full flex-row gap-3 px-3 py-2",h===L.path?" text-brand-700":"text-gray-700"),children:[o.cloneElement(L.icon,{className:"stoke-2 stroke-current h-6"}),(0,e.jsx)("span",{className:"text-md font-semibold",children:L.name})]},K))});return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(z.Transition.Root,{show:p.isOpen,as:o.Fragment,children:(0,e.jsxs)(j.Dialog,{as:"div",className:"lg:hidden relative z-50",onClose:p.setClose,children:[(0,e.jsx)(z.Transition.Child,{as:o.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,e.jsx)("div",{className:"fixed inset-0 bg-gray-900/80"})}),(0,e.jsx)("div",{className:"fixed inset-0 flex",children:(0,e.jsx)(z.Transition.Child,{as:o.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:(0,e.jsxs)(j.Dialog.Panel,{className:"relative mr-16 flex w-full max-w-xs flex-1",children:[(0,e.jsx)(z.Transition.Child,{as:o.Fragment,enter:"ease-in-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,e.jsx)("div",{className:"absolute left-full top-0 flex w-16 justify-center pt-5",children:(0,e.jsx)("button",{type:"button",className:"",onClick:p.setClose,children:(0,e.jsx)(m.General.XClose,{className:"stroke-white"})})})}),(0,e.jsxs)("nav",{className:"flex w-full max-w-xs flex-col justify-between bg-white",children:[(0,e.jsxs)("div",{className:"pt-4",children:[(0,e.jsx)(R.default,{className:"px-4 pb-4"}),x(N)]}),(0,e.jsxs)("div",{children:[" ",x(I),(0,e.jsx)("div",{className:"px-2 pb-6 pt-5",children:i?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("hr",{className:"bg-gray-200"}),(0,e.jsxs)("div",{className:"flex flex-row justify-between pt-3",children:[(0,e.jsx)(F.default,{size:"md",text:i.user.name||"",supportingText:i.user.email||"",avatar:(0,e.jsx)(G.Avatar,{size:"md",src:(i==null||(s=i.user)===null||s===void 0?void 0:s.image)||"",alt:"avatar"})}),(0,e.jsx)(D.default,{variant:"iconOnly",hierarchy:"tertiary_gray",size:"sm",leadingIcon:(0,e.jsx)(m.General.Logout01,{}),className:"",onClick:()=>void(0,P.signOut)()})]})]}):(0,e.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,e.jsx)(D.default,{variant:"default",hierarchy:"primary",size:"lg",text:"Sign Up",className:"w-full",onClick:()=>void(0,P.signIn)()}),(0,e.jsx)(D.default,{variant:"default",hierarchy:"secondary_gray",size:"lg",text:"Log In",className:"w-full",onClick:()=>void(0,P.signIn)()})]})})]})]})]})})})]})})})};var le=t("./app/components/modal/SearchModal.tsx");const ve={size:{xs:"xs",sm:"sm",md:"md",lg:"lg",xl:"xl"},color:{brand:"brand",gray:"gray",error:"error",warning:"warning",success:"success"}},J=s=>{let{icon:p,size:i,color:d}=s;const h={xs:{size:"h-3 w-3",margin:"m-1.5"},sm:{size:"h-4 w-4",margin:"m-2"},md:{size:"h-5 w-5",margin:"m-2.5"},lg:{size:"h-6 w-6",margin:"m-3"},xl:{size:"h-7 w-7",margin:"m-3.5"}},b={brand:{stroke:"stroke-brand-600",bg:"bg-brand-100",border:"border-brand-50"},gray:{stroke:"stroke-gray-600",bg:"bg-gray-100",border:"border-gray-50"},error:{stroke:"stroke-error-600",bg:"bg-error-100",border:"border-error-50"},warning:{stroke:"stroke-warning-600",bg:"bg-warning-100",border:"border-warning-50"},success:{stroke:"stroke-success-600",bg:"bg-success-100",border:"border-success-50"}};return(0,e.jsx)("div",{className:W()("flex h-fit w-fit flex-shrink-0 items-center justify-center rounded-full border-8",b[d].border,b[d].bg),children:o.cloneElement(p,{className:W()("shrink-0",b[d].stroke,h[i].size,h[i].margin)})})};var de=t("./node_modules/zustand/esm/index.mjs");const Q=(0,de.create)(s=>({email:"",setEmail:p=>s({email:p})}));var ce=t("./node_modules/use-timer/lib/index.js");const pe=()=>{const s=(0,T.useCheckEmailModal)(),{email:p}=Q(),{time:i,start:d,reset:h,status:b}=(0,ce.useTimer)({initialTime:30,endTime:0,timerType:"DECREMENTAL"}),C=()=>(0,e.jsxs)("div",{className:"flex flex-row  gap-4 mobile:flex-col mobile:gap-3",children:[(0,e.jsx)(J,{size:"lg",color:"brand",icon:(0,e.jsx)(m.Communication.Mail01,{})}),(0,e.jsxs)("div",{className:"flex flex-col gap-1 text-start",children:[(0,e.jsx)(j.Dialog.Title,{as:"h3",className:"text-lg font-semibold leading-7 text-gray-900",children:"Please check your"}),(0,e.jsxs)(j.Dialog.Description,{className:"text-sm text-gray-600",children:["We just sent a verification email, please check it.",(0,e.jsx)("br",{})," Resend avaliable in ",i]})]})]}),N=()=>(0,e.jsx)("div",{className:"flex w-full justify-end",children:(0,e.jsxs)("div",{className:"flex flex-row gap-2 mobile:w-full mobile:flex-col-reverse",children:[(0,e.jsx)(D.default,{variant:"default",hierarchy:"secondary_gray",size:"lg",text:"Resend",className:"mobile:w-full",onClick:()=>{b==="STOPPED"&&((0,P.signIn)("email",{email:p,redirect:!1}),h(),d())}}),(0,e.jsx)(D.default,{variant:"default",hierarchy:"primary",size:"lg",text:"Continue",className:"mobile:w-full",onClick:s.setClose})]})});return(0,e.jsx)(e.Fragment,{})},V=s=>{let{content:p,actions:i,modal:d,className:h}=s;return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(z.Transition.Root,{show:d.isOpen,as:o.Fragment,children:(0,e.jsxs)(j.Dialog,{as:"div",className:"relative z-10",onClose:d.setClose,children:[(0,e.jsx)(z.Transition.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,e.jsx)("div",{className:"fixed inset-0 bg-gray-950 bg-opacity-70 transition-opacity"})}),(0,e.jsx)("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:(0,e.jsx)("div",{className:" flex min-h-full items-center justify-center p-4",children:(0,e.jsx)(z.Transition.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 translate-y-0 scale-95",enterTo:"opacity-100 translate-y-0 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 scale-100",leaveTo:"opacity-0 translate-y-4 translate-y-0 scale-95",children:(0,e.jsxs)(j.Dialog.Panel,{className:W()("relative w-full transform overflow-hidden rounded-xl bg-white p-6 shadow-xl transition-all mobile:p-4 mobile:pt-5",h),children:[" ",(0,e.jsx)("button",{type:"button",className:"absolute right-3 top-3 block p-2",onClick:d.setClose,children:(0,e.jsx)(m.General.XClose,{className:"h-6 w-6 stroke-gray-400"})}),p,(0,e.jsx)("div",{className:"bg-white pt-8 mobile:pt-6",children:i})]})})})})]})})})},Z=s=>{let{children:p,hint:i,label:d,isDestructive:h=!1}=s;return(0,e.jsxs)("div",{className:"flex w-full flex-col gap-2",children:[d?(0,e.jsx)("label",{className:"block text-sm font-medium leading-5 text-gray-700",children:d}):null,(0,e.jsx)("div",{className:"relative",children:p}),i?(0,e.jsx)("p",{className:W()("text-sm",h?"text-error-500":"text-gray-500"),children:i}):null]})},q="border-gray-300 focus:border-brand-300  focus:ring-brand-300 ",ee="border-error-300 focus:border-error-300 focus:ring-error-300",te="w-full rounded-md placeholder:text-gray-500 border text-gray-900  px-3.5 py-2.5  shadow-xs outline-none focus:ring focus:ring-opacity-25",oe=s=>{let{id:p,name:i,type:d="text",placeholder:h,hint:b,label:C,isDestructive:N=!1,value:I,icon:x,onChange:A}=s;const L=N?ee:q;return(0,e.jsxs)(Z,{label:C,hint:b,isDestructive:N,children:[(0,e.jsx)("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",children:x?o.cloneElement(x,{className:W()("stoke-2 stroke-gray-500 h-5 w-5")}):null}),(0,e.jsx)("input",{type:d,name:i,id:p,className:W()(x?"pl-10":null,te,L),placeholder:h,value:I,onChange:A}),N?(0,e.jsx)("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",children:(0,e.jsx)(m.Alerts.AlertCircle,{className:"h-4 w-4 stroke-error-500"})}):null]})},Ee=s=>{let{id:p,name:i,placeholder:d,hint:h,label:b,rows:C,isDestructive:N=!1,value:I,onChange:x}=s;const A=N?ee:q;return(0,e.jsx)(Z,{label:b,hint:h,isDestructive:N,children:(0,e.jsx)("textarea",{id:p,name:i,rows:C,className:W()(te,A),placeholder:d,value:I,onChange:x})})};var $=t("./node_modules/zod/lib/index.mjs");const ge=()=>{const s=(0,T.useRegisterModal)(),p=(0,T.useCheckEmailModal)(),[i,d]=(0,o.useState)(!1),{email:h,setEmail:b}=Q(),[C,N]=(0,o.useState)(null),I=$.z.object({email:$.z.string().email("Invalid email address")}),x=async()=>{const K={email:h},X=I.safeParse(K);if(X.success)N(null);else{N(X.error.formErrors.fieldErrors);return}try{await(0,P.signIn)("email",{email:h,redirect:!1}),p.setOpen,s.setClose,d(!1)}catch{d(!0)}},A=()=>{var K;return(0,e.jsxs)("div",{className:"flex flex-col items-center",children:[(0,e.jsx)(R.default,{}),(0,e.jsxs)("div",{className:"flex w-full flex-col gap-1 py-4 text-center",children:[(0,e.jsx)(j.Dialog.Title,{as:"h3",className:"text-lg font-semibold leading-7 text-gray-900",children:"Log in or Sign Up"}),(0,e.jsxs)(j.Dialog.Description,{className:"text-sm text-gray-600",children:[" ","Welcome to Tripvilla"]})]}),(0,e.jsx)(oe,{id:"email",name:"email",type:"email",placeholder:"Enter your email",value:h,onChange:X=>b(X.target.value),icon:(0,e.jsx)(m.Communication.Mail01,{}),isDestructive:C?.email!==void 0,hint:C==null||(K=C.email)===null||K===void 0?void 0:K.toString()})," "]})},L=()=>(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(D.default,{variant:"default",hierarchy:"primary",size:"lg",text:"Continue",className:"w-full",onClick:x}),i?(0,e.jsx)("p",{className:"pt-2 text-sm text-error-500",children:"Oops something went wrong, please try again later"}):null]});return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(V,{className:"max-w-md",modal:s,content:A(),actions:L()})})};var re=t("./app/hooks/useImageSelect.ts");const me=()=>{const[s,p]=(0,o.useState)(""),i=(0,T.useCompleteProfileModal)(),d=(0,T.useCropImageModal)(),[h,b]=(0,o.useState)(!1),{image:C,setImage:N,setAspectRatio:I}=(0,re.useImageSelect)(),[x,A]=(0,o.useState)(null),L=$.z.object({name:$.z.string({required_error:"Name is required",invalid_type_error:"Name must be a string"}).min(2,{message:"Must be 2 or more characters long"})}),K=_=>{const B=new FileReader;B.onloadend=()=>{N(B.result)},B.readAsDataURL(_),d.setOpen(),i.setClose()},X=async()=>{const _={name:s},B=L.safeParse(_);if(B.success)A(null);else{A(B.error.formErrors.fieldErrors);return}try{b(!1),p("")}catch{b(!0)}},se=()=>{var _;return(0,e.jsxs)("div",{className:"",children:[(0,e.jsxs)("div",{className:"flex w-full flex-col gap-1 pb-4",children:[(0,e.jsxs)(j.Dialog.Title,{as:"h3",className:"text-lg font-semibold leading-7 text-gray-900",children:["Complete your profile"," "]}),(0,e.jsxs)(j.Dialog.Description,{className:"text-sm text-gray-600",children:[" ","Choose a name and profile pic"]})]}),(0,e.jsxs)("div",{className:"flex w-full flex-row content-center justify-center gap-5  pb-4",children:[(0,e.jsx)(G.Avatar,{size:"profileMd",className:"self-center",src:C}),(0,e.jsx)("div",{className:"flex w-full justify-center rounded-lg border  border-gray-200 px-6 py-10",children:(0,e.jsxs)("div",{className:"text-center",children:[(0,e.jsxs)("div",{className:"mt-4 flex text-sm leading-6 text-gray-600",children:[(0,e.jsx)("div",{className:"rounded-lg border border-gray-200 p-2.5 shadow-xs",children:(0,e.jsx)(m.General.UploadCloud02,{})}),(0,e.jsxs)("label",{htmlFor:"file-upload",className:"relative cursor-pointer rounded-md bg-white font-semibold text-brand-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500",children:[(0,e.jsx)("span",{children:"Upload a file"}),(0,e.jsx)("input",{id:"file-upload",name:"file-upload",type:"file",className:"sr-only",onChange:B=>K(B.target.files[0])})]}),(0,e.jsx)("p",{className:"pl-1",children:"or drag and drop"})]}),(0,e.jsx)("p",{className:"text-xs leading-5 text-gray-600",children:"PNG, JPG, GIF up to 10MB"})]})})]}),(0,e.jsx)(oe,{id:"name",name:"name",type:"name",label:"Name",placeholder:"Enter your name",value:s,onChange:B=>p(B.target.value),icon:(0,e.jsx)(m.Users.User01,{}),isDestructive:x?.name!==void 0,hint:x==null||(_=x.name)===null||_===void 0?void 0:_.toString()})," "]})},we=()=>(0,e.jsx)("div",{className:"flex w-full justify-end",children:(0,e.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,e.jsx)(D.default,{variant:"default",hierarchy:"secondary_gray",size:"lg",text:"Skip",onClick:i.setClose}),(0,e.jsx)(D.default,{variant:"default",hierarchy:"primary",size:"lg",text:"Complete",onClick:X})]})});return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(V,{className:"max-w-md",modal:i,content:se(),actions:we()})})};var ue=t("./node_modules/react-cropper/dist/react-cropper.es.js"),Me=t("./node_modules/cropperjs/dist/cropper.css");const he=()=>{const s=(0,T.useCropImageModal)(),p=(0,T.useCompleteProfileModal)(),{image:i,setImage:d,aspectRatio:h}=(0,re.useImageSelect)(),b=(0,o.useRef)(null),C=()=>{var x;const A=(x=b.current)===null||x===void 0?void 0:x.cropper.getCroppedCanvas().toDataURL();d(A),p.setOpen(),s.setClose()},N=()=>(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"flex flex-row  gap-4 mobile:flex-col mobile:gap-3",children:[(0,e.jsx)(J,{size:"lg",color:"brand",icon:(0,e.jsx)(m.Editor.Crop01,{})}),(0,e.jsxs)("div",{className:"flex flex-col gap-1 text-start",children:[(0,e.jsx)(j.Dialog.Title,{as:"h3",className:"text-lg font-semibold leading-7 text-gray-900",children:"Crop Image"}),(0,e.jsx)(j.Dialog.Description,{className:"text-sm text-gray-600",children:"Upload your image"})]})]}),(0,e.jsx)(ue.default,{src:i,style:{height:400,width:"100%"},aspectRatio:h,guides:!0,ref:b})]}),I=()=>(0,e.jsx)("div",{className:"flex w-full justify-end",children:(0,e.jsxs)("div",{className:"flex flex-row gap-2 mobile:w-full mobile:flex-col-reverse",children:[(0,e.jsx)(D.default,{variant:"default",hierarchy:"secondary_gray",size:"lg",text:"Cancel",className:"mobile:w-full",onClick:s.setClose}),(0,e.jsx)(D.default,{variant:"default",hierarchy:"primary",size:"lg",text:"Save Changes",className:"mobile:w-full",onClick:C})]})});return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(V,{className:"max-w-xl",modal:s,content:N(),actions:I()})})},xe=()=>(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(he,{}),(0,e.jsx)(me,{}),(0,e.jsx)(le.default,{}),(0,e.jsx)(ne,{}),(0,e.jsx)(pe,{}),(0,e.jsx)(ge,{})]});var ae=t("./node_modules/@storybook/addon-viewport/dist/index.mjs");const fe={decorators:[s=>(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(xe,{}),(0,e.jsx)(s,{})]})],parameters:{viewport:{viewports:{...ae.INITIAL_VIEWPORTS,...ae.MINIMAL_VIEWPORTS}},themes:{themeOverride:"dark"},nextjs:{appDirectory:!0},actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|FF0000)$/i,date:/Date$/i}}}}},"./.storybook/previewMockAuthStates.ts":a=>{"use strict";a.exports={NotAuth:{title:"Not Auth",session:null},Auth:{title:"Auth",session:{data:{user:{id:"1",name:"John Steweart",email:"test@test.com",image:"https://cdn.pixabay.com/photo/2023/01/28/20/23/ai-generated-7751688_1280.jpg"}}}}}},"./app/components/Button.tsx":(a,r,t)=>{"use strict";t.r(r),t.d(r,{Options:()=>u,default:()=>S});var e=t("./node_modules/next/dist/compiled/react/jsx-runtime.js"),o=t("./node_modules/next/dist/compiled/react/index.js"),l=t("./node_modules/classnames/index.js"),n=t.n(l);const u={hierarchy:{primary:"primary",secondary_gray:"secondary_gray",secondary_color:"secondary_color",tertiary_gray:"tertiary_gray",tertiary_color:"tertiary_color",link_gray:"link_gray",link_color:"link_color"},size:{sm:"sm",md:"md",lg:"lg",xl:"xl","2xl":"2xl"},variant:{default:"default",iconOnly:"iconOnly"}},S=E=>{let{hierarchy:f,size:c,text:O,disabled:k,leadingIcon:v,trailingIcon:M,variant:y,className:g,onClick:Y}=E;var U,z;const j={primary:{button:"bg-brand-600 shadow-xs  text-white hover:bg-brand-700 focus:ring-brand-500 focus:ring-opacity-25"},secondary_gray:{button:" bg-white shadow-xs  border border-gray-300 text-gray-700 hover:bg-gray-50  hover:text-gray-800 focus:ring-gray-300 focus:ring-opacity-25"},secondary_color:{button:"bg-white  shadow-xs text-brand-700 border border-brand-300 hover:bg-brand-50  hover:text-brand-800 focus:ring-brand-500 focus:ring-opacity-25"},tertiary_gray:{button:"text-gray-600 hover:bg-gray-50 hover:text-gray-700 focus:ring-transparent"},tertiary_color:{button:"text-brand-700 hover:bg-brand-50 hover:text-brand-800  focus:ring-transparent "},link_gray:{button:"text-gray-600 hover:bg-gray-50 hover:text-gray-700 focus:ring-transparent",padding:"p-0"},link_color:{button:"text-brand-700 hover:bg-brand-50 hover:text-brand-800  focus:ring-transparent",padding:"p-0 "}},P={sm:{default:{padding:"px-3 py-2",gap:"gap-1",iconSize:"h-5"},iconOnly:{padding:"p-2",iconSize:"h-5",gap:""}},md:{default:{padding:"px-3.5 py-2.5",gap:"gap-1",iconSize:"h-5"},iconOnly:{padding:"p-2.5",iconSize:"h-5",gap:""}},lg:{default:{padding:"px-4 py-2.5",gap:"gap-1.5",iconSize:"h-5"},iconOnly:{padding:"p-3",iconSize:"h-5",gap:""}},xl:{default:{padding:"px-4.5 py-3",gap:"gap-1.5",iconSize:"h-5"},iconOnly:{padding:"p-3.5",iconSize:"h-5",gap:""}},"2xl":{default:{padding:"px-5.5 py-4",gap:"gap-1.5",iconSize:"h-6"},iconOnly:{padding:"p-4",iconSize:"h-5",gap:""}}};var T;const D=n()("inline-flex rounded-md items-center justify-center font-semibold focus:ring shrink-0",g,(T=(U=j[f])===null||U===void 0?void 0:U.padding)!==null&&T!==void 0?T:P[c][y].padding,P[c][y].gap,(z=j[f])===null||z===void 0?void 0:z.button),m=()=>y==="iconOnly"?v?R(v):null:(0,e.jsxs)(e.Fragment,{children:[v?R(v):null,O?(0,e.jsx)("span",{children:O}):null,M?R(M):null]}),R=F=>o.cloneElement(F,{className:n()("stoke-2 stroke-current",P[c][y].iconSize)});return(0,e.jsx)("button",{type:"button",className:D,disabled:k,onClick:Y,children:m()})}},"./app/components/Logo.tsx":(a,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>w});var e=t("./node_modules/next/dist/compiled/react/jsx-runtime.js"),o=t("./node_modules/next/navigation.js"),l=t("./node_modules/@storybook/nextjs/dist/images/next-image.mjs");const n={src:"static/media/logo.3c23fd8f.svg",height:335,width:906,blurDataURL:"static/media/logo.3c23fd8f.svg"},w=S=>{let{route:E="/",className:f}=S;const c=(0,o.useRouter)();return(0,e.jsx)("button",{className:f,onClick:()=>c.push(E),children:(0,e.jsx)(l.default,{src:n,alt:"Logo",width:111,height:22})})}},"./app/components/avatar/Avatar.tsx":(a,r,t)=>{"use strict";t.r(r),t.d(r,{Avatar:()=>O,Options:()=>E,ProfileAvatar:()=>k});var e=t("./node_modules/next/dist/compiled/react/jsx-runtime.js"),o=t("./node_modules/next/dist/compiled/react/index.js"),l=t("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),n=t("./node_modules/untitledui-js/index.js"),u=t.n(n),w=t("./node_modules/classnames/index.js"),S=t.n(w);const E={size:{xs:"xs",sm:"sm",md:"md",lg:"lg",xl:"xl","2xl":"2xl",profileSm:"profileSm",profileMd:"profileMd",profileLg:"profileLg"}},f={xs:{image:24,icon:16},sm:{image:32,icon:20},md:{image:40,icon:24},lg:{image:48,icon:28},xl:{image:56,icon:32},"2xl":{image:64,icon:32},profileSm:{image:72,icon:36},profileMd:{image:96,icon:48},profileLg:{image:160,icon:80}},c=(v,M,y)=>{const g=Y=>{let{size:U,src:z,alt:j,placeholder:P,onClick:T,className:D}=Y;var m,R;const F=(m=v[U])===null||m===void 0?void 0:m.image,G=(R=v[U])===null||R===void 0?void 0:R.icon;return(0,e.jsx)("div",{style:{width:F,height:F},className:S()("inline-block flex flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-opacity-10 focus:border-4 focus:border-gray-300 focus:border-opacity-20",M,D,P?"bg-gray-100":"",F),tabIndex:0,onClick:T,children:P||!z?(0,e.jsx)(n.Users.User01,{size:G?.toString(),className:"stroke-gray-600"}):(0,e.jsx)(l.default,{src:z,alt:j||"",width:F,height:F,layout:"fixed"})})};return g.displayName=y,g},O=c(f,"border-black","Avatar"),k=c(f,"border-white","ProfileAvatar")},"./app/components/avatar/AvatarLabelGroup.tsx":(a,r,t)=>{"use strict";t.r(r),t.d(r,{Options:()=>u,default:()=>E});var e=t("./node_modules/next/dist/compiled/react/jsx-runtime.js"),o=t("./node_modules/next/dist/compiled/react/index.js"),l=t("./node_modules/classnames/index.js"),n=t.n(l);const u={size:{sm:"sm",md:"md",lg:"lg",xl:"xl"}},w={sm:{textSize:"text-sm",supportingTextSize:"text-xs",gap:"gap-2"},md:{textSize:"text-sm",supportingTextSize:"text-sm",gap:"gap-3"},lg:{textSize:"text-md",supportingTextSize:"text-md",gap:"gap-3"},xl:{textSize:"text-lg",supportingTextSize:"text-md",gap:"gap-4"}},E=f=>{let{avatar:c,text:O,supportingText:k,size:v}=f;const{textSize:M,supportingTextSize:y,gap:g}=w[v];return(0,e.jsxs)("div",{className:n()("flex flex-row items-center",g),children:[c,(0,e.jsxs)("div",{className:"flex flex-col text-gray-700",children:[(0,e.jsx)("span",{className:n()("font-semibold",M),children:O}),(0,e.jsx)("span",{className:y,children:k})]})]})}},"./app/components/modal/SearchModal.tsx":(a,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>O});var e=t("./node_modules/next/dist/compiled/react/jsx-runtime.js"),o=t("./node_modules/next/dist/compiled/react/index.js"),l=t("./node_modules/@headlessui/react/dist/components/transitions/transition.js"),n=t("./node_modules/@headlessui/react/dist/components/dialog/dialog.js"),u=t("./node_modules/@headlessui/react/dist/components/combobox/combobox.js"),w=t("./app/hooks/useOpenClose.ts"),S=t("./node_modules/untitledui-js/index.js"),E=t.n(S);const f=[{id:1,name:"Leslie Alexander",url:"#"}];function c(){for(var k=arguments.length,v=new Array(k),M=0;M<k;M++)v[M]=arguments[M];return v.filter(Boolean).join(" ")}function O(){const k=(0,w.useSearchModal)(),[v,M]=(0,o.useState)(""),y=v===""?[]:f.filter(g=>g.name.toLowerCase().includes(v.toLowerCase()));return(0,e.jsx)(l.Transition.Root,{show:k.isOpen,as:o.Fragment,afterLeave:()=>M(""),appear:!0,children:(0,e.jsxs)(n.Dialog,{as:"div",className:"relative z-50",onClose:k.setClose,children:[(0,e.jsx)(l.Transition.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,e.jsx)("div",{className:"fixed inset-0 bg-gray-950 bg-opacity-25 transition-opacity"})}),(0,e.jsx)("div",{className:"sm:p-6 md:p-20 fixed inset-0 z-20 w-screen overflow-y-auto p-4",children:(0,e.jsx)(l.Transition.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,e.jsx)(n.Dialog.Panel,{className:"mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all",children:(0,e.jsxs)(u.Combobox,{onChange:g=>window.location=g.url,children:[(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)(S.General.SearchMD,{className:"pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"}),(0,e.jsx)(u.Combobox.Input,{className:"sm:text-sm h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0",placeholder:"Search...",onChange:g=>M(g.target.value)})]}),y.length>0&&(0,e.jsx)(u.Combobox.Options,{static:!0,className:"max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800",children:y.map(g=>(0,e.jsx)(u.Combobox.Option,{value:g,className:Y=>{let{active:U}=Y;return c("cursor-default select-none px-4 py-2",U?"bg-indigo-600 text-white":"")},children:g.name},g.id))}),v!==""&&y.length===0&&(0,e.jsx)("p",{className:"p-4 text-sm text-gray-500",children:"No people found."})]})})})})]})})}},"./app/hooks/useImageSelect.ts":(a,r,t)=>{"use strict";t.r(r),t.d(r,{useImageSelect:()=>o});var e=t("./node_modules/zustand/esm/index.mjs");const o=(0,e.create)(l=>({image:"",aspectRatio:1,setImage:n=>l({image:n}),setAspectRatio:n=>l({aspectRatio:n})}))},"./app/hooks/useOpenClose.ts":(a,r,t)=>{"use strict";t.r(r),t.d(r,{useCheckEmailModal:()=>n,useCompleteProfileModal:()=>E,useCropImageModal:()=>f,useMobileSidebarModal:()=>w,useModal:()=>l,useRegisterModal:()=>S,useSearchModal:()=>u});var e=t("./node_modules/zustand/esm/index.mjs");const o=()=>(0,e.create)(c=>({isOpen:!1,setOpen:()=>c({isOpen:!0}),setClose:()=>c({isOpen:!1})})),l=o(),n=o(),u=o(),w=o(),S=o(),E=o(),f=o()},"./node_modules/@storybook/nextjs/dist sync recursive":a=>{function r(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}r.keys=()=>[],r.resolve=r,r.id="./node_modules/@storybook/nextjs/dist sync recursive",a.exports=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./app/globals.css":(a,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>w});var e=t("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=t.n(e),l=t("./node_modules/css-loader/dist/runtime/api.js"),n=t.n(l),u=n()(o());u.push([a.id,`/*
! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #eaecf0; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: Inter, sans-serif; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #98a2b3; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #98a2b3; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(46 144 250 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(46 144 250 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.pointer-events-none {
  pointer-events: none;
}
.static {
  position: static;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.inset-0 {
  inset: 0px;
}
.inset-y-0 {
  top: 0px;
  bottom: 0px;
}
.left-0 {
  left: 0px;
}
.left-4 {
  left: 1rem;
}
.left-full {
  left: 100%;
}
.right-0 {
  right: 0px;
}
.right-3 {
  right: 0.75rem;
}
.top-0 {
  top: 0px;
}
.top-3 {
  top: 0.75rem;
}
.top-3\\.5 {
  top: 0.875rem;
}
.isolate {
  isolation: isolate;
}
.z-0 {
  z-index: 0;
}
.z-10 {
  z-index: 10;
}
.z-20 {
  z-index: 20;
}
.z-50 {
  z-index: 50;
}
.m-1 {
  margin: 0.25rem;
}
.m-1\\.5 {
  margin: 0.375rem;
}
.m-2 {
  margin: 0.5rem;
}
.m-2\\.5 {
  margin: 0.625rem;
}
.m-3 {
  margin: 0.75rem;
}
.m-3\\.5 {
  margin: 0.875rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.mr-16 {
  margin-right: 4rem;
}
.mt-2 {
  margin-top: 0.5rem;
}
.mt-4 {
  margin-top: 1rem;
}
.block {
  display: block;
}
.inline-block {
  display: inline-block;
}
.flex {
  display: flex;
}
.inline-flex {
  display: inline-flex;
}
.hidden {
  display: none;
}
.h-10 {
  height: 2.5rem;
}
.h-12 {
  height: 3rem;
}
.h-16 {
  height: 4rem;
}
.h-3 {
  height: 0.75rem;
}
.h-4 {
  height: 1rem;
}
.h-5 {
  height: 1.25rem;
}
.h-6 {
  height: 1.5rem;
}
.h-7 {
  height: 1.75rem;
}
.h-fit {
  height: -moz-fit-content;
  height: fit-content;
}
.max-h-72 {
  max-height: 18rem;
}
.max-h-screen {
  max-height: 100vh;
}
.min-h-full {
  min-height: 100%;
}
.w-10 {
  width: 2.5rem;
}
.w-16 {
  width: 4rem;
}
.w-3 {
  width: 0.75rem;
}
.w-4 {
  width: 1rem;
}
.w-5 {
  width: 1.25rem;
}
.w-6 {
  width: 1.5rem;
}
.w-60 {
  width: 15rem;
}
.w-7 {
  width: 1.75rem;
}
.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}
.w-full {
  width: 100%;
}
.w-screen {
  width: 100vw;
}
.max-w-7xl {
  max-width: 80rem;
}
.max-w-md {
  max-width: 28rem;
}
.max-w-xl {
  max-width: 36rem;
}
.max-w-xs {
  max-width: 20rem;
}
.flex-1 {
  flex: 1 1 0%;
}
.flex-shrink-0 {
  flex-shrink: 0;
}
.shrink-0 {
  flex-shrink: 0;
}
.origin-top-right {
  transform-origin: top right;
}
.-translate-x-full {
  --tw-translate-x: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-0 {
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-4 {
  --tw-translate-y: 1rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-95 {
  --tw-scale-x: .95;
  --tw-scale-y: .95;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.cursor-default {
  cursor: default;
}
.cursor-pointer {
  cursor: pointer;
}
.select-none {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.scroll-py-2 {
  scroll-padding-top: 0.5rem;
  scroll-padding-bottom: 0.5rem;
}
.flex-row {
  flex-direction: row;
}
.flex-col {
  flex-direction: column;
}
.content-center {
  align-content: center;
}
.items-center {
  align-items: center;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-1 {
  gap: 0.25rem;
}
.gap-1\\.5 {
  gap: 0.375rem;
}
.gap-2 {
  gap: 0.5rem;
}
.gap-3 {
  gap: 0.75rem;
}
.gap-4 {
  gap: 1rem;
}
.gap-5 {
  gap: 1.25rem;
}
.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}
.divide-gray-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(242 244 247 / var(--tw-divide-opacity));
}
.divide-gray-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(234 236 240 / var(--tw-divide-opacity));
}
.self-center {
  align-self: center;
}
.overflow-hidden {
  overflow: hidden;
}
.overflow-y-auto {
  overflow-y: auto;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-lg {
  border-radius: 0.625rem;
}
.rounded-md {
  border-radius: 0.5rem;
}
.rounded-xl {
  border-radius: 0.75rem;
}
.border {
  border-width: 1px;
}
.border-0 {
  border-width: 0px;
}
.border-8 {
  border-width: 8px;
}
.border-l {
  border-left-width: 1px;
}
.border-black {
  --tw-border-opacity: 1;
  border-color: rgb(0 0 0 / var(--tw-border-opacity));
}
.border-brand-300 {
  --tw-border-opacity: 1;
  border-color: rgb(247 178 122 / var(--tw-border-opacity));
}
.border-brand-50 {
  --tw-border-opacity: 1;
  border-color: rgb(254 246 238 / var(--tw-border-opacity));
}
.border-error-300 {
  --tw-border-opacity: 1;
  border-color: rgb(253 162 155 / var(--tw-border-opacity));
}
.border-error-50 {
  --tw-border-opacity: 1;
  border-color: rgb(254 243 242 / var(--tw-border-opacity));
}
.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(234 236 240 / var(--tw-border-opacity));
}
.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(208 213 221 / var(--tw-border-opacity));
}
.border-gray-50 {
  --tw-border-opacity: 1;
  border-color: rgb(249 250 251 / var(--tw-border-opacity));
}
.border-success-50 {
  --tw-border-opacity: 1;
  border-color: rgb(236 253 243 / var(--tw-border-opacity));
}
.border-warning-50 {
  --tw-border-opacity: 1;
  border-color: rgb(255 250 235 / var(--tw-border-opacity));
}
.border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}
.border-opacity-10 {
  --tw-border-opacity: 0.1;
}
.bg-blue-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(83 177 253 / var(--tw-bg-opacity));
}
.bg-brand-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 234 215 / var(--tw-bg-opacity));
}
.bg-brand-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 82 27 / var(--tw-bg-opacity));
}
.bg-error-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 228 226 / var(--tw-bg-opacity));
}
.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(242 244 247 / var(--tw-bg-opacity));
}
.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(234 236 240 / var(--tw-bg-opacity));
}
.bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}
.bg-gray-900\\/80 {
  background-color: rgb(16 24 40 / 0.8);
}
.bg-gray-950 {
  --tw-bg-opacity: 1;
  background-color: rgb(12 17 29 / var(--tw-bg-opacity));
}
.bg-indigo-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(68 76 231 / var(--tw-bg-opacity));
}
.bg-red-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(248 113 113 / var(--tw-bg-opacity));
}
.bg-success-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 250 230 / var(--tw-bg-opacity));
}
.bg-transparent {
  background-color: transparent;
}
.bg-warning-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 240 199 / var(--tw-bg-opacity));
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.bg-opacity-25 {
  --tw-bg-opacity: 0.25;
}
.bg-opacity-70 {
  --tw-bg-opacity: 0.7;
}
.stroke-brand-600 {
  stroke: #fd521b;
}
.stroke-current {
  stroke: currentColor;
}
.stroke-error-500 {
  stroke: #f04438;
}
.stroke-error-600 {
  stroke: #d92d20;
}
.stroke-gray-400 {
  stroke: #98a2b3;
}
.stroke-gray-500 {
  stroke: #667085;
}
.stroke-gray-600 {
  stroke: #475467;
}
.stroke-success-600 {
  stroke: #079455;
}
.stroke-warning-600 {
  stroke: #dc6803;
}
.stroke-white {
  stroke: #fff;
}
.p-0 {
  padding: 0px;
}
.p-2 {
  padding: 0.5rem;
}
.p-2\\.5 {
  padding: 0.625rem;
}
.p-3 {
  padding: 0.75rem;
}
.p-3\\.5 {
  padding: 0.875rem;
}
.p-4 {
  padding: 1rem;
}
.p-6 {
  padding: 1.5rem;
}
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.px-3\\.5 {
  padding-left: 0.875rem;
  padding-right: 0.875rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.px-4\\.5 {
  padding-left: 1.125rem;
  padding-right: 1.125rem;
}
.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}
.px-5\\.5 {
  padding-left: 1.375rem;
  padding-right: 1.375rem;
}
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.py-10 {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.py-2\\.5 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.pb-4 {
  padding-bottom: 1rem;
}
.pb-6 {
  padding-bottom: 1.5rem;
}
.pl-1 {
  padding-left: 0.25rem;
}
.pl-10 {
  padding-left: 2.5rem;
}
.pl-11 {
  padding-left: 2.75rem;
}
.pl-3 {
  padding-left: 0.75rem;
}
.pl-6 {
  padding-left: 1.5rem;
}
.pr-3 {
  padding-right: 0.75rem;
}
.pr-4 {
  padding-right: 1rem;
}
.pt-2 {
  padding-top: 0.5rem;
}
.pt-3 {
  padding-top: 0.75rem;
}
.pt-4 {
  padding-top: 1rem;
}
.pt-5 {
  padding-top: 1.25rem;
}
.pt-8 {
  padding-top: 2rem;
}
.text-left {
  text-align: left;
}
.text-center {
  text-align: center;
}
.text-start {
  text-align: start;
}
.text-display_xl {
  font-size: 3.75rem;
  line-height: 4.5rem;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-md {
  font-size: 1rem;
  line-height: 1.5rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-xs {
  font-size: 0.75rem;
  line-height: 1.125rem;
}
.font-medium {
  font-weight: 500;
}
.font-semibold {
  font-weight: 600;
}
.leading-5 {
  line-height: 1.25rem;
}
.leading-6 {
  line-height: 1.5rem;
}
.leading-7 {
  line-height: 1.75rem;
}
.text-brand-700 {
  --tw-text-opacity: 1;
  color: rgb(185 56 21 / var(--tw-text-opacity));
}
.text-error-500 {
  --tw-text-opacity: 1;
  color: rgb(240 68 56 / var(--tw-text-opacity));
}
.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(152 162 179 / var(--tw-text-opacity));
}
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(102 112 133 / var(--tw-text-opacity));
}
.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(71 84 103 / var(--tw-text-opacity));
}
.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(52 64 84 / var(--tw-text-opacity));
}
.text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(24 34 48 / var(--tw-text-opacity));
}
.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(16 24 40 / var(--tw-text-opacity));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
.shadow-2xl {
  --tw-shadow: 0px 24px 48px -12px rgba(16,24,40,0.18);
  --tw-shadow-colored: 0px 24px 48px -12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-lg {
  --tw-shadow: 0px 4px 6px -2px rgba(16,24,40,0.03), 0px 12px 16px -4px rgba(16,24,40,0.08);
  --tw-shadow-colored: 0px 4px 6px -2px var(--tw-shadow-color), 0px 12px 16px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-sm {
  --tw-shadow: 0px 1px 2px 0px rgba(16,24,40,0.06), 0px 1px 3px 0px rgba(16,24,40,0.1);
  --tw-shadow-colored: 0px 1px 2px 0px var(--tw-shadow-color), 0px 1px 3px 0px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-xl {
  --tw-shadow: 0px 8px 8px -4px rgba(16,24,40,0.03), 0px 20px 24px -4px rgba(16,24,40,0.08);
  --tw-shadow-colored: 0px 8px 8px -4px var(--tw-shadow-color), 0px 20px 24px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-xs {
  --tw-shadow: 0px 1px 2px 0px rgba(16,24,40,0.05);
  --tw-shadow-colored: 0px 1px 2px 0px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.ring-1 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-black {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(0 0 0 / var(--tw-ring-opacity));
}
.ring-opacity-5 {
  --tw-ring-opacity: 0.05;
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.duration-100 {
  transition-duration: 100ms;
}
.duration-200 {
  transition-duration: 200ms;
}
.duration-300 {
  transition-duration: 300ms;
}
.duration-75 {
  transition-duration: 75ms;
}
.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.ease-linear {
  transition-timing-function: linear;
}
.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.placeholder\\:text-gray-400::-moz-placeholder {
  --tw-text-opacity: 1;
  color: rgb(152 162 179 / var(--tw-text-opacity));
}
.placeholder\\:text-gray-400::placeholder {
  --tw-text-opacity: 1;
  color: rgb(152 162 179 / var(--tw-text-opacity));
}
.placeholder\\:text-gray-500::-moz-placeholder {
  --tw-text-opacity: 1;
  color: rgb(102 112 133 / var(--tw-text-opacity));
}
.placeholder\\:text-gray-500::placeholder {
  --tw-text-opacity: 1;
  color: rgb(102 112 133 / var(--tw-text-opacity));
}
.focus-within\\:outline-none:focus-within {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.focus-within\\:ring-2:focus-within {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus-within\\:ring-indigo-600:focus-within {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(68 76 231 / var(--tw-ring-opacity));
}
.focus-within\\:ring-offset-2:focus-within {
  --tw-ring-offset-width: 2px;
}
.hover\\:bg-brand-50:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(254 246 238 / var(--tw-bg-opacity));
}
.hover\\:bg-brand-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(185 56 21 / var(--tw-bg-opacity));
}
.hover\\:bg-gray-50:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}
.hover\\:text-brand-800:hover {
  --tw-text-opacity: 1;
  color: rgb(147 47 25 / var(--tw-text-opacity));
}
.hover\\:text-gray-700:hover {
  --tw-text-opacity: 1;
  color: rgb(52 64 84 / var(--tw-text-opacity));
}
.hover\\:text-gray-800:hover {
  --tw-text-opacity: 1;
  color: rgb(24 34 48 / var(--tw-text-opacity));
}
.hover\\:text-indigo-500:hover {
  --tw-text-opacity: 1;
  color: rgb(97 114 243 / var(--tw-text-opacity));
}
.focus\\:border-4:focus {
  border-width: 4px;
}
.focus\\:border-brand-300:focus {
  --tw-border-opacity: 1;
  border-color: rgb(247 178 122 / var(--tw-border-opacity));
}
.focus\\:border-error-300:focus {
  --tw-border-opacity: 1;
  border-color: rgb(253 162 155 / var(--tw-border-opacity));
}
.focus\\:border-gray-300:focus {
  --tw-border-opacity: 1;
  border-color: rgb(208 213 221 / var(--tw-border-opacity));
}
.focus\\:border-opacity-20:focus {
  --tw-border-opacity: 0.2;
}
.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.focus\\:ring:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus\\:ring-0:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus\\:ring-brand-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(247 178 122 / var(--tw-ring-opacity));
}
.focus\\:ring-brand-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(239 104 32 / var(--tw-ring-opacity));
}
.focus\\:ring-error-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(253 162 155 / var(--tw-ring-opacity));
}
.focus\\:ring-gray-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(208 213 221 / var(--tw-ring-opacity));
}
.focus\\:ring-transparent:focus {
  --tw-ring-color: transparent;
}
.focus\\:ring-opacity-25:focus {
  --tw-ring-opacity: 0.25;
}
@media (min-width: 0px) and (max-width: 767px) {

  .mobile\\:w-full {
    width: 100%;
  }

  .mobile\\:flex-col {
    flex-direction: column;
  }

  .mobile\\:flex-col-reverse {
    flex-direction: column-reverse;
  }

  .mobile\\:gap-3 {
    gap: 0.75rem;
  }

  .mobile\\:p-4 {
    padding: 1rem;
  }

  .mobile\\:pt-5 {
    padding-top: 1.25rem;
  }

  .mobile\\:pt-6 {
    padding-top: 1.5rem;
  }
}
@media (min-width: 1024px) {

  .desktop\\:block {
    display: block;
  }

  .desktop\\:flex {
    display: flex;
  }

  .desktop\\:hidden {
    display: none;
  }

  .desktop\\:h-18 {
    height: 72px;
  }

  .desktop\\:w-80 {
    width: 20rem;
  }

  .desktop\\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
`,""]);const w=u},"./storybook-config-entry.js":(a,r,t)=>{"use strict";t.r(r);var e=t("@storybook/global"),o=t("@storybook/preview-api");const l=__STORYBOOK_MODULE_CHANNELS__,n=c=>c(),u=[async c=>{if(!/^\.[\\/](?:app\/components(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.[^/]*?\/?)$/.exec(c))return;const O=c.substring(17);return t("./app/components lazy recursive ^\\.\\/.*$ include: (?:\\/app\\/components(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.[^/]*?\\/?)$")("./"+O)}];async function w(c){for(let O=0;O<u.length;O++){const k=await n(()=>u[O](c));if(k)return k}}const S=()=>(0,o.composeConfigs)([t("./node_modules/@tomfreudenberg/next-auth-mock/dist/storybook/preset/preview.js"),t("./node_modules/@storybook/react/dist/entry-preview.mjs"),t("./node_modules/@storybook/nextjs/dist/preview.mjs"),t("./node_modules/@storybook/addon-links/dist/preview.js"),t("./node_modules/@storybook/addon-essentials/dist/actions/preview.js"),t("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js"),t("./node_modules/@storybook/addon-essentials/dist/measure/preview.js"),t("./node_modules/@storybook/addon-essentials/dist/outline/preview.js"),t("./node_modules/@storybook/addon-essentials/dist/highlight/preview.js"),t("./node_modules/@storybook/addon-interactions/dist/preview.js"),t("./.storybook/preview.tsx")]),E=(0,l.createBrowserChannel)({page:"preview"});o.addons.setChannel(E),e.global.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=E);const f=new o.PreviewWeb;window.__STORYBOOK_PREVIEW__=f,window.__STORYBOOK_STORY_STORE__=f.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=E,window.__STORYBOOK_CLIENT_API__=new o.ClientApi({storyStore:f.storyStore}),f.initialize({importFn:w,getProjectAnnotations:S})},"@storybook/client-logger":a=>{"use strict";a.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":a=>{"use strict";a.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":a=>{"use strict";a.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":a=>{"use strict";a.exports=__STORYBOOK_MODULE_PREVIEW_API__}},a=>{var r=e=>a(a.s=e);a.O(0,[498],()=>r("./storybook-config-entry.js"));var t=a.O()}]);
