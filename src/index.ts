import { CsvFileReader } from './CsvFileReader';

//reading & parsing csv data
const reader = new CsvFileReader('football.csv');
reader.read();

//analyzing data
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

//generating a report
console.log(`man yunited won ${manUnitedWins} games!`);