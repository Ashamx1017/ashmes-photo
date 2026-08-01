# 个人网站项目 - 长期记忆

## 项目概述
老板的个人摄影网站，用于客户转化（微信→网站→预约）。老板是刚起步的自媒体摄影人，常驻长沙。

## 关键决策
- 建站方式：定制前端（React + Vite + 纯 CSS）
- 视觉风格：纯黑白 + 薄荷绿 #8FD0B5，温暖极简留白，参考 walnuuut.com
- 域名：先用免费地址上线，后续购买

## 技术栈与部署
- React 18 + Vite 5，纯 CSS（无 UI 框架）
- 设计系统：1200px 外壳 + 1000px 内容栅格 + 35px 列间距 + 140px 模块间距 + 14px/2.1 行高
- 字体：Noto Serif SC + Cormorant Garamond + Noto Sans SC
- GitHub 仓库：https://github.com/Ashamx1017/ashmes-photo（公开）
- GitHub Pages 自动部署：https://ashamx1017.github.io/ashmes-photo/
- GitHub Token 保存在项目根目录 .github_token（已 gitignore）
- 改内容流程：改代码 → git commit → git push → GitHub Actions 自动构建 → 1-2 分钟线上更新
- Vite base 路径：/ashmes-photo/

## 8 个模块
Hero（5 图轮播）/ About（关于我）/ Photography（拍照）/ Pricing（4 档套餐）/ Works（作品集）/ Social（抖音 12 格）/ Travel（旅行日记）/ Contact（联系方式）

## Pricing 套餐（最终版）
基础版 ¥599 / 高级版 ¥999（推荐，黑边框）/ 写真集 ¥1,680 / 商业·活动 面议

## 内容素材
Hero 5 张大图、about-portrait.jpg、photo-1/2/3.jpg 已替换为老板实拍
Works/Social/Travel 仍用 Unsplash 占位图，等老板提供真实素材
