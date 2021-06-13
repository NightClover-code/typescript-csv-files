import fs from 'fs';
import { MatchData } from './types';

export abstract class CsvFileReader {
  data: MatchData[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): MatchData;

  read() {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow);
  }
}
