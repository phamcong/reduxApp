"use strict"

// BOOKS REDUCERS
export function booksReducers(state = {
	books: [
		{
			_id: 1,
			title: 'this is the first book title',
			description: 'this is the first book description',
			price: 33.34
		},
		{
			_id: 2,
			title: 'this is the second book title',
			description: 'this is the second book description',
			price: 55.55
		}]
}, action) {
	switch (action.type) {
		case "GET_BOOK":
			return { ...state, books: [...state.books] }
			break;
		case "POST_BOOK":
			return { books: [...state.books, ...action.payload] }
			break;
		case "DELETE_BOOK":
			// Create a copy of the current array of books
			const currentBookToDelete = [...state.books]
			// Determine at which index in books array is the book to be deleted
			const indexToDelete = currentBookToDelete.findIndex(
				function (book) {
					return book._id == action.payload;
				}
			)
			// Use slice method to remove the book at the specified index
			return { books: [...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)] }
			break;
		case "UPDATE_BOOK":
			// Create a copy of the current array of books
			const currentBookToUpdate = [...state.books]
			// Determine at which index in books array is the book to be deleted
			const indexToUpdate = currentBookToUpdate.findIndex(
				function (book) {
					return book._id === action.payload._id;
				}
			)
			const newBookToUpdate = {
				...currentBookToUpdate[indexToUpdate],
				title: action.payload.title
			}
			// This Log has the purpose to show you how newBookToUpdate looke like
			console.log("what is it newBookToUpdate", newBookToUpdate);
			// Use slice method to remove the book at the specified index, replace with the new object and concatenate with the rest of items in the array
			return { books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)] }
			break;
	}
	return state
}