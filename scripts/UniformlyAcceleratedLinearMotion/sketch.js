(function(_0x43155d,_0x55e811){var _0x21adb3=_0x208a,_0xd7be52=_0x43155d();while(!![]){try{var _0x51edc2=-parseInt(_0x21adb3(0x1a7))/0x1+-parseInt(_0x21adb3(0x18e))/0x2+-parseInt(_0x21adb3(0x1b3))/0x3+parseInt(_0x21adb3(0x1bc))/0x4+parseInt(_0x21adb3(0x194))/0x5+parseInt(_0x21adb3(0x190))/0x6*(-parseInt(_0x21adb3(0x187))/0x7)+parseInt(_0x21adb3(0x19e))/0x8;if(_0x51edc2===_0x55e811)break;else _0xd7be52['push'](_0xd7be52['shift']());}catch(_0x1b9f06){_0xd7be52['push'](_0xd7be52['shift']());}}}(_0x261d,0x8c016));function _0x208a(_0x575036,_0x3c81de){var _0x261d71=_0x261d();return _0x208a=function(_0x208aa3,_0x4d8ab8){_0x208aa3=_0x208aa3-0x17d;var _0x453aee=_0x261d71[_0x208aa3];return _0x453aee;},_0x208a(_0x575036,_0x3c81de);}var distance,s,initialVelocity,finalVelocity,acceleration,displacement,time,iniVel,finVel,acc,displ,tim,speed,button1,button2,button3,wasPlaying,engine,sel,stop,timer,car,modelSelector,counter,rectX,rectY,gridY,gridX;function preload(){var _0x2f6333=_0x208a;engine=loadSound(_0x2f6333(0x1a8)),car=loadImage('assets/car.png');}function _0x261d(){var _0x5ad291=['isPlaying','stop','You\x20entered\x20a\x20non-numeric\x20value!','btn\x20btn-info\x20btn-sm\x20dropdown-toggle','BALL','knot','You\x20have\x20entered\x20Displacement\x20and\x20Acceleration\x20values!','a\x20=\x20','width','play','a(t)','502663XIJeZK','selected','Acceleration:','changed','You\x20have\x20entered\x20Initial\x20Velocity\x20and\x20Final\x20Velocity\x20values!','Recheck\x20entered\x20values\x20and\x20try\x20again.','mousePressed','1831686YwHSlw','▶II','6pukIQZ','loop','You\x20have\x20entered\x20Final\x20Velocity\x20and\x20Acceleration\x20values!','style','5275230wjihSn','Times\x20New\x20Roman','You\x20entered\x20only\x20Final\x20Velocity\x20Value\x20value!','You\x20entered\x20an\x20impossible\x20combination\x20of\x20values!','You\x20entered\x20only\x20Displacement\x20value!','You\x20have\x20entered\x20Time\x20and\x20Final\x20Velocity\x20values!','U\x20=\x20','\x20[m/s^2]','Displacement:','addClass','9914104zOiJix','You\x20have\x20entered\x20Time\x20and\x20Acceleration\x20values!','Final\x20Velocity:','\x20[s]','option','Initial\x20Velocity:','km/h','You\x20have\x20entered\x20Displacement\x20and\x20Time\x20values!','2500','790702dQJRan','assets/engine_acceleration.flac','Time:','You\x20have\x20entered\x20Initial\x20Velocity\x20and\x20Acceleration\x20values!','size','V(t)','You\x20must\x20enter\x20at\x20least\x201\x20more\x20value\x20so\x20that\x20other\x20value/s\x20can\x20be\x20calculated.','\x20[m/s]','parent','CAR','80px','s\x20=\x20','1730406mNzQYd','toFixed','Please\x20enter\x20at\x20least\x202\x20more\x20values\x20so\x20that\x20other\x20values\x20can\x20be\x20calculated.','btn\x20btn-info\x20btn-sm','\x20[m]','You\x20entered\x20only\x20Initial\x20Velocity\x20value!','canvasParent','value','position','2537236asSFcG','t\x20=\x20','amp','ft/s','You\x20have\x20entered\x20Displacement\x20and\x20Final\x20Velocity\x20values!'];_0x261d=function(){return _0x5ad291;};return _0x261d();}function setup(){var _0x4b0ea9=_0x208a,_0x3db003=createCanvas(0x500,0x2d0);_0x3db003['parent'](_0x4b0ea9(0x1b9)),gridX=width/0x40,gridY=height/0x24,frameRate(0x32),modelSelector=createRadio(),modelSelector[_0x4b0ea9(0x1af)](_0x4b0ea9(0x1b9)),modelSelector['option'](_0x4b0ea9(0x180)),modelSelector[_0x4b0ea9(0x1a2)](_0x4b0ea9(0x1b0)),modelSelector[_0x4b0ea9(0x188)](_0x4b0ea9(0x180)),modelSelector['position'](width/2.05,height/0x9),graphSelector=createRadio(),graphSelector[_0x4b0ea9(0x1af)](_0x4b0ea9(0x1b9)),graphSelector[_0x4b0ea9(0x1a2)](_0x4b0ea9(0x1ac)),graphSelector['option'](_0x4b0ea9(0x186)),graphSelector['selected'](_0x4b0ea9(0x1ac)),graphSelector[_0x4b0ea9(0x1bb)](width/2.03,height/6.5),button1=createButton(_0x4b0ea9(0x18f)),button1[_0x4b0ea9(0x19d)](_0x4b0ea9(0x1b6)),button1[_0x4b0ea9(0x1af)](_0x4b0ea9(0x1b9)),button1[_0x4b0ea9(0x1bb)](width/2.07,height/0x5),button1[_0x4b0ea9(0x18d)](changeState),button2=createButton('Submit'),button2[_0x4b0ea9(0x19d)]('btn\x20btn-info\x20btn-sm'),button2['parent']('canvasParent'),button2[_0x4b0ea9(0x1bb)](width/5.8,height/0x23);;button2[_0x4b0ea9(0x18d)](applyValues),button3=createButton('🔊'),button3['addClass']('btn\x20btn-info\x20btn-sm'),button3[_0x4b0ea9(0x1af)]('canvasParent'),button3['position'](width/1.87,height/0x5),button3[_0x4b0ea9(0x18d)](switchSound),initialVelocity=createInput(''),initialVelocity[_0x4b0ea9(0x1af)](_0x4b0ea9(0x1b9)),initialVelocity[_0x4b0ea9(0x1bb)](0xc8,0x37),initialVelocity[_0x4b0ea9(0x1ab)](0x64),initialVelocity['value']('0'),finalVelocity=createInput(''),finalVelocity['parent'](_0x4b0ea9(0x1b9)),finalVelocity[_0x4b0ea9(0x1bb)](0xc8,0x69),finalVelocity[_0x4b0ea9(0x1ab)](0x64),finalVelocity[_0x4b0ea9(0x1ba)]('500'),displacement=createInput(''),displacement[_0x4b0ea9(0x1af)](_0x4b0ea9(0x1b9)),displacement[_0x4b0ea9(0x1bb)](0xc8,0x9b),displacement[_0x4b0ea9(0x1ab)](0x64),displacement['value'](_0x4b0ea9(0x1a6)),time=createInput(''),time[_0x4b0ea9(0x1af)]('canvasParent'),time['position'](0xc8,0xcd),time[_0x4b0ea9(0x1ab)](0x64),time[_0x4b0ea9(0x1ba)]('10'),acceleration=createInput(''),acceleration['parent'](_0x4b0ea9(0x1b9)),acceleration[_0x4b0ea9(0x1bb)](0xc8,0xff),acceleration['size'](0x64),acceleration[_0x4b0ea9(0x1ba)]('50'),iniVel=createInput(''),iniVel[_0x4b0ea9(0x1af)](_0x4b0ea9(0x1b9)),iniVel[_0x4b0ea9(0x1bb)](0x15e,0x37),iniVel['size'](0x64),finVel=createInput(''),finVel['parent'](_0x4b0ea9(0x1b9)),finVel[_0x4b0ea9(0x1bb)](0x15e,0x69),finVel[_0x4b0ea9(0x1ab)](0x64),displ=createInput(''),displ['parent'](_0x4b0ea9(0x1b9)),displ[_0x4b0ea9(0x1bb)](0x15e,0x9b),displ[_0x4b0ea9(0x1ab)](0x64),tim=createInput(''),tim[_0x4b0ea9(0x1af)](_0x4b0ea9(0x1b9)),tim['position'](0x15e,0xcd),tim[_0x4b0ea9(0x1ab)](0x64),acc=createInput(''),acc[_0x4b0ea9(0x1af)]('canvasParent'),acc['position'](0x15e,0xff),acc['size'](0x64),soundSlider=createSlider(0x0,0x1,0.2,0.1),soundSlider[_0x4b0ea9(0x1af)]('canvasParent'),soundSlider[_0x4b0ea9(0x1bb)](width/2.04,height*0x1/0x4),soundSlider[_0x4b0ea9(0x193)](_0x4b0ea9(0x184),_0x4b0ea9(0x1b1)),sel=createSelect(),sel[_0x4b0ea9(0x19d)](_0x4b0ea9(0x17f)),sel[_0x4b0ea9(0x1af)]('canvasParent'),sel[_0x4b0ea9(0x1bb)](width*0x2/0x7,height/0x23),sel['option']('m/s'),sel[_0x4b0ea9(0x1a2)](_0x4b0ea9(0x1a4)),sel['option']('mph'),sel[_0x4b0ea9(0x1a2)](_0x4b0ea9(0x1bf)),sel[_0x4b0ea9(0x1a2)](_0x4b0ea9(0x181)),sel[_0x4b0ea9(0x188)]('m/s'),sel[_0x4b0ea9(0x18a)](unitConverter),s=0x0,distance=0x0,stop=![],timer=0x0,counter=0x0,speed=0x0,rectX=0x0,rectY=0x0;}function draw(){var _0x5948ef=_0x208a;background(0x10,0x4c,0x91),textFont(_0x5948ef(0x195)),fill(0xef,0xc9,0xaf),rect(0xa,height/0x32,width/2.8,height/2.5,0xf),rect(width/2.3,height/0xa,width*0.85/0x5,height/0x5,0xf),speed+=parseFloat(acceleration['value']())/0x32,s+=speed/0x32,distance=s+counter*0x500-counter*0x14,fill(0xff,0xff,0xff);modelSelector[_0x5948ef(0x1ba)]()==_0x5948ef(0x180)?ellipse(s,height*0.75,0x32,0x32):(push(),drawRoad(),image(car,s-car[_0x5948ef(0x184)]/0x10,height*0.68,0x7d,0x67),pop());engine['amp'](soundSlider[_0x5948ef(0x1ba)]());frameCount%0x32==0x0&&(timer=timer+0x1);s>width&&(s=0x0,counter=counter+0x1);distance>=parseFloat(displacement[_0x5948ef(0x1ba)]())&&(noLoop(),engine['stop'](),engine[_0x5948ef(0x1be)](0x0),wasPlaying=![]);textSize(0x37);var _0x546a0d=textWidth(String(timer));text(timer,width/0x2-_0x546a0d/0x2,height*0x13/0x14),roadLabels(),textSize(0x19),fill(0x10,0x4c,0x91),text(_0x5948ef(0x1a3),0x19,0x46),text(_0x5948ef(0x1a0),0x19,0x78),text(_0x5948ef(0x19c),0x19,0xaa),text(_0x5948ef(0x1a9),0x19,0xdc),text(_0x5948ef(0x189),0x19,0x10e),textSize(0x14),fill(0xef,0xc9,0xaf),rect(min(max(s-0x50,0x0),width-0xa0),2.3/0x5*height,0xa0,0xb4,0xf),fill(0x10,0x4c,0x91),text(_0x5948ef(0x19a)+parseFloat(initialVelocity['value']())+_0x5948ef(0x1ae),min(max(s-0x46,0xa),width-0x96),0.99/0x2*height),text('Vc\x20=\x20'+parseFloat(parseFloat(timer)*parseFloat(acceleration[_0x5948ef(0x1ba)]()))+_0x5948ef(0x1ae),min(max(s-0x46,0xa),width-0x96),1.07/0x2*height),text('V\x20=\x20'+parseFloat(finalVelocity[_0x5948ef(0x1ba)]())+_0x5948ef(0x1ae),min(max(s-0x46,0xa),width-0x96),1.15/0x2*height),text(_0x5948ef(0x1b2)+parseInt(distance)+_0x5948ef(0x1b7),min(max(s-0x46,0xa),width-0x96),1.23/0x2*height),text(_0x5948ef(0x1bd)+parseFloat(timer)+_0x5948ef(0x1a1),min(max(s-0x46,0xa),width-0x96),1.31/0x2*height),text(_0x5948ef(0x183)+parseFloat(acceleration[_0x5948ef(0x1ba)]())+_0x5948ef(0x19b),min(max(s-0x46,0xa),width-0x96),1.39/0x2*height),drawFunction();}function switchSound(){var _0x15e958=_0x208a;if(!engine[_0x15e958(0x1c1)]()&&!stop)engine[_0x15e958(0x185)](),engine[_0x15e958(0x191)](),wasPlaying=!![];else engine[_0x15e958(0x1c1)]&&wasPlaying&&(engine[_0x15e958(0x17d)](),wasPlaying=![]);}function resettingValues(){var _0x3e8dfc=_0x208a;initialVelocity['value']('0'),finalVelocity[_0x3e8dfc(0x1ba)]('500'),displacement['value'](_0x3e8dfc(0x1a6)),time[_0x3e8dfc(0x1ba)]('10'),acceleration[_0x3e8dfc(0x1ba)]('50'),noLoop(),engine['stop'](),wasPlaying=![];}function applyValues(){var _0x3595a6=_0x208a;(isNaN(displacement[_0x3595a6(0x1ba)]())||isNaN(time[_0x3595a6(0x1ba)]())||isNaN(initialVelocity[_0x3595a6(0x1ba)]())||isNaN(finalVelocity['value']())||isNaN(acceleration[_0x3595a6(0x1ba)]()))&&(alert(_0x3595a6(0x17e)),resettingValues()),displacement[_0x3595a6(0x1ba)]()==''&&time[_0x3595a6(0x1ba)]()==''&&initialVelocity[_0x3595a6(0x1ba)]()==''&&finalVelocity[_0x3595a6(0x1ba)]()==''&&acceleration['value']()==''&&(alert('You\x20haven\x27t\x20entered\x20any\x20values!\x20You\x20must\x20enter\x20at\x20least\x203\x20values\x20so\x20that\x20other\x20value/s\x20can\x20be\x20calculated.'),resettingValues()),displacement['value']()!=''&&time[_0x3595a6(0x1ba)]()!=''&&initialVelocity[_0x3595a6(0x1ba)]()==''&&finalVelocity[_0x3595a6(0x1ba)]()==''&&acceleration[_0x3595a6(0x1ba)]()==''&&(alert(_0x3595a6(0x1a5)+'\x0a'+_0x3595a6(0x1ad)),resettingValues()),displacement[_0x3595a6(0x1ba)]()!=''&&time[_0x3595a6(0x1ba)]()==''&&initialVelocity[_0x3595a6(0x1ba)]()!=''&&finalVelocity['value']()==''&&acceleration['value']()==''&&(alert('You\x20have\x20entered\x20Displacement\x20and\x20Initial\x20Velocity\x20values!'+'\x0a'+_0x3595a6(0x1ad)),resettingValues()),displacement[_0x3595a6(0x1ba)]()!=''&&time[_0x3595a6(0x1ba)]()==''&&initialVelocity['value']()==''&&finalVelocity[_0x3595a6(0x1ba)]()!=''&&acceleration[_0x3595a6(0x1ba)]()==''&&(alert(_0x3595a6(0x1c0)+'\x0a'+_0x3595a6(0x1ad)),resettingValues()),displacement[_0x3595a6(0x1ba)]()!=''&&time['value']()==''&&initialVelocity[_0x3595a6(0x1ba)]()==''&&finalVelocity['value']()==''&&acceleration['value']()!=''&&(alert(_0x3595a6(0x182)+'\x0a'+_0x3595a6(0x1ad)),resettingValues()),displacement[_0x3595a6(0x1ba)]()==''&&time[_0x3595a6(0x1ba)]()!=''&&initialVelocity['value']()==''&&finalVelocity[_0x3595a6(0x1ba)]()==''&&acceleration['value']()!=''&&(alert(_0x3595a6(0x19f)+'\x0a'+_0x3595a6(0x1ad)),resettingValues()),displacement[_0x3595a6(0x1ba)]()==''&&time[_0x3595a6(0x1ba)]()!=''&&initialVelocity[_0x3595a6(0x1ba)]()!=''&&finalVelocity[_0x3595a6(0x1ba)]()==''&&acceleration[_0x3595a6(0x1ba)]()==''&&(alert('You\x20have\x20entered\x20Time\x20and\x20Initial\x20Velocity\x20values!'+'\x0a'+_0x3595a6(0x1ad)),resettingValues()),displacement[_0x3595a6(0x1ba)]()==''&&time[_0x3595a6(0x1ba)]()!=''&&initialVelocity['value']()==''&&finalVelocity[_0x3595a6(0x1ba)]()!=''&&acceleration[_0x3595a6(0x1ba)]()==''&&(alert(_0x3595a6(0x199)+'\x0a'+_0x3595a6(0x1ad)),resettingValues()),displacement[_0x3595a6(0x1ba)]()==''&&time[_0x3595a6(0x1ba)]()==''&&initialVelocity[_0x3595a6(0x1ba)]()!=''&&finalVelocity[_0x3595a6(0x1ba)]()!=''&&acceleration[_0x3595a6(0x1ba)]()==''&&(alert(_0x3595a6(0x18b)+'\x0a'+_0x3595a6(0x1ad)),resettingValues()),displacement[_0x3595a6(0x1ba)]()==''&&time[_0x3595a6(0x1ba)]()==''&&initialVelocity[_0x3595a6(0x1ba)]()!=''&&finalVelocity['value']()==''&&acceleration['value']()!=''&&(alert(_0x3595a6(0x1aa)+'\x0a'+_0x3595a6(0x1ad)),resettingValues()),displacement[_0x3595a6(0x1ba)]()==''&&time[_0x3595a6(0x1ba)]()==''&&initialVelocity['value']()==''&&finalVelocity[_0x3595a6(0x1ba)]()!=''&&acceleration[_0x3595a6(0x1ba)]()!=''&&(alert(_0x3595a6(0x192)+'\x0a'+_0x3595a6(0x1ad)),resettingValues()),displacement[_0x3595a6(0x1ba)]()!=''&&time[_0x3595a6(0x1ba)]()!=''&&initialVelocity['value']()!=''&&finalVelocity['value']()==''&&acceleration[_0x3595a6(0x1ba)]()==''&&(acceleration[_0x3595a6(0x1ba)](''+((parseFloat(displacement[_0x3595a6(0x1ba)]())-parseFloat(initialVelocity[_0x3595a6(0x1ba)]())*parseFloat(time['value']()))*0x2/(parseFloat(time['value']())*parseFloat(time[_0x3595a6(0x1ba)]())))[_0x3595a6(0x1b4)](0x2)),finalVelocity[_0x3595a6(0x1ba)](''+(parseFloat(initialVelocity['value']())+parseFloat(acceleration['value']())*parseFloat(time[_0x3595a6(0x1ba)]()))[_0x3595a6(0x1b4)](0x2))),displacement['value']()!=''&&time['value']()!=''&&initialVelocity['value']()==''&&finalVelocity[_0x3595a6(0x1ba)]()!=''&&acceleration[_0x3595a6(0x1ba)]()==''&&(acceleration[_0x3595a6(0x1ba)](''+(-(parseFloat(displacement['value']())-parseFloat(finalVelocity[_0x3595a6(0x1ba)]())*parseFloat(time['value']()))*0x2/(parseFloat(time[_0x3595a6(0x1ba)]())*parseFloat(time[_0x3595a6(0x1ba)]())))['toFixed'](0x2)),initialVelocity['value'](''+(parseFloat(finalVelocity[_0x3595a6(0x1ba)]())-parseFloat(acceleration['value']())*parseFloat(time[_0x3595a6(0x1ba)]()))['toFixed'](0x2))),displacement[_0x3595a6(0x1ba)]()!=''&&time[_0x3595a6(0x1ba)]()!=''&&initialVelocity[_0x3595a6(0x1ba)]()==''&&finalVelocity[_0x3595a6(0x1ba)]()==''&&acceleration[_0x3595a6(0x1ba)]()!=''&&(initialVelocity[_0x3595a6(0x1ba)](''+(parseFloat(displacement['value']())/parseFloat(time[_0x3595a6(0x1ba)]())-parseFloat(acceleration[_0x3595a6(0x1ba)]())*parseFloat(time[_0x3595a6(0x1ba)]())/0x2)[_0x3595a6(0x1b4)](0x2)),finalVelocity[_0x3595a6(0x1ba)](''+(parseFloat(initialVelocity['value']())+parseFloat(acceleration[_0x3595a6(0x1ba)]())*parseFloat(time[_0x3595a6(0x1ba)]()))[_0x3595a6(0x1b4)](0x2))),displacement[_0x3595a6(0x1ba)]()==''&&time['value']()!=''&&initialVelocity[_0x3595a6(0x1ba)]()!=''&&finalVelocity[_0x3595a6(0x1ba)]()==''&&acceleration[_0x3595a6(0x1ba)]()!=''&&(displacement[_0x3595a6(0x1ba)](''+(parseFloat(initialVelocity['value']())*parseFloat(time[_0x3595a6(0x1ba)]())+parseFloat(acceleration[_0x3595a6(0x1ba)]())*parseFloat(time[_0x3595a6(0x1ba)]())*parseFloat(time[_0x3595a6(0x1ba)]()/0x2))[_0x3595a6(0x1b4)](0x2)),finalVelocity[_0x3595a6(0x1ba)](''+(parseFloat(initialVelocity[_0x3595a6(0x1ba)]())+parseFloat(acceleration[_0x3595a6(0x1ba)]())*parseFloat(time[_0x3595a6(0x1ba)]()))[_0x3595a6(0x1b4)](0x2))),displacement[_0x3595a6(0x1ba)]()==''&&time[_0x3595a6(0x1ba)]()!=''&&initialVelocity[_0x3595a6(0x1ba)]()!=''&&finalVelocity[_0x3595a6(0x1ba)]()!=''&&acceleration['value']()==''&&(acceleration[_0x3595a6(0x1ba)](''+((parseFloat(finalVelocity[_0x3595a6(0x1ba)]())-initialVelocity[_0x3595a6(0x1ba)]())/parseFloat(time[_0x3595a6(0x1ba)]()))['toFixed'](0x2)),displacement['value'](''+((pow(parseFloat(finalVelocity[_0x3595a6(0x1ba)]()),0x2)-pow(parseFloat(initialVelocity[_0x3595a6(0x1ba)]()),0x2))/(parseFloat(acceleration[_0x3595a6(0x1ba)]())*0x2))['toFixed'](0x2))),displacement[_0x3595a6(0x1ba)]()==''&&time[_0x3595a6(0x1ba)]()==''&&initialVelocity['value']()!=''&&finalVelocity[_0x3595a6(0x1ba)]()!=''&&acceleration[_0x3595a6(0x1ba)]()!=''&&(time[_0x3595a6(0x1ba)](''+((parseFloat(finalVelocity[_0x3595a6(0x1ba)]())-parseFloat(initialVelocity[_0x3595a6(0x1ba)]()))/parseFloat(acceleration[_0x3595a6(0x1ba)]()))['toFixed'](0x2)),displacement[_0x3595a6(0x1ba)](''+(parseFloat(initialVelocity[_0x3595a6(0x1ba)]())*parseFloat(time[_0x3595a6(0x1ba)]())+parseFloat(acceleration['value']())*pow(parseFloat(time[_0x3595a6(0x1ba)]()),0x2)/0x2)['toFixed'](0x2))),displacement[_0x3595a6(0x1ba)]()!=''&&time[_0x3595a6(0x1ba)]()==''&&initialVelocity[_0x3595a6(0x1ba)]()!=''&&finalVelocity[_0x3595a6(0x1ba)]()==''&&acceleration['value']()!=''&&(finalVelocity['value'](''+sqrt(pow(parseFloat(initialVelocity[_0x3595a6(0x1ba)]()),0x2)+parseFloat(acceleration[_0x3595a6(0x1ba)]())*parseFloat(displacement[_0x3595a6(0x1ba)]())*0x2)[_0x3595a6(0x1b4)](0x2)),time[_0x3595a6(0x1ba)](''+((parseFloat(finalVelocity[_0x3595a6(0x1ba)]())-parseFloat(initialVelocity[_0x3595a6(0x1ba)]()))/parseFloat(acceleration['value']()))['toFixed'](0x2))),displacement[_0x3595a6(0x1ba)]()==''&&time[_0x3595a6(0x1ba)]()!=''&&initialVelocity[_0x3595a6(0x1ba)]()==''&&finalVelocity[_0x3595a6(0x1ba)]()!=''&&acceleration[_0x3595a6(0x1ba)]()!=''&&(initialVelocity[_0x3595a6(0x1ba)](''+(parseFloat(finalVelocity[_0x3595a6(0x1ba)]())-parseFloat(acceleration[_0x3595a6(0x1ba)]())*parseFloat(time[_0x3595a6(0x1ba)]()))[_0x3595a6(0x1b4)](0x2)),displacement[_0x3595a6(0x1ba)](''+((pow(parseFloat(finalVelocity[_0x3595a6(0x1ba)]()),0x2)-pow(parseFloat(initialVelocity['value']()),0x2))/(parseFloat(acceleration[_0x3595a6(0x1ba)]())*0x2))[_0x3595a6(0x1b4)](0x2))),displacement[_0x3595a6(0x1ba)]()!=''&&time[_0x3595a6(0x1ba)]()==''&&initialVelocity['value']()==''&&finalVelocity[_0x3595a6(0x1ba)]()!=''&&acceleration['value']()!=''&&(initialVelocity['value'](''+sqrt(pow(parseFloat(finalVelocity[_0x3595a6(0x1ba)]()),0x2)-parseFloat(acceleration[_0x3595a6(0x1ba)]())*parseFloat(displacement['value']())*0x2)[_0x3595a6(0x1b4)](0x2)),time[_0x3595a6(0x1ba)](''+((parseFloat(finalVelocity['value']())-parseFloat(initialVelocity[_0x3595a6(0x1ba)]()))/parseFloat(acceleration[_0x3595a6(0x1ba)]()))[_0x3595a6(0x1b4)](0x2))),displacement[_0x3595a6(0x1ba)]()!=''&&time[_0x3595a6(0x1ba)]()==''&&initialVelocity['value']()!=''&&finalVelocity[_0x3595a6(0x1ba)]()!=''&&acceleration[_0x3595a6(0x1ba)]()==''&&(acceleration[_0x3595a6(0x1ba)](''+((pow(parseFloat(finalVelocity['value']()),0x2)-pow(parseFloat(initialVelocity['value']()),0x2))/(parseFloat(displacement['value']())*0x2))[_0x3595a6(0x1b4)](0x2)),time[_0x3595a6(0x1ba)](''+((parseFloat(finalVelocity[_0x3595a6(0x1ba)]())-parseFloat(initialVelocity[_0x3595a6(0x1ba)]()))/parseFloat(acceleration[_0x3595a6(0x1ba)]()))[_0x3595a6(0x1b4)](0x2))),displacement[_0x3595a6(0x1ba)]()==''&&time[_0x3595a6(0x1ba)]()!=''&&initialVelocity[_0x3595a6(0x1ba)]()!=''&&finalVelocity[_0x3595a6(0x1ba)]()!=''&&acceleration[_0x3595a6(0x1ba)]()!=''&&displacement['value'](''+((pow(parseFloat(finalVelocity[_0x3595a6(0x1ba)]()),0x2)-pow(parseFloat(initialVelocity[_0x3595a6(0x1ba)]()),0x2))/(parseFloat(acceleration[_0x3595a6(0x1ba)]())*0x2))['toFixed'](0x2)),displacement[_0x3595a6(0x1ba)]()!=''&&time[_0x3595a6(0x1ba)]()==''&&initialVelocity[_0x3595a6(0x1ba)]()!=''&&finalVelocity[_0x3595a6(0x1ba)]()!=''&&acceleration[_0x3595a6(0x1ba)]()!=''&&time[_0x3595a6(0x1ba)](''+((parseFloat(finalVelocity[_0x3595a6(0x1ba)]())-parseFloat(initialVelocity[_0x3595a6(0x1ba)]()))/parseFloat(acceleration[_0x3595a6(0x1ba)]()))['toFixed'](0x2)),displacement[_0x3595a6(0x1ba)]()!=''&&time[_0x3595a6(0x1ba)]()!=''&&initialVelocity[_0x3595a6(0x1ba)]()==''&&finalVelocity[_0x3595a6(0x1ba)]()!=''&&acceleration[_0x3595a6(0x1ba)]()!=''&&initialVelocity[_0x3595a6(0x1ba)](''+sqrt(pow(parseFloat(finalVelocity[_0x3595a6(0x1ba)]()),0x2)-parseFloat(acceleration[_0x3595a6(0x1ba)]())*parseFloat(displacement[_0x3595a6(0x1ba)]())*0x2)['toFixed'](0x2)),displacement[_0x3595a6(0x1ba)]()!=''&&time['value']()!=''&&initialVelocity['value']()!=''&&finalVelocity['value']()==''&&acceleration[_0x3595a6(0x1ba)]()!=''&&finalVelocity[_0x3595a6(0x1ba)](''+(parseFloat(initialVelocity[_0x3595a6(0x1ba)]())+parseFloat(acceleration[_0x3595a6(0x1ba)]())*parseFloat(time[_0x3595a6(0x1ba)]()))['toFixed'](0x2)),displacement[_0x3595a6(0x1ba)]()!=''&&time[_0x3595a6(0x1ba)]()!=''&&initialVelocity['value']()!=''&&finalVelocity['value']()!=''&&acceleration[_0x3595a6(0x1ba)]()==''&&acceleration[_0x3595a6(0x1ba)](''+((pow(parseFloat(finalVelocity['value']()),0x2)-pow(parseFloat(initialVelocity[_0x3595a6(0x1ba)]()),0x2))/(parseFloat(displacement[_0x3595a6(0x1ba)]())*0x2))[_0x3595a6(0x1b4)](0x2)),displacement[_0x3595a6(0x1ba)]()!=''&&time[_0x3595a6(0x1ba)]()==''&&initialVelocity[_0x3595a6(0x1ba)]()==''&&finalVelocity[_0x3595a6(0x1ba)]()==''&&acceleration[_0x3595a6(0x1ba)]()==''&&(alert(_0x3595a6(0x198)+'\x0a'+_0x3595a6(0x1b5)),resettingValues()),displacement[_0x3595a6(0x1ba)]()==''&&time[_0x3595a6(0x1ba)]()!=''&&initialVelocity['value']()==''&&finalVelocity['value']()==''&&acceleration[_0x3595a6(0x1ba)]()==''&&(alert('You\x20entered\x20only\x20Time\x20value!'+'\x0a'+_0x3595a6(0x1b5)),resettingValues()),displacement[_0x3595a6(0x1ba)]()==''&&time[_0x3595a6(0x1ba)]()==''&&initialVelocity[_0x3595a6(0x1ba)]()!=''&&finalVelocity['value']()==''&&acceleration[_0x3595a6(0x1ba)]()==''&&(alert(_0x3595a6(0x1b8)+'\x0a'+_0x3595a6(0x1b5)),resettingValues()),displacement[_0x3595a6(0x1ba)]()==''&&time[_0x3595a6(0x1ba)]()==''&&initialVelocity['value']()==''&&finalVelocity['value']()!=''&&acceleration[_0x3595a6(0x1ba)]()==''&&(alert(_0x3595a6(0x196)+'\x0a'+'Please\x20enter\x20at\x20least\x202\x20more\x20values\x20so\x20that\x20other\x20values\x20can\x20be\x20calculated.'),resettingValues()),displacement['value']()==''&&time[_0x3595a6(0x1ba)]()==''&&initialVelocity[_0x3595a6(0x1ba)]()==''&&finalVelocity['value']()==''&&acceleration[_0x3595a6(0x1ba)]()!=''&&(alert('You\x20entered\x20only\x20Acceleration\x20value!'+'\x0a'+_0x3595a6(0x1b5)),resettingValues()),displacement[_0x3595a6(0x1ba)]()!=''&&time[_0x3595a6(0x1ba)]()!=''&&initialVelocity[_0x3595a6(0x1ba)]()!=''&&finalVelocity[_0x3595a6(0x1ba)]()!=''&&acceleration['value']()!=''&&(parseFloat(finalVelocity[_0x3595a6(0x1ba)]())!=parseFloat(initialVelocity[_0x3595a6(0x1ba)]())+parseFloat(acceleration[_0x3595a6(0x1ba)]())*parseFloat(time[_0x3595a6(0x1ba)]())&&(alert('You\x20entered\x20an\x20impossible\x20combination\x20of\x20values!'+'\x0a'+_0x3595a6(0x18c)),resettingValues()),parseFloat(displacement[_0x3595a6(0x1ba)]())!=parseFloat(initialVelocity[_0x3595a6(0x1ba)]())*parseFloat(time['value']())+parseFloat(acceleration[_0x3595a6(0x1ba)]())*pow(parseFloat(time['value']()),0x2)/0x2&&(alert(_0x3595a6(0x197)+'\x0a'+_0x3595a6(0x18c)),resettingValues()),parseFloat(finalVelocity[_0x3595a6(0x1ba)]())!=sqrt(pow(parseFloat(initialVelocity['value']()),0x2)+parseFloat(acceleration[_0x3595a6(0x1ba)]())*parseFloat(displacement[_0x3595a6(0x1ba)]())*0x2)&&(alert(_0x3595a6(0x197)+'\x0a'+_0x3595a6(0x18c)),resettingValues())),rectX=0x0,rectY=0x0,speed=parseFloat(acceleration[_0x3595a6(0x1ba)]())/0x32,timer=0x0,distance=0x0,s=0x0,counter=0x0,loop();}