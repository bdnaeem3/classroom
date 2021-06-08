import Header from "../layouts/Header"

const PublicLayout = (props) => {
  return (
    <div {...props}>
      <Header/>
      {props.children}
    </div>
  );
};

export default PublicLayout;
