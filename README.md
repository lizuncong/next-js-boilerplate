# Next 16项目脚手架


## vscode

### 推荐插件清单
`vscode/extensions.json` 是 VS Code 工作区级别的“推荐插件清单”。它的唯一作用就是：当有人打开这个项目文件夹时，VS Code 会在插件栏顶部弹出提示“此工作区建议使用以下扩展”，并给出【全部安装】按钮；用户一键就能把列表里的插件装好，省去口头说明或文档查找的麻烦。

- dbaeumer.vscode-eslint – ESLint 语法/风格检查
- mikestead.dotenv – .env 语法高亮
- bradlc.vscode-tailwindcss – Tailwind CSS 智能提示
- yoavbls.pretty-ts-errors – 把 TypeScript 报错“翻译”成易读格式
- lokalise.i18n-ally – i18n 多语言文件可视化

### TypeScript 类型检查
通过`.vscode/tasks.json`文件定义了一条默认任务：“Project wide type checking with TypeScript”（项目级 TypeScript 类型检查）