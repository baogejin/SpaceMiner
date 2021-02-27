call pbjs --no-verify --no-beautify --no-delimited --no-convert -t static-module -w commonjs -o ./msg.js ./msg.proto
call pbts -o ./msg.d.ts ./msg.js
pause