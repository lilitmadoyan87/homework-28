import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  books: Book[] = []
  constructor() {
    this.books = [new Book(1, "B1", "good", "A1", 1000),
    new Book(2, "B2", "good", "A2", 2000),
    new Book(3, "B3", "good", "A3", 3000),
    new Book(4, "B4", "good", "A4", 4000),
    new Book(5, "B5", "good", "A5", 5000),
    new Book(6, "B6", "good", "A6", 6000)
    ]
  }
  async create(createBookDto: CreateBookDto) {
    this.books.push({ ...createBookDto })
    return 'This action adds a new book';
  }

  async findAll() {
    return this.books
  }

  async findOne(id: number) {
    const data = this.books.find(el => el.id == id)
    return data
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const book = this.books.find(el => el.id = id)
    for (let key in book) {
      if (updateBookDto[key] && updateBookDto[key] != book[key]) {
        book[key] = updateBookDto[key]
      }
    }
    return `This action updates #${id} book`;
  }

  async remove(id: number) {
    const index = this.books.findIndex(el => el.id == id)
    this.books.splice(index, 1)
    return `This action removes #${id} book`;
  }
}
