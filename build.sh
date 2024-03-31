yarn build
cd dist/
echo "pawlowskyandgarden.pl" > CNAME
git add .
git commit -m $1
git push --force
