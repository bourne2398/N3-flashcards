const CARDS = [
{kanji:"丁",reading:"ちょう",meaning:"block / ward",onyomi:"チョウ・テイ",kunyomi:"ひのと"},
{kanji:"側",reading:"そく・かわ",meaning:"side",onyomi:"ソク",kunyomi:"かわ・そば"},
{kanji:"助",reading:"たすける",meaning:"help",onyomi:"ジョ",kunyomi:"たすける・たすかる"},
{kanji:"各",reading:"おのおの",meaning:"each",onyomi:"カク",kunyomi:"おのおの"},
{kanji:"央",reading:"おう",meaning:"central",onyomi:"オウ",kunyomi:"—"},
{kanji:"島",reading:"しま",meaning:"island",onyomi:"トウ",kunyomi:"しま"},
{kanji:"政",reading:"せい",meaning:"politics",onyomi:"セイ・ショウ",kunyomi:"まつりごと"},
{kanji:"改",reading:"あらためる",meaning:"change",onyomi:"カイ",kunyomi:"あらためる・あらたまる"},
{kanji:"札",reading:"ふだ",meaning:"tag / label / bill",onyomi:"サツ",kunyomi:"ふだ"},
{kanji:"次",reading:"つぎ",meaning:"next",onyomi:"ジ・シ",kunyomi:"つぎ・つぐ"},
{kanji:"浅",reading:"あさい",meaning:"shallow",onyomi:"セン",kunyomi:"あさい"},
{kanji:"玉",reading:"たま",meaning:"ball",onyomi:"ギョク",kunyomi:"たま"},
{kanji:"祭",reading:"まつり",meaning:"festival",onyomi:"サイ",kunyomi:"まつる・まつり"},
{kanji:"粉",reading:"こな",meaning:"powder",onyomi:"フン",kunyomi:"こな・こ"},
{kanji:"胃",reading:"い",meaning:"stomach",onyomi:"イ",kunyomi:"—"},
{kanji:"覚",reading:"おぼえる",meaning:"remember",onyomi:"カク",kunyomi:"おぼえる・さめる・さます"},
{kanji:"身",reading:"み",meaning:"body",onyomi:"シン",kunyomi:"み"},
{kanji:"録",reading:"ろく",meaning:"record",onyomi:"ロク",kunyomi:"しるす"},
{kanji:"停",reading:"てい",meaning:"stop",onyomi:"テイ",kunyomi:"—"},
{kanji:"健",reading:"すこやか",meaning:"healthy / health",onyomi:"ケン",kunyomi:"すこやか"},
{kanji:"両",reading:"りょう",meaning:"both",onyomi:"リョウ",kunyomi:"—"},
{kanji:"億",reading:"おく",meaning:"hundred million",onyomi:"オク",kunyomi:"—"},
{kanji:"努",reading:"つとめる",meaning:"diligent / strive",onyomi:"ド",kunyomi:"つとめる"},
{kanji:"向",reading:"むく",meaning:"confront / face",onyomi:"コウ",kunyomi:"むく・むける・むかう"},
{kanji:"失",reading:"うしなう",meaning:"lose",onyomi:"シツ",kunyomi:"うしなう"},
{kanji:"州",reading:"しゅう",meaning:"state",onyomi:"シュウ",kunyomi:"す"},
{kanji:"靴",reading:"くつ",meaning:"shoes",onyomi:"カ",kunyomi:"くつ"},
{kanji:"放",reading:"はなす",meaning:"release",onyomi:"ホウ",kunyomi:"はなす・はなつ・はなれる"},
{kanji:"材",reading:"ざい",meaning:"material / lumber",onyomi:"ザイ",kunyomi:"—"},
{kanji:"歯",reading:"は",meaning:"tooth",onyomi:"シ",kunyomi:"は"},
{kanji:"浴",reading:"あびる",meaning:"bathe",onyomi:"ヨク",kunyomi:"あびる・あびせる"},
{kanji:"王",reading:"おう",meaning:"king",onyomi:"オウ",kunyomi:"—"},
{kanji:"福",reading:"ふく",meaning:"fortune",onyomi:"フク",kunyomi:"—"},
{kanji:"糸",reading:"いと",meaning:"thread",onyomi:"シ",kunyomi:"いと"},
{kanji:"経",reading:"へる",meaning:"undergo",onyomi:"ケイ・キョウ",kunyomi:"へる・たつ"},
{kanji:"観",reading:"みる",meaning:"view",onyomi:"カン",kunyomi:"みる"},
{kanji:"軍",reading:"ぐん",meaning:"army",onyomi:"グン",kunyomi:"—"},
{kanji:"鏡",reading:"かがみ",meaning:"mirror",onyomi:"キョウ",kunyomi:"かがみ"},
{kanji:"功",reading:"こう",meaning:"merit",onyomi:"コウ・ク",kunyomi:"—"},
{kanji:"加",reading:"くわえる",meaning:"add",onyomi:"カ",kunyomi:"くわえる・くわわる"},
{kanji:"丸",reading:"まる",meaning:"circle",onyomi:"ガン",kunyomi:"まる・まるい・まるめる"},
{kanji:"兆",reading:"ちょう",meaning:"trillion / omen",onyomi:"チョウ",kunyomi:"きざす・きざし"},
{kanji:"労",reading:"ろう",meaning:"work / labor",onyomi:"ロウ",kunyomi:"いたわる"},
{kanji:"君",reading:"きみ",meaning:"you",onyomi:"クン",kunyomi:"きみ"},
{kanji:"委",reading:"ゆだねる",meaning:"entrust",onyomi:"イ",kunyomi:"ゆだねる"},
{kanji:"巣",reading:"す",meaning:"nest",onyomi:"ソウ",kunyomi:"す"},
{kanji:"得",reading:"える",meaning:"profit / obtain",onyomi:"トク",kunyomi:"える・うる"},
{kanji:"救",reading:"すくう",meaning:"save",onyomi:"キュウ",kunyomi:"すくう"},
{kanji:"束",reading:"たば",meaning:"bunch",onyomi:"ソク",kunyomi:"たば"},
{kanji:"歴",reading:"れき",meaning:"history / record / experience",onyomi:"レキ",kunyomi:"—"},
{kanji:"消",reading:"きえる",meaning:"disappear",onyomi:"ショウ",kunyomi:"きえる・けす"},
{kanji:"球",reading:"たま",meaning:"globe / ball",onyomi:"キュウ",kunyomi:"たま"},
{kanji:"科",reading:"か",meaning:"department",onyomi:"カ",kunyomi:"—"},
{kanji:"紀",reading:"き",meaning:"chronicle",onyomi:"キ",kunyomi:"—"},
{kanji:"腸",reading:"ちょう",meaning:"intestines",onyomi:"チョウ",kunyomi:"はらわた"},
{kanji:"角",reading:"かど",meaning:"corner",onyomi:"カク",kunyomi:"かど・つの"},
{kanji:"輪",reading:"わ",meaning:"wheel / ring / circle",onyomi:"リン",kunyomi:"わ"},
{kanji:"関",reading:"せき",meaning:"involve",onyomi:"カン",kunyomi:"せき・かかわる"},
{kanji:"号",reading:"ごう",meaning:"number",onyomi:"ゴウ",kunyomi:"—"},
{kanji:"司",reading:"つかさ",meaning:"administer / official",onyomi:"シ",kunyomi:"つかさ"},
{kanji:"予",reading:"よ",meaning:"beforehand / in advance",onyomi:"ヨ",kunyomi:"あらかじめ"},
{kanji:"児",reading:"こ",meaning:"child",onyomi:"ジ・ニ",kunyomi:"こ"},
{kanji:"勇",reading:"いさむ",meaning:"courage",onyomi:"ユウ",kunyomi:"いさむ"},
{kanji:"告",reading:"つげる",meaning:"inform",onyomi:"コク",kunyomi:"つげる"},
{kanji:"季",reading:"き",meaning:"seasons",onyomi:"キ",kunyomi:"—"},
{kanji:"差",reading:"さす",meaning:"difference",onyomi:"サ",kunyomi:"さす"},
{kanji:"必",reading:"かならず",meaning:"certainly",onyomi:"ヒツ",kunyomi:"かならず"},
{kanji:"敗",reading:"やぶれる",meaning:"defeat",onyomi:"ハイ",kunyomi:"やぶる・やぶれる"},
{kanji:"松",reading:"まつ",meaning:"pine tree",onyomi:"ショウ",kunyomi:"まつ"},
{kanji:"残",reading:"のこる",meaning:"remain",onyomi:"ザン",kunyomi:"のこる・のこす"},
{kanji:"深",reading:"ふかい",meaning:"deep",onyomi:"シン",kunyomi:"ふかい・ふかまる・ふかめる"},
{kanji:"由",reading:"ゆ",meaning:"reason",onyomi:"ユ・ユウ",kunyomi:"よし"},
{kanji:"秒",reading:"びょう",meaning:"second",onyomi:"ビョウ",kunyomi:"—"},
{kanji:"約",reading:"やく",meaning:"promise",onyomi:"ヤク",kunyomi:"—"},
{kanji:"臣",reading:"しん",meaning:"retainer",onyomi:"シン・ジン",kunyomi:"—"},
{kanji:"訓",reading:"くん",meaning:"training",onyomi:"クン",kunyomi:"おしえる・よむ"},
{kanji:"辞",reading:"やめる",meaning:"resign",onyomi:"ジ",kunyomi:"やめる"},
{kanji:"陸",reading:"りく",meaning:"land",onyomi:"リク・ロク",kunyomi:"—"},
{kanji:"変",reading:"かわる",meaning:"change / strange",onyomi:"ヘン",kunyomi:"かわる・かえる"},
{kanji:"夫",reading:"おっと",meaning:"husband",onyomi:"フ・フウ",kunyomi:"おっと"},
{kanji:"争",reading:"あらそう",meaning:"dispute",onyomi:"ソウ",kunyomi:"あらそう"},
{kanji:"全",reading:"すべて",meaning:"whole",onyomi:"ゼン",kunyomi:"まったく・すべて"},
{kanji:"勝",reading:"かつ",meaning:"victory",onyomi:"ショウ",kunyomi:"かつ・まさる"},
{kanji:"周",reading:"まわり",meaning:"around / surrounding",onyomi:"シュウ",kunyomi:"まわり・まわる"},
{kanji:"孫",reading:"まご",meaning:"grandchild",onyomi:"ソン",kunyomi:"まご"},
{kanji:"希",reading:"き",meaning:"hope / rare",onyomi:"キ",kunyomi:"まれ"},
{kanji:"念",reading:"ねん",meaning:"wish",onyomi:"ネン",kunyomi:"—"},
{kanji:"散",reading:"ちる",meaning:"scatter",onyomi:"サン",kunyomi:"ちる・ちらす・ちらかす"},
{kanji:"板",reading:"いた",meaning:"board",onyomi:"ハン・バン",kunyomi:"いた"},
{kanji:"殺",reading:"ころす",meaning:"kill",onyomi:"サツ・セツ・サイ",kunyomi:"ころす"},
{kanji:"清",reading:"きよい",meaning:"pure",onyomi:"セイ・ショウ",kunyomi:"きよい・きよめる"},
{kanji:"申",reading:"もうす",meaning:"say / state (humble)",onyomi:"シン",kunyomi:"もうす"},
{kanji:"種",reading:"たね",meaning:"kind / type",onyomi:"シュ",kunyomi:"たね"},
{kanji:"級",reading:"きゅう",meaning:"rank",onyomi:"キュウ",kunyomi:"—"},
{kanji:"航",reading:"こう",meaning:"navigate",onyomi:"コウ",kunyomi:"—"},
{kanji:"記",reading:"しるす",meaning:"scribe / record",onyomi:"キ",kunyomi:"しるす"},
{kanji:"農",reading:"のう",meaning:"agriculture",onyomi:"ノウ",kunyomi:"—"},
{kanji:"陽",reading:"よう",meaning:"sunshine",onyomi:"ヨウ",kunyomi:"ひ"},
{kanji:"岩",reading:"いわ",meaning:"boulder",onyomi:"ガン",kunyomi:"いわ"},
{kanji:"岸",reading:"きし",meaning:"shore / bank / coast",onyomi:"ガン",kunyomi:"きし"}
];

const state={view:"learning",flipped:false,index:0,dragX:0,dragging:false};
const saved=JSON.parse(localStorage.getItem("n3-progress")||"{}");
const status={...saved};

const $=id=>document.getElementById(id);
const card=$("card");
const swipeFeedback=$("swipeFeedback");
const swipeUnknown=$("swipeUnknown");
const swipeKnown=$("swipeKnown");

function ids(view){
  return CARDS.map((_,i)=>i).filter(i=>{
    const s=status[i];
    return view==="learning"?!s:s===view;
  });
}
function updateStats(){
  $("remainingCount").textContent=ids("learning").length;
  $("knownCount").textContent=ids("known").length;
  $("unknownCount").textContent=ids("unknown").length;
}
function currentIds(){return ids(state.view)}
function render(){
  updateStats();
  const list=currentIds();
  if(state.index>=list.length)state.index=0;
  const i=list[state.index];
  const empty=!Number.isInteger(i);
  $("cardStage").hidden=empty;
  $("controls").hidden=empty;
  $("emptyState").hidden=!empty;
  if(empty){
    const title=state.view==="learning"?"All caught up!":state.view==="known"?"No Knew cards yet":"No Don't know cards yet";
    $("emptyTitle").textContent=title;
    $("emptyText").textContent=state.view==="learning"?"Great work. Review Knew or Don't know above.":"Cards you move here will appear in this group.";
    return;
  }
  const c=CARDS[i];
  $("kanji").textContent=c.kanji;
  $("reading").textContent=c.reading;
  $("meaning").textContent=c.meaning;
  $("onyomi").textContent=c.onyomi;
  $("kunyomi").textContent=c.kunyomi;
  state.flipped=false;
  card.classList.remove("flipped");
  card.style.transform="";
  card.style.opacity="1";
  clearSwipeFeedback();
}
function save(){localStorage.setItem("n3-progress",JSON.stringify(status));updateStats()}
function move(result){
  const list=currentIds(); const i=list[state.index];
  if(!Number.isInteger(i))return;
  status[i]=result;
  save();
  card.style.transition="transform .22s ease, opacity .22s ease";
  card.style.transform=`translateX(${result==="known"?window.innerWidth*.9:-window.innerWidth*.9}px) rotate(${result==="known"?14:-14}deg)`;
  card.style.opacity="0";
  setTimeout(()=>{state.index++;render()},180);
}
function updateSwipeFeedback(dx){
  const amount=Math.min(Math.abs(dx)/90,1);
  swipeFeedback.style.opacity=String(amount);
  swipeUnknown.style.opacity=dx<0?String(amount):"0";
  swipeKnown.style.opacity=dx>0?String(amount):"0";
  swipeUnknown.style.transform=dx<0?`scale(${0.9+amount*.1}) rotate(-8deg)`:"scale(.9) rotate(-8deg)";
  swipeKnown.style.transform=dx>0?`scale(${0.9+amount*.1}) rotate(8deg)`:"scale(.9) rotate(8deg)";
}
function clearSwipeFeedback(){
  swipeFeedback.style.opacity="0";
  swipeUnknown.style.opacity="0";
  swipeKnown.style.opacity="0";
}
function flip(){if(!state.dragging) {state.flipped=!state.flipped;card.classList.toggle("flipped",state.flipped)}}

card.addEventListener("pointerdown",e=>{
  state.dragging=true;state.startX=e.clientX;state.startY=e.clientY;state.dragX=0;
  card.classList.add("dragging");card.setPointerCapture(e.pointerId);
});
card.addEventListener("pointermove",e=>{
  if(!state.dragging)return;
  state.dragX=e.clientX-state.startX;
  const rotate=state.dragX/18;
  card.style.transform=`translateX(${state.dragX}px) rotate(${rotate}deg)`;
  card.style.opacity=String(1-Math.min(Math.abs(state.dragX)/500,.35));
  updateSwipeFeedback(state.dragX);
});
card.addEventListener("pointerup",e=>{
  if(!state.dragging)return;
  const dx=state.dragX; state.dragging=false; card.classList.remove("dragging");
  if(Math.abs(dx)>90){clearSwipeFeedback();move(dx>0?"known":"unknown")}
  else{card.style.transform="";card.style.opacity="1";clearSwipeFeedback();flip()}
});
card.addEventListener("pointercancel",()=>{
  state.dragging=false;card.classList.remove("dragging");card.style.transform="";card.style.opacity="1";clearSwipeFeedback();
});
card.addEventListener("keydown",e=>{
  if(e.key==="Enter"||e.key===" "){e.preventDefault();flip()}
  if(e.key==="ArrowLeft"){e.preventDefault();move("unknown")}
  if(e.key==="ArrowRight"){e.preventDefault();move("known")}
});
$("knewBtn").onclick=()=>move("known");
$("dontKnowBtn").onclick=()=>move("unknown");

document.querySelectorAll(".tab").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");state.view=btn.dataset.view;state.index=0;render();
}));
$("resetBtn").onclick=()=>{Object.keys(status).forEach(k=>delete status[k]);save();state.index=0;render()};
$("resetAllBtn").onclick=()=>{
  if(confirm("Reset all N3 progress?")){Object.keys(status).forEach(k=>delete status[k]);save();state.index=0;render()}
};

let deferredPrompt;
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;$("installBtn").hidden=false});
$("installBtn").onclick=async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$("installBtn").hidden=true};
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
render();