yarn build
cd dist/
echo "antsclean.pl" > CNAME
git add .
git commit -m $1
git push --force
