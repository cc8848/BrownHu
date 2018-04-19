(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{70:function(a,t,i){"use strict";i.r(t);var s=i(0),e=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"content"},[i("h1",{attrs:{id:"排序算法-n个正整数排序"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#排序算法-n个正整数排序","aria-hidden":"true"}},[a._v("#")]),a._v(" 排序算法-N个正整数排序")]),i("h2",{attrs:{id:"算法"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#算法","aria-hidden":"true"}},[a._v("#")]),a._v(" 算法")]),i("p",[a._v("高德纳在《计算机程序设计艺术》里对算法归纳为以下几点：")]),i("blockquote",[i("ol",[i("li",[a._v("输入: 一个算法必须有零或以上的输入量")]),i("li",[a._v("输出: 一个算法应有一个或以上的输出量")]),i("li",[a._v("明确性: 算法的描述必须无歧义,实际运行结果是确定的")]),i("li",[a._v("有限性: 必须在有限个步骤内结束")]),i("li",[a._v("有效性: 又称可行性,能够被执行者实现")])])]),i("p",[i("strong",[a._v("如果想详细研究算法推荐《数据结构与算法分析》")])]),i("p",[i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-706bb05d7f8e293f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"数据结构与算法分析"}})]),i("h2",{attrs:{id:"定义问题"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#定义问题","aria-hidden":"true"}},[a._v("#")]),a._v(" 定义问题")]),i("p",[a._v("数组array含有N个正整数\n输入量为array\n请将array中的数字从小到大排列\n输出量为排好序的数组")]),i("p",[a._v("代码例子")]),i("pre",{pre:!0,attrs:{class:"language-js"}},[i("code",[i("span",{attrs:{class:"token keyword"}},[a._v("var")]),a._v(" array "),i("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),i("span",{attrs:{class:"token punctuation"}},[a._v("[")]),i("span",{attrs:{class:"token number"}},[a._v("5")]),i("span",{attrs:{class:"token punctuation"}},[a._v(",")]),i("span",{attrs:{class:"token number"}},[a._v("2")]),i("span",{attrs:{class:"token punctuation"}},[a._v(",")]),i("span",{attrs:{class:"token number"}},[a._v("4")]),i("span",{attrs:{class:"token punctuation"}},[a._v(",")]),i("span",{attrs:{class:"token number"}},[a._v("6")]),i("span",{attrs:{class:"token punctuation"}},[a._v(",")]),i("span",{attrs:{class:"token number"}},[a._v("8")]),i("span",{attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),i("span",{attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),i("span",{attrs:{class:"token function"}},[a._v("sort")]),i("span",{attrs:{class:"token punctuation"}},[a._v("(")]),i("span",{attrs:{class:"token punctuation"}},[a._v(")")]),i("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   你的代码\n"),i("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),i("span",{attrs:{class:"token function"}},[a._v("sort")]),i("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("array"),i("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),i("span",{attrs:{class:"token operator"}},[a._v("===")]),a._v(" "),i("span",{attrs:{class:"token punctuation"}},[a._v("[")]),i("span",{attrs:{class:"token number"}},[a._v("2")]),i("span",{attrs:{class:"token punctuation"}},[a._v(",")]),i("span",{attrs:{class:"token number"}},[a._v("4")]),i("span",{attrs:{class:"token punctuation"}},[a._v(",")]),i("span",{attrs:{class:"token number"}},[a._v("5")]),i("span",{attrs:{class:"token punctuation"}},[a._v(",")]),i("span",{attrs:{class:"token number"}},[a._v("6")]),i("span",{attrs:{class:"token punctuation"}},[a._v(",")]),i("span",{attrs:{class:"token number"}},[a._v("8")]),i("span",{attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),i("p",[a._v("当你遇到思路障碍怎么办?")]),i("ul",[i("li",[a._v("将"),i("strong",[a._v("抽象的问题")]),a._v("转化为"),i("strong",[a._v("具体的问题")])]),i("li",[a._v("将"),i("strong",[a._v("没见过的问题")]),a._v("转化为"),i("strong",[a._v("见过的问题")])])]),i("h2",{attrs:{id:"排序算法"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#排序算法","aria-hidden":"true"}},[a._v("#")]),a._v(" 排序算法")]),i("p",[i("strong",[i("a",{attrs:{href:"https://visualgo.net/sorting",target:"_blank",rel:"noopener noreferrer"}},[a._v("所有算法都可在此查看演示")])])]),i("h3",{attrs:{id:"冒泡排序-bubble"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#冒泡排序-bubble","aria-hidden":"true"}},[a._v("#")]),a._v(" 冒泡排序(BUBBLE)")]),i("p",[a._v("重复地比较要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。比较数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。每比较一整轮,最大的都会出现在最后故名---"),i("strong",[a._v("冒泡排序")])]),i("p",[a._v("流程如下:")]),i("ol",[i("li",[a._v("我们拿到一个数组\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-51788201338ecebb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"数组"}})]),i("li",[a._v("开始从前两个开始比较,发现44>3,所以不用交换\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-27cf4ee44274aebd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"比较"}})]),i("li",[a._v("接着往后比较,发现38<44,所以交换他们两个的位置\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-b106c8ea4d1e64a4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"比较"}})]),i("li",[a._v("以此类推直到第一轮结束,我们得到了最大的那一个----"),i("strong",[a._v("50")]),a._v("(冒的第一个泡)\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-05228b4f061ec01b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"第一轮结束"}})]),i("li",[a._v("接着下一轮,又从头开始两个两个地比较,重复第一轮,我们就得到了第二个最大的------"),i("strong",[a._v("48")]),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-b3a220becd934a11.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"第二轮结束"}})]),i("li",[a._v("如此进行多轮比较我们会得到一个从小到大的数组\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-f60c295026eac0f3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"从小到大"}})])]),i("h3",{attrs:{id:"选择排序-select"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#选择排序-select","aria-hidden":"true"}},[a._v("#")]),a._v(" 选择排序(SELECT)")]),i("p",[a._v("每一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，直到全部待排序的数据元素排完。\n流程如下:")]),i("ol",[i("li",[a._v("拿到一个数组\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-62f83dc193f1978c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"数组"}})]),i("li",[a._v("我们要选出这个数组中最小的元素然后把它和第一个数交换(放到最前面),所以我们先认为3为最小,然后和后面的数依次进行比较.\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-b44dc333bdadd03b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"和最小值比较"}})]),i("li",[a._v("当比到2的时候,我们发现3>2,所以我们就认为2为最小值,后面的数应该都和2进行比较.\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-47bda740993e028c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"改变最小值的元素"}})]),i("li",[a._v("当比较完所有的元素,确定2为最小值的时候,把最小值也就是2与第一个元素的位置互换.\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-549ba8d1e5375edd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"互换位置"}})]),i("li",[a._v("然后从第二个元素开始新一轮的比较,过程和第一轮一样.把44看做最小值和后面的元素进行比较.\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-93ae5c6008503d42.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"第二轮"}})]),i("li",[a._v("经过多轮比较得到从小到大的数组.\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-10b714a8ceceb65f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"从小到大"}})])]),i("h3",{attrs:{id:"插入排序-insert"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#插入排序-insert","aria-hidden":"true"}},[a._v("#")]),a._v(" 插入排序(INSERT)")]),i("p",[a._v("将一个数据插入到已经排好序的有序数据中，从而得到一个新的、个数加一的有序数据，算法适用于少量数据的排序。是稳定的排序方法。\n流程如下:")]),i("ol",[i("li",[a._v("拿到一个数组\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-0fe1ff7bc8912789.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"数组"}})]),i("li",[a._v("把第一个元素看做一个新数组,然后把第二个元素依次和新数组的元素进行比较(虽然只有一个...),然后插入到适当的位置.\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-0b049542a383e8dc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"与新数组的元素进行比较"}}),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-b08f38982e74bf87.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"插入到适当的位置"}})]),i("li",[a._v("然后以此类推,把前两个元素看做是一个新数组,然后把第三个元素依次与新数组进行比较,然后插入到适当的位置.\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-25293f6061257350.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"比较"}}),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-435373ab53226a01.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"插入适当的位置"}})]),i("li",[a._v("把剩下的元素依次插入,最后得到从小到大排列的数组.\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-eb5c7cdc2dbe51e3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"从小到大"}})])]),i("h3",{attrs:{id:"归并排序-merge"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#归并排序-merge","aria-hidden":"true"}},[a._v("#")]),a._v(" 归并排序(MERGE)")]),i("p",[a._v("将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。\n流程如下:")]),i("ol",[i("li",[a._v("拿到一个数组\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-b7dd0bc29bf1f856.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"数组"}})]),i("li",[a._v("我们把数组平均分成左右两部分,得到两个新数组,然后再把每个数组平均分成两部分,一直分到每个数组只有两个元素,然后比较第一组\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-f1f922e5fdac37ec.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"比较第一组"}})]),i("li",[a._v("因为3<44所以位置不变然后比较第二组,因为38>5所以调换位置.\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-82e45b17bd304d2f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"图片.png"}})]),i("li",[a._v("重点来了,这个时候先不着急比较第三组而是把排好序的一二两组放在一起排序.\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-a45b23e96799adbd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"图片.png"}})]),i("li",[a._v("之后就是比较第三组和第四组,然后同样把他们放在一起排好序.\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-ada3c8eb5b769b9e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"图片.png"}})]),i("li",[a._v("然后并不是比较第五组和第六组,而是把第一组和第二组产生的新数组和,第三组和第四组产生的新数组放在一起排序成为新数组.\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-7df965288165ac01.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"图片.png"}})]),i("li",[a._v("同样把剩下的按以上步骤重来一遍.我们得到两个排好序的数组.然后给这两个数组排序就完成了.\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-3e92a52343a0d8c5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"图片.png"}}),a._v("\n排序后:\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-78eebc9c38d1ba31.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"图片.png"}})])]),i("h3",{attrs:{id:"快速排序"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#快速排序","aria-hidden":"true"}},[a._v("#")]),a._v(" 快速排序")]),i("p",[a._v("每个元素找到自己对应的位置(前面的都比我小,后面的都比我大)\n流程如下:")]),i("ol",[i("li",[a._v("拿到一个数组\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-b7dd0bc29bf1f856.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"数组"}})]),i("li",[a._v("拿第一个元素和后面的元素进行比较,找出所有比第一个元素小的元素,放在第一个元素的右边然后把第一个元素与这些比他小的元素的最后一个互换.\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-ce0718ea693d000a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"只有2比3小"}}),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-e7742e9a14f46e1a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"互换"}})]),i("li",[a._v("前两个元素的位置已经没错了,然后以第三个元素为标准,和后面的元素进行比较.\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-e51bf6b6f28eccf0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"比较之后"}})]),i("li",[a._v("把比他小的元素放在他的右边(绿色),然后让它和绿色的最后一个交换位置.\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-9635a1d9604436b6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"交换位置"}})]),i("li",[a._v("然后从左边没有确定位置的元素(非橙色)开始以上步骤----也就是19\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-b3888a1ab15ac163.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"从19开始"}})]),i("li",[a._v("一直到所有元素的位置都正确.\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-782962d8fbda2a3b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"都有了正确的位置"}})])]),i("h3",{attrs:{id:"随机快速排序"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#随机快速排序","aria-hidden":"true"}},[a._v("#")]),a._v(" 随机快速排序")]),i("p",[a._v("顾名思义,就是在快速排序的基础上,加入随机的机制.\n在快速排序的时候我们是从左到右来选取比较对象,在随机快速排序中我们是随机来选取对象.\n流程如下:")]),i("ol",[i("li",[a._v("拿到一个数组\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-b7dd0bc29bf1f856.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"数组"}})]),i("li",[a._v("随机选择一个元素.\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-068de5de14fbba31.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"随机选择到了44"}})]),i("li",[a._v("并且把比他小的放在他的右边\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-903e43f47d9288a3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"把比他小的先放在他的右边"}})]),i("li",[a._v("然后把他和比他小的最右边的元素交换位置\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-9716186d31f495f7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"交换位置"}})]),i("li",[a._v("然后在随机选一个元素,重复步骤,知道所有元素都是在正确的位置上.\n"),i("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-5eed2e2fa3aaf364.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"所有元素都在正确的位置上"}})])])])}],!1,null,null,null);t.default=e.exports}}]);