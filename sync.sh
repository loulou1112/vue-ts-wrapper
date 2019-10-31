#!/bin/sh

# 已经 commit 或者 合并线上后， CI
# 1. sh ./sync.sh
# 1.1 所有需要壳的路径[]
# 1.2 git 的执行指令
git remote set-url feature/wrapper git@git.yunjia.com:h5_web_grp/yun_manage.git
git push feature/wrapper declaredfile:feature/wrapper