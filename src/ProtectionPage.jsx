/*
 * Outlines strategies and initiatives for protecting coastlines.
 */
export default function ProtectionPage() {
  return (
    <div className="pt-36 pb-24 px-6 bg-neutral-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-cyan-900 mb-8">Protecting Our Beaches</h1>
        <p className="text-xl text-neutral-600 leading-relaxed mb-12">
          Safeguarding our coastlines requires a collective effort. From global policies to individual actions, every step contributes to preserving these vital ecosystems for future generations.
        </p>
        <div className="grid gap-8">
          {/* Protection Strategy 1 */}
          <div className="p-8 bg-white rounded-2xl border border-cyan-100">
            <h2 className="text-2xl font-bold text-cyan-800 mb-4">Reduce Single-Use Plastics</h2>
            <p className="text-neutral-600">Commit to using reusable bags, bottles, and containers. Supporting businesses that offer plastic-free alternatives can significantly reduce the amount of waste that ends up in our oceans.</p>
          </div>
          {/* Protection Strategy 2 */}
          <div className="p-8 bg-white rounded-2xl border border-cyan-100">
            <h2 className="text-2xl font-bold text-cyan-800 mb-4">Participate in Cleanups</h2>
            <p className="text-neutral-600">Join local or international beach cleanup events. These initiatives not only remove harmful debris from the environment but also raise awareness about the scale of the pollution problem.</p>
          </div>
          {/* Protection Strategy 3 */}
          <div className="p-8 bg-white rounded-2xl border border-cyan-100">
            <h2 className="text-2xl font-bold text-cyan-800 mb-4">Support Sustainable Policies</h2>
            <p className="text-neutral-600">Advocate for and support legislation that limits plastic production, improves waste management systems, and holds corporations accountable for their environmental impact.</p>
          </div>
        </div>
      </div>
    </div>
  );
}