import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

const SVC = window.SVC;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const canvas = document.getElementById('gl');
let renderer;
const mobileStart = innerWidth < 800 || matchMedia('(pointer:coarse)').matches;
try { renderer = new THREE.WebGLRenderer({canvas, antialias:!mobileStart, powerPreference:'high-performance'}); }
catch(e){ canvas.remove(); window.__load.ready = true; throw e; }
let PR = Math.min(devicePixelRatio, mobileStart ? 1.25 : 1.75); const PR_MIN = mobileStart ? .75 : 1;
renderer.setPixelRatio(PR);
renderer.toneMapping = THREE.ACESFilmicToneMapping;

const NIGHT = new THREE.Color('#06171B'), BLACK = new THREE.Color('#000000');
const scene = new THREE.Scene(); scene.background = NIGHT.clone(); scene.fog = new THREE.FogExp2(NIGHT.clone(), .04);
const camera = new THREE.PerspectiveCamera(38, 1, .1, 200); camera.position.set(0,0,8);
scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), .03).texture;
scene.add(new THREE.AmbientLight('#9fc3bb', .3));
const warm = new THREE.PointLight('#E6B566', 22, 14, 1.6); scene.add(warm);

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
composer.addPass(new UnrealBloomPass(new THREE.Vector2(512,512), .36, .5, .9));
composer.addPass(new OutputPass());

const C = {deep:'#1B4A52', sage:'#7A9E8E', bone:'#F3F1EC', sand:'#E6B566', clay:'#E08A6C', teal:'#2C7C84', peach:'#EDB79F'};
const pearl = () => mobileStart ? new THREE.MeshStandardMaterial({color:'#dfe9e5', metalness:.95, roughness:.2, envMapIntensity:1.1}) : new THREE.MeshPhysicalMaterial({color:'#dfe9e5', metalness:.95, roughness:.16, clearcoat:1, clearcoatRoughness:.08, iridescence:.55, iridescenceIOR:1.3, iridescenceThicknessRange:[160,460], envMapIntensity:1.05});

/* ---- açılıştaki "o" halkası ---- */
const rig = new THREE.Group(); scene.add(rig);
const ring = new THREE.Mesh(new THREE.TorusGeometry(1.15,.26,64,220), pearl()); rig.add(ring);
const needle = new THREE.Group();
const mA = new THREE.MeshStandardMaterial({color:C.sand, metalness:.6, roughness:.3, emissive:'#5a3d10', emissiveIntensity:.35});
const mB = new THREE.MeshStandardMaterial({color:C.bone, metalness:.4, roughness:.35});
const nA = new THREE.Mesh(new THREE.ConeGeometry(.11,.72,4), mA); nA.position.y = .36;
const nB = new THREE.Mesh(new THREE.ConeGeometry(.11,.72,4), mB); nB.position.y = -.36; nB.rotation.z = Math.PI;
needle.add(nA, nB, new THREE.Mesh(new THREE.SphereGeometry(.07,24,16), mB)); rig.add(needle);

/* ---- galeri yerleşimi ---- */
const ZC = -20, ZS = -34, ZE = -48, ZF = -64, STEPY = 1.05;
const L = { ax:1.35, ay:0, R:3.45, scale:1 };
function layout(){ const m = innerWidth < 800; L.m = m; L.ax = m ? 0 : 1.35; L.ay = m ? .95 : 0; L.R = m ? 2.2 : 3.45; L.scale = m ? .62 : 1; L.cd = m ? 11.5 : 9.5; }

/* ortadaki sütun: üst üste dönen "o" halkaları + toz */
const column = new THREE.Group(); scene.add(column);
const colRings = [];
for (let i=0;i<11;i++){ const r = new THREE.Mesh(new THREE.TorusGeometry(.5 - Math.abs(i-5)*.025, .085, 32, 120), pearl());
  r.position.y = (i-5)*.95; r.rotation.x = Math.PI/2 + (i%2 ? .25 : -.25); column.add(r); colRings.push(r); }
const SWN = mobileStart ? 380 : 1300, swPos = new Float32Array(SWN*3), swCol = new Float32Array(SWN*3), swD = [];
for (let i=0;i<SWN;i++){ const r = .7 + Math.pow(Math.random(),1.6)*2.2, a = Math.random()*6.283, y = (Math.random()-.5)*12;
  swD.push([r,a,y,.15+Math.random()*.5]); const c = new THREE.Color([C.sand,C.sage,C.peach,C.bone,C.teal][i%5]); swCol.set([c.r,c.g,c.b], i*3); }
const swGeo = new THREE.BufferGeometry(); swGeo.setAttribute('position', new THREE.BufferAttribute(swPos,3)); swGeo.setAttribute('color', new THREE.BufferAttribute(swCol,3));

/* ışık tozu dokusu */
const spr = document.createElement('canvas'); spr.width = spr.height = 64; const sg = spr.getContext('2d');
const rg = sg.createRadialGradient(32,32,0,32,32,32); rg.addColorStop(0,'rgba(255,255,255,1)'); rg.addColorStop(.3,'rgba(255,255,255,.5)'); rg.addColorStop(1,'rgba(255,255,255,0)');
sg.fillStyle = rg; sg.fillRect(0,0,64,64); const dot = new THREE.CanvasTexture(spr);
const swMat = new THREE.PointsMaterial({size:.07, map:dot, vertexColors:true, transparent:true, depthWrite:false, blending:THREE.AdditiveBlending, opacity:.9});
column.add(new THREE.Points(swGeo, swMat));

const PN = mobileStart ? 700 : 2400, pPos = new Float32Array(PN*3), pCol = new Float32Array(PN*3), pSp = new Float32Array(PN);
for (let i=0;i<PN;i++){ pPos[i*3]=(Math.random()-.5)*24; pPos[i*3+1]=(Math.random()-.5)*14; pPos[i*3+2]=12-Math.random()*90; pSp[i]=.3+Math.random();
  const c = new THREE.Color([C.sand,C.sage,C.bone,C.peach,C.sand][i%5]); pCol.set([c.r,c.g,c.b], i*3); }
const pGeo = new THREE.BufferGeometry(); pGeo.setAttribute('position', new THREE.BufferAttribute(pPos,3)); pGeo.setAttribute('color', new THREE.BufferAttribute(pCol,3));
const pMat = new THREE.PointsMaterial({size:.08, map:dot, vertexColors:true, transparent:true, depthWrite:false, blending:THREE.AdditiveBlending, opacity:.85});
const dustPts = new THREE.Points(pGeo, pMat); scene.add(dustPts);

/* ---- hizmet kartları (dokular tuvalde çizilir) ---- */
const CW = 1024, CH = 640, cardAccent = [C.teal, C.sage, C.clay, C.peach, C.sand, C.sand, C.sage];
function rr(g,x,y,w,h,r){ g.beginPath(); g.moveTo(x+r,y); g.arcTo(x+w,y,x+w,y+h,r); g.arcTo(x+w,y+h,x,y+h,r); g.arcTo(x,y+h,x,y,r); g.arcTo(x,y,x+w,y,r); g.closePath(); }
function vox(g,x,y,s,c){ g.fillStyle = c; rr(g,x,y,s,s,s*.22); g.fill(); }
const ART = {
  web(g,ox,oy){ for(let r=0;r<9;r++) for(let c=0;c<13;c++){ const e=r===0||r===8||c===0||c===12, h=r===1, im=r>=3&&r<=6&&c>=2&&c<=6, tx=(r===3||r===5||r===7)&&c>=8&&c<=11, bt=r===7&&c>=2&&c<=4;
    if(e||h||im||tx) vox(g,ox+c*26,oy+r*26,21, bt?C.clay:h?C.sand:e?C.teal:im?C.sage:C.deep); } },
  seo(g,ox,oy){ [2,3,4,6,8,10].forEach((n,k)=>{ for(let j=0;j<n;j++) vox(g,ox+k*52,oy+230-j*24,21,k===5?C.sand:[C.sage,C.sage,C.teal,C.teal,C.deep][k]); vox(g,ox+k*52+24,oy+230-0*24,21,'#163b41'); }); },
  ads(g,ox,oy){ const cx=ox+160, cy=oy+120; [[30,10],[62,20],[94,30],[126,40]].forEach(([r,n],k)=>{ for(let i=0;i<n;i++){ const a=i/n*6.283; vox(g,cx+Math.cos(a)*r-9,cy+Math.sin(a)*r-9,17,k%2?C.peach:C.clay); } }); vox(g,cx-13,cy-13,26,C.sand); },
  social(g,ox,oy){ const cs=[C.sage,C.sand,C.teal,C.peach,C.clay,C.deep,C.sand,C.sage,C.teal]; for(let ty=0;ty<3;ty++) for(let tx=0;tx<3;tx++) for(let y=0;y<4;y++) for(let x=0;x<4;x++) vox(g,ox+tx*112+x*24,oy+ty*86+y*19,17,cs[ty*3+tx]); },
  orbit(g,ox,oy){ const cx=ox+160, cy=oy+120; for(let o=0;o<3;o++) for(let i=0;i<34;i++){ const a=i/34*6.283, rx=150-o*28, ry=40+o*26, t=o*.9; const x=Math.cos(a)*rx, y=Math.sin(a)*ry;
      vox(g,cx+x*Math.cos(t)-y*Math.sin(t)-8,cy+x*Math.sin(t)+y*Math.cos(t)-8,15,[C.sage,C.teal,C.sand][o]); } },
  box(g,ox,oy){ const cx=ox+160, cy=oy+60; for(let z=0;z<5;z++) for(let x=0;x<5;x++) for(let y=4;y>=0;y--){ const px=cx+(x-z)*22, py=cy+(x+z)*12+ (4-y)*24; vox(g,px,py,21,(x===2||z===2)?C.clay:C.sand); } },
  compass(g,ox,oy){ const cx=ox+160, cy=oy+120; for(let i=0;i<40;i++){ const a=i/40*6.283; vox(g,cx+Math.cos(a)*110-9,cy+Math.sin(a)*110-9,17,C.sage); }
    for(let k=0;k<4;k++){ const a=k*Math.PI/2-Math.PI/2; for(let j=0;j<3;j++) vox(g,cx+Math.cos(a)*(128+j*20)-9,cy+Math.sin(a)*(128+j*20)-9,17,k===0?C.sand:C.bone); }
    g.fillStyle=C.sand; g.beginPath(); g.moveTo(cx,cy-80); g.lineTo(cx+14,cy); g.lineTo(cx-14,cy); g.fill(); g.fillStyle=C.bone; g.beginPath(); g.moveTo(cx,cy+80); g.lineTo(cx+14,cy); g.lineTo(cx-14,cy); g.fill(); }
};
const FORM = ['web','seo','ads','social','orbit','box','compass'];
function wrap(g, text, maxW){ const words = text.split(' '), lines = []; let line = '';
  for (const w of words){ const t = line ? line + ' ' + w : w; if (g.measureText(t).width > maxW && line){ lines.push(line); line = w; } else line = t; }
  lines.push(line); return lines; }
function drawCard(i, dark){
  const s = SVC[i], cv = document.createElement('canvas'); cv.width = CW; cv.height = CH; const g = cv.getContext('2d');
  rr(g,4,4,CW-8,CH-8,40); g.save(); g.clip();
  g.fillStyle = dark ? '#000000' : '#0A2227'; g.fillRect(0,0,CW,CH);
  const gl = g.createRadialGradient(CW*.78,CH*.68,10,CW*.78,CH*.68,CW*.62); gl.addColorStop(0, cardAccent[i]+(dark ? '30' : '55')); gl.addColorStop(1, dark ? '#00000000' : '#0A222700'); g.fillStyle = gl; g.fillRect(0,0,CW,CH);
  for (let k=0;k<(mobileStart ? 700 : 2600);k++){ g.fillStyle = `rgba(243,241,236,${Math.random()*.05})`; g.fillRect(Math.random()*CW, Math.random()*CH, 2, 2); }
  ART[FORM[i]](g, 610, 300);
  g.restore();
  g.lineWidth = 3; g.strokeStyle = 'rgba(243,241,236,.22)'; rr(g,4,4,CW-8,CH-8,40); g.stroke();
  g.fillStyle = C.sand; g.font = '500 26px "JetBrains Mono"'; g.fillText(`${pad(i+1)} / ${pad(SVC.length)}`, 58, 86);
  g.fillStyle = 'rgba(243,241,236,.55)'; g.fillText('HİZMET', 270, 86);
  let fs = 58; g.font = `400 ${fs}px "Unbounded"`; try { g.letterSpacing = '3px'; } catch(e){} const T = s.title.toLocaleUpperCase('tr');
  let lines = wrap(g, T, 900); if (lines.length > 2){ fs = 46; g.font = `400 ${fs}px "Unbounded"`; lines = wrap(g, T, 920); }
  g.fillStyle = C.bone; lines.forEach((l,k) => g.fillText(l, 54, 180 + k*fs*1.08)); try { g.letterSpacing = '0px'; } catch(e){}
  g.font = '400 22px "JetBrains Mono"'; g.fillStyle = 'rgba(243,241,236,.6)';
  s.chips.forEach((c,k) => g.fillText('— ' + c.toLocaleUpperCase('tr'), 58, 470 + k*38));
  g.fillStyle = 'rgba(243,241,236,.85)'; g.font = '500 22px "JetBrains Mono"'; g.fillText('İNCELE →', 58, 590);
  return cv;
}
const pad = n => String(n).padStart(2,'0');
await Promise.all([document.fonts.load('400 62px "Unbounded"'), document.fonts.load('500 26px "JetBrains Mono"'), document.fonts.load('400 22px "JetBrains Mono"')]).catch(()=>{});

const cardGeo = new THREE.PlaneGeometry(3.2, 2.0);
const backMat = new THREE.MeshStandardMaterial({color:'#0C262B', roughness:.6, metalness:.2});
window.CARD_IMG = [];
const cards = SVC.map((s,i) => {
  const mk = cv => { const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = mobileStart ? 1 : renderer.capabilities.getMaxAnisotropy(); return t; };
  const cvA = drawCard(i, false), cvB = drawCard(i, true); window.CARD_IMG[i] = cvB.toDataURL('image/jpeg', .85);
  const texA = mk(cvA), texB = mk(cvB);
  const front = new THREE.Mesh(cardGeo, new THREE.MeshBasicMaterial({map:texA, toneMapped:false}));
  const sheen = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 2.4), new THREE.MeshBasicMaterial({map:dot, color:'#E6B566', transparent:true, opacity:0, blending:THREE.AdditiveBlending, depthWrite:false}));
  sheen.position.z = .012;
  const back = new THREE.Mesh(cardGeo, backMat.clone()); back.rotation.y = Math.PI;
  const g = new THREE.Group(); g.add(front, back, sheen); g.userData.i = i; front.userData.i = i; scene.add(g);
  return {g, front, back, sheen, texA, texB, dark:false, sh:0, pos:new THREE.Vector3(0,0,ZC), q:new THREE.Quaternion(), s:1, op:0, tilt:(i%2 ? .06 : -.05)};
});

/* ---- kaydırma ---- */
const hero = document.getElementById('hero'), car = document.getElementById('hizmetler'), sek = document.getElementById('sekreterai'), fin = document.getElementById('iletisim');
const mag = document.getElementById('magaza'), mPh = [...document.querySelectorAll('#magaza .s-ph')], mSteps = [...document.querySelectorAll('#mSteps li')];
const phases = [...document.querySelectorAll('#sekreterai .s-ph')], beats = [...document.querySelectorAll('#sekreterai [data-at]')];
const heroTitle = document.getElementById('heroTitle'), heroFoot = document.getElementById('heroFoot'), enter = document.getElementById('enter');
const fades = [...document.querySelectorAll('.c-fade')], listBtns = [...document.querySelectorAll('#cList button')], cNow = document.getElementById('cNow');
const _st = new WeakMap(); const setS = (el, k, v) => { let m = _st.get(el); if (!m){ m = {}; _st.set(el, m); } if (m[k] !== v){ m[k] = v; el.style[k] = v; } };
const clamp = (v,a=0,b=1) => Math.min(b, Math.max(a,v)), lerp = (a,b,t) => a+(b-a)*t;
const ease = t => t<.5 ? 4*t*t*t : 1-Math.pow(-2*t+2,3)/2;
let W, H, K = {}, mx=0, my=0, smx=0, smy=0;
function measure(){ K.heroEnd = hero.offsetTop + hero.offsetHeight - H; K.carStart = car.offsetTop; K.carEnd = car.offsetTop + car.offsetHeight - H; K.secStart = sek.offsetTop; K.secEnd = sek.offsetTop + sek.offsetHeight - H; K.magStart = mag.offsetTop; K.magEnd = mag.offsetTop + mag.offsetHeight - H; K.finEnd = fin.offsetTop + fin.offsetHeight - H; }
function resize(){ W=innerWidth; H=innerHeight; renderer.setSize(W,H,false); composer.setSize(W,H); camera.aspect=W/H; camera.updateProjectionMatrix(); layout(); measure(); }
addEventListener('resize', resize); resize(); setTimeout(measure, 1500);
addEventListener('pointermove', e => { mx = e.clientX/W*2-1; my = e.clientY/H*2-1; });

/* karta tıklama */
const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(); let downAt = null, hover = -1, focus = -1, carActive = false;
function pick(e){ ndc.set(e.clientX/W*2-1, -(e.clientY/H)*2+1); ray.setFromCamera(ndc, camera);
  const hit = ray.intersectObjects(cards.filter(c => c.g.visible && c.op > .2).map(c => c.front))[0]; return hit ? hit.object.userData.i : -1; }
addEventListener('pointerdown', e => { downAt = [e.clientX, e.clientY]; });
addEventListener('pointerup', e => {
  if (!downAt || document.body.classList.contains('open') || !carActive) return;
  const moved = Math.hypot(e.clientX-downAt[0], e.clientY-downAt[1]); downAt = null;
  if (moved > 8 || e.target.closest('button,a,input,.c-left')) return;
  const i = pick(e); if (i >= 0) window.openSvc(i);
});
addEventListener('pointermove', e => { if (!carActive || document.body.classList.contains('open') || e.target.closest('.c-left,nav')) { if (hover !== -1){ hover = -1; document.body.style.cursor = ''; } return; }
  const i = pick(e); if (i !== hover){ hover = i; document.body.style.cursor = i >= 0 ? 'pointer' : ''; } });
window.onDetail = i => { focus = i; };

/* ---- SekreterAI: ses dalgası halkası ---- */
const sekG = new THREE.Group(); scene.add(sekG);
const core = new THREE.Group(); sekG.add(core);
const sekRing = new THREE.Mesh(new THREE.TorusGeometry(1.0, .19, 64, 200), pearl()); core.add(sekRing);
const BN = 120, bars = new THREE.InstancedMesh(new THREE.BoxGeometry(.055, 1, .055), new THREE.MeshStandardMaterial({roughness:.35, metalness:.3, emissive:'#3a2a10', emissiveIntensity:.5}), BN);
core.add(bars);
const barCol = new THREE.Color(); for (let i=0;i<BN;i++) bars.setColorAt(i, barCol.set(i%3 ? C.sand : C.sage));
const typing = [0,1,2].map(i => { const m = new THREE.Mesh(new THREE.SphereGeometry(.09, 24, 16), new THREE.MeshStandardMaterial({color:C.bone, emissive:'#E6B566', emissiveIntensity:.25})); m.position.x = (i-1)*.28; core.add(m); return m; });
const bTmp = new THREE.Object3D(); let voiceW = 0, textW = 0;

/* SekreterAI hikâyesi: küplerden telefon, takvim, iki telefon ve uçan mesajlar */
const NV = 230, svMesh = new THREE.InstancedMesh(new RoundedBoxGeometry(.11,.11,.11,2,.022), new THREE.MeshStandardMaterial({roughness:.4, metalness:.15}), NV);
svMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage); sekG.add(svMesh);
const sPulse = new THREE.Mesh(new THREE.RingGeometry(.95, 1.0, 96), new THREE.MeshBasicMaterial({color:'#E6B566', transparent:true, opacity:0, blending:THREE.AdditiveBlending, depthWrite:false, toneMapped:false}));
sekG.add(sPulse);
const VV = (x,y,z) => new THREE.Vector3(x,y,z), svHid = () => ({p:VV(0,0,-.5), s:0, c:C.sage});
const svFill = Lst => { while (Lst.length < NV) Lst.push(svHid()); return Lst.slice(0, NV); };
const svSeed = Array.from({length:NV}, () => [Math.random(), Math.random(), Math.random()]);
function phone(L, ox, oy, sc, lit){ const st = .14*sc;
  for (let r=0;r<14;r++) for (let c=0;c<8;c++){ const e = r===0||r===13||c===0||c===7, spk = r===1&&(c===3||c===4), btn = r===12&&(c===3||c===4), scr = lit && r>=4 && r<=7 && c>=2 && c<=5;
    if (e||spk||btn||scr) L.push({p:VV(ox+(c-3.5)*st, oy+(6.5-r)*st, 0), s:sc, c: scr ? C.sand : spk||btn ? C.bone : C.teal}); } }
const SV = [
  (t) => { const L=[]; phone(L, -.2, 0, 1, false);
    [[0,0],[1,1],[2,2],[3,3],[4,4],[0,4],[1,3],[3,1],[4,0]].forEach(([a,b]) => L.push({p:VV(.75+a*.13, 1.25-b*.13, .15), s:1.1, c:C.clay}));
    for (let i=0;i<46;i++){ const k = svSeed[i], u = (t*.18 + k[0]) % 1, ang = k[1]*6.283;      // uzaklaşan müşteriler
      L.push({p:VV(-.2 + Math.cos(ang)*(.7 + u*2.6), Math.sin(ang)*(.9 + u*1.8), (k[2]-.5)*.6), s:(1-u)*.8, c:[C.peach,C.sage,C.sand][i%3]}); }
    return svFill(L); },
  (t) => { const L=[]; const j = Math.sin(t*38)*.035*(Math.sin(t*5) > 0 ? 1 : 0); phone(L, j, 0, 1, true); return svFill(L); },
  (t, lp) => { const L=[]; for (let i=0;i<NV;i++){ const a = i/NV*6.283; L.push({p:VV(Math.cos(a)*1.45, Math.sin(a)*1.45, 0), s:Math.max(0, .55*(1 - lp*1.6)), c:C.sand}); } return L; },
  (t) => { const L=[]; const sp = .3;
    for (let c=0;c<7;c++) L.push({p:VV((c-3)*sp, .75, 0), s:1.9, c:C.sand});
    for (let r=0;r<5;r++) for (let c=0;c<7;c++){ const sel = r===2 && c===4; L.push({p:VV((c-3)*sp, .4 - r*sp, sel ? .25 + Math.sin(t*4)*.05 : 0), s: sel ? 2.5 : 1.7, c: sel ? C.sand : (r*7+c) < 16 ? C.deep : C.teal}); }
    [-1.2,1.2].forEach(x => { for (let j=0;j<3;j++) L.push({p:VV(x*.6, 1.02 + j*.11, 0), s:.8, c:C.bone}); });
    return svFill(L); },
  (t, lp) => { const L=[]; const a1 = clamp(lp*2.2), a2 = clamp(lp*2.2 - .55);
    phone(L, -1.75, -.15, .72, a1 >= 1); phone(L, 1.75, -.15, .72, a2 >= 1);
    [[a1, -1.75], [a2, 1.75]].forEach(([u, tx]) => { const e = 1 - Math.pow(1-u, 3), x = tx*e, y = .9*Math.sin(Math.PI*e) + .2*(1-e);
      for (let a=0;a<4;a++) for (let b=0;b<3;b++) L.push({p:VV(x + (a-1.5)*.1, y + (b-1)*.1, .3), s: u > 0 && u < 1 ? .85 : 0, c: b===1 && (a===1||a===2) ? C.bone : C.sand}); });
    return svFill(L); },
  () => svFill([])
];
const svCur = Array.from({length:NV}, (_,i) => ({p:VV((svSeed[i][0]-.5)*5,(svSeed[i][1]-.5)*4,0), s:0, c:new THREE.Color(C.sage)}));
const svTmp = new THREE.Object3D(), svCol = new THREE.Color();
const tLines = [...document.querySelectorAll('#sekreterai .tl')].map(el => {
  const tx = el.querySelector('.tx'); tx.innerHTML = tx.textContent.split(' ').map(w => `<span class="w">${w}</span>`).join(' ');
  return {el, from:+el.dataset.from, to:+el.dataset.to, ai:el.classList.contains('ai'), words:[...tx.querySelectorAll('.w')]}; });
const sSteps = [...document.querySelectorAll('#sSteps li')], callTimer = document.getElementById('callTimer');

/* ---- E-ticaret: her adımda yeni şekle giren küpler ---- */
const NE = 220;
const shop = new THREE.InstancedMesh(new THREE.BoxGeometry(.13,.13,.13), new THREE.MeshStandardMaterial({roughness:.4, metalness:.15}), NE);
shop.instanceMatrix.setUsage(THREE.DynamicDrawUsage); const shopG = new THREE.Group(); shopG.add(shop); scene.add(shopG);
const V3 = (x,y,z) => new THREE.Vector3(x,y,z);
const hidE = () => ({p:V3(0,0,0), s:0, c:C.sage});
const fillE = Lst => { while (Lst.length < NE) Lst.push(hidE()); return Lst.slice(0, NE); };
const eSeed = Array.from({length:NE}, () => [Math.random(), Math.random(), Math.random()]);
const SHAPE = [
  t => eSeed.map((k,i) => { const th=k[0]*6.283+t*.08, ph=Math.acos(2*k[1]-1), r=1.6+k[2]*1.6; return {p:V3(r*Math.sin(ph)*Math.cos(th), r*Math.cos(ph)*.8, r*Math.sin(ph)*Math.sin(th)), s:.55, c:[C.sage,C.sand,C.teal,C.peach][i%4]}; }),
  () => { const L=[]; for(let x=0;x<12;x++) for(let z=0;z<12;z++) L.push({p:V3((x-5.5)*.2,-1,(z-5.5)*.2), s:1, c:(x+z)%2?C.teal:C.sage});
    [[0,0],[11,0],[0,11],[11,11]].forEach(([x,z]) => { for(let j=1;j<=5;j++) L.push({p:V3((x-5.5)*.2,-1+j*.2,(z-5.5)*.2), s:1, c:C.sand}); }); return fillE(L); },
  () => { const L=[]; for(let r=0;r<11;r++) for(let c=0;c<13;c++){ const edge=c===0||c===12||r===10, sign=r===0&&c>=3&&c<=9, awn=(r===2||r===3), win=r>=5&&r<=8&&c>=2&&c<=6, door=r>=5&&r<=9&&c>=8&&c<=10, item=r===7&&c>=2&&c<=6;
      if(edge||sign||awn||win||door) L.push({p:V3((c-6)*.2,(5-r)*.2,0), s:1, c: sign?C.sand: awn?((c%2)?C.clay:C.bone): door?C.deep: item?C.sand: win?C.peach: C.teal}); } return fillE(L); },
  t => { const L=[], e=new THREE.Euler(.45,.6+t*.3,0); for(let x=0;x<5;x++) for(let y=0;y<5;y++) for(let z=0;z<5;z++){ const v=V3((x-2)*.2,(y-2)*.2+.3,(z-2)*.2).applyEuler(e); L.push({p:v, s:1, c:(x===2||z===2)?C.clay:C.sand}); }
    for(let j=0;j<4;j++){ const u=((t*.25 + j/4)%1), bx=-2.4+u*4.8; for(let a=0;a<2;a++) for(let b=0;b<2;b++) for(let c=0;c<2;c++) L.push({p:V3(bx+(a-.5)*.14,-1.25+(b-.5)*.14,(c-.5)*.14), s:.8, c:C.peach}); }
    for(let x=0;x<26;x++) L.push({p:V3(-2.5+x*.2,-1.5,0), s:.7, c:C.deep}); return fillE(L); },
  () => { const L=[]; for(let r=0;r<14;r++) for(let c=0;c<8;c++){ const edge=c===0||c===7||r===0||r===13, prod=r>=2&&r<=6&&c>=1&&c<=6, price=r===8&&c>=1&&c<=3, btn=(r===10||r===11)&&c>=1&&c<=6;
      if(edge||prod||price||btn) L.push({p:V3((c-3.5)*.2,(6.5-r)*.2,0), s:1, c: btn?C.clay: price?C.sand: prod?C.sage: C.teal}); }
    [[1.4,.2],[1.55,.05],[1.7,-.1],[1.85,.05],[2.0,.2],[2.15,.35],[2.3,.5]].forEach(([x,y]) => L.push({p:V3(x,y,.2), s:1.1, c:C.sand})); return fillE(L); },
  () => { const L=[], h=[2,3,4,5,7,9,12]; h.forEach((n,k) => { for(let j=0;j<n;j++) for(let z=0;z<2;z++) L.push({p:V3((k-3)*.32,-1.2+j*.2,(z-.5)*.2), s:1.05, c:k===6?C.sand:[C.sage,C.sage,C.teal,C.teal,C.deep,C.teal][k]}); }); return fillE(L); },
  () => { const L=[]; for(let r=0;r<9;r++) for(let c=0;c<9;c++) L.push({p:V3((c-4)*.2,(-r)*.2+.2,0), s:1, c:r===2?C.clay:C.sand});
    for(let i=0;i<=14;i++){ const a=Math.PI*i/14; L.push({p:V3(Math.cos(a)*.6,.45+Math.sin(a)*.6,0), s:.9, c:C.bone}); } return fillE(L); },
];
const eCur = Array.from({length:NE}, (_,i) => ({p:V3((eSeed[i][0]-.5)*6,(eSeed[i][1]-.5)*4,(eSeed[i][2]-.5)*3), s:0, c:new THREE.Color(C.sage), r:[Math.random()*6, Math.random()*6, .2+Math.random()*.5]}));
const eTmp = new THREE.Object3D(), eCol = new THREE.Color();

/* ---- Giriş: toz bulutundan altın pusula ---- */
const IN = {state:'wait', t0:0, short:false};
const IPN = mobileStart ? 600 : 1800;
const iS = new Float32Array(IPN*3), iT = new Float32Array(IPN*3), iD = new Float32Array(IPN*3), iP = new Float32Array(IPN*3), iC = new Float32Array(IPN*3);
for (let i=0;i<IPN;i++){
  const u = Math.random()*2-1, th = Math.random()*6.283, rr = 5 + Math.random()*9, q = Math.sqrt(1-u*u);
  iS[i*3] = q*Math.cos(th)*rr; iS[i*3+1] = q*Math.sin(th)*rr*.7; iS[i*3+2] = u*rr*.6;
  const f = i / IPN;
  if (f < .72){ const a = Math.random()*6.283, r = 1.15 + (Math.random()-.5)*.42; iT[i*3] = Math.cos(a)*r; iT[i*3+1] = Math.sin(a)*r; iT[i*3+2] = (Math.random()-.5)*.3; }
  else if (f < .93){ const yy = (Math.random()*2-1)*.72, w = .07*(1 - Math.abs(yy)/.72); iT[i*3] = (Math.random()*2-1)*w; iT[i*3+1] = yy; iT[i*3+2] = 0; }
  else { const a = Math.random()*6.283, r = Math.random()*.09; iT[i*3] = Math.cos(a)*r; iT[i*3+1] = Math.sin(a)*r; iT[i*3+2] = 0; }
  const dx = Math.random()*2-1, dy = Math.random()*2-1, dz = Math.random()*2-1, dl = Math.hypot(dx,dy,dz) || 1, sp = 2 + Math.random()*5;
  iD[i*3] = dx/dl*sp; iD[i*3+1] = dy/dl*sp; iD[i*3+2] = dz/dl*sp;
  const c = new THREE.Color([C.sand, C.sand, C.bone, C.peach][i%4]); iC.set([c.r,c.g,c.b], i*3);
}
const iGeo = new THREE.BufferGeometry(); iGeo.setAttribute('position', new THREE.BufferAttribute(iP,3)); iGeo.setAttribute('color', new THREE.BufferAttribute(iC,3));
const iMat = new THREE.PointsMaterial({size:.055, map:dot, vertexColors:true, transparent:true, depthWrite:false, blending:THREE.AdditiveBlending, opacity:0});
const iPts = new THREE.Points(iGeo, iMat); iPts.frustumCulled = false; scene.add(iPts);
const pulse = new THREE.Mesh(new THREE.RingGeometry(1.32, 1.4, 128), new THREE.MeshBasicMaterial({color:'#E6B566', transparent:true, opacity:0, blending:THREE.AdditiveBlending, depthWrite:false, toneMapped:false}));
pulse.visible = false; scene.add(pulse);
function endIntro(played){
  if (IN.state === 'done') return; IN.state = 'done';
  scene.remove(iPts); iGeo.dispose(); iMat.dispose(); scene.remove(pulse); pulse.geometry.dispose(); pulse.material.dispose();
  document.body.classList.remove('intro','playing'); window.__lenis && window.__lenis.start();
  if (played) try { sessionStorage.setItem('opusIntro','1'); } catch(e){}
}
const T_REVEAL = 2.9, T_END = 3.9;
window.startIntro = skip => {
  let seen = false; try { seen = !!sessionStorage.getItem('opusIntro'); } catch(e){}
  if (skip || reduce || scrollY > 40){ endIntro(); return; }
  IN.short = seen; IN.state = 'run'; IN.t0 = performance.now();
  
};
function fastForward(){ if (IN.state !== 'run') return; const it = (performance.now() - IN.t0)/1000 + (IN.short ? 2 : 0);
  if (it > .35 && it < T_REVEAL - .2) IN.t0 = performance.now() - (T_REVEAL - .2 - (IN.short ? 2 : 0))*1000; }
['wheel','touchstart','keydown'].forEach(ev => addEventListener(ev, fastForward, {passive:true}));
const easeBack = x => { const c1 = 1.4, c3 = c1 + 1; return 1 + c3*Math.pow(x-1,3) + c1*Math.pow(x-1,2); };

let fAcc = 0, fN = 0;
const clock = new THREE.Clock(); let first = true, active = 0, nRot = 0, dT = 0; const tiltQ = new THREE.Quaternion();
const tmpV = new THREE.Vector3(), tmpQ = new THREE.Quaternion(), tmpE = new THREE.Euler(), fwd = new THREE.Vector3();
function frame(){
  const dt = Math.min(clock.getDelta(), .05), t = clock.elapsedTime, k = reduce ? 1 : 1 - Math.pow(.002, dt);
  smx = lerp(smx, mx, k*.4); smy = lerp(smy, my, k*.4);
  const y = scrollY, mob = W < 800;
  let camZ, pc = 0, out = 0, ps = -1, fo = 0, pm = -1;

  // açılış
  const hp = clamp(y / Math.max(1, K.heroEnd));
  const turn = ease(clamp(hp/.3)), dolly = ease(clamp((hp-.3)/.6));
  if (y <= K.heroEnd){
    camZ = lerp(8, -2.5, dolly);
    rig.visible = hp < .86; rig.position.set(0,0,0); rig.scale.setScalar(mob ? .62 : 1);
    ring.rotation.x = lerp(1.2, 0, turn) + smy*.12; ring.rotation.y = lerp(.6, 0, turn) + smx*.2 + (1-turn)*Math.sin(t*.45)*.25;
    needle.scale.setScalar(Math.max(1 - clamp(dolly/.35), .0001));
    setS(heroTitle, 'opacity', String(1 - clamp(hp/.25))); setS(heroTitle, 'transform', String(`translateY(${-hp*120}px)`));
    setS(heroFoot, 'opacity', String(1 - clamp(hp/.12)));
    setS(enter, 'opacity', String(clamp((hp-.32)/.08) * (1 - clamp((hp-.55)/.08))));
  } else {
    setS(heroTitle, 'opacity', String(0)); setS(heroFoot, 'opacity', String(0)); setS(enter, 'opacity', String(0));
    if (y < K.carStart) camZ = lerp(-2.5, ZC + L.cd, ease(clamp((y - K.heroEnd) / (K.carStart - K.heroEnd))));
    else if (y <= K.carEnd){ camZ = ZC + L.cd; pc = clamp((y - K.carStart) / Math.max(1, K.carEnd - K.carStart)); }
    else if (y < K.secStart){ out = ease(clamp((y - K.carEnd) / Math.max(1, K.secStart - K.carEnd))); camZ = lerp(ZC + L.cd, ZS + 8.5, out); pc = 1; }
    else if (y <= K.secEnd){ out = 1; pc = 1; camZ = ZS + 8.5; ps = clamp((y - K.secStart) / Math.max(1, K.secEnd - K.secStart)); }
    else if (y < K.magStart){ out = 1; pc = 1; ps = 1; camZ = lerp(ZS + 8.5, ZE + 8.5, ease(clamp((y - K.secEnd) / Math.max(1, K.magStart - K.secEnd)))); }
    else if (y <= K.magEnd){ out = 1; pc = 1; ps = 1; camZ = ZE + 8.5; pm = clamp((y - K.magStart) / Math.max(1, K.magEnd - K.magStart)); }
    else { out = 1; pc = 1; ps = 1; pm = 1; fo = ease(clamp((y - K.magEnd) / Math.max(1, K.finEnd - K.magEnd))); camZ = lerp(ZE + 8.5, ZF + 8, fo); }
    // sondaki halka
    rig.visible = fo > .35; rig.position.set(0, mob ? 1.1 : .75, ZF); rig.scale.setScalar(mob ? .55 : .72); needle.scale.setScalar(1);
    nRot = lerp(nRot, Math.sin(t*1.3)*.08, k*.3); needle.rotation.z = nRot;
    ring.rotation.x = lerp(ring.rotation.x, smy*.25 + Math.sin(t*.5)*.1, k); ring.rotation.y = lerp(ring.rotation.y, smx*.35 + Math.sin(t*.35)*.15, k);
  }
  if (IN.state !== 'done'){
    const hRx = ring.rotation.x, hRy = ring.rotation.y, base = mob ? .62 : 1;
    let it = IN.state === 'wait' ? -1 : (performance.now() - IN.t0)/1000 + (IN.short ? 2 : 0);
    if (it < 0){ rig.visible = false; iMat.opacity = 0; }
    else {
      const conv = ease(clamp((it - .3)/1.8)), solid = clamp((it - 1.95)/.75), reveal = ease(clamp((it - T_REVEAL)/.8)), rel = clamp((it - 2.6)/1.1);
      // toz: dağınık bulut → girdap → pusula şekli → dışarı saçılma
      if (!IN.short){
        iMat.opacity = clamp(it/.5) * (1 - rel) * .95;
        const sw = (1 - conv) * 2.8;
        for (let i=0;i<IPN;i++){ const j = i*3, a = sw * (1 + (i%7)*.05), ca = Math.cos(a), sa = Math.sin(a);
          const sx = iS[j]*ca - iS[j+1]*sa, sy = iS[j]*sa + iS[j+1]*ca, r2 = rel*rel;
          iP[j]   = sx + (iT[j]   - sx)*conv + iD[j]*r2;
          iP[j+1] = sy + (iT[j+1] - sy)*conv + iD[j+1]*r2;
          iP[j+2] = iS[j+2] + (iT[j+2] - iS[j+2])*conv + iD[j+2]*r2; }
        iGeo.attributes.position.needsUpdate = true;
      } else iMat.opacity = 0;
      // halka belirir, ibre pusula gibi döner ve kuzeye oturur
      rig.visible = solid > 0; rig.position.set(0,0,0);
      rig.scale.setScalar(Math.max(base * easeBack(solid), .0001));
      ring.rotation.x = lerp(0, hRx, reveal); ring.rotation.y = lerp(0, hRy, reveal);
      const spn = clamp((it - 1.5)/1.7), so = 1 - Math.pow(1 - spn, 3);
      nRot = (1 - so)*Math.PI*5 + Math.sin(spn*Math.PI*3)*(1 - spn)*.18; needle.rotation.z = nRot; needle.scale.setScalar(1);
      // altın dalga
      const pt = clamp((it - 2.55)/1.0); pulse.visible = pt > 0 && pt < 1;
      pulse.scale.setScalar(base * (1 + pt*5)); pulse.material.opacity = (1 - pt) * .75;
      // başlık açılır
      if (it > T_REVEAL - .3) document.body.classList.remove('intro');
      if (it > T_END) endIntro(true);
    }
  }
  needle.rotation.x = ring.rotation.x; needle.rotation.y = ring.rotation.y;
  camera.position.z = camZ;
  camera.position.x = lerp(camera.position.x, smx*.35, k*.4); camera.position.y = lerp(camera.position.y, -smy*.25, k*.4);
  camera.lookAt(camera.position.x*.4, camera.position.y*.4, camera.position.z - 10);
  camera.updateMatrixWorld();
  warm.position.set(rig.visible ? rig.position.x - 1 : (ps >= 0 ? (mob ? 0 : 2.1) - 1 : L.ax - 1.5), 1.2, rig.visible ? rig.position.z + 2 : (pm >= 0 ? ZE + 3 : ps >= 0 ? ZS + 3 : ZC + 4));

  // galeri: aktif kart öne döner (sarmal)
  const N = cards.length, step = Math.PI*2/N;
  const target = pc * (N-1); active = reduce ? target : lerp(active, target, k*.5);
  carActive = y > K.carStart - H*.8 && y < K.carEnd + H*.4;
  const showUI = y > K.carStart - H*.2 && y < K.carEnd + H*.1 && focus < 0;
  fades.forEach(f => f.classList.toggle('show', showUI));
  const ai = Math.round(clamp(active, 0, N-1)); cNow.textContent = pad(ai+1);
  listBtns.forEach((b,i) => b.classList.toggle('on', i === ai));

  column.position.set(L.ax, L.ay + (active - 0)*0 , ZC); column.scale.setScalar(L.scale);
  colRings.forEach((r,i) => { r.rotation.z = t*(.2 + i*.03)*(i%2?1:-1); r.position.y = (i-5)*.95 + Math.sin(t*.6+i)*.05; });
  const colOn = camZ < ZC + 22 && camZ > ZC - 4 && focus < 0;
  if (colOn){ const sp = swGeo.attributes.position.array;
  for (let i=0;i<SWN;i++){ const d = swD[i], a = d[1] + t*d[3]*.5 + active*step*.6; sp[i*3] = Math.cos(a)*d[0]; sp[i*3+1] = d[2] + Math.sin(t*.4+i)*.05; sp[i*3+2] = Math.sin(a)*d[0]; }
  swGeo.attributes.position.needsUpdate = true; }
  swMat.opacity = (1 - out) * .9;

  // E-ticaret sahnesi
  shopG.position.set(mob ? 0 : 2.2, mob ? 1.4 : 0, ZE); shopG.scale.setScalar(mob ? .7 : 1.3);
  shopG.visible = camZ < ZE + 26 && camZ > ZE - 2;
  if (shopG.visible){
    const mp = pm < 0 ? 0 : Math.min(6, Math.floor(pm * 7));
    mPh.forEach((el,i) => el.classList.toggle('on', pm >= 0 && i === mp));
    mSteps.forEach((el,i) => { el.classList.toggle('on', i === mp - 1); el.classList.toggle('done', i < mp - 1); });
    const tg = SHAPE[mp](t);
    shopG.rotation.y = lerp(shopG.rotation.y, smx*.35 + (mp === 1 ? .6 : 0), k*.3); shopG.rotation.x = lerp(shopG.rotation.x, smy*.15 + (mp === 1 ? .35 : 0), k*.3);
    for (let i=0;i<NE;i++){ const c = eCur[i], g = tg[i];
      c.p.lerp(g.p, clamp(k*.35 + (i%10)*.003)); c.s = lerp(c.s, g.s, k*.35); c.c.lerp(eCol.set(g.c), k*.3);
      eTmp.position.copy(c.p); eTmp.rotation.set(c.r[0] + t*c.r[2]*.3*(mp===0), c.r[1] + t*c.r[2]*.2*(mp===0), 0);
      if (mp !== 0) eTmp.rotation.set(0,0,0);
      eTmp.scale.setScalar(Math.max(c.s,.0001)); eTmp.updateMatrix(); shop.setMatrixAt(i, eTmp.matrix); shop.setColorAt(i, c.c); }
    shop.instanceMatrix.needsUpdate = true; shop.instanceColor.needsUpdate = true;
  }

  // SekreterAI sahnesi
  sekG.position.set(mob ? 0 : 2.1, mob ? 1.35 : 0, ZS); sekG.scale.setScalar(mob ? .62 : 1);
  sekG.visible = camZ < ZS + 24 && camZ > ZS - 2;
  const ph = ps < 0 ? -1 : ps < .14 ? 0 : ps < .26 ? 1 : ps < .5 ? 2 : ps < .63 ? 3 : ps < .8 ? 4 : 5;
  if (sekG.visible){
    phases.forEach((el,i) => el.classList.toggle('on', i === ph));
    beats.forEach(el => el.classList.toggle('in', ps >= +el.dataset.at));
    sSteps.forEach((el,i) => { el.classList.toggle('on', i === ph - 1); el.classList.toggle('done', i < ph - 1 || ph === 5); });
    let speaking = false;
    tLines.forEach(l => { const n = l.words.length, f = clamp((ps - l.from) / (l.to - l.from)), cnt = Math.ceil(f * n);
      l.words.forEach((w,i) => w.classList.toggle('on', i < cnt)); l.el.classList.toggle('on', ps >= l.from);
      if (l.ai && ps >= l.from && ps < l.to) speaking = true; });
    if (callTimer) callTimer.textContent = '00:' + String(Math.floor(clamp((ps - .26)/.24)*48)).padStart(2,'0');
    // çekirdek (halka + ses dalgası): arama gelince belirir, takvim ve mesajlarda küçülüp yukarı çıkar
    const coreS = ph <= 1 ? 0 : (ph === 3 || ph === 4) ? .36 : 1, coreY = (ph === 3 || ph === 4) ? 1.6 : 0;
    core.scale.setScalar(Math.max(lerp(core.scale.x, coreS, k*.3), .0001)); core.position.y = lerp(core.position.y, coreY, k*.3);
    voiceW = lerp(voiceW, speaking ? 1 : ph === 2 ? .2 : ph === 5 ? .35 : 0, k*.3); textW = lerp(textW, ph === 4 ? 1 : 0, k*.25);
    sekRing.rotation.x = smy*.25 + Math.sin(t*.5)*.08; sekRing.rotation.y = smx*.35 + Math.sin(t*.4)*.1;
    const speak = .55 + .45*Math.sin(t*2.1)*Math.sin(t*.9+1);
    for (let i=0;i<BN;i++){ const a = i/BN*Math.PI*2, wave = Math.abs(Math.sin(t*8.5 + i*.42) * Math.sin(t*3.3 + i*.17));
      const h = .06 + voiceW * (.15 + .95*wave*speak) + (1-voiceW)*.05*Math.sin(t*2+i);
      const r = 1.45 + h*.5;
      bTmp.position.set(Math.cos(a)*r, Math.sin(a)*r, 0); bTmp.rotation.set(0, 0, a - Math.PI/2); bTmp.scale.set(1, Math.max(h,.02), 1); bTmp.updateMatrix(); bars.setMatrixAt(i, bTmp.matrix); }
    bars.instanceMatrix.needsUpdate = true; bars.rotation.z = t*.05;
    typing.forEach((m,i) => { const s = textW * (.75 + .35*Math.max(0, Math.sin(t*5 - i*.9))); m.scale.setScalar(Math.max(s,.0001)); m.position.y = textW*Math.max(0, Math.sin(t*5 - i*.9))*.08; });
    // küp sahnesi
    const lp = ph === 2 ? clamp((ps - .26)/.24) : ph === 4 ? clamp((ps - .63)/.17) : 0;
    const tg = SV[Math.max(0, ph)](t, lp);
    for (let i=0;i<NV;i++){ const c = svCur[i], g = tg[i];
      c.p.lerp(g.p, clamp(k*.32 + (i%9)*.004)); c.s = lerp(c.s, g.s, k*.35); c.c.lerp(svCol.set(g.c), k*.3);
      svTmp.position.copy(c.p); svTmp.rotation.set(0,0,0); svTmp.scale.setScalar(Math.max(c.s,.0001)); svTmp.updateMatrix(); svMesh.setMatrixAt(i, svTmp.matrix); svMesh.setColorAt(i, c.c); }
    svMesh.instanceMatrix.needsUpdate = true; svMesh.instanceColor.needsUpdate = true;
    svMesh.rotation.y = lerp(svMesh.rotation.y, smx*.3, k*.3); svMesh.rotation.x = lerp(svMesh.rotation.x, smy*.15, k*.3);
    // çalan telefonun etrafında dalgalar
    const rp = ph === 1 ? (t*.9) % 1 : 0; sPulse.visible = ph === 1; sPulse.position.set(0, 0, -.05);
    sPulse.scale.setScalar(.9 + rp*1.5); sPulse.material.opacity = (1 - rp)*.45;
  }

  // detay açıkken sahne siyaha döner, sütun ve toz kaybolur
  dT = lerp(dT, focus >= 0 ? 1 : 0, k*.35);
  scene.background.copy(NIGHT).lerp(BLACK, dT); scene.fog.color.copy(scene.background);
  column.visible = dT < .7 && IN.state === 'done' && !L.m; swMat.opacity *= (1 - dT); pMat.opacity = .85 * (1 - dT*.85);
  fwd.set(0,0,-1).applyQuaternion(camera.quaternion);
  cards.forEach((c,i) => {
    const a = (i - active) * step;                // 0 = kameraya bakan ön pozisyon
    const ry = (i - active) * -STEPY;
    let tp, tq, ts, top;
    if (focus === i){
      const fx = mob ? 0 : 1.75, fy = mob ? 1.6 : -.05, dist = mob ? 7.5 : 5.6;
      tp = tmpV.copy(camera.position).addScaledVector(fwd, dist).add(new THREE.Vector3(fx, fy, 0));
      tq = tmpQ.copy(camera.quaternion).multiply(tiltQ.setFromEuler(tmpE.set(smy*.28, smx*.38, -smx*.04))); ts = mob ? .55 : 1.32; top = 1;
    } else {
      tp = tmpV.set(L.ax + Math.sin(a)*L.R*L.scale, L.ay + ry*L.scale, ZC + Math.cos(a)*L.R*L.scale);
      const hv = hover === i ? 1 : 0;
      tq = tmpQ.setFromEuler(tmpE.set(smy*(.05 + hv*.22), a + smx*(.08 + hv*.3), c.tilt + Math.sin(t*.7+i)*.02));
      ts = L.scale * (hv ? 1.06 : 1);
      const dd = Math.abs(i - active);
      top = (L.m ? clamp(1 - dd*1.4, 0, 1) : clamp(1 - dd*.22, .25, 1)) * (1 - out) * (focus >= 0 ? 0 : 1) * clamp((y - K.heroEnd) / Math.max(1, K.carStart - K.heroEnd) * 1.4);
    }
    c.pos.lerp(tp, focus === i ? k*.38 : k*.5); c.q.slerp(tq, focus === i ? k*.38 : k*.5); c.s = lerp(c.s, ts, k*.4); c.op = lerp(c.op, top, k*.4);
    c.g.position.copy(c.pos); c.g.quaternion.copy(c.q); c.g.scale.setScalar(c.s);
    const wantDark = focus === i; if (wantDark !== c.dark){ c.dark = wantDark; c.front.material.map = wantDark ? c.texB : c.texA; c.front.material.needsUpdate = true; }
    c.sh = lerp(c.sh, (focus === i || (hover === i && focus < 0)) ? 1 : 0, k*.3);
    c.sheen.material.opacity = c.sh * .32 * c.op; c.sheen.visible = c.sh > .01;
    c.sheen.position.x = lerp(c.sheen.position.x, mx*1.5, k*.5); c.sheen.position.y = lerp(c.sheen.position.y, -my*.95, k*.5);
    c.front.material.color.setScalar(c.op); c.back.material.color.set('#0C262B').multiplyScalar(c.op); c.g.visible = c.op > .02;
  });

  // genel toz
  if (!mobileStart){ const pa = pGeo.attributes.position.array;
    for (let i=0;i<PN;i++){ pa[i*3+1] += dt*.05*pSp[i]; if (pa[i*3+1] > 7) pa[i*3+1] = -7; }
    pGeo.attributes.position.needsUpdate = true; }
  else dustPts.position.y = Math.sin(t*.1)*.6;

  if (!mob) composer.render(); else renderer.render(scene, camera);

  // uyarlanabilir kalite: kare süresi uzun kalırsa çözünürlük düşer, iyileşirse geri çıkar
  fAcc += dt; fN++;
  if (fAcc > 1.2){ const avg = fAcc / fN; fAcc = 0; fN = 0;
    if (avg > .024 && PR > PR_MIN){ PR = Math.max(PR_MIN, PR - .25); renderer.setPixelRatio(PR); composer.setPixelRatio && composer.setPixelRatio(PR); renderer.setSize(W, H, false); composer.setSize(W, H); }
    else if (avg < .0135 && PR < Math.min(devicePixelRatio, mobileStart ? 1.25 : 1.75)){ PR = Math.min(PR + .25, devicePixelRatio, mobileStart ? 1.25 : 1.75); renderer.setPixelRatio(PR); composer.setPixelRatio && composer.setPixelRatio(PR); renderer.setSize(W, H, false); composer.setSize(W, H); } }
  if (first){ first = false; window.__load.ready = true; canvas.classList.add('on'); window.startIntro(SVC.some(x => '#'+x.id === location.hash)); }
  requestAnimationFrame(frame);
}
frame();
