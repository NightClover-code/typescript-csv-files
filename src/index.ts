// //importing classes & utils
// import { MatchReader } from './composition/MatchReader';
// import { Summary } from './composition/Summary';

// //reading & parsing csv data
// const matchReader = MatchReader.fromCsv('football.csv');
// matchReader.load();

// //analyzing data
// const summary = Summary.winsAnalysisAndHtmlReport('Man United');

// //generating a report
// summary.buildAndPrintReport(matchReader.matches);

//importing classes & utils
import { MatchReader } from './inheritance/MatchReader';
import { CsvFileReader } from './inheritance/CsvFileReader';

//reading & parsing csv data
const matchReader = new MatchReader('football.csv');
console.log(matchReader);

//analyzing data

//generating a report
