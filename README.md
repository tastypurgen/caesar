## Caesar cli

1. Install Node.js
2. Clone repo
3. Install dependencies `` npm install ``
4. Open source folder `` cd .\src ``

Options:
  * -s, --shift: a shift
  * -i, --input: an input file
  * -o, --output: an output file
  * -a, --action: an action encode/decode
   
Examples:

`` node caesar -a encode -s 7 -i "./input.txt" -o "./output.txt"``

`` node caesar --action encode --shift 7 --input plain.txt --output encoded.txt``

`` node caesar --action decode --shift 7 --input decoded.txt --output plain.txt``