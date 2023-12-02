<template>
    <div ref="arcTextRef" :class="options.el">
        <span v-for="(item, index) in aryList" :key="index">
            {{ item }}
        </span>
    </div>
</template>
  
<script setup lang="ts">
import $ from 'jquery'
import { toRefs, onMounted, reactive, ref, watch } from 'vue';
const props = defineProps({ data: Object });
const { data }: any = toRefs(props)

var options = reactive({
    ...data.value
});

var aryList = data.value.text.split('') || [];
var dir = null;
var rotate = null;
var $el = null;
var radius = 0;
var $letters = null;
var letters = null;

var dtArc = 1;
var dtWord = -1;

var animation = undefined;

const arcTextRef = ref(null)

onMounted(() => {
    init()
})

watch(data.value, (newValue: any) => {
    init()
}, { deep: true })


const init = () => {
    initData();
    render()
}

const initData = () => {
    let defaults = {
        radius: 0,
        dir: 1,
        rotate: true,
        fitText: false
    }
    options = Object.assign(true, {}, defaults, options)
    dir = options.dir;
    rotate = options.rotate;
    radius = options.radius;
    $el = arcTextRef.value.children
}

const render = () => {
    if ($el.length) {
        for (let i = 0; i < $el.length; i++) {
            var a = $($el[i]).text().split(''), emptyclass, after, inject;
            inject = '';
            if (a.length) {
                $(a).each(function (v, item) {
                    emptyclass = '';
                    after = '';
                    if (item === ' ') {
                        emptyclass = ' empty';
                        item = '&nbsp;';
                    }
                    inject += '<span class="' + 'char' + (i + 1) + emptyclass + '">' + item + '</span>' + after;
                });
                $($el[i]).empty().append(inject);
            }
            letters = $(arcTextRef.value.children).find('span').css('display', 'inline-block');
            handle()
        }
    }
}
const handle = () => {
    calcBase();
    calcLetters();
    rotateWord(animation)
}

const calcBase = () => {
    var dtWordNew = 0;
    letters.each(function (i, item) {
        var $letter = $(item),
            letterWidth = $letter.outerWidth(true);
        dtWordNew += letterWidth;
        $letter.data('center', dtWordNew - letterWidth / 2);
    });
    var centerWord = dtWord / 2;
    if (radius < centerWord) radius = centerWord;
    var dtArcBase = dtWord;
    var angle = 2 * Math.asin(dtArcBase / (2 * radius)); // Math.asin 返回值-PI/2 到 PI/2  
    dtArc = radius * angle;
    dtWord = dtWord;
}

const calcLetters = () => {
    var iteratorX = 0;
    letters.each(function (i, item) {
        var $letter = $(item),
            dtArcLetter = ($letter.outerWidth(true) / dtWord) * dtArc,
            beta = dtArcLetter / radius,
            h = radius * (Math.cos(beta / 2)),
            alpha = Math.acos((dtWord / 2 - iteratorX) / radius),
            theta = alpha + beta / 2,
            x = Math.cos(theta) * h,
            y = Math.sin(theta) * h,
            xpos = iteratorX + Math.abs(dtWord / 2 - x - iteratorX),
            xval = 0 | xpos - $letter.data('center'),
            yval = 0 | radius - y,
            angle = (rotate) ? 0 | -Math.asin(x / radius) * (180 / Math.PI) : 0; //在角度和弧度之间转换
        iteratorX = 2 * xpos - iteratorX;
        $letter.data({
            x: xval,
            y: (dir === 1) ? yval : -yval,
            a: (dir === 1) ? angle : -angle
        });
    });
}

const rotateWord = (animation) => {
    letters.each(function (i, item) {
        var $letter = $(item),
            transformation = (radius === -1) ? 'none' : 'translateX(' + $letter.data('x') + 'px) translateY(' + $letter.data('y') + 'px) rotate(' + $letter.data('a') + 'deg)',
            transition = (animation) ? 'all ' + (animation.speed || 0) + 'ms ' + (animation.easing || 'linear') : 'none';
        $letter.css({
            '-webkit-transition': transition,
            '-moz-transition': transition,
            '-o-transition': transition,
            '-ms-transition': transition,
            'transition': transition
        })
            .css({
                '-webkit-transform': transformation,
                '-moz-transform': transformation,
                '-o-transform': transformation,
                '-ms-transform': transformation,
                'transform': transformation
            });
    });
}   
</script>
  
<style lang="less" scoped></style> 
  