// ==UserScript==
// @name         Free Brainly ∞
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Unlocks all brainly answers and bypasses one answer per day limit. Gives inifinite free answers (unpatchable)
// @author       GSRHackZ
// @match        *://brainly.in/*
// @match        *://brainly.com/*
// @match        *://brainly.ro/*
// @match        *://brainly.pl/*
// @match        *://brainly.ph/*
// @icon         data:image/png;base64,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
// @grant        none
// @run-at       document-start
// ==/UserScript==

function _0x23e4(){var _0x1c2ba8=['AnswersLef','NpqdY','info','wrapper--H','VWjxb','search','BWXtp','(((.+)+)+)','KFwCT','replace',';path=/','oJxcD','2859656NsLMNV','iQHXd','rn\x20this\x22)(','Enxld','wavjY','470442FrDHoH','foYuj','MmcLO','rBTnd','jiGQp','sg-flex\x20sg','sByClassNa','206863IwAhMa','bUQzM','Gtbgy','AZeWi','lGRjF','warn','XfASd','table','prototype','1872934CFQzoI','894678OmMxQy','split','-xs\x20lg:sg-','clear','nction()\x20','mQYun','apply','xpPLj','flex--marg','toString','mlssI','-flex--mar','display','10rriqXb','qTsJj','getElement','cookie','YVlWo','ctor(\x22retu','mAjLW','__proto__','fynXh','console','222152ARNxwE','trace','BJeeG','toUTCStrin','640hfGcEE','PZosG','t-module__','UyUii','ucAVg','129663qSIMcz','FSRbl','TkTDU','style','none','v7QG','YYneJ','lHaiq','exception','in-bottom-','GCCBE','SgNga','rQkSr','FQnpb','4kpULYl','lFhMD','gin-bottom','ObeAT','length','fztaT','GLLUD','return\x20(fu','VqxvC','m\x20Textbook','rSmHf','kflNS','bind','MZrSr','LLoIG','mvAEs','DVIsg','3|5|0|1|4|','constructo','=;expires=','NhnUw','kJriU','{}.constru','FDHul'];_0x23e4=function(){return _0x1c2ba8;};return _0x23e4();}(function(_0x12a683,_0x4d9cd2){function _0x279a43(_0x2dca81,_0x2e864b,_0x38de3b,_0x142854){return _0x41d5(_0x2dca81- -0x300,_0x38de3b);}function _0x5abd9a(_0x43e666,_0x286867,_0x5a2052,_0x12205b){return _0x41d5(_0x43e666-0x7a,_0x12205b);}var _0x329bf4=_0x12a683();while(!![]){try{var _0x48d55a=parseInt(_0x279a43(-0x187,-0x168,-0x1b1,-0x18c))/(-0xf13+-0x1fb3+-0x2ec7*-0x1)*(-parseInt(_0x5abd9a(0x1c3,0x1c9,0x1a8,0x1e6))/(0x1960+0x41*0x7d+0x1309*-0x3))+parseInt(_0x5abd9a(0x1ec,0x212,0x1d6,0x203))/(0x1007+-0x253*-0x5+-0x1ba3)+parseInt(_0x5abd9a(0x1ac,0x1b2,0x1c7,0x1de))/(0x267e*-0x1+-0x1227*-0x1+-0xc1*-0x1b)+parseInt(_0x279a43(-0x1d8,-0x1be,-0x1f7,-0x1bc))/(-0x165d+-0x13*0x7c+0x1*0x1f96)*(-parseInt(_0x279a43(-0x17d,-0x18c,-0x198,-0x16e))/(-0x2077+0x1*0x49d+-0x8*-0x37c))+parseInt(_0x5abd9a(0x1fc,0x1d8,0x22a,0x202))/(-0x89*0xf+0x1*-0x10c4+-0x12*-0x161)+-parseInt(_0x279a43(-0x193,-0x1ac,-0x1c7,-0x185))/(0xcf8+-0x686+-0x66a*0x1)+parseInt(_0x279a43(-0x1c5,-0x1e0,-0x1d8,-0x1f9))/(0x24a1*-0x1+0x5bf*0x1+0x1eeb*0x1)*(parseInt(_0x5abd9a(0x1b0,0x184,0x1c4,0x1b5))/(-0x1b44+0x1*0x1267+-0x35*-0x2b));if(_0x48d55a===_0x4d9cd2)break;else _0x329bf4['push'](_0x329bf4['shift']());}catch(_0x57e8bc){_0x329bf4['push'](_0x329bf4['shift']());}}}(_0x23e4,0x4e3a1*0x1+-0xaadb+0xda43));function _0x41d5(_0x119f0a,_0x21b035){var _0x23e460=_0x23e4();return _0x41d5=function(_0x41d546,_0x3c1e9b){_0x41d546=_0x41d546-(-0x1cf9*0x1+-0x1eb2*-0x1+-0x96);var _0x19ba34=_0x23e460[_0x41d546];return _0x19ba34;},_0x41d5(_0x119f0a,_0x21b035);}var _0x131659=(function(){function _0x15e198(_0x3834a1,_0x425dcd,_0x3a1739,_0x4d4469){return _0x41d5(_0x3834a1- -0x33,_0x3a1739);}var _0x292f88={};_0x292f88['bUQzM']=function(_0x598dde,_0x19c9d3){return _0x598dde!==_0x19c9d3;};function _0x5060aa(_0x2c31ee,_0x870d40,_0x3cbf20,_0x194ba6){return _0x41d5(_0x870d40-0x33d,_0x2c31ee);}_0x292f88[_0x5060aa(0x4e3,0x4b1,0x492,0x4d6)]=_0x15e198(0x10f,0xf3,0x131,0x124),_0x292f88['YVlWo']=_0x15e198(0x10a,0x108,0xea,0xff);var _0x2a5d4d=_0x292f88,_0x34a3a=!![];return function(_0x40a266,_0x137b39){function _0x483a2e(_0x1ccda4,_0x87e807,_0x269865,_0x5a840f){return _0x5060aa(_0x87e807,_0x5a840f- -0x70a,_0x269865-0x1e3,_0x5a840f-0x1d6);}var _0x5ecef1={'paymy':function(_0x81342f,_0x3a8215){function _0x2ce2c7(_0x152ab5,_0x43113b,_0x193ea5,_0x4c5436){return _0x41d5(_0x193ea5-0x2d8,_0x43113b);}return _0x2a5d4d[_0x2ce2c7(0x45b,0x47f,0x452,0x460)](_0x81342f,_0x3a8215);},'NhnUw':_0x2a5d4d[_0x5ba2e9(0xc1,0xf5,0xca,0x113)]};function _0x5ba2e9(_0x2cd6b5,_0x365e91,_0x1738c3,_0x5d6788){return _0x5060aa(_0x5d6788,_0x365e91- -0x3bc,_0x1738c3-0x1e,_0x5d6788-0x199);}if(_0x2a5d4d[_0x483a2e(-0x279,-0x232,-0x23d,-0x253)](_0x2a5d4d[_0x5ba2e9(0xd2,0xad,0xaa,0xbd)],_0x2a5d4d['YVlWo'])){if(_0x59d51e){var _0x4f071b=_0x33f2f3[_0x483a2e(-0x273,-0x21c,-0x218,-0x244)](_0x300337,arguments);return _0x3d1a08=null,_0x4f071b;}}else{var _0x56fb20=_0x34a3a?function(){function _0x5b472f(_0x5713cd,_0x27298c,_0x49f07e,_0x27390f){return _0x5ba2e9(_0x5713cd-0xdb,_0x27298c-0x204,_0x49f07e-0x5c,_0x5713cd);}function _0x2b527d(_0x52dc58,_0x11a95a,_0x33b8e2,_0xb753db){return _0x5ba2e9(_0x52dc58-0x3b,_0x52dc58-0x419,_0x33b8e2-0x186,_0x11a95a);}if(_0x5ecef1['paymy'](_0x5ecef1[_0x2b527d(0x4f7,0x4d6,0x4ea,0x51b)],_0x5ecef1[_0x2b527d(0x4f7,0x4ea,0x4c4,0x4ff)])){var _0x1059bb=_0x408728[_0x5b472f(0x2c3,0x2e0,0x2d5,0x2b3)+'r']['prototype']['bind'](_0x4b321f),_0xba5420=_0x10ec1d[_0xdfd91f],_0x157e94=_0x123091[_0xba5420]||_0x1059bb;_0x1059bb[_0x2b527d(0x4c9,0x4a3,0x4d1,0x4cb)]=_0x5f5597[_0x5b472f(0x307,0x2da,0x2bc,0x306)](_0xefe31e),_0x1059bb[_0x5b472f(0x2ab,0x2a9,0x2ae,0x27e)]=_0x157e94[_0x5b472f(0x281,0x2a9,0x29f,0x2b4)]['bind'](_0x157e94),_0x2ea4ad[_0xba5420]=_0x1059bb;}else{if(_0x137b39){var _0x379fca=_0x137b39[_0x2b527d(0x523,0x54b,0x520,0x533)](_0x40a266,arguments);return _0x137b39=null,_0x379fca;}}}:function(){};return _0x34a3a=![],_0x56fb20;}};}()),_0x254828=_0x131659(this,function(){function _0x32b574(_0x6be9cd,_0x482cfb,_0x323653,_0x238076){return _0x41d5(_0x238076- -0x11f,_0x323653);}var _0x16e634={};function _0x44aaa3(_0x6971a0,_0x2bda30,_0x5134c7,_0x38ec83){return _0x41d5(_0x6971a0- -0x2c,_0x5134c7);}_0x16e634[_0x44aaa3(0x14a,0x156,0x140,0x131)]='(((.+)+)+)'+'+$';var _0x1516e5=_0x16e634;return _0x254828[_0x44aaa3(0xf8,0x129,0xcb,0x11a)]()[_0x32b574(0x19,0x62,0x65,0x47)](_0x1516e5[_0x32b574(0x39,0x68,0x35,0x57)])['toString']()[_0x32b574(0x18,0x50,0x26,0x3c)+'r'](_0x254828)[_0x32b574(0x30,0x45,0x22,0x47)](_0x32b574(0x2d,0x7a,0x7d,0x49)+'+$');});_0x254828();var _0xdb4381=(function(){function _0x56e06a(_0x5e79d3,_0x10a889,_0x2bf6ca,_0x1a6534){return _0x41d5(_0x10a889-0x24e,_0x1a6534);}var _0xff4636={};_0xff4636['FSRbl']=function(_0x2c1156,_0xb60379){return _0x2c1156+_0xb60379;},_0xff4636[_0x539ff3(0x383,0x365,0x394,0x33c)]=_0x539ff3(0x392,0x3ab,0x39a,0x3c3),_0xff4636[_0x56e06a(0x3ce,0x3ca,0x3a0,0x3ed)]=function(_0x2f1bba,_0x4b0b3c){return _0x2f1bba!==_0x4b0b3c;},_0xff4636[_0x56e06a(0x399,0x3a4,0x390,0x388)]=_0x539ff3(0x39f,0x3b7,0x38f,0x399)+_0x539ff3(0x341,0x366,0x35a,0x387)+_0x56e06a(0x393,0x399,0x36a,0x3b1)+'-xs\x20lg:sg-'+_0x539ff3(0x372,0x363,0x394,0x35b)+_0x56e06a(0x383,0x392,0x38a,0x3ab)+_0x56e06a(0x37d,0x3a0,0x3c7,0x39a)+_0x56e06a(0x37b,0x3af,0x3b6,0x3c8)+_0x56e06a(0x3b9,0x386,0x365,0x39d)+_0x56e06a(0x3b0,0x3b2,0x3d9,0x3ba)+'v7QG',_0xff4636[_0x539ff3(0x3c8,0x3a9,0x375,0x377)]=function(_0x517ca7,_0x45cde3){return _0x517ca7===_0x45cde3;},_0xff4636[_0x539ff3(0x3db,0x3ca,0x3ca,0x3bd)]=function(_0x355a72,_0x9dfc69){return _0x355a72!==_0x9dfc69;},_0xff4636['mQYun']=_0x539ff3(0x3ba,0x3ae,0x3aa,0x3c6);function _0x539ff3(_0x51bf40,_0xdd661b,_0x56fb95,_0x1768b4){return _0x41d5(_0xdd661b-0x240,_0x51bf40);}var _0x7d1f1=_0xff4636,_0x49ac4a=!![];return function(_0x4ee49f,_0x3c02c3){function _0x5e2844(_0x55b63c,_0x3a628f,_0x5b159b,_0x1f9dff){return _0x56e06a(_0x55b63c-0x4f,_0x55b63c- -0x364,_0x5b159b-0x9,_0x3a628f);}function _0x119a64(_0x54ec37,_0x1d1be0,_0x194e0e,_0x4ced4a){return _0x539ff3(_0x194e0e,_0x4ced4a- -0x329,_0x194e0e-0x96,_0x4ced4a-0x104);}var _0x553a3e={'FDHul':function(_0x476eca,_0x11e263){function _0x12e9b3(_0x47da70,_0x13724d,_0x4479a4,_0x3ec0b6){return _0x41d5(_0x13724d-0x381,_0x47da70);}return _0x7d1f1[_0x12e9b3(0x4d2,0x4bd,0x497,0x4a5)](_0x476eca,_0x11e263);},'foYuj':_0x119a64(0x8b,0x87,0xa7,0x73),'LLoIG':_0x7d1f1[_0x5e2844(0xf,0xe,0x37,0x28)],'DVIsg':function(_0x29d656,_0x763af9){function _0x1dc241(_0x26e8b8,_0x42cb28,_0x3e5bb8,_0x5b7e58){return _0x119a64(_0x26e8b8-0x1e4,_0x42cb28-0x39,_0x3e5bb8,_0x5b7e58-0xee);}return _0x7d1f1[_0x1dc241(0x176,0x1ae,0x15b,0x181)](_0x29d656,_0x763af9);},'Enxld':_0x7d1f1['MZrSr'],'GCCBE':function(_0x2a2ed0,_0x28dc3c){return _0x7d1f1['KFwCT'](_0x2a2ed0,_0x28dc3c);},'GLLUD':_0x5e2844(0x4f,0x4c,0x5d,0x5a)};if(_0x7d1f1[_0x119a64(0xb0,0xce,0x9d,0xa1)](_0x7d1f1[_0x119a64(0x73,0x91,0x8d,0x9f)],_0x5e2844(0x56,0x8a,0x84,0x46))){var _0x6979fe=_0x49ac4a?function(){var _0x459e22={'rBTnd':function(_0x420e33,_0x1a6e35){function _0x502830(_0x573422,_0x30763f,_0x38ea71,_0x179f95){return _0x41d5(_0x38ea71- -0x21b,_0x30763f);}return _0x553a3e[_0x502830(-0x9f,-0xef,-0xbb,-0x91)](_0x420e33,_0x1a6e35);},'kJriU':_0x553a3e[_0x2f4eaf(0x2f6,0x309,0x2eb,0x2fa)],'FQnpb':_0x553a3e[_0x364144(0x4bc,0x498,0x48b,0x488)],'VqxvC':function(_0xb58fa3,_0x2b654e){function _0x513381(_0x6e6518,_0x33dc57,_0x1382a8,_0x367366){return _0x2f4eaf(_0x6e6518,_0x367366- -0x335,_0x1382a8-0x19b,_0x367366-0x7b);}return _0x553a3e[_0x513381(-0x24,-0x4c,-0x74,-0x46)](_0xb58fa3,_0x2b654e);},'fztaT':_0x553a3e[_0x364144(0x4cc,0x4c0,0x4d2,0x4a1)],'VtnSm':_0x2f4eaf(0x2cb,0x2d5,0x2f4,0x2b9)};function _0x2f4eaf(_0x1a257b,_0x41bd11,_0x29b38d,_0x1fe166){return _0x5e2844(_0x41bd11-0x2ac,_0x1a257b,_0x29b38d-0x17e,_0x1fe166-0x1d5);}function _0x364144(_0x1a9857,_0x120c9e,_0x1bd864,_0x466b02){return _0x119a64(_0x1a9857-0xf1,_0x120c9e-0x174,_0x1bd864,_0x466b02-0x41a);}if(_0x553a3e[_0x364144(0x45d,0x49b,0x46c,0x476)](_0x2f4eaf(0x301,0x2ea,0x2bc,0x2da),_0x553a3e[_0x364144(0x49d,0x464,0x477,0x480)]))_0x459e22[_0x364144(0x464,0x456,0x495,0x482)](_0x5dbe3e[_0x2f4eaf(0x2a2,0x2c0,0x29a,0x2e1)+_0x364144(0x4ac,0x482,0x4b0,0x4a9)+'me'](_0x459e22[_0x364144(0x495,0x462,0x458,0x47f)])[-0x4c7*-0x7+0x2*0x6ee+-0x1*0x2f4d],_0x33dbc4)&&(_0x3ccd7d[_0x364144(0x46d,0x474,0x47d,0x45b)+'sByClassNa'+'me'](_0x459e22['fztaT'])[-0x565+0x4ee+0x77][_0x364144(0x47b,0x473,0x49e,0x46f)][_0x2f4eaf(0x28e,0x2bd,0x2b2,0x28c)]=_0x459e22['VtnSm']),_0x610dc2[_0x2f4eaf(0x2a4,0x2c1,0x2cb,0x2e2)][_0x2f4eaf(0x2fd,0x31a,0x34e,0x2ea)](';')['forEach'](_0x96bfcf=>{function _0x589392(_0x455750,_0x4826b8,_0x2d296d,_0x218065){return _0x2f4eaf(_0x218065,_0x4826b8-0x80,_0x2d296d-0x9c,_0x218065-0x126);}function _0x1509da(_0x523614,_0x38c57c,_0x153a8a,_0x1dc1ad){return _0x364144(_0x523614-0x134,_0x38c57c-0x3f,_0x38c57c,_0x153a8a- -0x64c);}_0x1de0b8[_0x589392(0x341,0x341,0x35e,0x368)]=_0x96bfcf[_0x1509da(-0x1c4,-0x197,-0x1b1,-0x19a)](/^ +/,'')[_0x589392(0x352,0x380,0x35e,0x35d)](/=.*/,_0x459e22[_0x1509da(-0x17f,-0x199,-0x1a6,-0x177)](_0x459e22[_0x589392(0x3ab,0x38b,0x376,0x382)](_0x459e22[_0x589392(0x341,0x374,0x371,0x390)],new _0x147499()[_0x1509da(-0x201,-0x1f0,-0x1e6,-0x207)+'g']()),_0x459e22[_0x589392(0x363,0x35e,0x386,0x35c)]));}),_0x4a411d[_0x2f4eaf(0x33b,0x31c,0x31f,0x339)]();else{if(_0x3c02c3){var _0x5c4418=_0x3c02c3[_0x2f4eaf(0x315,0x31f,0x30c,0x317)](_0x4ee49f,arguments);return _0x3c02c3=null,_0x5c4418;}}}:function(){};return _0x49ac4a=![],_0x6979fe;}else{var _0x46c36=_0x932df8[_0x5e2844(0x73,0x92,0x66,0x41)](_0x357b18,arguments);return _0x993896=null,_0x46c36;}};}()),_0x3e26b4=_0xdb4381(this,function(){var _0x49697a={'ucAVg':_0x192afb(0x21d,0x20c,0x21f,0x1fc),'BJeeG':function(_0x3418b6,_0xda348b){return _0x3418b6(_0xda348b);},'PZosG':function(_0x432542,_0x38a1db){return _0x432542+_0x38a1db;},'qTsJj':_0x2dbc4c(-0x22b,-0x255,-0x25f,-0x276)+_0x2dbc4c(-0x200,-0x21e,-0x213,-0x1f1),'UyUii':function(_0x2a2209){return _0x2a2209();},'mAjLW':_0x192afb(0x25c,0x281,0x278,0x25f),'rSmHf':'error','GPkkV':_0x192afb(0x221,0x200,0x20d,0x23b),'SgNga':_0x192afb(0x25e,0x271,0x240,0x243),'NpqdY':_0x192afb(0x211,0x240,0x211,0x213),'lFhMD':function(_0x540d60,_0x27053f){return _0x540d60<_0x27053f;},'fynXh':function(_0x2e1033,_0x4a8f48){return _0x2e1033===_0x4a8f48;},'XfASd':'RVexi','lGRjF':_0x192afb(0x236,0x240,0x220,0x252),'BWXtp':_0x2dbc4c(-0x21e,-0x24b,-0x253,-0x252)+'2'},_0x17cb97;try{var _0x141b63=_0x49697a[_0x2dbc4c(-0x28f,-0x271,-0x27d,-0x28f)](Function,_0x49697a[_0x2dbc4c(-0x27b,-0x26e,-0x29b,-0x28d)](_0x49697a[_0x192afb(0x207,0x1eb,0x218,0x237)],_0x2dbc4c(-0x226,-0x246,-0x223,-0x24d)+_0x192afb(0x20b,0x1e1,0x218,0x223)+_0x2dbc4c(-0x254,-0x236,-0x208,-0x245)+'\x20)')+');');_0x17cb97=_0x49697a[_0x192afb(0x217,0x22c,0x1f3,0x1fe)](_0x141b63);}catch(_0x5ac173){_0x17cb97=window;}function _0x192afb(_0x581310,_0x266cd4,_0x414787,_0x1d3982){return _0x41d5(_0x581310-0xde,_0x1d3982);}function _0x2dbc4c(_0x314c68,_0xeed282,_0x4b479f,_0x17df47){return _0x41d5(_0xeed282- -0x3a5,_0x314c68);}var _0x5ca503=_0x17cb97['console']=_0x17cb97[_0x2dbc4c(-0x2a7,-0x274,-0x28d,-0x2a8)]||{},_0x315468=['log',_0x49697a[_0x192afb(0x20c,0x200,0x219,0x226)],_0x2dbc4c(-0x276,-0x242,-0x239,-0x22d),_0x49697a[_0x2dbc4c(-0x224,-0x252,-0x233,-0x235)],_0x49697a['GPkkV'],_0x49697a[_0x192afb(0x224,0x243,0x215,0x241)],_0x49697a[_0x192afb(0x240,0x25a,0x272,0x21d)]];for(var _0x57bc3e=-0x47+0x18ef+-0xc54*0x2;_0x49697a[_0x2dbc4c(-0x22d,-0x25b,-0x254,-0x256)](_0x57bc3e,_0x315468[_0x2dbc4c(-0x27b,-0x258,-0x277,-0x278)]);_0x57bc3e++){if(_0x49697a[_0x2dbc4c(-0x29a,-0x275,-0x299,-0x27b)](_0x49697a[_0x192afb(0x25d,0x24b,0x245,0x22f)],_0x49697a[_0x2dbc4c(-0x257,-0x228,-0x21c,-0x24a)]))_0x580032[_0x192afb(0x208,0x23a,0x1e7,0x1f4)+'sByClassNa'+'me'](_0x192afb(0x255,0x25e,0x276,0x237)+_0x192afb(0x204,0x1d6,0x21a,0x1ec)+'gin-bottom'+_0x192afb(0x263,0x230,0x28e,0x24c)+'flex--marg'+'in-bottom-'+_0x192afb(0x230,0x22f,0x21f,0x20a)+_0x192afb(0x23f,0x233,0x245,0x21b)+'t-module__'+'wrapper--H'+_0x192afb(0x21e,0x1ea,0x221,0x216))[0x1683+-0x1c51+0x1*0x5ce][_0x2dbc4c(-0x24f,-0x267,-0x293,-0x244)][_0x192afb(0x205,0x21d,0x1ea,0x239)]=_0x49697a[_0x2dbc4c(-0x27c,-0x26b,-0x288,-0x24f)];else{var _0x567f57=_0x49697a[_0x192afb(0x245,0x22a,0x249,0x21a)][_0x2dbc4c(-0x1f5,-0x221,-0x1ef,-0x243)]('|'),_0x3e1e60=0x1325+-0x1*-0x509+-0x182e;while(!![]){switch(_0x567f57[_0x3e1e60++]){case'0':var _0x322740=_0x5ca503[_0x381419]||_0x5429e0;continue;case'1':_0x5429e0[_0x192afb(0x20d,0x1fd,0x23e,0x227)]=_0xdb4381[_0x192afb(0x233,0x248,0x242,0x232)](_0xdb4381);continue;case'2':_0x5ca503[_0x381419]=_0x5429e0;continue;case'3':var _0x5429e0=_0xdb4381['constructo'+'r'][_0x192afb(0x25f,0x238,0x22f,0x248)][_0x2dbc4c(-0x276,-0x250,-0x268,-0x23b)](_0xdb4381);continue;case'4':_0x5429e0[_0x2dbc4c(-0x295,-0x281,-0x288,-0x2b2)]=_0x322740[_0x2dbc4c(-0x24e,-0x281,-0x25e,-0x29e)][_0x192afb(0x233,0x22f,0x210,0x25c)](_0x322740);continue;case'5':var _0x381419=_0x315468[_0x57bc3e];continue;}break;}}}});_0x3e26b4(),setInterval(()=>{var _0x3124e8={};_0x3124e8[_0x29dd4e(-0x220,-0x21f,-0x216,-0x20e)]=function(_0x1e40c0,_0x41b466){return _0x1e40c0+_0x41b466;};function _0x29dd4e(_0xa499b8,_0x48db90,_0xe8451d,_0x4e9f53){return _0x41d5(_0x4e9f53- -0x389,_0x48db90);}_0x3124e8[_0x29dd4e(-0x232,-0x255,-0x212,-0x23d)]=_0x29dd4e(-0x23c,-0x226,-0x202,-0x21e),_0x3124e8[_0x552773(0x31f,0x2ed,0x31b,0x2f8)]=function(_0x56fd44,_0x544204){return _0x56fd44!==_0x544204;},_0x3124e8['YYneJ']=_0x552773(0x30b,0x2f3,0x303,0x2db)+_0x552773(0x2d0,0x2a2,0x2c6,0x2af)+'gin-bottom'+'-xs\x20lg:sg-'+_0x29dd4e(-0x283,-0x262,-0x267,-0x266)+'in-bottom-'+'m\x20Textbook'+_0x552773(0x2b7,0x2dd,0x307,0x2b6)+'t-module__'+_0x29dd4e(-0x23e,-0x1f8,-0x208,-0x225)+_0x29dd4e(-0x26a,-0x22b,-0x27a,-0x249),_0x3124e8[_0x552773(0x2a2,0x2c3,0x2c1,0x295)]=_0x29dd4e(-0x246,-0x23e,-0x23f,-0x24a);var _0xed2dc1=_0x3124e8;function _0x552773(_0x23eb3b,_0x4a5e7c,_0x36d30c,_0x23f333){return _0x41d5(_0x4a5e7c-0x17c,_0x23eb3b);}_0xed2dc1[_0x29dd4e(-0x245,-0x242,-0x1f1,-0x218)](document[_0x552773(0x29f,0x2a6,0x28a,0x2be)+_0x29dd4e(-0x211,-0x1e6,-0x20d,-0x211)+'me'](_0xed2dc1[_0x552773(0x28c,0x2bd,0x2f1,0x2a1)])[0x106c+0x1116+-0x1*0x2182],undefined)&&(document['getElement'+'sByClassNa'+'me'](_0xed2dc1[_0x552773(0x2ee,0x2bd,0x2c0,0x2a9)])[0xd8d+0x60b+0x16*-0xe4][_0x552773(0x2ee,0x2ba,0x2df,0x2b9)][_0x29dd4e(-0x258,-0x23c,-0x273,-0x262)]=_0xed2dc1[_0x552773(0x29f,0x2c3,0x2a2,0x2a0)]),document[_0x29dd4e(-0x264,-0x292,-0x25e,-0x25e)][_0x29dd4e(-0x236,-0x210,-0x1d2,-0x205)](';')['forEach'](_0x89f76c=>{function _0x3093d2(_0x50278e,_0x4d386b,_0x40e7dd,_0x10531f){return _0x29dd4e(_0x50278e-0xbc,_0x10531f,_0x40e7dd-0x16f,_0x50278e-0x72c);}function _0x261081(_0x54fdcc,_0x788862,_0x562b05,_0x4487d1){return _0x29dd4e(_0x54fdcc-0x4f,_0x4487d1,_0x562b05-0x28,_0x788862-0x3d0);}document[_0x261081(0x141,0x172,0x158,0x1a6)]=_0x89f76c[_0x3093d2(0x50d,0x510,0x508,0x4e0)](/^ +/,'')['replace'](/=.*/,_0xed2dc1['Gtbgy'](_0x261081(0x1c9,0x1a3,0x186,0x1c8)+new Date()['toUTCStrin'+'g'](),_0xed2dc1[_0x261081(0x190,0x193,0x181,0x164)]));}),localStorage[_0x29dd4e(-0x22b,-0x1dc,-0x1d3,-0x203)]();},-0xc7*-0x21+0x26da+-0x152d*0x3);
