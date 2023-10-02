cd stylo-app
npm i
npm run build
cd ../stylo-backend
npm i
cp -r ../stylo-app/dist frontend
sudo systemctl restart styloweb
