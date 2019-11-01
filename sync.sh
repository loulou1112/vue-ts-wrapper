#!/bin/sh

# 已经 commit 或者 合并线上后， CI
# 1. sh ./sync.sh
# 1.1 所有需要壳的路径[]
# 1.2 git 的执行指令
addresses=('git@git.yunjia.com:h5_web_grp/yun_manage.git' 'git@git.yunjia.com:h5_web_grp/h5_product.git')
for value in ${addresses[@]};
do
  git remote set-url feature/wrapper $value
  git push feature/wrapper feature/wrapper:feature/wrapper
done