

const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="space-y-4">
        <h3 className="text-3xl text-[#00aaff] font-bold text-center">{heading}</h3>
        <p className="text-lg font-medium text-center text-black">{subHeading}</p>
    </div>
  )
}

export default SectionTitle;