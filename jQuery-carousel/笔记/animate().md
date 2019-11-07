#  .animate()

##	语法:
```  JavaScript
.animate(properties[,duration][,easing][,complete])
```

##	描述：根据一组CSS属性，执行自定义动画

+	properties : 一个CSS属性和值的对象，动画将根据这组对象移动。
+	duration:	一个字符串或者数字决定动画运行时间。（slow,normal,fast）ms为单位。
+	easing:  表示动画使用哪种移动函数，linear和swing，默认swing。
+	complete：  在动画完成时执行的函数。