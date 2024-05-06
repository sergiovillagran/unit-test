const { generateManyBooks } = require('../fakes/book.fake');
const BookService = require('./books.service');

const mockspyGetAll = jest.fn();

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockspyGetAll,
  create: () => { },
})));

describe('Tes for books service ', () => {
  let service;
  beforeEach(() => {
    service = new BookService();
    jest.clearAllMocks();
  });

  describe('Test for geet books', () => {
    test('Should returna list book', async () => {
      mockspyGetAll.mockResolvedValue(generateManyBooks(20));
      const books = await service.getBooks({});
      console.log(books);
      expect(books.length).toEqual(20);
      expect(mockspyGetAll).toHaveBeenCalled();
      expect(mockspyGetAll).toHaveBeenCalledWith('books', {});
    });

    test('Should returna list book', async () => {
      const fakeBooks = generateManyBooks(20);
      mockspyGetAll.mockResolvedValue(fakeBooks);
      const books = await service.getBooks();
      console.log(books);
      expect(books[0].name).toEqual(fakeBooks[0].name);
    });
  });
});
