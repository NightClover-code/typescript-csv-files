import fs from 'fs';

export abstract class CsvFileReader<T> {
  matches: T[] = [];

  constructor(public filename: string, public team: string) {}

  abstract mapRow(row: string[]): T;
  abstract run(matches: T[]): string;
  abstract print(report: string): void;

  execute(): void {
    this.matches = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow);

    this.print(this.run(this.matches));
  }
}
