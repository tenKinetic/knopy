#!/bin/bash
if grep -q kopykatch "~/.bash_profile"; then
  echo 'alias already installed'
  exit
fi
echo 'add to ~/.bash_profile'
pwd=`pwd`
cmd=`echo alias kopykatch="\""$pwd/run.sh"\""`
echo -e '\n' >> ~/.bash_profile
echo -e $cmd >> ~/.bash_profile
source ~/.bash_profile
