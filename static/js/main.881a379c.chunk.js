(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{219:function(e,a,t){e.exports=t(796)},223:function(e,a,t){},796:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(34),l=t.n(c),r=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,797)).then(function(a){var t=a.getCLS,n=a.getFID,i=a.getFCP,c=a.getLCP,l=a.getTTFB;t(e),n(e),i(e),c(e),l(e)})},s=(t(223),t(49)),o=t(212),m=t.n(o),d={particles:{number:{value:180,density:{enable:!0}},size:{value:3,random:!0,anim:{speed:4,size_min:.3}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"bottom",out_mode:"out"}}},u=function(){var e="".lsTheme,a="".lsIcon,t="".lsSnow;try{e=localStorage.getItem("theme"),a=localStorage.getItem("icon"),t=JSON.parse(localStorage.getItem("snow"))}catch(v){console.error("All Cookies blocked - Error: ".concat(v.message))}var c=Object(n.useState)(e||"light"),l=Object(s.a)(c,2),r=l[0],o=l[1],u=Object(n.useState)(a||"bx-moon"),p=Object(s.a)(u,2),E=p[0],h=p[1],_=Object(n.useState)(t),b=Object(s.a)(_,2),g=b[0],N=b[1];Object(n.useEffect)(function(){localStorage.setItem("theme",r),localStorage.setItem("icon",E),localStorage.setItem("snow",g),document.body.classList["dark"===r?"add":"remove"]("dark-theme")},[r,g,E]);var f=function(){return g&&"dark"===r&&i.a.createElement(m.a,{params:d})};return i.a.createElement("div",{className:"home__options"},"dark"===r&&i.a.createElement("i",{className:"bx bx-cloud-snow enable-snow",title:"Activate Snow",id:"snow-button",onClick:function(){return N(!g)}}),i.a.createElement(f,null),i.a.createElement("i",{className:"bx ".concat(E," change-theme"),title:"Toggle Theme",id:"theme-button",onClick:function(){o("light"===r?"dark":"light"),h("bx-sun"===E?"bx-moon":"bx-sun")}}))},p=function(e){var a=e.name,t=e.ocupation,n=e.location,c=e.email,l=e.telephone,r=e.image,s=e.date;return i.a.createElement("section",{className:"home",id:"home"},i.a.createElement("div",{className:"home__container section bd-grid"},i.a.createElement("div",{className:"home__data bd-grid"},i.a.createElement("img",{src:r,alt:"profile_image",className:"home__img"}),i.a.createElement("h1",{className:"home__title"},i.a.createElement("strong",null,a)),i.a.createElement("h3",{className:"home__profession"},t)),i.a.createElement("div",{className:"home__address bd-grid"},i.a.createElement("span",{className:"home__information"},i.a.createElement("i",{className:"bx bx-map home__icon"})," ",n),i.a.createElement("span",{className:"home__information"},i.a.createElement("i",{className:"bx bx-envelope home__icon"})," ",c),i.a.createElement("span",{className:"home__information"},i.a.createElement("i",{className:"bx bx-phone home__icon"})," ",l),i.a.createElement("span",{className:"home__information"},i.a.createElement("i",{className:"bx bx-envelope home__icon"})," ",s))),i.a.createElement(u,null))},E=function(e){var a=e.academic;return i.a.createElement("section",{className:"academic-experience section",id:"education"},i.a.createElement("h2",{className:"section-title"},"EDUCATION"),i.a.createElement("div",{className:"education__container bd-grid"},a.map(function(e){return i.a.createElement(h,Object.assign({key:e.institution},e))})))},h=function(e){var a=e.career,t=e.date,n=e.institution;return i.a.createElement("div",{className:"education__content"},i.a.createElement("div",{className:"education__time"},i.a.createElement("span",{className:"education__rounder"}),i.a.createElement("span",{className:"education__line"})),i.a.createElement("div",{className:"education__data bd-grid"},i.a.createElement("h3",{className:"education__title"},a),i.a.createElement("span",{className:"education__year"},t),i.a.createElement("span",{className:"education__studies"},n)))},_=function(e){var a=e.technicalLabel,t=e.softLabel,n=e.technicalSkills,c=e.softSkills;return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:"technical-skills section",id:"skills"},i.a.createElement("h2",{className:"section-title"},a),i.a.createElement("div",{className:"skills__content bd-grid"},i.a.createElement("ul",{className:"skills__data"},n.map(function(e){return i.a.createElement(b,{key:e,skill:e})})))),i.a.createElement("section",{className:"soft-skills section"},i.a.createElement("h2",{className:"section-title"},t),i.a.createElement("div",{className:"skills__content bd-grid"},i.a.createElement("ul",{className:"skills__data"},c.map(function(e){return i.a.createElement(b,{key:e,skill:e})})))))},b=function(e){var a=e.skill;return i.a.createElement("li",{className:"skills__name"},i.a.createElement("span",{className:"skills__circle"})," ",a)},g=function(e){var a=e.desc;return i.a.createElement("p",{className:"experience__description"},a)},N=function(e){var a=e.proyects;return i.a.createElement("section",{className:"proyects-experience section",id:"proyects"},i.a.createElement("h2",{className:"section-title"},"Training & Certificates"),i.a.createElement("div",{className:"experience__container bd-grid"},a.map(function(e){return i.a.createElement(f,Object.assign({key:e.company},e))})))},f=function(e){var a=e.name,t=e.company,n=e.period,c=e.description;return i.a.createElement("div",{className:"experience__content"},i.a.createElement("div",{className:"experience__time"},i.a.createElement("span",{className:"experience__rounder"}),i.a.createElement("span",{className:"experience__line"})),i.a.createElement("div",{className:"experience__data bd-grid"},i.a.createElement("h3",{className:"experience__title"},a," - ",t),i.a.createElement("span",{className:"experience__proyect"},n),c.map(function(e,a){return i.a.createElement(g,{key:a,desc:e})})))},v=function(e){var a=e.works;return i.a.createElement("section",{className:"work-experience section",id:"experience"},i.a.createElement("h2",{className:"section-title"},"PROFESSIONAL EXPERIENCES"),i.a.createElement("div",{className:"experience__container bd-grid"},a.map(function(e){return i.a.createElement(y,Object.assign({key:e.company},e))})))},y=function(e){var a=e.title,t=e.period,n=e.company,c=e.description;return i.a.createElement("div",{className:"experience__content"},i.a.createElement("div",{className:"experience__time"},i.a.createElement("span",{className:"experience__rounder"}),i.a.createElement("span",{className:"experience__line"})),i.a.createElement("div",{className:"experience__data bd-grid"},i.a.createElement("h3",{className:"experience__title"},a),i.a.createElement("span",{className:"experience__company"},t," | ",n),c.map(function(e,a){return i.a.createElement(g,{key:a,desc:e})})))},k=function(e){var a=e.label,t=e.social;return i.a.createElement("section",{className:"social section"},i.a.createElement("h2",{className:"section-title"},a),i.a.createElement("div",{className:"social__container bd-grid"},t.map(function(e){return i.a.createElement(x,Object.assign({key:e.name},e))})))},x=function(e){var a=e.label,t=e.url,n=e.className;return i.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer",className:"social__link"},i.a.createElement("i",{className:"bx ".concat(n," social__icon")})," ",a)},S=function(e){var a=e.label,t=e.description;return i.a.createElement("section",{className:"profile section",id:"profile"},i.a.createElement("h2",{className:"section-title"},a),i.a.createElement("p",{className:"profile__description"},t))},w=t(136),A=t(13),O=function(e){var a=e.menu,t=Object(n.useState)(!1),c=Object(s.a)(t,2),l=c[0],r=c[1],o=function(e){window.location.hash=e.target.hash,r(!l)};return i.a.createElement("header",{className:"l-header",id:"header"},i.a.createElement(w.a,null,i.a.createElement(A.b,{exact:!0,path:"/"},i.a.createElement(A.a,{to:"/#home"})),i.a.createElement("nav",{className:"nav bd-container"},i.a.createElement("span",{className:"nav__logo"},"Menu"),i.a.createElement("div",{className:l?"nav__menu show-menu":"nav__menu",id:"nav-menu"},i.a.createElement("ul",{className:"nav__list"},a.map(function(e){var a=e.label,t=e.section,n=e.className;return i.a.createElement("li",{className:"nav__item",key:a},i.a.createElement(w.b,{className:"nav__link",activeClassName:"active-link",onClick:o,to:{pathname:"/",hash:t},isActive:function(e,a){return a.hash===t}},i.a.createElement("i",{className:"bx ".concat(n," nav__icon")})," ",a))}))),i.a.createElement("div",{className:"nav__toggle",id:"nav-toggle",onClick:function(){return r(!l)}},i.a.createElement("i",{className:"bx bx-grid-alt"})))))},C=t(214),j=function(e){var a=e.name,t=e.ocupation,n=e.description;return i.a.createElement(C.a,null,i.a.createElement("title",null,a," - ",t),i.a.createElement("meta",{name:"description",content:n}))},I=(t(480),{name:"Dr. Balsam Mohammed",ocupation:"General Practitioner | DOH - HAAD license | Permanent Registeration Sudan Council | AHA accredited BLS | Golden Visa Holder",location:"United Arab  Emirates, Abu Dhabi",email:"balsamdisougi@gmail.com",telephone:"+971 552392024",image:"images/pp.jpeg",date:"    08. feb. 1987"}),M={label:"Profile",description:"Qualified medical practitioner with over 6 years of experience and a significant amount of background working in emergency departments as well as family medicine practices. I have great expectations of obtaining a position as a General Practitioner in a health institution, which will allow me to both improve the quality of care that I deliver to patients and increase the revenue that the institution brings in."},H={technicalLabel:"Medical licenses",softLabel:"Skills",technicalSkills:["Department of Health Abu Dhabi DOH / HAAD registration (HPPRF-2020-001209) (active)","Permenant registration Sudan Medical Council No. 48593 | Jun. 2016"],softSkills:["Communication & interpersonal skills","professionalism & humanism","Attentive to details","Skillfull negotiation of the healthcare system","Critical Thinkning","Scholary approch to clinical practice"]},D={label:"Languages",social:[{label:"Arabic - Mother tongue "},{label:"English - Fluent"}]},P={works:[{title:"Levard Medical Center | UAE, Abu Dhabi - Alain",period:"Nov. 2021 - Current",company:"General Practitioner",description:[""]},{title:"Almehwar Modren Medical Complex | Sudan",period:"Sep. 2018 - Sep. 2021 ",company:"General Practitioner",description:["Designed healthcare treatment programs and treatments, conducted patient examinations, and diagnostic testing.","Referred the patient to a specialist as needed.","Advised patients on self-care, dietary, and lifestyle adjustments to encourage good health and a quality lifestyle.","Prescription medications and medical care are utilized to treat diagnoses and diseases with documentation."]},{title:"Omdurman teaching Hospital | Sudan",period:"Sep. 2016 - Aug. 2018 ",company:"General Practitioner",description:["All patients in the emergency room are evaluated by collecting a thorough medical history, performing an examination, and requesting the appropriate diagnostic tests.","Individual patient's treatment strategy is decided upon."]},{title:"Federal Minsitry of Health | Sudan",period:"jan. 2014 - feb. 2016 ",company:"House Officer",description:["Three months each are devoted to medicine, pediatrics, surgery, and obstetrics and gynecology."]}],academic:[{career:"Master degree in family medicine | Egypt ",date:"Apr. 2021 - ongoing (1st year finsihed)",institution:"Bani Suef University"},{career:"Medicine and bachelor of Surgery (MBBS) | Sudan",date:"Jun. 2014",institution:"University of Gezira Faculty of Medicine"}],proyects:[{name:"BLS",company:"Cleveland Hospital | UAE, Abu Dhabi",period:"sep. 2021",description:[""]},{name:"Emergency & Trauma",company:"SKMC Hospital | UAE, Abu Dhabi",period:"Aug. 2016",description:[""]},{name:"Emergency & Trauma",company:"Ibrahim Malik Hospital | Sudan, Khartoum",period:"Dec. 2014",description:[""]}],proyects1:[{name:"BLS",company:"Cleveland Hospital | UAE, Abu Dhabi",period:"sep. 2021",description:[""]}]},L={menu:[{label:"Home",section:"#home",className:"bx-home"},{label:"Profile",section:"#profile",className:"bx-user"},{label:"Skills",section:"#skills",className:"bx-receipt"},{label:"Experiences",section:"#experience",className:"bx-briefcase-alt"},{label:"Education",section:"#education",className:"bx-book"},{label:"INTERESTS & HOBBIES",section:"#Training & Certificates",className:"bx-award"}]},T=function(){var e="(min-width: 968px)",a=Object(n.useState)(window.matchMedia(e).matches),t=Object(s.a)(a,2),c=t[0],l=t[1];Object(n.useEffect)(function(){var a=window.matchMedia(e),t=function(){return l(a.matches)};return a.addEventListener("change",t),function(){return a.removeEventListener("change",t)}},[c]);var r=I,o=M,m=H,d=D,u=P;return i.a.createElement(i.a.Fragment,null,i.a.createElement(j,Object.assign({},r,o)),!c&&i.a.createElement(O,L),i.a.createElement("main",{className:"l-main bd-container",id:"bd-container"},i.a.createElement("div",{className:"resume",id:"area-cv"},i.a.createElement("div",{className:"resume__left"},i.a.createElement(p,r),i.a.createElement(S,o),i.a.createElement(_,m),i.a.createElement(k,d)),i.a.createElement("div",{className:"resume__right"},i.a.createElement(v,u),i.a.createElement(E,u),i.a.createElement(N,u)))))};l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(T,null)),document.getElementById("root")),r()}},[[219,1,2]]]);
//# sourceMappingURL=main.881a379c.chunk.js.map