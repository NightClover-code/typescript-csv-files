//importing classes & utils
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reports/ConsoleReport';
import { HtmlReport } from './reports/HtmlReport';
import { WinsAnalysis } from './analyzers/WinsAnalisis';
import { Summary } from './Summary';

//reading & parsing csv data
const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

//analyzing data
const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());

//generating a report
summary.buildAndPrintReport(matchReader.matches);
