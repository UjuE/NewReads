import React from "react";
import "../component-styles/BookGenerator.css"
import {getBookGenre, getBookListInGenre} from "../libs/NewYorkTimesProxy"
import {getBookVolumeWIthIsbn} from "../libs/GoogleBooksApiProxy";

class BookGenerator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            book_list_list_name_encoded: null,
            book_list_display_name: null,
            book_list_clicked: false,
            book_types_lists: [],
            book_lists: [],
            book_list_size: null,
            book_list_index: null,
            book_chosen: null,
            primary_isbn13: null,
            book_title: null,
            book_quick_description: null,
            book_author: null,
            google_api_details: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.randomBookDetailsView = this.randomBookDetailsView.bind(this);
        this.randomBookFromListName = this.randomBookFromListName.bind(this);
    }

    async componentDidMount() {
        const bookGenre = await getBookGenre();
        this.setState({book_types_lists: bookGenre.results});
    }

    render() {
        return (
            <div id="book-generator">
                <select id="book-genre" onChange={this.handleChange} value={this.state.value}>
                    <option>---- Select a Genre ----</option>
                    {this.state.book_types_lists.map(book_detail =>
                        <option value={book_detail.list_name_encoded}>{book_detail.display_name}</option>)}
                </select>
                {this.state.book_list_list_name_encoded ?
                    this.randomBookDetailsView() : null}
            </div>
        )
    }

    handleChange(event) {
        const bookListListNameEncoded = event.target.value;
        this.setState({book_list_list_name_encoded: bookListListNameEncoded});
        this.randomBookFromListName(bookListListNameEncoded);
    }

    randomBookDetailsView() {
        const googleApiResponse = this.state.google_api_details.items;
        const title = this.state.book_title;
        const description = this.state.book_quick_description;
        const author = this.state.book_author;
        let imageUrl = null;
        if ( googleApiResponse ) {
            const googleApiResponseElement = googleApiResponse[0];
            imageUrl = googleApiResponseElement.volumeInfo.imageLinks.thumbnail;
        }
        return (
            <div id="book-detail">
                <h1>{title}</h1>
                <h3>{author}</h3>
                <img src={imageUrl} alt={title} width="200px"/>
                <div>{description}</div>
            </div>

        )
    }

    async randomBookFromListName(listName) {
        await getBookListInGenre(listName)
            .then(
                (result) => {
                    const bookLists = result.results;

                    const index = Math.floor(Math.random() * (1 + result.num_results - 1));
                    const bookChosen = bookLists[index];
                    const bookDetails = bookChosen.book_details[0];
                    this.setState({
                        book_lists: bookLists,
                        book_list_size: result.num_results,
                        book_chosen: bookChosen,
                        primary_isbn13: bookDetails.primary_isbn13,
                        book_title: bookDetails.title,
                        book_quick_description: bookDetails.description,
                        book_author: bookDetails.author
                    })
                }
            );
        await getBookVolumeWIthIsbn(this.state.primary_isbn13)
            .then(result => {
                this.setState({google_api_details: result})
            });
    }
}

export default BookGenerator