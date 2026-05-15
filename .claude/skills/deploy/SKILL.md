---
name: deploy
description: Pre-deployment checklist for the MyHub project; run read-only staging or production checks before deployment.
---

# deploy Skill

Pre-deployment checklist for MyHub project.

## Usage

`/deploy [staging|prod]`

## Parameters

- `目标环境`: `staging` 或 `prod`

## Important Constraints

- **手动触发**: `disable-model-invocation: true` — 此 Skill 只能手动调用，不能自动触发
- **只读检查**: 不执行 git push，不触发真实部署，只做检查
- **禁止写入**: 不修改任何文件，只报告问题

## Staging 环境检查

### 1. npm run build 必须通过
- 运行 `npm run build`
- 检查退出码是否为 0
- ❌ 失败: 阻止部署

### 2. 检查未提交的改动
- 运行 `git status`
- 如果有未提交文件，⚠️ 警告但允许继续
- ❌ 严重: 阻止 prod 部署

### 3. 扫描 console.log
- 搜索所有 `.ts`、`.tsx`、`.js`、`.jsx` 文件中的 `console.log`
- 列出找到的所有位置 (文件:行号)
- ⚠️ 警告: 建议移除后再部署

## Prod 环境检查 (包含 staging 所有检查 + 以下)

### 4. git status 必须完全干净
- 运行 `git status`
- 允许: 无输出（干净状态）
- ❌ 失败: 有未提交改动，阻止部署

### 5. 检查最近 5 次 commit 的 message 规范
- 运行 `git log -5 --format=%s`
- 检查每条 message 是否符合规范:
  - 有 subject（不是空消息）
  - 不要太长（建议 <72 字符）
  - 不要以标点结尾
- ❌ 失败: 任何一条不符合规范，列出问题

### 6. CLAUDE.md 最近 7 天内更新检查
- 检查 `CLAUDE.md` 的修改时间
- 如果超过 7 天未更新，⚠️ 提醒可能需要同步文档

## 输出格式

```markdown
## 部署前检查: [staging|prod]

### 检查结果

| 检查项 | 状态 | 说明 |
|--------|------|------|
| npm run build | ✅/⚠️/❌ | ... |
| git status (未提交改动) | ✅/⚠️/❌ | ... |
| console.log 扫描 | ✅/⚠️/❌ | ... |
| git status 完全干净 (prod) | ✅/❌ | ... |
| commit message 规范 (prod) | ✅/❌ | ... |
| CLAUDE.md 更新 (prod) | ✅/⚠️ | ... |

---

### 是否建议部署: ✅ 是 / ❌ 否

**原因**: ...
```

## Implementation

```typescript
// 1. Parse target environment (staging|prod)
// 2. Run checks in order, stop on critical failures for prod
// 3. Collect results and output formatted report
// 4. Never auto-push or trigger actual deployment
```

## Notes

- Staging: 允许有未提交改动（警告），build 必须通过
- Prod: build 必须通过，git 必须干净，commit 规范检查
- console.log 扫描使用: grep -rn "console.log" src/ --include="*.ts" --include="*.tsx"
- CLAUDE.md 更新检查: stat -c %Y CLAUDE.md 或等效命令获取 mtime