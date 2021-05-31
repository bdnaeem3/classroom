const Course = props => {
  const { image, title, desc, url, ...rest } = props;

  return (
    <a href={url} className="course-card" {...rest}>
      <img src={image} alt="" className="course-photo"/>
      <div className="course-card__content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </a>
  )
}

export default Course;