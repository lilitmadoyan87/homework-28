export class CreateBookDto {
    id: number;
    name: string;
    description: string;
    author: string;
    year: number
    constructor(i:number, n: string, d: string, a: string, y: number) {
        this.id=i;
        this.name = n;
        this.description = d;
        this.author = a;
        this.year = y
    }
}
