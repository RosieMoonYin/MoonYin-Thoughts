export default function HeroSection() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(../src/assets/inspired.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Deep Thinkers</h1>
          <p className="mb-8 text-l text-xl">
            Welcome to Thoughts, the app that helps you order your random
            creative thoughts, think of this as a treasure chest of ideas that
            you can come back and revisit later.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
