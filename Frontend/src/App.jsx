import React, { useState, useEffect } from 'react';
import { Truck, CheckCircle2, Server, ShieldCheck, ArrowRight, Activity } from 'lucide-react';

function App() {
  const [backendHealth, setBackendHealth] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const appName = import.meta.env.VITE_APP_NAME || 'FleetFind';
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1';

  const checkHealth = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${apiBaseUrl}/health`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setBackendHealth(data);
    } catch (err) {
      setError(err.message || 'Could not connect to backend');
      setBackendHealth(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkHealth();
  }, []);

  return (
    <div className="min-h-screen bg-fleet-black text-white flex flex-col justify-between p-6 md:p-12">
      {/* Header bar */}
      <header className="max-w-6xl w-full mx-auto flex items-center justify-between border-b border-white/10 pb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-fleet-orange flex items-center justify-center font-black text-white text-xl tracking-tighter">
            FF
          </div>
          <span className="text-2xl font-black tracking-tight text-white">
            Fleet<span className="text-fleet-yellow">Find</span>
          </span>
        </div>
        <div className="flex items-center space-x-2 bg-fleet-charcoal px-3 py-1.5 rounded-full border border-white/10 text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-fleet-grey font-medium">Phase 1 Active</span>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl w-full mx-auto my-12">
        <div className="bg-fleet-charcoal border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle industrial hazard top border */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-fleet-yellow via-fleet-orange to-fleet-yellow"></div>

          <div className="inline-flex items-center space-x-2 bg-fleet-yellow/10 text-fleet-yellow px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6 border border-fleet-yellow/20">
            <CheckCircle2 className="w-4 h-4" />
            <span>Architecture & Repository Foundation Verified</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Find. Book. <span className="text-fleet-yellow">Move.</span>
          </h1>
          <p className="text-fleet-grey text-lg max-w-2xl mb-8 leading-relaxed">
            India's premier digital marketplace for commercial trucks and heavy construction equipment. Phase 1 foundation established with strict root environment loading, Tailwind design tokens, and modular backend API.
          </p>

          {/* Verification Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Root Environment Status */}
            <div className="bg-fleet-black/60 border border-white/5 rounded-xl p-5">
              <div className="flex items-center space-x-2 text-fleet-yellow font-bold text-sm mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Root .env Resolution</span>
              </div>
              <p className="text-xs text-fleet-grey mb-3">Loaded via Vite <code className="text-white">envDir: '../'</code></p>
              <div className="space-y-1.5 font-mono text-xs">
                <div className="flex justify-between text-white/80">
                  <span className="text-fleet-grey">VITE_APP_NAME:</span>
                  <span className="text-emerald-400 font-semibold">{appName}</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span className="text-fleet-grey">VITE_API_BASE_URL:</span>
                  <span className="text-emerald-400">{apiBaseUrl}</span>
                </div>
              </div>
            </div>

            {/* Backend Health Status */}
            <div className="bg-fleet-black/60 border border-white/5 rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2 text-fleet-orange font-bold text-sm">
                  <Server className="w-4 h-4" />
                  <span>Backend API Status</span>
                </div>
                <button
                  onClick={checkHealth}
                  disabled={loading}
                  className="text-[11px] text-fleet-grey hover:text-white flex items-center space-x-1 underline"
                >
                  <Activity className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} />
                  <span>Refresh</span>
                </button>
              </div>
              <p className="text-xs text-fleet-grey mb-3">Endpoint: <code className="text-white">/api/v1/health</code></p>
              
              {backendHealth ? (
                <div className="space-y-1 font-mono text-xs">
                  <div className="flex justify-between text-white/80">
                    <span className="text-fleet-grey">Status:</span>
                    <span className="text-emerald-400 font-bold">{backendHealth.data?.status || 'UP'}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span className="text-fleet-grey">Environment:</span>
                    <span className="text-white">{backendHealth.data?.environment}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span className="text-fleet-grey">Uptime:</span>
                    <span className="text-white">{Math.round(backendHealth.data?.uptime || 0)}s</span>
                  </div>
                </div>
              ) : error ? (
                <div className="text-xs text-red-400 bg-red-950/30 p-2 rounded border border-red-900/50">
                  Backend offline or unreachable ({error}). Start Backend via <code className="text-white">cd Backend && npm start</code>.
                </div>
              ) : (
                <div className="text-xs text-fleet-grey">Checking backend health...</div>
              )}
            </div>
          </div>

          {/* Palette Preview */}
          <div className="bg-fleet-black/40 border border-white/5 rounded-xl p-4">
            <span className="text-xs text-fleet-grey uppercase tracking-wider font-semibold block mb-3">
              FleetFind Industrial Design Tokens
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs font-semibold">
              <div className="bg-fleet-black p-2.5 rounded-lg border border-white/10 text-white">
                #171717<br/><span className="text-[10px] text-fleet-grey font-normal">Black</span>
              </div>
              <div className="bg-fleet-charcoal p-2.5 rounded-lg border border-white/10 text-white">
                #282321<br/><span className="text-[10px] text-fleet-grey font-normal">Charcoal</span>
              </div>
              <div className="bg-fleet-yellow p-2.5 rounded-lg text-black font-bold">
                #FFC000<br/><span className="text-[10px] font-normal text-black/70">Safety Yellow</span>
              </div>
              <div className="bg-fleet-orange p-2.5 rounded-lg text-white font-bold">
                #F47721<br/><span className="text-[10px] font-normal text-white/80">Orange</span>
              </div>
              <div className="bg-fleet-cream p-2.5 rounded-lg text-black font-bold">
                #F4E8D8<br/><span className="text-[10px] font-normal text-black/70">Warm Cream</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl w-full mx-auto text-center border-t border-white/10 pt-6 text-xs text-fleet-grey flex flex-col sm:flex-row justify-between items-center gap-2">
        <span>© 2025 FleetFind. All rights reserved.</span>
        <span>Building a smarter, more connected fleet ecosystem.</span>
      </footer>
    </div>
  );
}

export default App;
