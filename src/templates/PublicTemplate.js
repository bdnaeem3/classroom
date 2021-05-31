import Header from "../layouts/Header"

const PublicLayout = (props) => {
  return (
    <>
      <Header/>
      {props.children}
    </>
  );
};

export default PublicLayout;
