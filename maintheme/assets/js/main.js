// jQuery Mask Plugin v1.14.16
// github.com/igorescobar/jQuery-Mask-Plugin
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,n,f){a instanceof String&&(a=String(a));for(var p=a.length,k=0;k<p;k++){var b=a[k];if(n.call(f,b,k,a))return{i:k,v:b}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,n,f){a!=Array.prototype&&a!=Object.prototype&&(a[n]=f.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(a,n,f,p){if(n){f=$jscomp.global;a=a.split(".");for(p=0;p<a.length-1;p++){var k=a[p];k in f||(f[k]={});f=f[k]}a=a[a.length-1];p=f[a];n=n(p);n!=p&&null!=n&&$jscomp.defineProperty(f,a,{configurable:!0,writable:!0,value:n})}};$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,f){return $jscomp.findInternal(this,a,f).v}},"es6","es3");
(function(a,n,f){"function"===typeof define&&define.amd?define(["jquery"],a):"object"===typeof exports&&"undefined"===typeof Meteor?module.exports=a(require("jquery")):a(n||f)})(function(a){var n=function(b,d,e){var c={invalid:[],getCaret:function(){try{var a=0,r=b.get(0),h=document.selection,d=r.selectionStart;if(h&&-1===navigator.appVersion.indexOf("MSIE 10")){var e=h.createRange();e.moveStart("character",-c.val().length);a=e.text.length}else if(d||"0"===d)a=d;return a}catch(C){}},setCaret:function(a){try{if(b.is(":focus")){var c=
b.get(0);if(c.setSelectionRange)c.setSelectionRange(a,a);else{var g=c.createTextRange();g.collapse(!0);g.moveEnd("character",a);g.moveStart("character",a);g.select()}}}catch(B){}},events:function(){b.on("keydown.mask",function(a){b.data("mask-keycode",a.keyCode||a.which);b.data("mask-previus-value",b.val());b.data("mask-previus-caret-pos",c.getCaret());c.maskDigitPosMapOld=c.maskDigitPosMap}).on(a.jMaskGlobals.useInput?"input.mask":"keyup.mask",c.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){b.keydown().keyup()},
100)}).on("change.mask",function(){b.data("changed",!0)}).on("blur.mask",function(){f===c.val()||b.data("changed")||b.trigger("change");b.data("changed",!1)}).on("blur.mask",function(){f=c.val()}).on("focus.mask",function(b){!0===e.selectOnFocus&&a(b.target).select()}).on("focusout.mask",function(){e.clearIfNotMatch&&!k.test(c.val())&&c.val("")})},getRegexMask:function(){for(var a=[],b,c,e,t,f=0;f<d.length;f++)(b=l.translation[d.charAt(f)])?(c=b.pattern.toString().replace(/.{1}$|^.{1}/g,""),e=b.optional,
(b=b.recursive)?(a.push(d.charAt(f)),t={digit:d.charAt(f),pattern:c}):a.push(e||b?c+"?":c)):a.push(d.charAt(f).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));a=a.join("");t&&(a=a.replace(new RegExp("("+t.digit+"(.*"+t.digit+")?)"),"($1)?").replace(new RegExp(t.digit,"g"),t.pattern));return new RegExp(a)},destroyEvents:function(){b.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(a){var c=b.is("input")?"val":"text";if(0<arguments.length){if(b[c]()!==a)b[c](a);
c=b}else c=b[c]();return c},calculateCaretPosition:function(a){var d=c.getMasked(),h=c.getCaret();if(a!==d){var e=b.data("mask-previus-caret-pos")||0;d=d.length;var g=a.length,f=a=0,l=0,k=0,m;for(m=h;m<d&&c.maskDigitPosMap[m];m++)f++;for(m=h-1;0<=m&&c.maskDigitPosMap[m];m--)a++;for(m=h-1;0<=m;m--)c.maskDigitPosMap[m]&&l++;for(m=e-1;0<=m;m--)c.maskDigitPosMapOld[m]&&k++;h>g?h=10*d:e>=h&&e!==g?c.maskDigitPosMapOld[h]||(e=h,h=h-(k-l)-a,c.maskDigitPosMap[h]&&(h=e)):h>e&&(h=h+(l-k)+f)}return h},behaviour:function(d){d=
d||window.event;c.invalid=[];var e=b.data("mask-keycode");if(-1===a.inArray(e,l.byPassKeys)){e=c.getMasked();var h=c.getCaret(),g=b.data("mask-previus-value")||"";setTimeout(function(){c.setCaret(c.calculateCaretPosition(g))},a.jMaskGlobals.keyStrokeCompensation);c.val(e);c.setCaret(h);return c.callbacks(d)}},getMasked:function(a,b){var h=[],f=void 0===b?c.val():b+"",g=0,k=d.length,n=0,p=f.length,m=1,r="push",u=-1,w=0;b=[];if(e.reverse){r="unshift";m=-1;var x=0;g=k-1;n=p-1;var A=function(){return-1<
g&&-1<n}}else x=k-1,A=function(){return g<k&&n<p};for(var z;A();){var y=d.charAt(g),v=f.charAt(n),q=l.translation[y];if(q)v.match(q.pattern)?(h[r](v),q.recursive&&(-1===u?u=g:g===x&&g!==u&&(g=u-m),x===u&&(g-=m)),g+=m):v===z?(w--,z=void 0):q.optional?(g+=m,n-=m):q.fallback?(h[r](q.fallback),g+=m,n-=m):c.invalid.push({p:n,v:v,e:q.pattern}),n+=m;else{if(!a)h[r](y);v===y?(b.push(n),n+=m):(z=y,b.push(n+w),w++);g+=m}}a=d.charAt(x);k!==p+1||l.translation[a]||h.push(a);h=h.join("");c.mapMaskdigitPositions(h,
b,p);return h},mapMaskdigitPositions:function(a,b,d){a=e.reverse?a.length-d:0;c.maskDigitPosMap={};for(d=0;d<b.length;d++)c.maskDigitPosMap[b[d]+a]=1},callbacks:function(a){var g=c.val(),h=g!==f,k=[g,a,b,e],l=function(a,b,c){"function"===typeof e[a]&&b&&e[a].apply(this,c)};l("onChange",!0===h,k);l("onKeyPress",!0===h,k);l("onComplete",g.length===d.length,k);l("onInvalid",0<c.invalid.length,[g,a,b,c.invalid,e])}};b=a(b);var l=this,f=c.val(),k;d="function"===typeof d?d(c.val(),void 0,b,e):d;l.mask=
d;l.options=e;l.remove=function(){var a=c.getCaret();l.options.placeholder&&b.removeAttr("placeholder");b.data("mask-maxlength")&&b.removeAttr("maxlength");c.destroyEvents();c.val(l.getCleanVal());c.setCaret(a);return b};l.getCleanVal=function(){return c.getMasked(!0)};l.getMaskedVal=function(a){return c.getMasked(!1,a)};l.init=function(g){g=g||!1;e=e||{};l.clearIfNotMatch=a.jMaskGlobals.clearIfNotMatch;l.byPassKeys=a.jMaskGlobals.byPassKeys;l.translation=a.extend({},a.jMaskGlobals.translation,e.translation);
l=a.extend(!0,{},l,e);k=c.getRegexMask();if(g)c.events(),c.val(c.getMasked());else{e.placeholder&&b.attr("placeholder",e.placeholder);b.data("mask")&&b.attr("autocomplete","off");g=0;for(var f=!0;g<d.length;g++){var h=l.translation[d.charAt(g)];if(h&&h.recursive){f=!1;break}}f&&b.attr("maxlength",d.length).data("mask-maxlength",!0);c.destroyEvents();c.events();g=c.getCaret();c.val(c.getMasked());c.setCaret(g)}};l.init(!b.is("input"))};a.maskWatchers={};var f=function(){var b=a(this),d={},e=b.attr("data-mask");
b.attr("data-mask-reverse")&&(d.reverse=!0);b.attr("data-mask-clearifnotmatch")&&(d.clearIfNotMatch=!0);"true"===b.attr("data-mask-selectonfocus")&&(d.selectOnFocus=!0);if(p(b,e,d))return b.data("mask",new n(this,e,d))},p=function(b,d,e){e=e||{};var c=a(b).data("mask"),f=JSON.stringify;b=a(b).val()||a(b).text();try{return"function"===typeof d&&(d=d(b)),"object"!==typeof c||f(c.options)!==f(e)||c.mask!==d}catch(w){}},k=function(a){var b=document.createElement("div");a="on"+a;var e=a in b;e||(b.setAttribute(a,
"return;"),e="function"===typeof b[a]);return e};a.fn.mask=function(b,d){d=d||{};var e=this.selector,c=a.jMaskGlobals,f=c.watchInterval;c=d.watchInputs||c.watchInputs;var k=function(){if(p(this,b,d))return a(this).data("mask",new n(this,b,d))};a(this).each(k);e&&""!==e&&c&&(clearInterval(a.maskWatchers[e]),a.maskWatchers[e]=setInterval(function(){a(document).find(e).each(k)},f));return this};a.fn.masked=function(a){return this.data("mask").getMaskedVal(a)};a.fn.unmask=function(){clearInterval(a.maskWatchers[this.selector]);
delete a.maskWatchers[this.selector];return this.each(function(){var b=a(this).data("mask");b&&b.remove().removeData("mask")})};a.fn.cleanVal=function(){return this.data("mask").getCleanVal()};a.applyDataMask=function(b){b=b||a.jMaskGlobals.maskElements;(b instanceof a?b:a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(f)};k={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,keyStrokeCompensation:10,useInput:!/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent)&&
k("input"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};a.jMaskGlobals=a.jMaskGlobals||{};k=a.jMaskGlobals=a.extend(!0,{},k,a.jMaskGlobals);k.dataMask&&a.applyDataMask();setInterval(function(){a.jMaskGlobals.watchDataMask&&a.applyDataMask()},k.watchInterval)},window.jQuery,window.Zepto);


jQuery("document").ready(function () {

	(function ($) {

		$('body').find('.wpcf7-form-control-wrap').each(function () {
			let formField = $(this).find('.form-field');
			let formElement = formField.parent(".wpcf7-form-control-wrap");
			let formFieldPlaceholder;
	
			if (formField.hasClass('wpcf7-tel')) {
				formFieldPlaceholder = 'Телефон';
				formField.mask('+7 (000) 000 00 00');
			} else {
				formFieldPlaceholder = formField.attr("placeholder");
			}
	
			formField.before(`<label class="form-label">${formFieldPlaceholder}</label>`);
	
			formField.after('<span class="clear-input" style="display:none;"></span><span class="checkmark-icon" style="display:none;"></span>');
			let clearInput = formElement.find('.clear-input');
			let checkmarkIcon = formElement.find('.checkmark-icon');
	
			formField.on('input', function () {
				if ($(this).val()) {
					clearInput.show();
				} else {
					clearInput.hide();
					checkmarkIcon.hide();
				}
			});
	
			formField.focus(function () {
				formElement.addClass("has-val");
			});
	
			formField.blur(function () {
				let valLength = $(this).val().length;
				let minLength = $(this).attr("minlength");
	
				if (valLength >= minLength) {
					formElement.addClass("input-accept");
					checkmarkIcon.show();
				} else {
					formElement.removeClass("input-accept");
					checkmarkIcon.hide();
				}
	
				if ($(this).val() !== "") {
					formElement.addClass("has-val");
				} else {
					formElement.removeClass("has-val");
				}
			});
	
			clearInput.click(function () {
				formField.val('');
				$(this).hide();
				checkmarkIcon.hide();
				formElement.removeClass("input-accept");
			});

			$('body').on('click', '.close-success', function () {
				$(this).closest('.alert-success').removeClass('alert-success');
			});
		});
		

	})(jQuery);


});


jQuery(document).ready(function($) {

    // Флаг для отслеживания открытия диалога выбора файла
    var isFilePickerOpen = false;

    // Вызов модального окна для callback
    $('a[href="#main-popup"]').click(function () {
        $('.main-popup').fadeIn();
        $('.from-callback').show();
        $('.from-career').hide();
        $('body').addClass("popup-visible");
    });

    // Вызов модального окна для career
    $('a[href="#career-popup"]').click(function () {
        $('.main-popup').fadeIn();
        $('.from-career').show();
        $('.from-callback').hide();
        $('body').addClass("popup-visible");
    });

    // Закрытие окна на крестик
    $('.close-popup').click(function () {
        $(this).closest('.main-popup').fadeOut();
        $('body').removeClass("popup-visible");
    });

    // Закрытие окна на поле
    $(document).mouseup(function (e) {
        if (isFilePickerOpen) return; // если диалог выбора файла открыт, не закрываем модальное окно

        var popup = $('.main-popup > .elementor-container');
        if (e.target != popup[0] && popup.has(e.target).length === 0) {
            $('.main-popup').fadeOut();
            $('body').removeClass("popup-visible");
        }
    });

    // Обработчик выбора файла
    $("#resume-upload").on("click", function() {
        isFilePickerOpen = true;
    });

    $("#resume-upload").on("change", function() {
        var fileNameElement = $("#file-name");
        if (this.files.length > 0) {
            var fileName = this.files[0].name;
            fileNameElement.text(fileName);
            fileNameElement.css("color", "black");
        } else {
            fileNameElement.text("");
        }

        // Задержка перед тем как снова разрешить закрытие модального окна
        setTimeout(function() {
            isFilePickerOpen = false;
        }, 1000); // Задержка в 1 секунду
    });

    // добавления классов при отправлении формы
    document.addEventListener('wpcf7mailsent', function (event) {
        $('.alert-form').addClass('alert-success');
    }, false);
});


document.addEventListener('DOMContentLoaded', function () {
    const totalSlides = document.querySelectorAll('.dlw-swiper .dev-listbox-wrapper-items .swiper-slide').length;
    const swiper = new Swiper('.dlw-swiper .dev-listbox-wrapper-items', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            init: function () {
                document.querySelector('.swiper-total-count').textContent = totalSlides;
                document.querySelector('.swiper-current-index').textContent = 1; 
            },
            slideChange: function (swiper) {
                let realIndex = swiper.realIndex + 1;
                realIndex = realIndex > totalSlides ? 1 : realIndex;  // if it goes beyond totalSlides, reset it to 1
                document.querySelector('.swiper-current-index').textContent = realIndex;
            },
        },
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var outroBlocks = document.querySelectorAll(".outro-blocks");

    outroBlocks.forEach(function (block) {
        var outroHead = block.querySelector(".outro-head");
        var outroBody = block.querySelector(".outro-body");
        var outroSwap = block.querySelector(".outro-swap");

        outroHead.addEventListener("click", function () {
            if (block.classList.contains('open')) {
                outroSwap.textContent = "Подробнее";
                block.classList.remove('open');
            } else {
                outroSwap.textContent = "Скрыть";
                block.classList.add('open');
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Получение элементов
    var header = document.querySelector(".site-header");
    var contentBelowHeader = document.querySelector("header + .elementor-2684, header + .site-main");
    var adminBar = document.querySelector("#wpadminbar");

    if (!header || !contentBelowHeader) {
        return;
    }

    // Получение высоты шапки и административной панели (если она существует)
    var headerHeight = header.offsetHeight;
    var adminBarHeight = adminBar ? adminBar.offsetHeight : 0;

    // Функция для проверки позиции скролла
    var checkScroll = function() {
        if (window.pageYOffset >= adminBarHeight) {
            header.classList.add("sticky");
            header.style.top = adminBarHeight + "px"; // установка высоты административной панели в качестве верхнего отступа
            contentBelowHeader.style.marginTop = headerHeight + "px"; // добавление маржина, чтобы избежать скачка
        } else {
            header.classList.remove("sticky");
            header.style.top = "0px";
            contentBelowHeader.style.marginTop = "0px";
        }
    };

    // Проверка позиции скролла при загрузке страницы
    checkScroll();

    // Проверка позиции скролла при прокрутке страницы
    window.addEventListener("scroll", checkScroll);
});


document.addEventListener("DOMContentLoaded", function() {
    // При нажатии на элемент с классом open_side_menu
    document.querySelector('.mdev #hs__1 .h_col-3 .open_side_menu').addEventListener('click', function() {
        // Определить текущую высоту экрана
        var screenHeight = window.innerHeight;
        // Добавить эту высоту в элемент с классом uc-side-menu-items через атрибут style
        document.querySelector('.mdev #hs__1 .h_col-3 .uc-side-menu-items').style.height = screenHeight + 'px';
    });
});