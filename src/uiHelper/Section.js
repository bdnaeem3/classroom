const Section = props => {
  const { name, fullWidth, children } = props;
  return (
    <section id={`${name}__section`} className={`${name}__section`}>
      <div className={fullWidth ? 'container-fluid' : 'container'}>
        <div className={`${name}__content`}>
          {children}
        </div>
      </div>
    </section>
  )
}

export default Section;