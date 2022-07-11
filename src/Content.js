import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  //   --------types of on click-----
  //   const handleNameChange = () => {
  //     const names = ["Hrishita", "Avinash", "Ashfaque"];
  //     const int = Math.floor(Math.random() * 3);
  //     setName (names[int]);
  //   };

  //   const handleClick = () => {
  //     setCount(count+1);
  //     setCount(count+1);
  //     console.log(count);
  //   };
  //   const handleClick2 = () => {
  //     console.log(count);
  //   };

  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Uh Oh! Empty List</p>
      )}
    </>
  );
};
export default Content;