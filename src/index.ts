//importing classes & utils
import { MatchReader } from './inheritance/MatchReader';

//reading & parsing csv data
const matchReader = new MatchReader('football.csv', 'Man United');
matchReader.execute();
