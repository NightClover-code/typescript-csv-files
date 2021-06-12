import fs from 'fs';

//reading & parsing csv data
const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => row.split(','));

// for (let match of matches) {
//   if (match[1] === 'Man United' && match[5] === 'H') {
//     console.log('man won');
//   }
// }
