const _0x563985=_0x2b2d;(function(_0x5489c2,_0x4fda17){const _0x22a9aa=_0x2b2d,_0x3894b6=_0x5489c2();while(!![]){try{const _0x45c4fe=parseInt(_0x22a9aa(0x1c2))/0x1*(-parseInt(_0x22a9aa(0x1b0))/0x2)+parseInt(_0x22a9aa(0x1bf))/0x3*(parseInt(_0x22a9aa(0x1ad))/0x4)+parseInt(_0x22a9aa(0x19f))/0x5*(-parseInt(_0x22a9aa(0x1b4))/0x6)+parseInt(_0x22a9aa(0x18d))/0x7+parseInt(_0x22a9aa(0x1c0))/0x8*(parseInt(_0x22a9aa(0x198))/0x9)+-parseInt(_0x22a9aa(0x1c1))/0xa+parseInt(_0x22a9aa(0x1bd))/0xb;if(_0x45c4fe===_0x4fda17)break;else _0x3894b6['push'](_0x3894b6['shift']());}catch(_0xdb2de4){_0x3894b6['push'](_0x3894b6['shift']());}}}(_0x26a1,0x961bb),document['querySelectorAll'](_0x563985(0x1a5))[_0x563985(0x188)](_0x1ca3cc=>{const _0x5a7254=_0x563985;_0x1ca3cc[_0x5a7254(0x1a3)](_0x5a7254(0x18c),_0x4ff8f5=>{const _0x2362fb=_0x5a7254;_0x4ff8f5['preventDefault'](),alert(_0x2362fb(0x19b)),_0x1ca3cc[_0x2362fb(0x18a)](_0x2362fb(0x18f),_0x2362fb(0x186));});}));const video=document[_0x563985(0x1b8)]('.video')['forEach'](_0x140c5c=>{_0x140c5c['addEventListener']('contextmenu',_0xe1af69=>{const _0x4b2a70=_0x2b2d;_0xe1af69[_0x4b2a70(0x1bc)](),alert(_0x4b2a70(0x1ba)),_0x140c5c['setAttribute'](_0x4b2a70(0x18f),_0x4b2a70(0x186));});});let images=document[_0x563985(0x1b8)]('.images\x20img,\x20.images-red\x20img'),modal=document[_0x563985(0x192)]('.modal'),modalImg=document[_0x563985(0x192)](_0x563985(0x1b6)),prevBtn=document[_0x563985(0x192)](_0x563985(0x1ac)),nextBtn=document[_0x563985(0x192)](_0x563985(0x1b1));const sliderContainer=document[_0x563985(0x192)](_0x563985(0x1af)),imagesO=document[_0x563985(0x1b8)](_0x563985(0x1a4)),videoElements=document[_0x563985(0x1b8)](_0x563985(0x1a1)),videoSliderContainer=document[_0x563985(0x192)](_0x563985(0x1af));let videoIndex=0x0;function updateVideoSlider(){const _0x12e4c4=_0x563985;videoSliderContainer[_0x12e4c4(0x185)][_0x12e4c4(0x1a9)]=_0x12e4c4(0x1a2);const _0x3e98fe=-videoIndex*0x64;videoSliderContainer[_0x12e4c4(0x185)][_0x12e4c4(0x1a6)]=_0x12e4c4(0x193)+_0x3e98fe+'%)';}function stopCurrentVideo(){const _0x153ee6=_0x563985,_0x25e0d0=videoElements[videoIndex];_0x25e0d0&&!_0x25e0d0[_0x153ee6(0x1b7)]&&_0x25e0d0[_0x153ee6(0x199)]();}function nextVideo(){const _0x46914b=_0x563985;stopCurrentVideo(),videoIndex=(videoIndex+0x1)%videoElements[_0x46914b(0x1a8)],updateVideoSlider(),videoElements[videoIndex][_0x46914b(0x1b5)]();}function prevVideo(){const _0x508e46=_0x563985;stopCurrentVideo(),videoIndex=(videoIndex-0x1+videoElements[_0x508e46(0x1a8)])%videoElements['length'],updateVideoSlider(),videoElements[videoIndex][_0x508e46(0x1b5)]();}document[_0x563985(0x192)]('.nexto-video')&&document[_0x563985(0x192)]('.prevo-video')&&(document[_0x563985(0x192)](_0x563985(0x1ab))[_0x563985(0x1a3)](_0x563985(0x194),nextVideo),document[_0x563985(0x192)](_0x563985(0x1a0))['addEventListener']('click',prevVideo));window[_0x563985(0x1a3)](_0x563985(0x191),()=>{videoIndex=0x0,updateVideoSlider(),videoElements[videoIndex]['play']();});let currentIndex=0x0;const totalImages=images[_0x563985(0x1a8)],allImages=document['querySelectorAll']('.slider-container\x20img'),totalSlides=allImages[_0x563985(0x1a8)];function openModal(_0x3d3827){const _0x51b5b3=_0x563985;currentIndex=_0x3d3827,modalImg[_0x51b5b3(0x197)]=images[currentIndex]['src'];if(modal)modal['classList'][_0x51b5b3(0x19c)](_0x51b5b3(0x19a));document[_0x51b5b3(0x1ae)]['classList'][_0x51b5b3(0x19c)](_0x51b5b3(0x1a7)),document[_0x51b5b3(0x1ae)][_0x51b5b3(0x185)][_0x51b5b3(0x18b)]=_0x51b5b3(0x19d);if(nextBtn)nextBtn[_0x51b5b3(0x185)]['display']=_0x51b5b3(0x187);if(prevBtn)prevBtn[_0x51b5b3(0x185)]['display']=_0x51b5b3(0x187);}function closeModal(){const _0xd728ec=_0x563985;if(modal)modal[_0xd728ec(0x1b9)][_0xd728ec(0x1c3)](_0xd728ec(0x19a));document[_0xd728ec(0x1ae)][_0xd728ec(0x1b9)][_0xd728ec(0x1c3)](_0xd728ec(0x1a7)),document['body'][_0xd728ec(0x185)][_0xd728ec(0x18b)]='scroll',nextBtn[_0xd728ec(0x185)][_0xd728ec(0x189)]=_0xd728ec(0x184),prevBtn[_0xd728ec(0x185)][_0xd728ec(0x189)]=_0xd728ec(0x184);}const video2=document['querySelector'](_0x563985(0x18e));function prevImage(){const _0x29ceb5=_0x563985;currentIndex=currentIndex>0x0?currentIndex-0x1:totalImages-0x1,modalImg[_0x29ceb5(0x197)]=images[currentIndex][_0x29ceb5(0x197)];}function nextImage(){const _0xbc2024=_0x563985;if(video2)video2[_0xbc2024(0x199)]();currentIndex=currentIndex<totalImages-0x1?currentIndex+0x1:0x0,modalImg[_0xbc2024(0x197)]=images[currentIndex]['src'];}images[_0x563985(0x188)]((_0x59d972,_0x414cfa)=>{const _0x11db39=_0x563985;_0x59d972[_0x11db39(0x1a3)]('click',()=>openModal(_0x414cfa));});if(modal)modal['addEventListener'](_0x563985(0x194),_0x27db64=>{const _0x52d179=_0x563985;_0x27db64[_0x52d179(0x196)]===modal&&closeModal();});function updateSlider(){const _0x558579=_0x563985;sliderContainer[_0x558579(0x185)][_0x558579(0x1a9)]=_0x558579(0x1a2);const _0x446060=-currentIndex*0x64;sliderContainer[_0x558579(0x185)]['transform']=_0x558579(0x193)+_0x446060+'%)';}function _0x2b2d(_0x11cfb0,_0x2cd6a3){const _0x26a138=_0x26a1();return _0x2b2d=function(_0x2b2d55,_0xa539d9){_0x2b2d55=_0x2b2d55-0x184;let _0x5238c6=_0x26a138[_0x2b2d55];return _0x5238c6;},_0x2b2d(_0x11cfb0,_0x2cd6a3);}nextBtn&&prevBtn&&(nextBtn[_0x563985(0x1a3)](_0x563985(0x194),()=>{const _0x5e5d64=_0x563985;currentIndex=(currentIndex+0x1)%totalImages,video2&&!video2[_0x5e5d64(0x1b7)]&&(video2['pause'](),video2['currentTime']=0x0),updateSlider(),currentIndex===0x0&&video2['play']();}),prevBtn[_0x563985(0x1a3)](_0x563985(0x194),()=>{const _0x2262ab=_0x563985;currentIndex=(currentIndex-0x1+totalImages)%totalImages,video2&&!video2[_0x2262ab(0x1b7)]&&(video2[_0x2262ab(0x199)](),video2['currentTime']=0x0),updateSlider(),currentIndex===0x0&&video2[_0x2262ab(0x1b5)]();}));window[_0x563985(0x1a3)](_0x563985(0x191),()=>{currentIndex=0x0,updateSlider();}),document[_0x563985(0x1a3)](_0x563985(0x1b3),_0x596f85=>{const _0xb9ac4=_0x563985;if(!modal['classList']['contains']('show'))return;if(_0x596f85['key']===_0xb9ac4(0x190))nextImage();else{if(_0x596f85[_0xb9ac4(0x19e)]===_0xb9ac4(0x1be))prevImage();else _0x596f85[_0xb9ac4(0x19e)]===_0xb9ac4(0x195)&&closeModal();}});const menuIcon=document[_0x563985(0x192)](_0x563985(0x1aa)),menu=document[_0x563985(0x192)]('.menu');menuIcon['addEventListener']('click',()=>{const _0x10a3f6=_0x563985;menu[_0x10a3f6(0x1b9)][_0x10a3f6(0x1bb)](_0x10a3f6(0x1b2));});function _0x26a1(){const _0x5ab619=['click','Escape','target','src','18SaJOkE','pause','show','Right-click\x20is\x20disabled\x20for\x20this\x20image.','add','hidden','key','10snUdqa','.prevo-video','.video1','transform\x200.5s\x20ease-in-out','addEventListener','.slider-container\x20img','img','transform','no-scroll','length','transition','.menu-icon','.nexto-video','.prevo','8lVCdqz','body','.slider-container','2PxPkTf','.nexto','open','keydown','1451166oQHuen','play','.modal-img','paused','querySelectorAll','classList','Right-click\x20is\x20disabled\x20to\x20protect\x20the\x20video.','toggle','preventDefault','8790639EXsVrv','ArrowLeft','600297KKkSbb','4068224SbymUj','7608900dfUFus','1014015sYLxUh','remove','flex','style','false','none','forEach','display','setAttribute','overflow','contextmenu','4599469UkbWUv','.video2','draggable','ArrowRight','load','querySelector','translateX('];_0x26a1=function(){return _0x5ab619;};return _0x26a1();}

let startX = 0
let endX = 0

// Handle touch start
function handleTouchStart(event) {
    startX = event.touches[0].clientX
}

// Handle touch move
function handleTouchMove(event) {
    endX = event.touches[0].clientX
}

// Handle touch end
function handleTouchEnd(callbackNext, callbackPrev) {
    if (startX - endX > 50) {
        callbackNext()
    } else if (endX - startX > 50) {
        callbackPrev()
    }
}

// Add touch support for image modal slider
if (modalImg) {
    modalImg.addEventListener("touchstart", handleTouchStart)
    modalImg.addEventListener("touchmove", handleTouchMove)
    modalImg.addEventListener("touchend", () => handleTouchEnd(nextImage, prevImage))
}

// Add touch support for main carousel
if (sliderContainer) {
    sliderContainer.addEventListener("touchstart", handleTouchStart)
    sliderContainer.addEventListener("touchmove", handleTouchMove)
    sliderContainer.addEventListener("touchend", () => handleTouchEnd(() => {
        currentIndex = (currentIndex + 1) % totalImages
        updateSlider()
    }, () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages
        updateSlider()
    }))
}

// Add touch support for video carousel
if (videoSliderContainer) {
    videoSliderContainer.addEventListener("touchstart", handleTouchStart)
    videoSliderContainer.addEventListener("touchmove", handleTouchMove)
    videoSliderContainer.addEventListener("touchend", () => handleTouchEnd(nextVideo, prevVideo))
}
