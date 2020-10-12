import authors from "../data";


const initialState = {
  authors: authors,
  newAuthorId: authors.length + 1
};

export default (state = initialState, action) => {

  switch (action.type) {
    case "ADD_AUTHOR":
      const newAuthor = {
        id: state.newAuthorId,
        first_name: "Author",
        last_name: "McAuthorFace",
        imageUrl:
          "https://www.netz.de/images/2016-11-21-firefox-focus-header-58cfedd908c25_500_300.jpg",
        books: [
          {
            title: "Anonymous book",
            color: "mysterious color"
          }
        ]
      };
      return {
        authors: state.authors.concat([newAuthor]),
        newAuthorId: state.newAuthorId + 1
      }
      case "DELETE_AUTHOR":
        return {
          authors: state.authors.filter(auth => auth !== action.payload),
          newAuthorId: state.newAuthorId-1

        }
    default:
      return state;
  }
};
