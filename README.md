# timeline

Konva 的对象是以一颗树的形式保存的，Konva.Stage 是树的根节点，Stage 子节点是用户创建的图层 （Konva.Layer）。

每一个 layer 有两个```<canvas>``` 渲染器： 场景渲染器 和 图像命中检测渲染器。场景渲染器输出你所看见的内容，图像命中渲染器在隐藏的 canvas 里用于高性能的检测事件。

图层可以包含图形、嵌套图形的组、嵌套组的组。Stage（舞台），layers（图层），groups（组），和 shapes（图形） 都是虚拟节点，类似于 HTML 的 DOM 节点。Konva 的对象是以一颗树的形式保存的，Konva.Stage 是树的根节点，Stage 子节点是用户创建的图层 （Konva.Layer）。

## 图形

### Rect矩形
