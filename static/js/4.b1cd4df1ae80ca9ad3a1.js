webpackJsonp([4],{552:function(t,i,n){function s(t){n(591)}var e=n(8)(n(570),n(603),s,null,null);t.exports=e.exports},554:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=n(54),e=n.n(s),a=n(63),o=n.n(a),A=n(187),l=n.n(A),r=n(186),c=n.n(r),p=n(122),g=n(45),d=n(81),u=n.i(p.a)("transform"),C=n.i(p.a)("backdrop-filter");i.default={mixins:[d.c],props:{bgImage:{type:String,default:""},songs:{type:Array,default:[]},title:{type:String,default:""},rank:{type:Boolean,default:!1}},data:function(){return{scrollY:0}},computed:{bgStyle:function(){return"background-image:url("+this.bgImage+")"}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minTranslateY=40-this.imageHeight,this.$refs.list.$el.style.top=this.imageHeight+"px"},methods:e()({handlePlaylist:function(t){var i=t.length>0?"60px":"";this.$refs.list.$el.style.bottom=i,this.$refs.list.refresh()},scroll:function(t){this.scrollY=t.y},back:function(){this.$router.back()},selectItem:function(t,i){this.selectPlay({list:this.songs,index:i})},random:function(){this.randomPlay({list:this.songs})}},n.i(g.c)(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var i=Math.max(this.minTranslateY,t),n=0,s=1,e=0;this.$refs.layer.style[u]="translate3d(0,"+i+"px,0)";var a=Math.abs(t/this.imageHeight);t>0?(s=1+a,n=10):e=Math.min(20*a,20),this.$refs.filter.style[C]="blur("+e+"px)",t<this.minTranslateY?(n=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="40px",this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.playBtn.style.display=""),this.$refs.bgImage.style.zIndex=n,this.$refs.bgImage.style[u]="scale("+s+")"}},components:{Scroll:o.a,SongList:l.a,Loading:c.a}}},555:function(t,i,n){i=t.exports=n(544)(!0),i.push([t.i,".music-list{position:fixed;z-index:100;top:0;left:0;bottom:0;right:0;background:#222}.music-list .back{position:absolute;top:0;left:6px;z-index:50}.music-list .back .icon-back{display:block;padding:10px;font-size:22px;color:#ffcd32}.music-list .title{position:absolute;top:0;left:10%;z-index:40;width:80%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-align:center;line-height:40px;font-size:18px;color:#fff}.music-list .bg-image{position:relative;width:100%;height:0;padding-top:70%;-webkit-transform-origin:top;transform-origin:top;background-size:cover}.music-list .bg-image .play-wrapper{position:absolute;bottom:20px;z-index:50;width:100%}.music-list .bg-image .play-wrapper .play{box-sizing:border-box;width:135px;padding:7px 0;margin:0 auto;text-align:center;border:1px solid #ffcd32;color:#ffcd32;border-radius:100px;font-size:0}.music-list .bg-image .play-wrapper .play .icon-play{display:inline-block;vertical-align:middle;margin-right:6px;font-size:16px}.music-list .bg-image .play-wrapper .play .text{display:inline-block;vertical-align:middle;font-size:12px}.music-list .bg-image .filter{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(7,17,27,.4)}.music-list .bg-layer{position:relative;height:100%;background:#222}.music-list .list{position:fixed;top:0;bottom:0;width:100%;background:#222}.music-list .list .song-list-wrapper{padding:20px 30px}.music-list .list .loading-container{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["G:/Github/music/src/components/music-list/music-list.vue"],names:[],mappings:"AACA,YACE,eAAgB,AAChB,YAAa,AACb,MAAO,AACP,OAAQ,AACR,SAAU,AACV,QAAS,AACT,eAAiB,CAClB,AACD,kBACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,UAAY,CACb,AACD,6BACE,cAAe,AACf,aAAc,AACd,eAAgB,AAChB,aAAe,CAChB,AACD,mBACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,UAAW,AACX,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,kBAAmB,AACnB,iBAAkB,AAClB,eAAgB,AAChB,UAAY,CACb,AACD,sBACE,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,gBAAiB,AACjB,6BAA8B,AACtB,qBAAsB,AAC9B,qBAAuB,CACxB,AACD,oCACE,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,UAAY,CACb,AACD,0CACE,sBAAuB,AACvB,YAAa,AACb,cAAe,AACf,cAAe,AACf,kBAAmB,AACnB,yBAA0B,AAC1B,cAAe,AACf,oBAAqB,AACrB,WAAa,CACd,AACD,qDACE,qBAAsB,AACtB,sBAAuB,AACvB,iBAAkB,AAClB,cAAgB,CACjB,AACD,gDACE,qBAAsB,AACtB,sBAAuB,AACvB,cAAgB,CACjB,AACD,8BACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,2BAA8B,CAC/B,AACD,sBACE,kBAAmB,AACnB,YAAa,AACb,eAAiB,CAClB,AACD,kBACE,eAAgB,AAChB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,eAAiB,CAClB,AACD,qCACE,iBAAmB,CACpB,AACD,qCACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACrC",file:"music-list.vue",sourcesContent:["\n.music-list {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #222;\n}\n.music-list .back {\n  position: absolute;\n  top: 0;\n  left: 6px;\n  z-index: 50;\n}\n.music-list .back .icon-back {\n  display: block;\n  padding: 10px;\n  font-size: 22px;\n  color: #ffcd32;\n}\n.music-list .title {\n  position: absolute;\n  top: 0;\n  left: 10%;\n  z-index: 40;\n  width: 80%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: center;\n  line-height: 40px;\n  font-size: 18px;\n  color: #fff;\n}\n.music-list .bg-image {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-top: 70%;\n  -webkit-transform-origin: top;\n          transform-origin: top;\n  background-size: cover;\n}\n.music-list .bg-image .play-wrapper {\n  position: absolute;\n  bottom: 20px;\n  z-index: 50;\n  width: 100%;\n}\n.music-list .bg-image .play-wrapper .play {\n  box-sizing: border-box;\n  width: 135px;\n  padding: 7px 0;\n  margin: 0 auto;\n  text-align: center;\n  border: 1px solid #ffcd32;\n  color: #ffcd32;\n  border-radius: 100px;\n  font-size: 0;\n}\n.music-list .bg-image .play-wrapper .play .icon-play {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 6px;\n  font-size: 16px;\n}\n.music-list .bg-image .play-wrapper .play .text {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 12px;\n}\n.music-list .bg-image .filter {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(7,17,27,0.4);\n}\n.music-list .bg-layer {\n  position: relative;\n  height: 100%;\n  background: #222;\n}\n.music-list .list {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: #222;\n}\n.music-list .list .song-list-wrapper {\n  padding: 20px 30px;\n}\n.music-list .list .loading-container {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"],sourceRoot:""}])},556:function(t,i,n){var s=n(555);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(545)("3142c31a",s,!0)},557:function(t,i,n){function s(t){n(556)}var e=n(8)(n(554),n(558),s,null,null);t.exports=e.exports},558:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"music-list"},[n("div",{staticClass:" back",on:{click:t.back}},[n("i",{staticClass:"icon-back"})]),t._v(" "),n("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),n("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[n("div",{staticClass:"play-wrapper"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length>0,expression:"songs.length>0"}],ref:"playBtn",staticClass:"play",on:{click:t.random}},[n("i",{staticClass:"icon-play"}),t._v(" "),n("span",{staticClass:"text"},[t._v("随机播放全部")])])]),t._v(" "),n("div",{ref:"filter",staticClass:"filter"})]),t._v(" "),n("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),n("scroll",{ref:"list",staticClass:"list",attrs:{"probe-type":t.probeType,"listen-scroll":t.listenScroll,data:t.songs},on:{scroll:t.scroll}},[n("div",{staticClass:"song-list-wrapper"},[n("song-list",{attrs:{rank:t.rank,songs:t.songs},on:{select:t.selectItem}})],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[n("loading")],1)])],1)},staticRenderFns:[]}},559:function(t,i,n){"use strict";function s(){var t=o()({},l.b,{platform:"h5",needNewCode:1});return n.i(A.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,l.c)}function e(t){var i=o()({},l.b,{topid:t,page:"detail",type:"top",tpl:3,platform:"h5",needNewCode:1});return n.i(A.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",i,l.c)}i.b=s,i.a=e;var a=n(82),o=n.n(a),A=n(185),l=n(62)},570:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=n(54),e=n.n(s),a=n(557),o=n.n(a),A=n(45),l=n(559),r=n(62),c=n(123);i.default={computed:e()({title:function(){return this.topList.topTitle},bgImage:function(){return this.songs.length?this.songs[0].image:""}},n.i(A.a)(["topList"])),created:function(){this._getMusicList()},data:function(){return{songs:[],rank:!0}},methods:{_getMusicList:function(){var t=this;if(!this.topList.id)return void this.$router.push("/rank");n.i(l.a)(this.topList.id).then(function(i){i.code===r.a&&(t.songs=t._normalizeSongs(i.songlist))})},_normalizeSongs:function(t){var i=[];return t.forEach(function(t){var s=t.data;s.songid&&s.albumid&&i.push(n.i(c.b)(s))}),i}},components:{MusicList:o.a}}},581:function(t,i,n){i=t.exports=n(544)(!0),i.push([t.i,".slide-enter-active,.slide-leave-active{transition:all .3s ease}.slide-enter,.slide-leave-to{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}","",{version:3,sources:["G:/Github/music/src/components/top-list/top-list.vue"],names:[],mappings:"AACA,wCAEE,uBAA0B,CAC3B,AACD,6BAEE,wCAA2C,AACnC,+BAAmC,CAC5C",file:"top-list.vue",sourcesContent:["\n.slide-enter-active,\n.slide-leave-active {\n  transition: all 0.3s ease;\n}\n.slide-enter,\n.slide-leave-to {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}"],sourceRoot:""}])},591:function(t,i,n){var s=n(581);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(545)("36710dab",s,!0)},603:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{rank:t.rank,title:t.title,"bg-image":t.bgImage,songs:t.songs}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=4.b1cd4df1ae80ca9ad3a1.js.map