---
title: Upload 上传
description: 用于相册读取或拉起拍照的图片上传功能。
spline: form
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
 "t-upload": "tdesign-miniprogram/upload/upload",
}
```

## 代码演示

### 多选上传

<img src="https://tdesign.gtimg.com/miniprogram/readme/upload.png" width="375px" height="50%">

```html
<t-upload
  media-type="{{['image']}}"
  bind:remove="handleRemove"
  bind:success="handleSucces"
  files="{{originFiles}}"
  gridConfig="{{gridConfig}}"
/>
```

### 非受控用法

```html
<t-upload
  media-type="{{['image']}}"
  defaultFiles="{{originFiles}}"
  gridConfig="{{gridConfig}}"
/>
```

## API
### Upload Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
add-content | String / Slot | - | 添加按钮内容。值为空，使用默认图标渲染；值为 slot 则表示使用插槽渲染；其他值无效。 | N
config | Object | - | 图片上传配置，视频上传配置，文件上传配置等，包含图片尺寸、图片来源、视频来源、视频拍摄最长时间等。更多细节查看小程序官网。[图片上传](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html)。[视频上传](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html)。TS 类型：`UploadMpConfig`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts) | N
delete-btn | String / Slot | - | 删除图标。值为空，使用默认图标渲染；值为 slot 则表示使用插槽渲染；其他值无效。 | N
files | Array | - | 已上传文件列表。TS 类型：`Array<UploadFile>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts) | N
defaultFiles | Array | - | （非受控）已上传文件列表。TS 类型：`Array<UploadFile>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts) | N
grid-config | Object | - | upload组件每行上传图片列数以及图片的宽度和高度。TS 类型：`{ column?: number; width?: number;height?: number;}` | N
gutter | Number | 16 | 预览窗格的 gutter 大小，单位 rpx | N
max | Number | 0 | 用于控制文件上传数量，值为 0 则不限制 | N
media-type | Array | ['image', 'video'] | 支持上传的文件类型，图片或视频。TS 类型：`Array<MediaType>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts) | N
request-method | Function | - | 自定义上传方法 | N
size-limit | Number / Object | - | 图片文件大小限制，单位 KB。可选单位有：`'B' | 'KB' | 'MB' | 'GB'`。示例一：`1000`。示例二：`{ size: 2, unit: 'MB', message: '图片大小不超过 {sizeLimit} MB' }`。TS 类型：`number | SizeLimitObj`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts) | N

### Upload Events

名称 | 参数 | 描述
-- | -- | --
complete | - | 上传成功或失败后触发
fail | - | 上传失败后触发
remove | `(context: UploadRemoveContext)` | 移除文件时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts)。<br/>`interface UploadRemoveContext { index?: number; file?: UploadFile;}`<br/>
success | `(context: MediaContext)` | 上传成功后触发，`context.tempFilePath` 表示选定视频的临时文件路径 (本地路径)。`context.duration` 表示选定视频的时间长度。`context.size`选定视频的数据量大小。更多描述参考 `wx.chooseMedia` 小程序官网描述。<br/>`interface MediaContext { tempFilePath?: string; duration?: number; size?: number; width?: number; height?: number; thumbTempFilePath?: string; fileType: string }`
