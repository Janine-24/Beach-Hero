/*
 * Uses coral accent buttons for high-impact calls to action.
 */

export default function TakeAction() {
  return (
    <div className="pt-32 pb-20 px-6 bg-sand-50 min-h-screen flex flex-col items-center">
      <h1 className="text-5xl font-bold text-slate-800 mb-6 text-center">Join the Movement</h1>
      <p className="text-gray-600 text-lg max-w-2xl text-center mb-12">
        Every piece of trash removed is a step toward a pristine future. Here is how you can help.
      </p>
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
          <h2 className="text-2xl font-bold mb-4">Volunteer</h2>
          <button className="bg-rose-500 text-white px-8 py-3 rounded-full hover:bg-rose-600 shadow-lg transition-all font-semibold">
            Find a Local Cleanup
          </button>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
          <h2 className="text-2xl font-bold mb-4">Donate</h2>
          
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfp879PJy8F3AhN2o6xv-8SSHeuJTJVPxIpNCQ7gwqodlJ9YA/viewform" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-full hover:bg-teal-600 hover:text-white transition-all font-semibold"
          >
            Support Our Research
          </a>
        </div>
      </div>
    </div>
  );
}