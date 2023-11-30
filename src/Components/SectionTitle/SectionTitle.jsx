

const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="space-y-4">
        <h3 className="text-3xl font-bold text-center">{heading}</h3>
        <p className="text-lg font-medium text-center">{subHeading}</p>
    </div>
  )
}

export default SectionTitle;