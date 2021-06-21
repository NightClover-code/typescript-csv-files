//importing classes & utils
import { MatchReader } from './composition/MatchReader';
import { Summary } from './composition/Summary';

//reading & parsing csv data
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

//analyzing data
const summary = Summary.winsAnalysisAndHtmlReport('Man United');

//generating a report
summary.buildAndPrintReport(matchReader.matches);
