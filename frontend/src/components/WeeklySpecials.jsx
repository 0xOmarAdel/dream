import Card from "../components/Card";
const Specials = () => {
  return (
    <section className="hero min-h-screen bg-gray-50">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-sky-500">Weekly Specials!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Specials;
