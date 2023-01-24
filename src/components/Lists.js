import React from "react";
import styled from "styled-components";

const StyledListsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
`;
const StyledList = styled.div`
display flex;
flex-direction: column;
width: 30%;
row-gap: 5vh;
`;

const StyledBookContainer = styled.div`
  background-color: white;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap 2vh;
`;

const StyledStatus = styled.p`
  width: 15vw;
  margin: 0 0 0 auto;
  padding: 0.3rem;
  font-size: 0.7rem;
  font-weight: bolder;
  color: ${(props) => {
    if (props.status === "to be read") {
      return "grey";
    } else if (props.status === "reading") {
      return "orange";
    } else {
      return "#03C988";
    }
  }};
`;

const StyledBookTitle = styled.h2`
  font-size: 1.2rem;
  overflow: hidden;
  word-break: break-word;
`;

const StyledButtonsContainer = styled.div`
  display: flex;
  column-gap: 2vw;
  margin-bottom: 2vh;
`;

const StyledButton = styled.button`
  background-color: #03c988;
  color: white;
  border-radius: 10px;
  border: 0.1rem solid black;
  padding: 0.5rem;
  width: 10vw;
`;

const StyledQuitBook = styled.button`
  background-color: #f48484;
  color: white;
  border-radius: 10px;
  border: 0.1rem solid black;
  padding: 0.5rem;
  width: 10vw;
`;

export default function Lists(props) {
  const { books, handleState } = props;
  return (
    <StyledListsContainer>
      <StyledList>
        <h2>To Be Read</h2>
        {books.map(
          (book) =>
            book.status === "to be read" && (
              <StyledBookContainer key={book.id}>
                <StyledStatus status={book.status}>{book.status}</StyledStatus>
                <StyledBookTitle>{book.title}</StyledBookTitle>
                <StyledButtonsContainer>
                  <StyledButton onClick={() => handleState(book.id, "reading")}>
                    Started Reading
                  </StyledButton>
                </StyledButtonsContainer>
              </StyledBookContainer>
            )
        )}
      </StyledList>
      <StyledList>
        <h2>Reading</h2>
        {books.map(
          (book) =>
            book.status === "reading" && (
              <StyledBookContainer>
                <StyledStatus status={book.status}>{book.status}</StyledStatus>
                <StyledBookTitle>{book.title}</StyledBookTitle>
                <StyledButtonsContainer>
                  <StyledButton onClick={() => handleState(book.id, "read")}>
                    Read
                  </StyledButton>
                  <StyledQuitBook
                    onClick={() => handleState(book.id, "to be read")}
                  >
                    Quit Reading
                  </StyledQuitBook>
                </StyledButtonsContainer>
              </StyledBookContainer>
            )
        )}
      </StyledList>
      <StyledList>
        <h2>Read</h2>
        {books.map(
          (book) =>
            book.status === "read" && (
              <StyledBookContainer>
                <StyledStatus status={book.status}>{book.status}</StyledStatus>
                <StyledBookTitle>{book.title}</StyledBookTitle>
              </StyledBookContainer>
            )
        )}
      </StyledList>
    </StyledListsContainer>
  );
}
