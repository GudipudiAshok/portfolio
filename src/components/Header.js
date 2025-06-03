import React from 'react';

function Header({ tabs, activeTab, onTabClick }) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#E8ECF1] px-20 py-6 flex justify-between items-center z-10 shadow-md">
      
      {/* Left side (empty for spacing if needed) */}
      <div />

      {/* Right side: Logo + Nav with 10px gap */}
      <div className="flex items-center gap-[40px] ml-auto">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            &lt;/&gt;
          </span>
          <span
            style={{
              background:
                "linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8f00ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
            }}
          >
            Ashok
          </span>
        </div>

        {/* Navigation Tabs */}
        <nav>
          <ul className="flex gap-10 text-sm font-bold">
            {tabs.map((tab) => (
              <li key={tab.id} className="relative group">
                <button
                  className={`transition-colors ${
                    activeTab === tab.id
                      ? 'text-black'
                      : 'text-gray-500 hover:text-black'
                  }`}
                  onClick={() => onTabClick(tab.id)}
                >
                  {tab.label}
                </button>
                {activeTab === tab.id && (
                  <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded"></span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
