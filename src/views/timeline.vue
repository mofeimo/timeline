<template>
	<div class="timeline clearfix">
		<div class="header fl">
			不知道放点什么
		</div>
		<div class="setting fr" ref="settingref">
			<span @click="timeline.hidesetting">设置+记录</span>
		</div>
		<div class="canvas fl" id="canvas" ref="canvasref">
			<span>您的浏览器不支持canvas</span>
		</div>
	</div>
</template>
<script setup>
import { reactive, ref, onMounted } from 'vue';

const canvasref = ref(null);
const settingref = ref(null);

const timeline = reactive({
	style: {
		'--header-height': '40px',
		'--setting-width': '200px',
	},
	setting:{
		eventwidth: 400,
	},
	hidesetting(){
		timeline.style['--setting-width'] ='0px';	
	},
	init(){
		window.resizeobserver = new ResizeObserver((entries)=>{
			entries.forEach(entry=>{
				if(entry.contentBoxSize){
					const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize;
					console.log(contentBoxSize);
				}
			});
		});
		window.resizeobserver.observe(settingref.value);
	},
});
const canvas = reactive({
	stage: null,
	time: null,
	header: {
		height: 100,
		con: null,
		bottomline: null,
		eventline: null,

	},
	init() {
		canvas.initcanvas();
		canvas.initheader();
	},
	initcanvas(){
		let [width, height] = canvas.getsize();
		if(canvas.stage){
			canvas.stage.setAttrs({width,height});
		}else{
			canvas.stage = new Konva.Stage({
				container: 'canvas',
				width,
				height,
			});
		}
	},
	initheader(){
		let [width, height] = canvas.getsize();
		if(!canvas.header.con){
			canvas.header.con = new Konva.Layer();
			canvas.stage.add(canvas.header.con);
		}
		if(canvas.header.bottomline){
			canvas.header.bottomline.setAttrs({points:[0,canvas.header.height,canvas.stage.getAttr('width'),canvas.header.height]})
		}else{
			canvas.header.bottomline = new Konva.Line({
				points: [0,canvas.header.height,canvas.stage.getAttr('width'),canvas.header.height],
				stroke: '#dfdfdf',
				strokeWidth: 1,
			});
			canvas.header.con.add(canvas.header.bottomline);
		}
		if(canvas.header.eventline){
			canvas.header.eventline.setAttrs({points:[timeline.setting.eventwidth,0,timeline.setting.eventwidth,canvas.header.height]})
		}else{
			canvas.header.eventline = new Konva.Line({
				points: [timeline.setting.eventwidth,0,timeline.setting.eventwidth,canvas.header.height],
				stroke: '#dfdfdf',
				strokeWidth: 1,
			});
			canvas.header.con.add(canvas.header.eventline);
		}
	},
	inittime(){

	},
	getsize() {
		let width = canvasref.value.offsetWidth;
		let height = canvasref.value.offsetHeight;
		return [width, height];
	}
});
onMounted(() => {
	timeline.init();
	canvas.init();
	canvasref.value.addEventListener('resize',canvas.init);
});
</script>
<style lang="scss" scoped>
@import "../assets/common.scss";
@import "../assets/timeline.scss";
</style>
<style lang="scss" scoped>
.timeline {
	--header-height: v-bind("timeline.style['--header-height']");
	--setting-width: v-bind("timeline.style['--setting-width']");
	width: 100%;
	height: 100%;

	.header {
		height: var(--header-height);
		width: calc(100% - var(--setting-width));
		background-color: aqua;
	}

	.setting {
		width: var(--setting-width);
		height: 100%;
		background-color: aquamarine;
	}

	.canvas {
		width: calc(100% - var(--setting-width));
		height: calc(100% - var(--header-height));
	}
}
</style>