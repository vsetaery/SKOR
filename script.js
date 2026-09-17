let role="student",sDay=0,tDay=0;

const studentSchedule=[
{name:"Понедельник",date:"09.09",lessons:[
["08:00–09:35","Тестирование информационных систем","Лабораторная","Ноговицина А. В.","209",2],
["09:50–11:25","Иностранный язык в профессиональной деятельности","Практика","Васильева А. Г.","209",2],
["11:40–13:15","Разработка мобильных приложений","Лабораторная","Потапов М. А.","209",2],
["15:50–17:25","Сертификация информационных систем","Лекция","Корякин А. В.","1",1]]},
{name:"Вторник",date:"10.09",lessons:[
["09:50–11:25","Правовое обеспечение профессиональной деятельности","Лекция","Има Марковна Алексеева","305",2],
["11:40–13:15","Экономика отрасли","Практика","Тамара Михайловна Майзик","214",1]]},
{name:"Среда",date:"11.09",lessons:[
["08:00–09:35","Физическая культура","Практика","Иван Иванович Новгородов","Спортзал",2],
["11:40–13:15","Иностранный язык в профессиональной деятельности","Практика","Виктория Викторовна Софронова","209",2],
["15:50–17:25","Учебная практика","Практика","Мария Гаврильевна Окоютова","Лаб. 2",0]]},
{name:"Четверг",date:"12.09",lessons:[
["13:30–15:05","Разработка мобильных приложений","Лабораторная","Потапов М. А.","209",2]]},
{name:"Пятница",date:"13.09",lessons:[
["08:00–09:35","Основы философии","Лекция","Мокунова А. А.","3",1],
["09:50–11:25","Сертификация информационных систем","Практика","Корякин А. В.","1",2],
["11:40–13:15","Экономика отрасли","Практика","Тамара Михайловна Майзик","214",2],
["15:50–17:25","Тестирование информационных систем","Лабораторная","Ноговицина А. В.","209",1]]},
{name:"Суббота",date:"14.09",lessons:[
["09:50–11:25","Правовое обеспечение профессиональной деятельности","Практика","Има Марковна Алексеева","305",2],
["11:40–13:15","Учебная практика","Практика","Мария Гаврильевна Окоютова","Лаб. 2",2]]},
{name:"Воскресенье",date:"15.09",lessons:[]}
];

const teacherSchedule=[
{name:"Понедельник",date:"09.09",lessons:[
["08:00–09:35","Тестирование информационных систем","Лабораторная","ИСИП-24-4","209",2],
["11:40–13:15","Разработка мобильных приложений","Лабораторная","ИСИП-24-5","209",2]]},
{name:"Вторник",date:"10.09",lessons:[
["09:50–11:25","Разработка мобильных приложений","Лекция","ИСИП-24-6","209",2]]},
{name:"Среда",date:"11.09",lessons:[
["11:40–13:15","Разработка мобильных приложений","Лабораторная","ИСИП-24-5","209",2],
["15:50–17:25","Разработка мобильных приложений","Лабораторная","ИСИП-24-4","209",2],
["17:40–19:15","Разработка мобильных приложений","Практика","ИСИП-24-6","209",1]]},
{name:"Четверг",date:"12.09",lessons:[
["13:30–15:05","Разработка мобильных приложений","Лабораторная","ИСИП-24-5","209",2]]},
{name:"Пятница",date:"13.09",lessons:[
["08:00–09:35","Разработка мобильных приложений","Практика","ИСИП-24-4","209",2],
["09:50–11:25","Разработка мобильных приложений","Лабораторная","ИСИП-24-5","209",1]]},
{name:"Суббота",date:"14.09",lessons:[
["09:50–11:25","Разработка мобильных приложений","Практика","ИСИП-24-6","209",2],
["11:40–13:15","Разработка мобильных приложений","Лабораторная","ИСИП-24-4","209",2]]},
{name:"Воскресенье",date:"15.09",lessons:[]}
];

const subjects=[
["ОГСЭ.04 Иностранный язык в профессиональной деятельности","Виктория Викторовна Софронова",17,15,32],
["ОГСЭ.05 Физическая культура","Иван Иванович Новгородов",16,14,30],
["ОП.05 Правовое обеспечение профессиональной деятельности","Има Марковна Алексеева",15,13,28],
["ОП.07 Экономика отрасли","Тамара Михайловна Майзик",14,12,26],
["ПМ.03 Учебная практика","Мария Гаврильевна Окоютова",18,17,35],
["МДК.01.01 Теория и методика преподавания информатики","А. А. Мокунова",16,14,30]
];

const courses=[
["ОГСЭ.04 Иностранный язык в профессиональной деятельности","Виктория Викторовна Софронова",5,5],
["ОГСЭ.05 Физическая культура","Иван Иванович Новгородов",2,2],
["ОП.05 Правовое обеспечение профессиональной деятельности","Има Марковна Алексеева",4,4],
["ОП.07 Экономика отрасли","Тамара Михайловна Майзик",3,3],
["ПМ.03 Учебная практика","Мария Гаврильевна Окоютова",0,6],
["МДК.01.01 Теория и методика преподавания информатики","А. А. Мокунова",4,4]
];

const names=[
"Алексеева Анастасия Михайловна","Антипин Петр Ильич","Васильева Александра Эдуардовна","Высоцкая Анастасия Михайловна",
"Григорьева Анита Алексеевна","Ефремов Александр Андреевич","Заровняев Вячеслав Анатольевич","Иванова Айна Алексеевна",
"Иванова Анастасия Борисовна","Калачиков Никита Юрьевич","Лыткин Егор Никитович","Макаров Сулус Андреевич",
"Махарова Любовь Ивановна","Налесник Евгений Иванович","Наумов Георгий Александрович","Павлов Айаал Алексеевич",
"Созонов Даниил Евгеньевич","Соломонов Айхал Тимурович","Степанов Соломон Станиславович","Черкашин Вячеслав Алексеевич",
"Сидорова Мария Петровна","Сидоров Алексей Николаевич","Федорова Ксения Андреевна"
];

const teacherGrades={};
const gradeDates=["08.09.2025","15.09.2025","22.09.2025","29.09.2025","06.10.2025"];
function getGrades(g){
 if(!teacherGrades[g]) teacherGrades[g]=names.map((_,i)=>gradeDates.map((__,j)=> i%7===0?1:i%5===0?0:2));
 return teacherGrades[g];
}


function setRole(r){role=r;studentRole.classList.toggle("active",r==="student");teacherRole.classList.toggle("active",r==="teacher");studentFields.classList.toggle("hidden",r!=="student");teacherFields.classList.toggle("hidden",r!=="teacher");demoHint.textContent=r==="student"?"Демо: ivanova.ab / 1234":"Демо: potapov / 4321"}
function login(){
 if(role==="student"){
  if(studentLogin.value!=="ivanova.ab"||studentPassword.value!=="1234"){showToast("Неверный ID или пароль");return}
  loginPage.classList.add("hidden");studentApp.classList.remove("hidden");initStudent();
 }else{
  if(teacherLogin.value!=="potapov"||teacherPassword.value!=="4321"){showToast("Неверный логин или пароль");return}
  loginPage.classList.add("hidden");teacherApp.classList.remove("hidden");initTeacher();
 }
}
function logout(){studentApp.classList.add("hidden");teacherApp.classList.add("hidden");loginPage.classList.remove("hidden");}
function studentPage(id,btn){document.querySelectorAll("#studentApp .page").forEach(x=>x.classList.remove("active"));document.getElementById(id).classList.add("active");document.querySelectorAll("#studentApp .nav-item").forEach(x=>x.classList.remove("active"));btn.classList.add("active");window.scrollTo(0,0)}
function teacherPage(id,btn){document.querySelectorAll("#teacherApp .page").forEach(x=>x.classList.remove("active"));document.getElementById(id).classList.add("active");document.querySelectorAll("#teacherApp .nav-item").forEach(x=>x.classList.remove("active"));btn.classList.add("active");window.scrollTo(0,0);if(id==="tReport")renderTeacherGroups()}
function strip(data,current,prefix){let short=["Пн","Вт","Ср","Чт","Пт","Сб","Вс"];return data.map((d,i)=>`<button class="day-chip ${i===current?'active':''}" onclick="${prefix}(${i})">${short[i]}<b>${9+i}</b></button>`).join("")}
function renderStudent(){sDayStrip.innerHTML=strip(studentSchedule,sDay,"selectStudentDay");let d=studentSchedule[sDay];sDayName.textContent=d.name;sDayDate.textContent=d.date;sLessons.innerHTML=d.lessons.length?d.lessons.map((l,i)=>lessonHTML(l,i,"student")).join(""):'<div class="empty">На этот день занятий нет 🌿</div>'}
function lessonHTML(l,i,mode){return `<article class="lesson" onclick="${mode==="student"?`openStudentLesson(${i})`:`openAttendance(${i})`}"><div class="lesson-top"><div class="time ${i%3===1?'orange':''}">${l[0].replace("–","<br>")}</div><div class="lesson-content"><span class="type">${l[2]}</span><div class="lesson-title">${l[1]}</div><div class="meta">♙ ${l[3]}<br>⌖ Ауд. ${l[4]}</div></div><div class="points">+${l[5]}</div></div></article>`}
function selectStudentDay(i){sDay=i;renderStudent()}function changeStudentDay(x){sDay=(sDay+x+7)%7;renderStudent()}
function initStudent(){renderStudent();renderStudentReport();renderCourses();updateProfileCard("student",profileData("student"))}
function renderStudentReport(){studentSubjects.innerHTML=subjects.map((s,i)=>`<article class="subject-card" onclick="openSubjectReport(${i})"><div class="subject-head"><div class="subject-icon">${i%2?"◉":"△"}</div><div class="subject-name">${s[0]}<div class="subject-teacher">Преподаватель: ${s[1]}</div></div><b>›</b></div><div class="score-row"><div><span>Посещение</span><b>${s[2]}</b></div><div><span>Работа</span><b>${s[3]}</b></div><div><span>Итого</span><b>${s[4]}</b></div></div></article>`).join("")}
function openSubjectReport(i){
 const s=subjects[i];
 const detail=document.getElementById("sReportDetail");
 detail.innerHTML=`<button class="detail-back" onclick="studentPage(\'sReport\',document.querySelectorAll(\'#studentApp .nav-item\')[1])">‹ Назад</button>
 <div class="subject-detail-hero"><div class="subject-detail-icon">${i%2?"◉":"△"}</div><div><div class="detail-eyebrow">5 СЕМЕСТР · 2026/2027</div><h1>${s[0]}</h1><p class="muted">Преподаватель: ${s[1]}</p><b class="subject-total">Итого за предмет · ${s[4]} баллов</b></div></div>
 <h2>Балльно-рейтинговая ведомость</h2>
 <div class="rating-table"><div class="rating-row rating-head"><span>Показатель</span><span>Практика</span><span>Лекции</span><span>Всего</span></div><div class="rating-row"><span>Посещение</span><b>${Math.max(0,s[2]-1)}</b><b>${Math.min(s[2],9)}</b><b>${s[2]}</b></div><div class="rating-row"><span>Работа</span><b>${Math.max(0,s[3]-1)}</b><b>${Math.min(s[3],8)}</b><b>${s[3]}</b></div><div class="rating-row rating-total"><span>Итого</span><b>${Math.max(0,s[2]+s[3]-2)}</b><b>${Math.min(s[2],9)+Math.min(s[3],8)}</b><b>${s[4]}</b></div></div>
 <h2>Правило начисления</h2><div class="rule-card">За каждую пару можно получить <b>2 балла</b>: 1 за посещение и 1 за работу. Был на занятии, но работу не сдал — <b>1 балл</b>. Не был — <b>0 баллов</b>.</div>`;
 studentPage("sReportDetail",document.querySelectorAll("#studentApp .nav-item")[1]);
}

function renderCourses(){
 const icons=["△","◉","▣","▤","□","≋"];
 studentCourses.innerHTML=courses.map((c,i)=>`<article class="course-card polished-course" onclick="openCourse(${i})">
   <div class="course-icon ${i%3===1?'orange':''}">${icons[i%icons.length]}</div>
   <div class="course-main"><div class="course-name">${c[0]}</div><div class="subject-teacher">Преподаватель: ${c[1]}</div>
   <div class="course-meta"><span>▤ ${c[2]} лек.</span><span>♙ ${c[3]} практ.</span></div></div><span class="course-arrow">›</span>
 </article>`).join("")
}
function openStudentLesson(i){let l=studentSchedule[sDay].lessons[i];sDetail.innerHTML=`<button class="detail-back" onclick="studentPage('sSchedule',document.querySelector('#studentApp .nav-item'))">‹ Назад</button><div class="detail-box"><div class="detail-title">${l[1]}</div><p class="muted">${l[2]} · ${l[0]}</p><p class="muted">${l[3]} · ауд. ${l[4]}</p><div class="score-row"><div><span>Посещение</span><b>${l[5]?1:0}/1</b></div><div><span>Работа</span><b>${l[5]===2?1:0}/1</b></div><div><span>Итого</span><b>${l[5]}/2</b></div></div><button class="login-btn" onclick="openMaterials()">📎 Материалы занятия</button></div>`;studentPage("sDetail")}
function openMaterials(){sMaterials.innerHTML=`<button class="detail-back" onclick="studentPage('sDetail',document.querySelector('#studentApp .nav-item'))">‹ Назад</button><h1>Материалы занятия</h1><p class="muted">Закреплённые преподавателем материалы</p>${["Курс лекций","Лекция 1","Лекция 2","Практическая работа 1","Практическая работа 2"].map((x,i)=>`<div class="material" onclick="showToast('Открыт файл: ${x}.pdf')"><div class="material-icon">▣</div><div><b>${x}</b><small>PDF · закреплено</small></div><span>›</span></div>`).join("")}`;studentPage("sMaterials")}
let activeCourseTab=0;
function openCourse(i){
 let c=courses[i];
 let lectures=["Курс лекций","Лекция 1","Лекция 2","Лекция 3","Лекция 4","Лекция 5"].slice(0,c[2]+1);
 let practices=["Практическая работа 1","Практическая работа 2","Практическая работа 3","Практическая работа 4","Практическая работа 5","Практические работы"].slice(0,c[3]);
 activeCourseTab=0;
 window.currentCourseIndex=i;
 renderCourseContent(i,lectures,practices);
 studentPage("sDetail",document.querySelectorAll('#studentApp .nav-item')[2]);
}
function switchCourseTab(tab){
 activeCourseTab=tab;
 let i=window.currentCourseIndex;
 if(i===undefined) i=0;
 let c=courses[i];
 let lectures=["Курс лекций","Лекция 1","Лекция 2","Лекция 3","Лекция 4","Лекция 5"].slice(0,c[2]+1);
 let practices=["Практическая работа 1","Практическая работа 2","Практическая работа 3","Практическая работа 4","Практическая работа 5","Практические работы"].slice(0,c[3]);
 renderCourseContent(i,lectures,practices);
}
function renderCourseContent(i,lectures,practices){
 window.currentCourseIndex=i;
 let c=courses[i];
 let list=activeCourseTab===0?lectures:practices;
 let isLecture=activeCourseTab===0;
 sDetail.innerHTML=`
 <button class="detail-back" onclick="studentPage('sCourses',document.querySelectorAll('#studentApp .nav-item')[2])">‹ Назад к моим курсам</button>
 <div class="course-hero">
   <div class="course-hero-icon">△</div>
   <div><div class="course-code">5 СЕМЕСТР · 2026/2027</div><div class="course-detail-name">${c[0]}</div><p class="muted">Преподаватель: ${c[1]}</p></div>
 </div>
 <div class="course-tabs">
   <button class="${isLecture?'active':''}" onclick="switchCourseTab(0)">Лекции <b>${lectures.length}</b></button>
   <button class="${!isLecture?'active':''}" onclick="switchCourseTab(1)">Практики <b>${practices.length}</b></button>
 </div>
 <div class="course-material-card">
   <div class="course-section-heading">
     <span class="section-mark ${isLecture?'':'orange-mark'}">${isLecture?'Т':'П'}</span>
     <div><b>${isLecture?'Теоретический блок':'Практический блок'}</b><small>${isLecture?'Учебные материалы и лекции':'Практические и лабораторные работы'}</small></div>
   </div>
   ${list.length?list.map((x,k)=>`<div class="material polished-material" onclick="showToast('Открыт файл: ${x}.pdf')"><div class="material-icon ${isLecture?'':'orange-material'}">▣</div><div><b>${x}</b><small>${isLecture?(k===0?'Полный курс · PDF':'Лекция · PDF'):'Практика · PDF'} · закреплено преподавателем</small></div><span>›</span></div>`).join(''):`<div class="empty">${isLecture?'Лекций пока нет':'Практических работ пока нет'}</div>`}
 </div>`;
}

function renderTeacher(){tDayStrip.innerHTML=strip(teacherSchedule,tDay,"selectTeacherDay");let d=teacherSchedule[tDay];tDayName.textContent=d.name;tDayDate.textContent=d.date;tLessons.innerHTML=d.lessons.length?d.lessons.map((l,i)=>lessonHTML(l,i,"teacher")).join(""):'<div class="empty">Занятий нет</div>'}
function selectTeacherDay(i){tDay=i;renderTeacher()}function changeTeacherDay(x){tDay=(tDay+x+7)%7;renderTeacher()}function initTeacher(){renderTeacher();renderTeacherGroups();updateProfileCard("teacher",profileData("teacher"))}
function renderTeacherGroups(){teacherGroups.innerHTML=["ИСИП-24-1","ИСИП-24-2","ИСИП-24-3","ИСИП-24-4","ИСИП-24-5","ИСИП-24-6"].map(g=>`<button onclick="openGroup('${g}')"><b>${g}</b><small>22–25 студентов</small></button>`).join("")}
function openAttendance(i){let l=teacherSchedule[tDay].lessons[i];attendance.innerHTML=`<button class="detail-back" onclick="teacherPage('tSchedule',document.querySelector('#teacherApp .nav-item'))">‹ Назад к расписанию</button><div class="attendance-head"><div><div class="attendance-title">${l[1]}</div><p class="muted">${l[2]} · ${l[3]} · ауд. ${l[4]}</p></div><button class="save-btn" onclick="saveAttendance()">Сохранить</button></div><div class="date-badge">📅 ${teacherSchedule[tDay].date} · Максимум за пару: 2 балла</div><div class="student-list"><div class="student-row header"><div class="student-num">№</div><div class="student-name">Ф.И.О. студента</div><div>Балл</div></div>${names.map((n,j)=>`<div class="student-row"><div class="student-num">${j+1}</div><div class="student-name">${n}</div><div><input class="points-input" type="number" min="0" max="2" value="${j%5===0?1:2}"></div></div>`).join("")}</div><p class="report-caption">0 — отсутствовал · 1 — был на занятии, но не показал работу · 2 — посещение + работа</p>`;teacherPage("attendance")}
function saveAttendance(){showToast("Баллы сохранены");}
function openGroup(g){document.getElementById("groupReport").innerHTML=`<button class="detail-back" onclick="document.getElementById('groupReport').innerHTML=''">‹ К списку групп</button>`+groupReportHTML(g);teacherPage("tReport",document.querySelectorAll("#teacherApp .nav-item")[1])}
function groupReportHTML(g){
 let grades=getGrades(g);
 return `<div class="report-caption"><b>Группа: ${g}</b><br>Баллы за занятия. Максимум за одно занятие — 2 балла.</div><div class="report-table-wrap"><table class="report-table editable-report"><tr><th>№</th><th>Ф.И.О.</th>${gradeDates.map(d=>`<th>${d}</th>`).join("")}<th class="att">Итого</th></tr>${names.map((n,i)=>`<tr><td>${i+1}</td><td class="name">${n}</td>${gradeDates.map((_,j)=>`<td><input class="report-points-input" type="number" min="0" max="2" step="1" value="${grades[i][j]}" data-group="${g}" data-student="${i}" data-date="${j}" oninput="updateReportTotal(this)"></td>`).join("")}<td class="att total" id="total-${g}-${i}">${grades[i].reduce((a,b)=>a+b,0)}</td></tr>`).join("")}</table></div><div class="report-actions"><button class="save-btn" onclick="saveGroupReport('${g}')">Сохранить баллы</button></div><p class="report-caption">0 — отсутствовал · 1 — только посещение · 2 — посещение + работа</p>`
}
function updateReportTotal(input){let g=input.dataset.group,i=+input.dataset.student,j=+input.dataset.date;let v=Math.max(0,Math.min(2,Number(input.value)||0));input.value=v;let grades=getGrades(g);grades[i][j]=v;document.getElementById(`total-${g}-${i}`).textContent=grades[i].reduce((a,b)=>a+b,0)}
function saveGroupReport(g){let inputs=document.querySelectorAll(`.report-points-input[data-group="${g}"]`);inputs.forEach(input=>{let i=+input.dataset.student,j=+input.dataset.date;getGrades(g)[i][j]=Math.max(0,Math.min(2,Number(input.value)||0));});showToast(`Баллы группы ${g} сохранены`)}

function openProfileTab(id){
 const pages=["sProfile","sNotifications","sSupport","sEditProfile","sAbout"];
 document.querySelectorAll("#studentApp .page").forEach(x=>x.classList.remove("active"));
 document.getElementById(id).classList.add("active");
 document.querySelectorAll("#studentApp .nav-item").forEach(x=>x.classList.remove("active"));
 document.querySelectorAll("#studentApp .nav-item")[3].classList.add("active");
 renderProfileTab(id,"student");window.scrollTo(0,0);
}
function openTeacherProfileTab(id){
 document.querySelectorAll("#teacherApp .page").forEach(x=>x.classList.remove("active"));
 document.getElementById(id).classList.add("active");
 document.querySelectorAll("#teacherApp .nav-item").forEach(x=>x.classList.remove("active"));
 document.querySelectorAll("#teacherApp .nav-item")[3].classList.add("active");
 renderProfileTab(id,"teacher");window.scrollTo(0,0);
}
function profileBack(roleName){if(roleName==="student") studentPage("sProfile",document.querySelectorAll("#studentApp .nav-item")[3]);else teacherPage("tProfile",document.querySelectorAll("#teacherApp .nav-item")[3]);}

const defaultProfiles={
 student:{name:"Иванова Алина Борисовна",login:"ivanova.ab",group:"ИСИП-24-5",email:"ivanova@skor.ru"},
 teacher:{name:"Потапов Максим Андреевич",login:"potapov",group:"Преподаватель",email:"potapov@skor.ru"}
};
function profileData(who){
 const key="skorProfile_"+who;
 try{return {...defaultProfiles[who],...(JSON.parse(localStorage.getItem(key)||"{}"))}}catch(e){return {...defaultProfiles[who]}}
}
function saveProfile(who){
 const prefix=who==="teacher"?"t":"s";
 const data={name:document.getElementById(prefix+"ProfileName").value.trim(),login:document.getElementById(prefix+"ProfileLogin").value.trim(),group:document.getElementById(prefix+"ProfileGroup").value.trim(),email:document.getElementById(prefix+"ProfileEmail").value.trim()};
 if(!data.name||!data.login||!data.email){showToast("Заполните обязательные поля");return}
 localStorage.setItem("skorProfile_"+who,JSON.stringify(data));
 updateProfileCard(who,data);showToast("Профиль сохранён");
}
function updateProfileCard(who,data){
 const root=document.getElementById(who==="student"?"studentApp":"teacherApp");
 const card=root.querySelector(who==="student"?"#sProfile .profile-card":"#tProfile .profile-card");
 if(card){
   const initials=data.name.split(/\s+/).slice(0,2).map(x=>x[0]).join("").toUpperCase();
   card.querySelector(".avatar").textContent=initials;
   card.querySelector("h2").textContent=data.name;
   card.querySelector(".muted").textContent=who==="student"?"Студентка · "+data.group:"Преподаватель";
   if(who==="student"){
     const groupStat=card.querySelector(".profile-stats > div:first-child b");
     if(groupStat) groupStat.textContent=data.group;
   }
 }
}
function renderProfileTab(id,who){
 const el=document.getElementById(id); const data=profileData(who); const teacher=who==="teacher";
 const back=`<button class="detail-back" onclick="profileBack('${who}')">‹ Назад в профиль</button>`;
 if(id.endsWith("Notifications")){
   el.innerHTML=back+`<div class="subpage-hero"><div class="subpage-icon">♧</div><div><span>Центр событий</span><h1>Уведомления</h1><p>Здесь появляются новости СКОР и важные события аккаунта</p></div><b class="hero-badge">3</b></div>
   <div class="notification-toolbar"><b>Последние события</b><button onclick="showToast('Все уведомления отмечены прочитанными')">Прочитать все</button></div>
   <div class="notice-card unread"><div class="notice-icon orange-icon">♧</div><div class="notice-content"><div class="notice-top"><b>Новый вход в систему</b><span>сейчас</span></div><p>Выполнен вход в аккаунт ${data.login}. Если это были не вы, обратитесь в поддержку.</p><div class="notice-tag">Безопасность аккаунта</div></div></div>
   <div class="notice-card"><div class="notice-icon">▣</div><div class="notice-content"><div class="notice-top"><b>Обновлены материалы курса</b><span>вчера</span></div><p>В курсе «Разработка мобильных приложений» появились новые материалы от преподавателя.</p><div class="notice-tag soft">Учебные материалы</div></div></div>
   <div class="notice-card"><div class="notice-icon">◷</div><div class="notice-content"><div class="notice-top"><b>Расписание обновлено</b><span>12 сент.</span></div><p>Проверьте актуальное расписание занятий. Изменения доступны в разделе «Расписание».</p><div class="notice-tag soft">Расписание</div></div></div>
   <div class="notice-card"><div class="notice-icon">★</div><div class="notice-content"><div class="notice-top"><b>Добро пожаловать в СКОР</b><span>10 сент.</span></div><p>Ваш электронный дневник готов. Следите за баллами, материалами и расписанием в одном месте.</p><div class="notice-tag soft">СКОР</div></div></div>`;
 } else if(id.endsWith("Support")){
   el.innerHTML=back+`<div class="subpage-hero support-hero"><div class="subpage-icon">?</div><div><span>Помощь пользователям</span><h1>Поддержка</h1><p>Ответим на вопросы по СКОР и вашему аккаунту</p></div><div class="online-dot">● онлайн</div></div>
   <div class="support-top"><div><b>Чат поддержки</b><small>Обычно отвечаем в течение нескольких минут</small></div><span>09:00–18:00</span></div>
   <div class="chat-box"><div class="chat-date">Сегодня</div><div class="chat-message support"><div class="chat-avatar">СК</div><div><b>Поддержка СКОР</b><p>Здравствуйте! 👋 Я помогу разобраться с расписанием, баллами, курсами или профилем.</p><small>14:18 · прочитано</small></div></div><div class="chat-message user"><div><p>Здравствуйте! У меня вопрос по баллам за занятие.</p><small>14:20 · прочитано</small></div></div><div id="supportMessages"></div></div>
   <div class="quick-help"><span>Быстрый вопрос</span><button onclick="fillSupport('Не отображается оценка за занятие')">Баллы</button><button onclick="fillSupport('Не вижу нужный материал')">Материалы</button><button onclick="fillSupport('У меня не открывается расписание')">Расписание</button></div>
   <div class="chat-input"><input id="supportInput" placeholder="Напишите сообщение..."><button onclick="sendSupportMessage()">➤</button></div>`;
 } else if(id.endsWith("EditProfile")){
   const initials=data.name.split(/\s+/).slice(0,2).map(x=>x[0]).join("").toUpperCase();
   el.innerHTML=back+`<div class="subpage-hero edit-hero"><div class="edit-avatar">${initials}</div><div><span>Личные данные</span><h1>Редактировать профиль</h1><p>Обновите информацию, которая отображается в вашем профиле</p></div></div>
   <div class="edit-card"><div class="card-heading"><div><b>Основная информация</b><small>Эти данные можно изменить в любое время</small></div><span>✎</span></div>
   <label>Фамилия и имя</label><div class="field-wrap"><span>А</span><input id="${teacher?'t':'s'}ProfileName" value="${data.name}"></div>
   <label>Логин / ID</label><div class="field-wrap"><span>@</span><input id="${teacher?'t':'s'}ProfileLogin" value="${data.login}"></div>
   <label>Группа</label><div class="field-wrap"><span>⌂</span><input id="${teacher?'t':'s'}ProfileGroup" value="${data.group}" ${teacher?'disabled':''}></div>
   <label>Электронная почта</label><div class="field-wrap"><span>✉</span><input id="${teacher?'t':'s'}ProfileEmail" type="email" value="${data.email}"></div>
   <div class="edit-note">Изменения сохраняются локально в этом прототипе и остаются после повторного открытия страницы.</div>
   <button class="login-btn save-profile-btn" onclick="saveProfile('${who}')">Сохранить изменения</button></div>
   <div class="security-card"><div class="security-icon">✓</div><div><b>Профиль защищён</b><p>Не передавайте пароль другим людям. СКОР не запрашивает пароль в сообщениях поддержки.</p></div></div>`;
 } else {
   el.innerHTML=back+`<div class="about-hero"><div class="about-mark">СКОР</div><div><span>Электронный дневник</span><h1>О приложении</h1><p>Учёба, расписание и баллы — в одном месте.</p></div></div>
   <div class="about-card"><div class="about-intro"><div class="mini-logo">СК</div><div><b>СКОР — электронный дневник</b><p>Приложение создано для удобной работы студентов и преподавателей с учебным процессом.</p></div></div>
   <div class="about-grid"><div><span>Версия</span><b>1.0.0</b></div><div><span>Семестр</span><b>5 · 2026/2027</b></div><div><span>Балльная система</span><b>0–2 за пару</b></div><div><span>Платформа</span><b>Web / Mobile</b></div></div>
   <div class="feature-list"><div><span>◷</span><div><b>Расписание</b><small>Актуальные пары с аудиторией и типом занятия.</small></div></div><div><span>★</span><div><b>Баллы</b><small>1 балл за посещение и 1 за выполненную работу.</small></div></div><div><span>▣</span><div><b>Курсы</b><small>Лекции и практические материалы по каждому предмету.</small></div></div></div>
   <div class="about-note">СКОР — учебный прототип интерфейса электронного дневника. Данные в текущей версии демонстрационные.</div></div>`;
 }
}
function fillSupport(text){const input=document.getElementById("supportInput");if(input){input.value=text;input.focus();}}
function sendSupportMessage(){let input=document.getElementById("supportInput");if(!input||!input.value.trim())return;let box=document.getElementById("supportMessages");box.insertAdjacentHTML("beforeend",`<div class="chat-message user"><div><p>${input.value.replace(/[<>]/g,'')}</p><small>только что · отправлено</small></div></div>`);input.value="";showToast("Сообщение отправлено");setTimeout(()=>{if(document.getElementById("supportMessages"))document.getElementById("supportMessages").insertAdjacentHTML("beforeend",`<div class="chat-message support"><div class="chat-avatar">СК</div><div><b>Поддержка СКОР</b><p>Сообщение получено. Мы уже смотрим ваш вопрос.</p><small>только что</small></div></div>`);},700)}
function showToast(t){let x=document.getElementById("toast");x.textContent=t;x.classList.add("show");clearTimeout(window.tt);window.tt=setTimeout(()=>x.classList.remove("show"),1700)}
