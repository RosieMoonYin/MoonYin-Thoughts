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
          <h1 className="mb-5 text-6xl font-bold text-left">Creative Minds</h1>
          <p className="mb-8 text-l text-l font-semibold text-left">
            Welcome to Thoughts, the app that helps you order your random
            creative ideas, think of this as a treasure chest of ideas that you
            can come back and revisit later. We create order so your imagination
            can be free.
          </p>
          <button className="btn btn-accent">Get Started</button>
        </div>
      </div>
    </div>
  );
}
