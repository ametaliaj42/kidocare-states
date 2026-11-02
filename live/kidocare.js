/* Shared Kidocare pieces: tokens live in kidocare.css; icons, the two children and shared components here. */
/* ---------- icons ---------- */
const P={
 steth:'<path d="M11 2v2M5 2v2M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/>',
 pill:'<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>',
 flask:'<path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"/><path d="M6.453 15h11.094"/><path d="M8.5 2h7"/>',
 video:'<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
 home:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9v11h14V9"/><path d="M12 11v6M9 14h6"/>',
 refresh:'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
 zap:'<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M5 21a7 7 0 0 1 14 0"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 chev:'<path d="m9 18 6-6-6-6"/>', back:'<path d="m15 18-6-6 6-6"/>',
 tri:'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
 alert:'<circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/>',
 arrow:'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>', x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
 file:'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>',
 info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
 chat:'<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
 eye:'<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
 send:'<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',
 search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
 plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',
 xc:'<circle cx="12" cy="12" r="10" fill="currentColor" stroke="none"/><path d="m15 9-6 6M9 9l6 6" stroke="#fff"/>',
 pulse:'<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>'
};
const I=(n,c='')=>`<svg class="i ${c}" viewBox="0 0 24 24">${P[n]}</svg>`;
const X=(c='x')=>`<svg class="${c}" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 0L100 100M100 0L0 100"/></svg>`;

/* ---------- data: the two fixed children ---------- */
const NOA={code:'KDC-1107-3021',father:'Ardit',avatar:'img/monkey.png',guardians:[['Klea Leka','Nëna',1]],consults:[],name:'Noa Leka',gender:'Mashkull',guardian:['Klea Leka','nëna'],dob:'14.03.2024',city:'Durrës',
  w:'12.4',h:'88',age:['2','7'],measured:'03.10',allergies:[],vacc:'ok',dx:[],meds:[],tests:[]};
const ANISA={code:'KDC-0115-8862',father:'Gentian',avatar:'img/bunny.png',guardians:[['Valbona Xhaferraj','Nëna',1],['Gentian Gjonbalaj','Babai'],['Drita Xhaferraj','Gjyshja']],
  chronic:['Astmë bronkiale','Dermatit atopik','Celiaki'],current:['Salbutamol 100 mcg','Flutikazon 125 mcg','Krem hidrokortizon','Cetirizinë'],
  consults:[['Përkeqësim i astmës','22.10'],['Dermatit atopik','12.07'],['Bronkit akut','03.02'],['Urtikarie','2025'],['Gastroenterit akut','2024']],
  name:'Anisa Marjeta Xhaferraj-Gjonbalaj',gender:'Femër',guardian:['Valbona Xhaferraj','nëna'],dob:'09.07.2018',city:'Vlorë',
  w:'24.8',h:'128',age:['8','3'],measured:'20.10',allergies:['Penicilinë','Kikirikë','Proteina e qumështit të lopës'],vacc:'ok',
  dx:[
   {t:'Astmë bronkiale',d:'Që nga 2021',k:1,src:'video'},
   {t:'Dermatit atopik',d:'Që nga 2019',k:1,src:'home',out:1},
   {t:'Celiaki',d:'Që nga 2024',k:1,src:'home',out:1},
   {t:'Përkeqësim i astmës',d:'22.10',me:1,src:'video'},
   {t:'Bronkit akut',d:'03.02',me:1,src:'video'},
   {t:'Urtikarie',d:'2025',me:1,src:'video'},
   {t:'Faringjit viral',d:'2025',src:'video'},
   {t:'Gastroenterit akut',d:'2024',me:1,src:'video'},
   {t:'Otit akut',d:'2024',src:'video'},
   {t:'Pneumoni',d:'2023',src:'home',out:1}],
  meds:[
   {t:'Salbutamol 100 mcg',d:'Që nga 2021',f:'Astmë bronkiale'},
   {t:'Flutikazon 125 mcg',d:'Që nga 22.10',f:'Përkeqësim i astmës'},
   {t:'Krem hidrokortizon',d:'Që nga 2024',f:'Dermatit atopik'},
   {t:'Cetirizinë'},
   {t:'Prednizolon',d:'Deri më 07.02',f:'Bronkit akut',past:1},
   {t:'Azitromicinë',d:'Deri më 05.02',f:'Bronkit akut',past:1},
   {t:'Montelukast',d:'Deri në 2024',f:'Astmë bronkiale',past:1},
   {t:'Loratadinë',d:'Deri në 2025',f:'Urtikarie',past:1},
   {t:'Amoksicilinë',d:'Deri në 2023',f:'Pneumoni',past:1}],
  tests:[
   {t:'Spirometri',f:'Përkeqësim i astmës',d:'22.10',wait:1},
   {t:'IgE specifike',f:'Përkeqësim i astmës',d:'22.10',k:'PDF'},
   {t:'Antitrupa anti-tTG',f:'Celiaki',d:'2025',k:'Foto'},
   {t:'Hemogram i plotë',f:'Urtikarie',d:'2025',k:'PDF'},
   {t:'Analizë urine',f:'Gastroenterit akut',d:'2024',k:'PDF'},
   {t:'Ferritinë',f:'Celiaki',d:'2024',k:'PDF'},
   {t:'Glicemi',d:'2024',k:'PDF'},
   {t:'Grafi toraksi',d:'2023',k:'Foto'}]};

/* ---------- components ---------- */
const statusBar=()=>`<div class="sb"><span>9:41</span><span class="ic"><span class="sig"><i style="height:4px"></i><i style="height:6px"></i><i style="height:8px"></i><i style="height:11px"></i></span><svg width="17" height="12" viewBox="0 0 17 12"><path d="M8.5 11.2 6.2 8.9a3.3 3.3 0 0 1 4.6 0Z M3.9 6.6a6.5 6.5 0 0 1 9.2 0l-1.4 1.4a4.5 4.5 0 0 0-6.4 0Z M1.6 4.3a9.7 9.7 0 0 1 13.8 0L14 5.7a7.7 7.7 0 0 0-11 0Z" fill="#0E1B3D"/></svg><span class="bat"></span></span></div>`;
const header=(t,big=true)=>`<div class="hd"><span class="back">${I('back')}</span>${big?`<h1>${t}</h1>`:`<span class="t">${t}</span>`}</div>`;

function gjCard(c,o={}){
  const meas=o.stale?`<div class="mdate stale">${I('clock')}Matur në 2024</div>`:`<div class="mdate">Matur më ${c.measured}</div>`;
  const tiles=`<div class="tiles"><div class="tile"><small>Pesha</small><b>${c.w}<span>kg</span></b></div><div class="tile"><small>Gjatësia</small><b>${c.h}<span>cm</span></b></div><div class="tile"><small>Mosha</small><b>${c.age[0]}<span>vjeç</span></b><em>&amp; ${c.age[1]} muaj</em></div></div>`;
  if(o.measOnly) return `<div class="card gj" style="padding-top:16px;padding-bottom:20px">${tiles}${meas}</div>`;
  if(o.vaccOnly) return `<div class="card gj" style="padding:20px 16px 16px"><div class="fl" style="margin:0"><small>Vaksinimet</small>${vacc(o.vacc)}</div></div>`;
  const al=c.allergies.length?`<div class="fl"><small>Alergjitë</small><div class="chips">${c.allergies.map(a=>`<span class="chip c-pink">${I('tri')}${a}</span>`).join('')}</div></div>`:'';
  return `<div class="card gj"><dl>
    <div class="kv"><dt>Emri dhe mbiemri</dt><dd>${c.name.replace('Xhaferraj-','Xhaferraj-<br>')}</dd></div>
    <div class="kv"><dt>Gjinia</dt><dd>${c.gender}</dd></div>
    <div class="kv"><dt>Kujdestari</dt><dd>${c.guardian[0]} <span>(${c.guardian[1]})</span></dd></div>
    <div class="kv"><dt>Datëlindja</dt><dd>${c.dob}</dd></div>
    <div class="kv"><dt>Qyteti</dt><dd>${c.city}</dd></div></dl>
    ${tiles}${meas}
    ${al}
    <div class="fl"><small>Vaksinimet</small>${vacc(c.vacc)}</div></div>`;
}
const vacc=v=>v==='no'?`<span class="chip c-amber">Jo të plota</span>`:`<span class="chip c-green">Sipas kalendarit</span>`;
const gjSection=(c,o)=>`<h2 class="sec">Gjeneralitetet</h2>${gjCard(c,o)}`;
function compact(c){
  const n=c.allergies.length;
  return `<div class="ch"><span class="back">${I('back')}</span><div class="n"><b>${c.name}</b><span>${c.gender}, ${c.age[0]} vjeç &amp; ${c.age[1]} muaj</span></div>${n?`<span class="chip c-pink">${I('tri')}${n} alergji</span>`:''}</div>`;
}
function tabs(c,on){
  const t=[['steth','Diagnoza',c.dx.length],['pill','Ilaçe',c.meds.length],['flask','Analiza',c.tests.length]];
  return `<div class="tabs">${t.map(([i,l,n],k)=>`<div class="tab ${k===on?'on':''} ${n?'':'zero'}">${I(i)}${l} <em>${n}</em></div>`).join('')}</div>`;
}
const empty=(i,t)=>`<div class="empty"><i>${I(i)}</i>${t}</div>`;
const histHead=(c,on)=>`<h2 class="sec" style="margin-top:20px">Historiku mjekësor</h2>${tabs(c,on)}`;
const gh=(icon,label,n,col,fill,cntFill,cntCol)=>`<div class="gh"><i style="background:${fill}">${I(icon)}</i><b style="color:${col}">${label}</b><span class="cnt" style="background:${cntFill};color:${cntCol}">${n}</span></div>`;

function dxCard(d){
  const tag=d.me?`<span class="chip tag c-me">${I('user')}Me ju</span>`:d.out?`<span class="chip tag c-grey">Jashtë Kidocare</span>`:'';
  return `<div class="lc ${d.k?'kron':''}"><div class="ico ${d.src==='home'?'grey':''}">${I(d.src)}${d.k?`<span class="badge">${I('refresh')}</span>`:''}</div><div class="tx"><b>${d.t}</b><span>${d.d}</span>${tag}</div>${I('chev','chev')}</div>`;
}
function dxList(list){
  const k=list.filter(d=>d.k),a=list.filter(d=>!d.k);let h='';
  if(k.length)h+=`<div class="grp">${gh('refresh','Kronike',k.length,'var(--amber)','var(--amber-mid)','var(--amber-fill)','var(--amber)')}${k.map(dxCard).join('')}</div>`;
  if(a.length)h+=`<div class="grp">${gh('zap','Akute',a.length,'var(--ink)','var(--blue)','#fff','var(--blue-ink)')}${a.map(dxCard).join('')}</div>`;
  return h;
}
function medCard(m){
  return `<div class="lc fixed ${m.past?'past':''}"><div class="ico ${m.past?'grey':''}">${I('pill')}</div><div class="tx"><b>${m.t}</b>${m.d?`<span>${m.d}</span>`:''}${m.f?`<span class="for">Për: ${m.f}</span>`:''}</div></div>`;
}
function medList(list){
  const a=list.filter(m=>!m.past),p=list.filter(m=>m.past);let h='';
  if(a.length)h+=`<div class="grp">${gh('pulse','Aktive',a.length,'var(--green)','var(--green)','var(--green-fill)','var(--green)')}${a.map(medCard).join('')}</div>`;
  if(p.length)h+=`<div class="grp">${gh('clock','Të mëparshme',p.length,'var(--muted)','#C3CBDA','#fff','var(--muted)')}${p.map(medCard).join('')}</div>`;
  return h;
}
function testCard(t){
  const prev=t.wait?`<div class="file wait">${I('clock')}</div>`:`<div class="file">${X()}<b>${t.k}</b></div>`;
  return `<div class="lc fixed">${prev}<div class="tx"><b>${t.t}</b>${t.f?`<span class="for">Për: ${t.f}</span>`:''}<span>${t.d}${t.wait?'<span class="pend">Pa rezultat</span>':''}</span></div>${t.wait?'':I('chev','chev')}</div>`;
}
const testList=l=>l.map(testCard).join('');

/* detail page parts */
const quote=(who,txt)=>`<div class="quote"><small>${who}</small><p>${txt}</p></div>`;
const rows=(r)=>`<div class="box">${r.join('')}</div>`;
const row=(icon,t,s,right='',chev=false)=>`<div class="row">${I(icon)}<div class="tx"><b>${t}</b>${s?`<span>${s}</span>`:''}</div>${right}${chev?I('chev','chev'):''}</div>`;
const steps=l=>`<div class="box steps">${l.map((s,i)=>`<div class="row"><span class="num">${i+1}</span><p>${s}</p></div>`).join('')}</div>`;
const warns=l=>`<div class="box warn">${l.map(s=>`<div class="row">${I('alert')}<p>${s}</p></div>`).join('')}</div>`;
const foot=(a,b)=>`<div class="foot"><div>${a}</div><div>${b}</div></div>`;
const unverified=`<div class="info">${I('info')}<span>Shtuar nga prindi. Nuk është verifikuar nga Kidocare.</span></div>`;
const docs=l=>`<div class="docs">${l.map(d=>`<div class="doc"><i>${X('')}</i><span>${d}</span></div>`).join('')}</div>`;
const tl=l=>`<div class="tl">${l.map(([c,d,t,s])=>`<div class="ti" style="--c:${c}"><div class="tx"><small>${d}</small><b>${t}</b><span>${s}</span></div>${I('chev','chev')}</div>`).join('')}</div>`;
const STEPS_A=['Pa vrap dhe lojëra të lodhshme për 3 ditë','Mos pini duhan brenda në shtëpi','Bëni spirometrinë këtë javë dhe ngarkoni rezultatin','Rezervoni takimin te alergologu'];
const WARN=['Pompa duhet më shpesh se çdo 4 orë','Buzët ose thonjtë marrin ngjyrë blu','Nuk mund të flasë me fjali të plota','Temperaturë mbi 39°C','Përgjumje e pazakontë'];

function navTop(nav){nav=nav||{icon:'back',label:'Kartela mjekësore'};return `<div class="hd"><span class="back">${I(nav.icon)}</span>${nav.label?`<span class="t">${nav.label}</span>`:''}</div>`}
function detailTop(eyebrow,title,chips,q,nav){
  return `<div class="det">${statusBar()}${navTop(nav)}<div class="eyebrow">${eyebrow}</div><div class="dtitle">${title}</div><div class="dchips">${chips}</div>${q||''}`;
}
const chipKron=`<span class="chip c-amber">${I('refresh')}Kronike</span>`;
const chipAkute=`<span class="chip c-white">${I('zap')}Akute</span>`;
const chipOut=`<span class="chip c-grey" style="background:rgba(240,243,250,.8)">Jashtë Kidocare</span>`;
const chipW=t=>`<span class="chip c-white">${t}</span>`;

function consultPage(o){
  return `<div class="bg">${detailTop('Konsultë në Kidocare',o.title,o.chips,quote(o.who,o.note),o.nav)}
  <div class="sheet">
   <div class="blk"><div class="lab">Vlerësimi</div><div class="box prose">${o.assess}</div></div>
   ${o.meds?`<div class="blk"><div class="lab">Ilaçet e përshkruara</div>${rows(o.meds.map(m=>row('pill',m[0],m[1],`<span class="chip c-green">Aktiv</span>`)))}</div>`:''}
   ${o.tests?`<div class="blk"><div class="lab">Analizat</div>${rows(o.tests.map(t=>row('flask',t[0],t[1],(t[2]||o.allPending)?`<span class="chip c-amber">Pa rezultat</span>`:`<span class="chip c-green">Gati</span>`,true)))}</div>`:''}
   ${o.ref?`<div class="blk"><div class="lab">Referimi</div>${rows([row('arrow',o.ref[0],o.ref[1],'',true)])}</div>`:''}
   <div class="lab">Udhëzimet për prindin</div>
   <div class="sub">Hapat që duhet të ndiqni</div><div class="blk" style="margin-bottom:20px">${steps(o.steps)}</div>
   <div class="sub">Kujdes nëse...</div><div class="blk">${warns(o.warn)}</div>
   ${o.chat?`<div class="blk"><span class="chatbtn">${I('chat')}Hap bisedën</span></div>`:''}
   ${foot(`<small>Data</small><b>${o.date}</b><small>Konsulta</small><b style="margin:0">${o.type}</b>`,`<small>Mjeku</small><b>${o.doc}</b><span>Urdhri i Mjekut, nr. ${o.nr}</span>`)}
  </div></div></div>`;
}

/* full Kartela screen, used for pages and as blurred backgrounds */
function kartela(c,on=0){
  const body=on===0?(c.dx.length?dxList(c.dx):empty('steth','Ende pa diagnoza')):on===1?(c.meds.length?medList(c.meds):empty('pill','Ende pa ilaçe')):(c.tests.length?testList(c.tests):empty('flask','Ende pa analiza'));
  return `<div class="page bg">${statusBar()}${header('Kartela mjekësore')}${gjSection(c)}${histHead(c,on)}${body}</div>`;
}
const crop=h=>`<div class="crop bg">${h}</div>`;
function overlay(content){return `<div class="ov bg"><div class="under">${kartela(ANISA,2)}</div><div class="glass"></div><div style="position:absolute;top:0;left:0;right:0">${statusBar()}</div>${content}</div>`}
function fileOverlay(t,o={}){
  return overlay(`<div class="ovtop">${o.pages?`<span class="pill">1 / ${o.pages}</span>`:'<span></span>'}<span class="xbtn">${I('x')}</span></div>
   ${o.err?`<div class="sheetfile err"><i>${I('file')}</i><b>Skedari nuk u hap</b><span class="btn">Provoni përsëri</span></div>`:`<div class="sheetfile">${X()}</div>`}
   <div class="ovcard"><div class="tx"><b>${t.t}</b><span class="for">Për: ${t.f}</span><span>${t.d}</span></div>${o.pages?`<div class="dots"><i class="on"></i>${'<i></i>'.repeat(o.pages-1)}</div>`:''}</div>`);
}

/* ---------- profile pieces ---------- */
function idCard(c,o={}){
  const av=o.photo?`<div class="av photo">${X('')}</div>`:`<div class="av"><img src="${c.avatar}" alt=""></div>`;
  const al=c.allergies.length?`<div class="fl"><small>Alergjitë</small><div class="chips">${c.allergies.map(a=>`<span class="chip c-pink">${I('tri')}${a}</span>`).join('')}</div></div>`:'';
  return `<div class="card idc"><span class="code">${c.code}</span><div class="idtop">${av}<div class="idn"><b>${c.name.replace('Marjeta ','Marjeta<br>').replace('Xhaferraj-','Xhaferraj-<br>')}</b><span>${c.gender}</span></div></div>
   <dl><div class="kv"><dt>Atësia</dt><dd>${c.father}</dd></div><div class="kv"><dt>Datëlindja</dt><dd>${c.dob}</dd></div><div class="kv"><dt>Qyteti</dt><dd>${c.city}</dd></div></dl>
   <div class="tiles"><div class="tile"><small>Pesha</small><b>${c.w}<span>kg</span></b></div><div class="tile"><small>Gjatësia</small><b>${c.h}<span>cm</span></b></div><div class="tile"><small>Mosha</small><b>${c.age[0]}<span>vjeç</span></b><em>&amp; ${c.age[1]} muaj</em></div></div>
   <div class="mdate">Matur më ${c.measured}</div>
   ${al}
   <div class="fl"><small>Vaksinimet</small>${vacc(c.vacc)}</div></div>`;
}
const kartelaBtn=()=>`<div class="bigbtn bb-pri"><i>${I('steth')}</i><b>Kartela mjekësore</b>${I('chev','chev')}</div>`;
const consBtn=n=>`<div class="bigbtn bb-sec"><i>${I('video')}</i><b>Konsultat me ju</b><span class="cnt2">${n}</span>${I('chev','chev')}</div>`;
const guardians=l=>`<h2 class="sec">Kujdestarët</h2><div class="card gl2">${l.map(([n,r,k])=>`<div class="gr2"><i>${I('user')}</i><div class="tx"><b>${n}</b><span>${r}${k?'<span class="chip c-blue">Kryesore</span>':''}</span></div>${I('chev','chev')}</div>`).join('')}</div>`;
function clinical(chronic,current){
  /* sections with nothing in them are not shown; no "Asnjë" */
  const ch=chronic&&chronic.length?`<small>Sëmundje kronike</small><div class="chips">${chronic.map(x=>`<span class="chip c-amber">${I('refresh')}<span>${x}</span></span>`).join('')}</div>`:'';
  const md=current&&current.length?`<small>Ilaçe aktuale</small><div class="chips">${current.map(x=>`<span class="chip c-blue">${I('pill')}<span>${x}</span></span>`).join('')}</div>`:'';
  if(!ch&&!md) return '';
  return `<h2 class="sec">Pamje klinike</h2><div class="card clin">${ch}${md}</div>`;
}
function profile(c){
  return `<div class="page bg pp">${statusBar()}${header('Profili i fëmijës')}${idCard(c)}${kartelaBtn()}${guardians(c.guardians)}${clinical(c.chronic,c.current)}${c.consults.length?consBtn(c.consults.length):''}</div>`;
}

/* ---------- shared by Turni: Live and Konsultat ---------- */
Object.assign(P,{
 bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
 forum:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8M8 13h5"/>',
 office:'<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
 cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'
});
/* Valbona's other children (only name and age are used) */
const ELA={name:'Ela Xhaferraj',age:['4','1']}, BEN={name:'Ben Xhaferraj',age:['1','2']};
const ageLabel=c=>c.age[0]==='0'?`${c.age[1]} muaj`:`${c.age[0]} vjeç${c.age[1]&&c.age[1]!=='0'?` &amp; ${c.age[1]} muaj`:''}`;
/* glass bottom bar of the current app: on = active index, b = {index: badge} */
const gnav=(on=0,b={})=>`<div class="gnav">${[['steth','Turni'],['chat','Konsultat'],['info','Infopoint'],['forum','Forumi'],['office','Zyra']].map(([i,l],k)=>`<div class="g ${k===on?'on':''}">${I(i)}${l}${b[k]?`<em>${b[k]}</em>`:''}</div>`).join('')}</div>`;

/* bottom sheet and the urgent-care confirmation, shared by Thirrja video and Biseda */
const bsheet=(inner,x=true)=>`<div class="dim"></div><div class="bs"><div class="grab"></div>${x?`<span class="xbtn">${I('x')}</span>`:''}${inner}</div>`;
const urgSheet=(after='Thirrja vazhdon.')=>bsheet(`<div class="stitle">Të këshilloni kujdes urgjent?</div><div class="ssub">Prindi e sheh menjëherë këtë mesazh në bisedë:</div>
   <div class="msg">${I('tri')}<span>Kjo mund të jetë urgjencë. Telefononi 112 tani ose shkoni te urgjenca më e afërt.</span></div>
   <div class="ssub" style="margin:0">Nuk mund të zhbëhet. ${after}</div>
   <div class="btnb red">Po, dërgoje</div><div class="btnb ghost">Anulo</div>`,false);
