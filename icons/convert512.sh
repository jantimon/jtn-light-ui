mkdir -p optimized
cd src;
for f in *.svg; do
  echo "$f"
  rsvg-convert -a -f svg -w 512 -h 512 "${f}" -o "../optimized/${f}"
done
