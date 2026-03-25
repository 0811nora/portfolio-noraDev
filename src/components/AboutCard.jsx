const AboutCard = ({ data }) => {
  return (
    <>
      <div className="rounded-4xl bg-primary/30 p-8">
        <h5 className="mb-4 text-center text-xl font-bold">{data.title}</h5>
        <div className="mb-4 border-b"></div>
        <p className="text-center">{data.description}</p>
      </div>
    </>
  );
};

export default AboutCard;
