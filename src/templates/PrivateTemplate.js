const PublicLayout = (props) => {
  return (
    <div {...props}>
      {props.children}
    </div>
  );
};

export default PublicLayout;
