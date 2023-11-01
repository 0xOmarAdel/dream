const Testimonials = () => {
  return (
    <section className="hero min-h-screen bg-gray-50">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-sky-500">Testimonials</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="card w-64 bg-sky-500 shadow-xl">
            <h2 className="card-title">Rating</h2>
            <figure className="px-10 pt-10">
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
